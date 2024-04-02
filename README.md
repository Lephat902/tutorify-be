

## 1. Cách chạy development:
Để chạy **development** cho toàn hệ thống:
1. Vào thư mục `tutorify-be`
2. Gõ
 ```bash
 # Bỏ flag --build đi cho nhẹ nếu không có thay đổi gì về docker-compose hay Dockerfile hoặc các package của service
 docker compose -f docker-compose.dev.yaml up --build
 ```

Nếu chỉ muốn chạy cho một số service nhất định thì cung cấp tên của các service đó:
 ```bash
 # Giả sử muốn chạy api-gateway và auth
 docker compose -f docker-compose.dev.yaml up api-gateway auth
 ```

Muốn stop tất cả thì: 
 ```bash
 # Nếu Ctrl + C không được thì dùng cái này
 docker compose -f docker-compose.dev.yaml stop
 ```

Muốn stop một container nhất định thì:
 ```bash
 # Kiếm id
docker ps
docker stop <id>
 ```

Trong mỗi container, khi mọi người có thay đổi về gói (install, uninstall,...) mà không thấy có sự biến chuyển gì (vd, vẫn báo lỗi,...) thì chạy lệnh sau:
```bash
# Giả sử mới thay đổi package ở app 'auth'
# -V: https://docs.docker.com/engine/reference/commandline/compose_up/#:~:text=%2D%2Drenew%2Danon%2Dvolumes
docker compose -f docker-compose.dev.yaml up --build -V auth # --flag -V
```

## 2. Về Quản lý Repo:
Chúng ta sử dụng khái niệm submodule của git

**Tình huống 1:** Tạo một submodule mới (dành cho microservice mới)
1. Tạo repo riêng cho thư mục đó trên Github
2. Vào thư mục con đó:
```bash
# Navigate to the service subfolder
cd tutorify-be/<service-name>

# Initialize a new Git repository
git init

# Add all the files to the new Git repository
git add .

# Commit the files
git commit -m "Initial commit"

# Link the new Git repository to the '<service-name>' repository on GitHub
# Repo name should follow this convention: tutorify-be-<service-name>
git remote add origin https://github.com/Lephat902/tutorify-be-<service-name>.git

# Push the '<service-name>' subfolder to the '<service-name>' repository on GitHub
git push -u origin main
```

3. Thêm submodule vào thư mục gốc:
```bash
# Add the service submodule
git submodule add https://github.com/Lephat902/tutorify-be-<service-name>.git <service-name>

# Commit the changes
git commit -m "Added submodule <service-name>"
```

4. Cuối cùng, đưa các thay đổi lên root repo trên Github
```bash
git push -u origin main
```

**Tình huống 2:** Clone các services xuống một lần
```bash
git clone --recurse-submodules https://github.com/Lephat902/tutorify-be.git
```

## 3. Cách sử dụng thư mục `shared`:
Hệ thống chúng ta sử dụng thư mục `shared` để chứa một số *dtos* phổ biến và các hàm *helpers* nhằm giúp tăng tính tái sử dụng giữa các microservices.
Sau đây là các bước cần thiết để việc sử dụng thư mục `shared` trở nên thành công:
**Với mục đích dev:**
1. Vào docker-compose.dev, mount thư mục shared vào container:
```bash
volumes:
  - ./class-and-category:/usr/src/app
  - ./shared:/usr/src/shared  <------ this line
  - /usr/src/app/node_modules
```
2. Vào thư mục của microservice

2.1. `tsconfig.json`
```json
// Thêm bên trong thuộc tính compilerOptions
"compilerOptions": {
  ...,
  "paths": {
    "@tutorify/shared": [
      "../shared/src"
    ],
    "@tutorify/shared/*": [
      "../shared/src/*"
    ]
  }
}
```
2.2. `nest-cli.json`
```json
// Do có thư viện shared nên cấu trúc dist đã bị thay đổi
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "entryFile": "./app/src/main.js",      <------ this line
  "compilerOptions": {
    "deleteOutDir": true
  }
}
```
**Với mục đích prod:**
Bên cạnh các bước kể trên dev, còn những lưu ý quan trọng như sau:
1. Thay đổi Dockerfile: 
```dockerfile
... # OTHER CODES
COPY --chown=node:node package*.json ./

# Copy temp 'shared' dir
COPY --chown=node:node ./shared /usr/src/shared # <---- this line 
  
COPY --chown=node:node . .

... # OTHER CODES

# the 'npm ci' cmd requires root access
USER root

# Switch to shared dir
WORKDIR /usr/src/shared # <---- this line 

# Install packages
RUN npm ci --only=production # <---- this line 

# Switch back to app dir
WORKDIR /usr/src/app # <---- this line 

# Run the build command which creates the production bundle
RUN npm run build
... # OTHER CODES
```
Ngoài ra còn phải đổi câu lệnh run production:
```dockerfile
# Start the server using the production build
CMD [ "node", "dist/app/src/main.js" ]
```

2. Câu lệnh dùng khi build hiện tại sẽ là:
```bash
# build toàn bộ
./prod-build.sh
# build một vài image, vd, api-gateway, auth
./prod-build.sh api-gateway auth 
```

Sau đó có thể run production như bình thường:
```bash
 docker compose -f docker-compose.prod.yaml up
```

## 4. Phụ lục:
1. Build production để làm gì?
Production do đã được lược bỏ nhiều packages chỉ dùng cho dev phase (devDependencies) nên sẽ nhẹ hơn nhiều so với dev
```bash
phatle@localhost:~/$ docker images
REPOSITORY                                           TAG                   IMAGE ID       CREATED        SIZE
tutorify.azurecr.io/tutorify-be-api-gateway          prod                  226ab062bd90   6 hours ago    178MB
tutorify-be-api-gateway                              dev                   ddd1b46e5566   8 hours ago    416MB
```

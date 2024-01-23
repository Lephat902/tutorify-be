## 1. Cách chạy:
Muốn chạy **development** thì:
1. Vào thư mục `tutorify-be`
2. Vào các thư mục chạy bằng NestJS như api-gateway, auth,... chạy lệnh sau:
```bash
npm ci
npm run build
```
3. Ra thư mục gốc, gõ `docker compose -f docker-compose.dev.yml up --build`

Muốn stop tất cả thì: `docker compose stop`

Muốn stop một container nhất định thì:
1. Kiếm id của nó qua lệnh `docker ps`
2. Stop nó bằng `docker stop <id>`

Ở môi trường **production** thì như **development**, chỉ khác là thay thế file compose thành `docker-compose.prod.yml`

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


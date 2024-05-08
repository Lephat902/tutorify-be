


## 1. Running the App in Development Mode
To run the app in  **development**  mode, follow these steps:
1.  Navigate to the  `tutorify-be`  directory.
2.  Run the following command in the terminal: 
```bash
 docker compose -f docker-compose.dev.yaml up
 ```

If you only need specific services, list them as arguments. For example, to run  `api-gateway`  and  `auth`, use:
 ```bash
 # Suppose you want to run api-gateway và auth
 docker compose -f docker-compose.dev.yaml up api-gateway auth
 ```

To stop the currently running services, use:
 ```bash
 # Ctrl + C will leave rabbitmq running
 docker compose -f docker-compose.dev.yaml stop
 ```

You can also choose specific services to stop:
 ```bash
 # Look up the id
docker ps
docker stop <id>
 ```

## 2. Manage Repositories:
We utilize git’s submodule functionality.

**Use case 1:** Create a new submodule
1. Create a new repository on a platform like GitHub.
2. Navigate to the submodule directory:
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

3. Add the submodule to the root repository:
```bash
# Add the service submodule
git submodule add https://github.com/Lephat902/tutorify-be-<service-name>.git <service-name>

# Commit the changes
git commit -m "Added submodule <service-name>"
```

4. Finally, push all the changes to the online Git repository
```bash
git push -u origin main
```

**Use case 2:** Clone services all at once
```bash
git clone --recurse-submodules https://github.com/Lephat902/tutorify-be.git
```

## 3. Use `shared` directory:
Our service uses the  `shared`  directory to reuse common  `dtos`,  `helpers`,  `events`,  `proxies`, etc. To use the  `shared`  directory effectively:
**For local development:**
1.  Open  `docker-compose.dev.yaml`  in a text editor and add the following line to services that need to use the  `shared`  directory:
```bash
volumes:
  - ./<service_name>:/usr/src/app
  - ./shared:/usr/src/shared  <------ this line
```
2. Change directory to the above service:

2.1. `tsconfig.json`
```json
// Config new paths under compilerOptions attribute
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
// Due to the usage of shared dir, the dist structure then changes
// Notice that despite doing the above steps, if the shared dir is not used anywhere in the code, the dist structure will be the same as normal and entryFile should be './main.js'
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
**For production:**

In addition to the steps for development, you need to:
1. Update the Dockerfile: 
```dockerfile
... # OTHER CODES
# Switch to app dir
WORKDIR /usr/src/app

# Copy temp 'shared' dir
COPY --chown=node:node ./shared /usr/src/shared # <---- this line 

```
Update the run command:
```dockerfile
# Start the server using the production build
CMD [ "node", "dist/app/src/main.js" ]
```

2. Build services:
```bash
# build all services
./build-and-deploy.sh
# build some images
./build-and-deploy.sh api-gateway auth 
```

Run the production images as development ones:
```bash
 docker compose -f docker-compose.prod.yaml up
```

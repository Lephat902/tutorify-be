# tutorify-be
Microservice Repositories for Tutorify Application

Muốn chạy **development** thì:
1. Vào thư mục `project`
2. Gõ `docker compose -f docker-compose.dev.yml up --build`

Muốn stop tất cả thì: `docker compose stop`

Muốn stop một container nhất định thì:
1. Kiếm id của nó qua lệnh `docker ps`
2. Stop nó bằng `docker stop <id>`

Ở môi trường **production** thì như **development**, chỉ khác là thay thế file compose thành `docker-compose.prod.yml`

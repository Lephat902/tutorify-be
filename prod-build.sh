#!/bin/bash

# Default list of service names, api-gateway isn't count
# Please notice that services list just used for cp and rm command, not docker compose
# Services in this list will have access to 'shared' dir during build process
default_microservices=("class-and-category" "auth" "feedback")

# Check if argument list is empty
if [ $# -eq 0 ]; then
    services=("${default_microservices[@]}")
else
    services=("$@")
fi

# Copy shared dir to build context of each microservice that needs it
for service in "${services[@]}"; do
    cp shared -r "./$service"
done

# Build and run the services
docker compose -f docker-compose.prod.yaml build "$@"

# Remove the temp-ctx after building production
for service in "${services[@]}"; do
    rm -r "./$service/shared"
done

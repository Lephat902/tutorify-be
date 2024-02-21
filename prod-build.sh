#!/bin/bash

# Please notice that services list just used for cp and rm command, not docker compose
# Services in this list will have access to 'shared' dir during build process
microservices_use_shared_dir=("class-and-category" "api-gateway" "tutor-apply-for-class")

# Copy shared dir to build context of each microservice that needs it
for service in "${microservices_use_shared_dir[@]}"; do
    cp shared -r "./$service"
done

# Build and run the services
docker compose -f docker-compose.prod.yaml build "$@"

# Remove the temp-ctx after building production
for service in "${microservices_use_shared_dir[@]}"; do
    rm -r "./$service/shared"
done

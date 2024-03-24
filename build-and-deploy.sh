#!/bin/bash

# Function to push Docker image to registry
push_docker_image() {
    local service_name=$1
    docker push "registry.digitalocean.com/tutorify-registry/tutorify-be-${service_name}:prod"
}

# Function to restart Kubernetes deployment
restart_kubernetes_deployment() {
    local service_name=$1
    kubectl rollout restart -f "./k8s/services/${service_name}.yaml"
}

# Please notice that services list just used for cp and rm command, not docker compose
# Services in this list will have access to 'shared' dir during build process
microservices_use_shared_dir=(
    "class-and-category"
    "api-gateway"
    "tutor-apply-for-class"
    "auth"
    "student-favorite-tutor"
    "feedback"
    "tutor-query"
    "class-session"
    "address"
    "report"
    "user-preferences"
)

# Iterate through the input arguments and check if they are in microservices_use_shared_dir
for arg in "$@"; do
    # Check if the argument is in the microservices_use_shared_dir array
    if [[ " ${microservices_use_shared_dir[@]} " =~ " $arg " ]]; then
        # If the argument is in the array, copy the shared directory
        cp shared -r "./$arg"
    fi
done

# Build and run the services
docker compose -f docker-compose.prod.yaml build "$@"

# Remove the temp shared dir after building production successfully
for arg in "$@"; do
    # Check if the argument is in the microservices_use_shared_dir array
    if [[ " ${microservices_use_shared_dir[@]} " =~ " $arg " ]]; then
        # If the argument is in the array, remove the shared directory
        rm -r "./$arg/shared"
    fi
done

# Iterate through the input arguments and push Docker images and restart Kubernetes deployments
for service_name in "$@"; do
    # Run push_docker_image in background
    (push_docker_image "$service_name" && restart_kubernetes_deployment "$service_name") &
done

# Wait for all background processes to finish
wait

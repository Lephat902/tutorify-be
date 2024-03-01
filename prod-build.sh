#!/bin/bash

# Please notice that services list just used for cp and rm command, not docker compose
# Services in this list will have access to 'shared' dir during build process
microservices_use_shared_dir=(
    "class-and-category"
    "api-gateway"
    "tutor-apply-for-class"
    "tutor-proficient-in-class-category"
    "auth"
    "student-favorite-tutor"
    "feedback"
    "tutor-query"
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

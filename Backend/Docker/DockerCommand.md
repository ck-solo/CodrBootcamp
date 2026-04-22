# Docker Complete Cheat Sheet

## 1. Docker Basic Commands

```bash
docker --version                  # Check Docker version
docker info                       # Show Docker system info
docker ps                         # List running containers
docker ps -a                      # List all containers
docker images                     # List all images
```

## 2. Docker Image Commands

```bash
docker pull <image_name>          # Download image
docker build -t <name> .          # Build image from Dockerfile
docker build --no-cache -t <name> .   # Build image without cache
docker build -f Dockerfile.dev -t <name> .  # Build using custom Dockerfile
docker rmi <image_id>             # Remove image
```

## 3. Docker Container Commands

```bash
docker run <image_name>                   # Run container
docker run -d <image_name>                # Run in detached mode
docker run -p 8080:80 <image_name>        # Run with port mapping
docker run --name mycontainer <image_name> # Run with custom name
docker stop <container_id>                # Stop container
docker start <container_id>               # Start container
docker restart <container_id>             # Restart container
docker rm <container_id>                  # Remove container
```

## 4. Logs and Access Container

```bash
docker logs <container_id>         # View logs
docker logs -f <container_id>      # Follow logs live
docker exec -it <container_id> sh  # Open shell inside container
docker exec -it <container_id> bash # Open bash inside container
```

## 5. Docker Volume Commands

```bash
docker volume ls                   # List volumes
docker volume create <name>        # Create volume
docker volume rm <name>            # Remove volume
docker volume prune                # Remove unused volumes
```

## 6. Docker Network Commands

```bash
docker network ls                  # List networks
docker network create <name>       # Create network
```

## 7. Docker Cleanup Commands

```bash
docker container prune             # Remove stopped containers
docker image prune                 # Remove unused images
docker system prune                # Remove unused resources
docker system prune -a             # Remove all unused resources
```

## 8. Docker Compose Commands

```bash
docker compose up                  # Start services
docker compose up --build          # Build and start services
docker compose up -d               # Start in detached mode
docker compose down                # Stop services
docker compose down -v             # Stop and remove volumes
docker compose ps                  # Show running services
docker compose logs                # Show logs
docker compose logs -f             # Follow logs
docker compose restart <service>   # Restart a service
docker compose build               # Build services
docker compose build --no-cache    # Build without cache
docker compose run <service> <cmd> # Run one-time command
docker compose exec <service> sh   # Open shell in service
```

## 9. Common Workflow

```bash
docker compose up --build          # Build and run project
docker compose down -v             # Stop and remove everything
docker compose up --build          # Fresh rebuild
```

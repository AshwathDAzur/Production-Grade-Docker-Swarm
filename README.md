# Production-Grade-Docker-Swarm
This readme provides a comprehensive guide on **deploying a monolithic application** as **containerized services** within a production-grade Docker Swarm cluster. The technical details presented here are based on my hands-on experience implementing this architecture for a simple three tier **Employee Management System** build in asp dotnet core web api 8, react and sqlserver for database.

From initial cluster setup to post-deployment activities, I've been actively involved in every stage of the process. This repo serves as a complete resource covering the essential steps for building, deploying, and monitoring a containerized application in a high-availability environment.

My expertise in Docker Swarm, container orchestration, and related technologies comes from deploying this monolith on-premises infrastructure, ensuring the system operates efficiently in a real-world production scenario. Through this experience, I've gained in-depth knowledge of **networking**, **service scaling**, **load balancing**, and **monitoring**, which are critical for maintaining a stable and resilient deployment. 

## Docker swarm overview 
Docker Swarm is a container orchestration tool that manages a cluster of Docker nodes. It enables service replication, load balancing, and failover mechanisms to ensure high availability. We have a simple one node setup with 0 fault tolerance.

Key features of Docker Swarm in this setup: 

  👉 Service Replication: The client and server services are deployed in multiple replicas in the node for redundancy. 
  
  👉 Service Discovery: Swarm provides an internal DNS, allowing services to communicate without hardcoding IP addresses. 
  
  👉 Load Balancing: Nginx acts as a reverse proxy to distribute requests among backend instances.

## Why Docker Swarm for Production? 

Deploying the application on Docker Swarm was a strategic choice, as it is well-suited for monolithic architectures, offering simplicity, built-in orchestration, and efficient resource management. Unlike Kubernetes, which introduces additional complexities for a three-tier application, Docker Swarm provides a straightforward and lightweight orchestration solution, making it an ideal fit for on-premises setup.

## About the application

The Employee Management System is built using .NET Core Web API 8, React, and SQL Server. It follows a simple monolithic architecture and primarily focuses on basic CRUD (Create, Read, Update, Delete) operations. The primary purpose of this project is to demonstrate how to containerize an application using GitHub Actions and deploy it on a bare-metal, on-premises environment.

Although the application itself is minimal in terms of features, it serves as a comprehensive learning resource for understanding containerization, deployment pipelines, and production-level deployment strategies. By working through this project, we gain hands-on experience with the underlying architecture, best practices for developing containerized applications, and the end-to-end deployment process. 

Throughout the development, I have incorporated industry best practices, making this project a complete learning package—from foundational concepts to practical implementation. This initiative not only showcases containerization but also provides a structured approach to mastering deployment in real-world production environments.

## Setting Up Docker Swarm Cluster 

### Pre-requisites 
👉Docker installed on the  node 

👉Linux OS – Ubuntu 22.04 LTS (or a compatible distribution) 

👉SSH access to the node for configuration and management 

👉A static IP or DNS setup for each node 

👉Firewall and security rules configured to allow Swarm communication (ports 2377, 7946, and 4789) 

👉Sufficient system resources (CPU, RAM, and disk space) to run containers efficiently 

### Deploying the stack in the swarm

In the repository, there is a folder named `swarmdeployment`, which contains a `scripts` directory. Inside this directory, you will find deployment script responsible for setting up the Docker Swarm environment. These scripts automate the process of initializing the Swarm, creating the necessary Docker volumes to ensure data persistence, and deploying the monolithic application onto the bare-metal server.

To execute the deployment, simply run the PowerShell (`swarmdeployment.ps1`) script provided in the `scripts` folder. As the script runs, observe the output to understand the deployment process and ensure that everything is set up correctly.

Once the deployment is complete, use your system’s IP address to access the application. A reverse proxy has already been configured to handle internal routing, directing requests to the appropriate services within the Swarm cluster. The proxy listens on port `80`, so you can access the application without specifying a port number in the URL.

![Alt text](/swarmsetup.png)

![Alt text](/createvolume.png)

![Alt text](/deployment.png)


---
title: Elastic Container Registry
description: Run highly secure, reliable, and scalable containers
toc: true
tags: [aws, "Elastic Container Registry", "ecr"]
categories: [aws, "Elastic Container Registry", "ecr"]
date: 2022-09-20
weight: 2500
awsTag:
---

## About

Amazon Elastic Container Registry (Amazon ECR) - Fully managed container registry offering high-performance hosting, so you can reliably deploy application images and artifacts anywhere

- [Documentation](https://aws.amazon.com/ecr/)
- [User Guide](https://docs.aws.amazon.com/ecr/?id=docs_gateway)

Hosted private Docker registry

![Elastic Container Registry Flow](https://d1.awsstatic.com/legal/AmazonElasticContainerRegistry/Product-Page-Diagram_Amazon-ECR.2f9e7f26ef78f4dc6f058f7eeb07cf696f6951c1.png)

### Alternatives

- Docker Hub
- JFrog Artifactory
- Azure Container Registry
- Harbor
- Google Container Registry
- Red Hat Quay
- JFrog Container Registry

## Price

[Current price](https://aws.amazon.com/ecr/pricing/)

## Use Cases

Store, encrypt, and manage container images

- Manage software vulnerabilities
- Streamline your deployment workloads
- Manage image lifecycle policies

Type: Containers

Same type services: Elastic Container Service (ECS), Elastic Container Registry (ECR), Elastic Kubernetes Service (EKS), Fargate

## Practice

This commands returns the command to execute to be able to login to ECR:

- Login
  - **get-login-password:**`aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com`
- Create a repository:

    ```bash
    aws ecr create-repository \
        --repository-name hello-repository \
        --image-scanning-configuration scanOnPush=true \
        --region region
    ```

- Tag image
  - `docker tag hello-world:latest aws_account_id.dkr.ecr.region.amazonaws.com/hello-repository`
- Push
  - `docker push aws_account_id.dkr.ecr.region.amazonaws.com/hello-repository`
- Pull
  - `docker pull aws_account_id.dkr.ecr.region.amazonaws.com/hello-repository:latest`
- Delete an image

    ```
    aws ecr batch-delete-image \
        --repository-name hello-repository \
        --image-ids imageTag=latest \
        --region region
    ```

- Delete a repository

    ```
    aws ecr delete-repository \
      --repository-name hello-repository \
      --force \
      --region region
    ```

Labs:

- [Use AWS Fargate for Serverless Deployment of Container Applications](https://cloudacademy.com/lab/use-aws-fargate-serverless-deployment-container-applications/)
- [Quick start: Publishing to Amazon ECR Public using the AWS CLI](https://docs.aws.amazon.com/AmazonECR/latest/public/getting-started-cli.html)

{{< youtube id="tANNsV6bGbQ" >}}

Notes:

- If you get a **503 Service Temporarily Unavailable** error, try again after 30 seconds to let the load balancer finish adding the task to the target group.

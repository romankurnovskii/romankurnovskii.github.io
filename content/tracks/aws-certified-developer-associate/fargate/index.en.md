---
title: Fargate
description: Serverless compute for containers
toc: true
tags: [aws, "Fargate"]
categories: [aws, "Fargate"]
date: 2022-09-21
weight: 2700
awsTag: 
---

## About

Serverless version of [ECS](../ecs).

Serverless compute for contai­ners.

AWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on **building applications without managing servers**.

Deploy and manage your applications, not infrastructure. Fargate removes the operational overhead of scaling, patching, securing, and managing servers.

Compatible with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).

- [Documentation](https://aws.amazon.com/fargate/)
- [User Guide](https://docs.aws.amazon.com/fargate/?id=docs_gateway)

![AWS Fargate Flow](https://d1.awsstatic.com/re19/FargateonEKS/Product-Page-Diagram_Fargate%402x.a20fb2b15c2aebeda3a44dbbb0b10b82fb89aa6a.png)

### Alternatives

- Google Kubernetes Engine (GKE)
- Red Hat OpenShift Container Platform
- Azure Kubernetes Service (AKS)
- Rancher
- Azure Container Instances
- Cloud Foundry
- Oracle Cloud Infrastructure Container Engine for Kubernetes

## Price

[Current price](https://aws.amazon.com/fargate/pricing/)

## Use Cases

- Web apps, APIs, and microservices
- Run and scale container workloads
- Support AI and ML training applications

Type: Containers

Same type services: Elastic Container Service (ECS), Elastic Container Registry (ECR), Elastic Kubernetes Service (EKS), Fargate

## Questions

### Q1

**How AWS Fargate different from AWS ECS?**

<details>
<summary>Explanation</summary>
<div>

In AWS ECS, you manage the infrastructure - you need to provision and configure the EC2 instances.
While in AWS Fargate, you don't provision or manage the infrastructure, you simply focus on launching Docker containers. You can think of it as the serverless version of AWS ECS.

</div>
</details>

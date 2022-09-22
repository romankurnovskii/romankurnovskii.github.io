---
title: Elastic Kubernetes Service
description: Amazon Elastic Kubernetes Service
toc: true
tags: [aws, "EKS"]
categories: [aws, "EKS"]
date: 2022-09-22
weight: 2800
awsTag: 
---

## About

Kubernetes (K8) Docker Container/Cluster management

Run highly secure, reliable, and scalable containers

- [Documentation](https://aws.amazon.com/eks/)
- [User Guide](https://docs.aws.amazon.com/eks/?id=docs_gateway)

![Elastic Kubernetes Service Flow](https://d1.awsstatic.com/product-page-diagram_Amazon-EKS%402x.ddc48a43756bff3baead68406d3cac88b4151a7e.ddc48a43756bff3baead68406d3cac88b4151a7e.png)

![Elastic Kubernetes Service Flow](https://d1.awsstatic.com/v3-product-page-diagram_Amazon-EKS-Anywhere%402x.42ea1da6460bdee2acd657e920d1e329d2821d7a.png)

### Alternatives

- Red Hat OpenShift Container Platform
- Azure Kubernetes Service (AKS)
- Rancher
- Google Kubernetes Engine (GKE)
- Oracle Cloud Infrastructure Container Engine for Kubernetes
- Mirantis Kubernetes Engine (formerly Docker Enterprise)
- Kubernetes
- Cloud Foundry

## Price

[Current price](https://aws.amazon.com/eks/pricing/)

## Use Cases

- Build and run web applications
- Deploy across hybrid environments
- Model machine learning (ML) workflows

### ECS vs EKS

Amazon provides the Elastic Container Service for Kubernetes (Amazon EKS) which can be used to deploy, manage, and scale containerized applications using Kubernetes on AWS.

| Amazon ECS                                                                                       | Amazon EKS                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Managed, highly available, highly scalable container platform                                    | Managed, highly available, highly scalable container platform                                        |
| AWS-specific platform that supports Docker Containers                                            | Compatible with upstream Kubernetes so it’s easy to lift and shift from other Kubernetes deployments |
| Considered simpler and easier to use                                                             | Considered more feature-rich and complex with a steep learning curve                                 |
| Leverages AWS services like Route 53, ALB, and CloudWatch                                        | A hosted Kubernetes platform that handles many things internally                                     |
| “Tasks” are instances of containers that are run on underlying compute but more of less isolated | “Pods” are containers collocated with one another and can have shared access to each other           |
| Limited extensibility                                                                            | Extensible via a wide variety of third-party and community add-ons.                                  |


## Practice

[Building a Cloud Native Application](https://cloudacademy.com/lab/eks-voteapp/)

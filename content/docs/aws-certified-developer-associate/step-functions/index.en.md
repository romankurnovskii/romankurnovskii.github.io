---
title: Step Functions
description: Amazon Step Functions
toc: true
tags: [AWS, "Step Functions"]
categories: [AWS, "Step Functions"]
date: 2022-09-27
weight: 3500
awsTag: "Step Functions"
---

## About

AWS Step Functions is a low-code, visual workflow service that developers use to build distributed applications, automate IT and business processes, and build data and machine learning pipelines using AWS services.

- [Documentation](https://aws.amazon.com/step-functions/)
- [User Guide](https://docs.aws.amazon.com/step-functions/?id=docs_gateway)

![Step Functions Flow](https://d1.awsstatic.com/Step%20Functions%20Workflow%20Studio%20USI%20Mock.e04623598b8abf438fc8c9f6576384b6eaf09dd4.png)

Step Functions is a serverless function orches­trator that makes it easy to sequence Lambda functions & multiple AWS services into busine­ss-­cri­tical applic­ations.

![Step Functions Flow](https://d2yymmf9l33ie1.cloudfront.net/how-it-works-fcfa8f363d8404db21af77604ac8d07102bb3ac9.gif)


### Alternatives

- [AWS lambda](../lambda)
- [Airflow](https://airflow.apache.org/)
- [Google Cloud Workflows](https://cloud.google.com/workflows)
- [Microsoft Flow](https://powerautomate.microsoft.com/en-us/blog/welcome-to-microsoft-flow/)

## Price

Pay only for what you use

[Current price](https://aws.amazon.com/ru/step-functions/pricing/)

Free Tier: 4,000 state transitions per month

## Use Cases

Step Functions is an easy-to-use function orchestra that makes it possible to string Lambda functions and multiple AWS services into business-critical applications.

Step Functions manages the operations and underlying infrastructure for you to ensure your application is available at any scale.

With Step Functions, you are able to easily coordinate complex processes composed of different tasks.

Without using this service you have to coordinate each Lambda Function yourself and manage every kind of error in all steps of this complex process.

AWS Step Functions is a useful service for breaking down complex processes into smaller and easier tasks

- Automate Extract, Transform, and Load (ETL) process
- Orchestrate microservices
- Workflow configuration
- AWS service integrations
- Component reuse
- Built-in error handling

Type: Orches­tration, Workflows

Step Function **Standard Workflows** are optimized for long-running processes. 

**Express Workflows** are better for event-driven workloads.

## Practice

[Introduction to AWS Step Functions](introduction-aws-step-functions)

## Questions

### Q1

**A developer is adding a feedback form to a website. Upon user submission, the form should create a discount code, email the user the code and display a message on the website that tells the user to check their email. The developer wants to use separate Lambda functions to manage these processes and use a Step Function to orchestrate the interactions with minimal custom scripting.**

**Which of the following Step Function workflows can be used to meet requirements?**

1. Asynchronous Express Workflow
2. Standard Workflow
3. Synchronous Express Workflow
4. Standard Express Workflow

<details>
<summary>Explanation</summary>
<div>

[https://aws.amazon.com/blogs/compute/new-synchronous-express-workflows-for-aws-step-functions/](https://aws.amazon.com/blogs/compute/new-synchronous-express-workflows-for-aws-step-functions/)

<mark style="color:white">3</mark> 
</div>
</details>

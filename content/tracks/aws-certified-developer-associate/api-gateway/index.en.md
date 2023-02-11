---
title: API Gateway
description: Create, maintain, and secure APIs at any scale with Amazon API Gateway
toc: true
tags: [aws, "API Gateway"]
categories: [aws, "API Gateway"]
date: 2022-09-13
weight: 900
awsTag: API Gateway
featuredImage: https://cdn.worldvectorlogo.com/logos/aws-api-gateway.svg
imgWidth: 70px
---

## About

- [Documentation](https://aws.amazon.com/api-gateway/)
- [User Guide](https://docs.aws.amazon.com/api-gateway/?id=docs_gateway)

API Gateway provides the opportunity to create and expand your own REST and WebSocket APIs at any size.

API endpoints can be cached to accommodate for frequent similar requests.

![](https://d1.awsstatic.com/serverless/New-API-GW-Diagram.c9fc9835d2a9aa00ef90d0ddc4c6402a2536de0d.png)

## Use Cases

Build a network for micros­ervices archit­ectures.

- [**Amazon CloudWatch**](cloudwatch) metrics - Collects near-real-time metrics
  - Examples: 4XXError (client-side errors), 5XXError(server-side errors), CacheHitCount
- **Amazon CloudWatch Logs** - Debug issues related to request execution
- [**AWS CloudTrail**](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) - Record of actions taken by a user, role, or an AWS service in API Gateway
- [**AWS X-Ray**](../xray) - Trace your request across different AWS Services

## Digests 

### Concepts

- REST API, HTTP API, WebSocket API
- Deployment - point-in-time snapshot of your API Gateway API
- Endpoint - https://api-id.execute-api.region-id.amazonaws.com
    - Edge-optimized
    - Private
    - Regional
    - Stage - A logical reference to a lifecycle state of your API.
    - Route - URL path, Latency based routing,
    - Integration - Lambda, HTTP, Private VPC, CORS
    - Import/Export - Open API
    - AM User should have permission to enable logging

- Amazon API Gateway is an AWS service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale.
- Stage variables are name-value pairs that you can define as configuration attributes associated with a deployment stage of a REST API. The act like environment variables and can be used in your API setup and mapping templates.
- With deployment stages in API Gateway you can manage multiple release stages for each API, such as: alpha, beta, and production. Using stage variables you can configure an API deployment stage to interact with different backend endpoints.
- When you build an API Gateway API with standard Lambda integration using the API Gateway console, the **console** **automatically adds** the **required permissions**. However, when you set up a **stage variable** to call a Lambda function through our API, you must **manually** add these permissions.
- Integration timeout for AWS, Lambda, Lambda proxy, HTTP, HTTP proxy - 50 ms to 29 seconds
- You can enable **API caching** to cache your endpoint's responses, this reduces the number of calls made to your endpoint and improves the latency of requests to your API
- AWS Gateway Integration types:
  - AWS_ Proxy - lambda proxy integration
  - HTTP - http custom integration
  - HTTP_PROXY - http proxy

## Practice

- [Creating a RESTful API Using Amazon API Gateway](https://cloudacademy.com/lab/creating-a-restful-api-using-amazon-api-gateway/)


## Questions

### Q1

**You are developing an API in Amazon API Gateway that several mobile applications will use to interface with a back end service in AWS being written by another developer. You can use a(n)____ integration for your API methods to develop and test your client applications before the other developer has completed work on the back end.**

- A) HTTP proxy
- B) mock
- C) AWS service proxy
- D) Lambda function


<details>
<summary>Explanation</summary>
<div>

[http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings-console.html](http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings-console.html)

Amazon API Gateway supports mock integrations for API methods.

<mark style="color:white">B</mark> 

</div>
</details>

### Q2

**A developer is designing a web application that allows the users to post comments and receive in a real-time feedback.**

**Which architectures meet these requirements? (Select TWO.)**

1. Create an AWS AppSync schema and corresponding APIs. Use an [Amazon DynamoDB](../dynamodb) table as the data store.
2. Create a WebSocket API in Amazon API Gateway. Use an [AWS Lambda](../lambda) function as the backend and an [Amazon DynamoDB](../dynamodb) table as the data store
3. Create an AWS Elastic Beanstalk application backed by an Amazon RDS database. Configure the application to allow long-lived TCP/IP sockets.
4. Create a GraphQL endpoint in Amazon API Gateway. Use an [Amazon DynamoDB](../dynamodb) table as the data store.
5. Enable WebSocket on Amazon CloudFront. Use an [AWS Lambda](../lambda) function as the origin and an Amazon Aurora DB cluster as the data store

<details>
<summary>Explanation</summary>
<div>

[AWS AppSync](https://aws.amazon.com/appsync/) simplifies application development by letting users create a flexible API to securely access, manipulate, and combine data from one or more data sources. AWS AppSync is a managed service that uses GraphQL to make it easy for applications to get the exact data they need. 

AWS AppSync allows users to build scalable applications, including those requiring [real-time updates](https://docs.aws.amazon.com/appsync/latest/devguide/real-time-data.html), on a range of data sources, including Amazon DynamoDB. In [Amazon API Gateway](../api-gateway), users can [create a WebSocket API](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html) as a stateful frontend for an AWS service (such as [AWS Lambda](../lambda) or DynamoDB) or for an HTTP endpoint. 

The WebSocket API invokes the backend based on the content of the messages it receives from client applications. Unlike a REST API, which receives and responds to requests, a WebSocket API supports two-way communication between client applications and the backend.

<mark style="color:white">1, 2</mark> 

</div>
</details>

 ### Q3

**A company is providing services to many downstream consumers. Each consumer may connect to one or more services. This has resulted in complex architecture that is difficult to manage and does not scale well. The company needs a single interface to manage these services to consumers**

**Which AWS service should be used to refactor this architecture?**

1. [AWS X-Ray](../xray)
2. [Amazon SQS](../sqs)
3. [AWS Lambda](../lambda)
4. [Amazon API Gateway](../apigateway)
  
<details>
<summary>Explanation</summary>
<div>

<mark style="color:white">4</mark> 

</div>
</details>

### Q4

**Veronika is writing a REST service that will add items to a shopping list. The service is built on Amazon API Gateway with [AWS Lambda](../lambda) integrations. The shopping list stems are sent as query string parameters in the method request.**

**How should Veronika convert the query string parameters to arguments for the Lambda function?**

1. Enable request validation
2. Include the Amazon Resource Name (ARN) of the Lambda function
3. Change the integration type
4. Create a mapping template

<details>
<summary>Explanation</summary>
<div>

[API Gateway mapping template](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html)

<mark style="color:white">4</mark> 

</div>
</details>


### Q5

**A developer is designing a full-stack serverless application. Files for the website are stored in an Amazon S3 bucket. AWS Lambda functions that use Amazon API Gateway endpoints return results from an Amazon DynamoDB table. The developer must create a solution that securely provides registration and authentication for the application while minimizing the amount of configuration.**

**Which solution meets these requirements?**

1. Create an Amazon Cognito user pool and an app client. Configure the app client to use the user pool and provide the hosted web UI provided for sign-up and sign-in.
2. Configure an Amazon Cognito identity pool. Map the users with IAM roles that are configured to access the S3 bucket that stores the website.
3. Configure and launch an Amazon EC2 instance to set up an identity provider with an Amazon Cognito user pool. Configure the user pool to provide the hosted web UI for sign-up and sign-in.
4. Create an IAM policy that allows access to the website that is stored in the S3 bucket. Attach the policy to an IAM group. Add IAM users to the group.

<details>
<summary>Explanation</summary>
<div>

<mark style="color:white">2</mark> 

</div>
</details>


### Q6

**A company has moved a legacy on-premises application to AWS by performing a lift and shift. The application exposes a REST API that can be used to retrieve billing information. The application is running on a single Amazon EC2 instance. The application code cannot support concurrent invocations. Many clients access the API, and the company adds new clients all the time.**

**A developer is concerned that the application might become overwhelmed by too many requests. The developer needs to limit the number of requests to the API for all current and future clients. The developer must not change the API, the application, or the client code.**

**What should the developer do to meet these requirements?**

1. Place the API behind an Amazon API Gateway API. Set the server-side throttling limits.
2. Place the API behind a Network Load Balancer. Set the target group throttling limits.
3. Place the API behind an Application Load Balancer. Set the target group throttling limits.
4. Place the API behind an Amazon API Gateway API. Set the per-client throttling limits.

<details>
<summary>Explanation</summary>
<div>

<mark style="color:white">4</mark> 

</div>
</details>

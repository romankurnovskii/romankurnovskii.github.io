---
title: X-Ray
description: Analyze and debug production, distributed applications
toc: true
tags: [aws, xray]
categories: [aws, xray]
date: 2022-09-19
weight: 2300
awsTag: X-Ray
featuredImage: ./img/logo.jpg
imgWidth: 50px
---

## About

AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture.

- [Documentation](https://aws.amazon.com/xray/)
- [User Guide](https://docs.aws.amazon.com/xray/?id=docs_gateway)

![X-Ray Flow](https://d1.awsstatic.com/Products/product-name/Images/product-page-diagram_AWS-X-Ray_how-it-works%402x.0d5b08dc2f788d3003a05ddb11e383ba54f41fc4.png)

X-Ray allows software engineers to view the state of a system at a glance, identify potential bottlenecks, and make informed operational decisions to improve performance and reliability. X-Ray inspects application code using a combination of machine and customer-provided data to identify potential bottlenecks and analyze performance and performance trends for each test scenario.

### Terminology

AWS X-Ray receives data from services as **segments**. X-Ray then groups segments that have a common request into **traces**. X-Ray processes the traces to generate a service graph that provides a visual representation of your application

**X-Ray Trace Hierarchy**: Trace > Segment > Sub Segment

**Trace**

An X-Ray trace is a set of data points that share the same trace ID.

**Segments**

A segment is a JSON representation of a request that your application serves.

A trace segment records information about the original request, information about the work that your application does locally, and subsegments with information about downstream calls that your application makes to AWS resources, HTTP APIs, and SQL databases.

**Subsegments**

Subsegments provide more granular timing information and details about downstream calls that your application made to fulfill the original request.

**Annotations**

- An X-Ray annotation is system-defined, or user-defined data associated with a segment
- A segment can contain multiple annotations.
- Annotations are used to describe the request, the response, and other information about the segment
- Can be used for adding system or user-defined data to segments and subsegments that you want to index for search.

**Sampling**

X-Ray traces are sampled at a rate that you specify. The rate is specified in the `sampling_rate` field of the `sampling` object in the `config` object.

**Metadata**

X-Ray traces contain metadata that is useful for understanding the trace.

- Metadata (Key / value pairs) is not indexed and cannot be used for searching

## Digest

- Trace request across microservices/AWS services
  - Analyze, Troubleshoot errors, Solve performance issues
  - Gather tracing information
    - From applications/components/AWS Services
  - Tools to view, filter and gain insights (Ex: Service Map)
- How does Tracing work?
  - Unique trace ID assigned to every client request
    - `X-Amzn-Trace-Id:Root=1-5759e988-bd862e3fe`
  - Each service in request chain sends traces to X-Ray with trace ID
    - X-Ray gathers all the information and provides visualization
  - How do you reduce performance impact due to tracing?
    - Sampling - Only a sub set of requests are sampled (Configurable)
  - How can AWS Services and your applications send tracing info?
    - Step 1 : Update Application Code Using X-Ray SDK
    - Step 2: Use X-Ray agents (EASY to use in some services! Ex: AWS Lambda)

- Segments and Sub-segments can include an annotations object containing one or more fields that X-Ray indexes for use with Filter Expressions. It is indexed. Use up to 50 annotations per trace.
- Total sampled request per second = `Reservoir size + ((incoming requests per second - reservoir size) * fixed rate)`
- Default sampling X-ray SDK first request each second and 5% of any additional requests
- Tracing header can be added in *http* request header
- Annotations vs Segments vs Subsegments vs metadata
- X-ray daemon listens for traffic on UDP port 2000
- X-ray SDK provides interceptors to add your code to trace incoming HTTP requests.
- X-ray in EC2: You need the X-Ray daemon to be running on your EC2 instances in order to send data to X-Ray. User data script could be used to install the X-Ray daemon in EC2 instance.
- X-ray in ECS: In Amazon ECS, create a Docker image that runs the X-Ray daemon, upload it to a Docker image repository, and then deploy it to your Amazon ECS cluster.
- X-ray in elastic beanstalk: Enable the X-Ray daemon by including the xray-daemon.config configuration file in the `.ebextensions` directory of your source code
- AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a micro-service architecture.
- A segment can break down the data about the work done into subsegments. Subsegments provide more granular timing information and details about - downstream calls that your application made to fulfill the original request.
- Add annotations to subsegment document if you want to trace downstream calls.
- Segments and subsegment can include a metadata object containing one or more fields with values of any type, including objects and arrays.
- Tracing header is added in the HTTP request header. A tracing header (`X-Amzn-Trace-ld`) can originate from the X-Ray SDK, an AWS service, or the - client request.
- Use the `GetTraceSummaries` API to get the list of trace IDs of the application and then retrieve the list of traces using BatchGetTraces API in - order to develop the custom debug tool

## Price

[Current price](https://aws.amazon.com/xray/pricing/)

## Use Cases

Type: Developer Tools

### Alternatives

- Google Stackdriver
- Azure Monitor
- Elastic Observability
- Datadog
- Splunk

AWS X-Ray supports applications running on:

- Amazon Elastic Compute Cloud (Amazon EC2)
- Amazon EC2 Container Service (Amazon ECS)
- AWS Lambda
- WS Elastic Beanstalk

## Practice

<!-- [Tracing Java Applications with AWS X-Ray](tracing-java-apps-with-aws-x-ray) -->

## Questions

### Q1

**You joined an application monitoring team. Your role focuses on finding system performance and bottlenecks in Lambda functions and providing specific solutions. Another teammate focuses on auditing the systems.**

**Which AWS service will be your main tool?**

1. AWS X-Ray
2. AWS IAM
3. AWS CloudTrail
4. AWS Athena

<details>
<summary>Explanation</summary>
<div>

AWS X-Ray provides graphs of system performance and identifies bottlenecks

<mark style="color:white">1</mark>
</div>
</details>

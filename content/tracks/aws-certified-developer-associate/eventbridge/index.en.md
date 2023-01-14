---
title: EventBridge
description: Amazon EventBridge - Build event-driven applications at scale across AWS, existing systems, or SaaS apps
toc: true
tags: [AWS, "Amazon EventBridge"]
categories: [AWS, "Amazon EventBridge"]
date: 2022-09-25
weight: 3200
awsTag: 
---

## About

EventB­ridge is a serverless event bus that makes it easy to connect applic­ations together using data from apps, integrated SaaS apps, & AWS services.

- [Documentation](https://aws.amazon.com/eventbridge/)
- [User Guide](https://docs.aws.amazon.com/eventbridge/?id=docs_gateway)

![Amazon EventBridge Flow](https://d1.awsstatic.com/product-marketing/Product-Page-Diagram_Amazon-EventBridge%402x.90618a37067770ba7994eb9c4eac38f4a5fecc7c.png)

EventB­ridge is a low-cost alternative to building a new backend infrastructure for every new app. With Serverless EventB­ridge, you can connect your existing apps with a few lines of code. You don’t have to build a new backend for every new app you want to connect to. 

You can use existing infrastructure as a provider of event data, and connect your apps using Serverless EventB­ridge.

### Alternatives

- [Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview)
- TIBCO Cloud Integration (including BusinessWorks and Scribe)
- IBM App Connect
- [Google Cloud Pub/Sub](https://cloud.google.com/pubsub)
- Apache Camel
- Peregrine Connect
- Software AG webMethods
- [IBM Cloud Pak for Integration](https://www.ibm.com/cloud/cloud-pak-for-integration)

## Price

[Current price](https://aws.amazon.com/ru/eventbridge/pricing/)

## Use Cases

Type: Applic­ation integr­ation

Same type services: [SNS](../sns), [SQS](../sqs), [AppSync](https://aws.amazon.com/appsync/), EventBridge

- Re-architect for speed
- Extend functionality via SaaS integrations
- Monitoring and Auditing
- Customize SaaS with AI/ML

### EventBridge vs Amazon SNS

In comparison with Amazon SNS, EventBridge:

* Integrates with more AWS services than SNS
* Supports registering message schemas
* Has sophisticated third-party integrations available
* Supports transforming event messages before sending them

You should choose to use Amazon EventBridge over Amazon SNS when the system you are building is expected to:

* Support significant asynchronous functionality
* Grow significantly in terms of both usage and complexity
* Have changing requirements over time
* Have components built by different teams that interact
* Need support for disparate event sources and targets

### Amazon EventBridge vs CloudWatch Events

- Amazon EventBridge **extends** [CloudWatch Events](../cloudwatch) - Build event-driven architectures
- Original goal with CloudWatch Events was to help with monitoring usecases specific to AWS services.
  - React to events from Your Applications, AWS services and Partner Services
    - Example: EC2 status change, change in your application or SaaS partner application 
  - Event Targets can be a Lambda function, an SNS Topic, an SQS queues etc
  - Rules map events to targets (Make sure that IAM Roles have permissions)
  - Event buses receive the events:
    - Default event bus (for AWS services)
    - Custom event bus (custom applications)
    - Partner event bus (partner applications)
- Over time, Amazon EventBridge will replace Amazon CloudWatch Events


## Practice

{{< youtube OvpYjr00Bfs >}}

[Processing File Uploads Asynchronously with Amazon EventBridge](processing-file-uploads-asyncronously-with-amazon-eventbridge)

## Questions

### Q1

**A food delivery company is building a feature that requests reviews from customers after their orders are delivered. The solution should be a short-running process that can message customers simultaneously at various contact points including email, text, and mobile push notifications.**

**Which approach best meets these requirements?**

1. Use EventBridge with [Kinesis Data Streams](../kinesis) to send messages. 
2. Use a [Step Function](../step-functions) to send SQS messages.
3. Use a [Lambda](../lambda) function to send SNS messages.
4. Use [AWS Batch](https://aws.amazon.com/batch/) and [SNS](../sns) to send messages.

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/sns/latest/dg/welcome.html](https://docs.aws.amazon.com/sns/latest/dg/welcome.html)

<mark style="color:white">3</mark> 
</div>
</details>

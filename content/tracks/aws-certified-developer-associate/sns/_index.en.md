---
title: Simple Notification Service
description: Amazon Simple Notification Service
toc: true
tags: [AWS, "SNS"]
categories: [AWS, "SNS"]
date: 2022-09-26
weight: 3300
awsTag: 
---

## About

Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication.

- [Documentation](https://aws.amazon.com/sns/)
- [User Guide](https://docs.aws.amazon.com/sns/?id=docs_gateway)

![Simple Notification Service Flow](https://d1.awsstatic.com/diagrams/Product-page-diagram-Amazon-SNS_event-driven-SNS-compute%402X_.4b9c0a75aa40bda9cdb12f0176930a12da2872bf.png)

SNS is a fully managed messaging service for both system­-to­-system & app-to­-person (A2P) commun­ica­tion.

Amazon SNS can also send notifications via SMS text message, email, SQS queues or to any HTTP endpoint.

Amazon SNS notifications can also trigger Lambda functions.

Amazon SNS is inexpensive and based on a pay-as-you-go model with no upfront costs.

### Alternatives

- Airship
- Apple Push Notification
- Beamer
- Drift
- Expo
- Firebase FCM
- MagicBell
- OneSignal Push

### Terminology

**SNS Topics**

A topic is an “access point” for allowing recipients to dynamically subscribe for identical copies of the same notification.

An SNS topic is a named communication channel.

**SNS Subscribers and Endpoints**

When subscribing to an SNS topic the following endpoint types are supported:

- HTTP/HTTPS
- Email/Email-JSON
- Amazon Kinesis Data Firehose
- Amazon SQS
- AWS Lambda
- Platform application endpoint (mobile push)
- SMS

**Topic types:**

- Standard Topics
- FIFO Topics

## Price

[Current price](https://aws.amazon.com/ru/sns/pricing/)

## Use Cases

Type: Applic­ation integr­ation

Same type services: SNS, SQS, AppSync, EventB­ridge

Example: Send email notification when CloudWatch alarm is triggered

## Practice

[Process Amazon SNS Notifications with AWS Lambda](aws-lambda-sns-notifications)

## Questions

### Q1

**You’ve decided to use autoscaling in conjunction with SNS to alert you when your auto-scaling group scales. Notifications can be delivered using SNS in several ways.**

**Which options are supported notification methods? (Choose 3 answers)**

1. HTTP or HTTPS POST notifications
2. Email using SMTP or plain text
3. Kinesis Stream
4. Invoking of a Lambda function

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-sns-notifications.html](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-sns-notifications.html)

<mark style="color:white">1, 2, 4</mark>
</div>
</details>

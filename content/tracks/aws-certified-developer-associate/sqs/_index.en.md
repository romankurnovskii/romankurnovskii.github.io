---
title: Simple Queue Service
description: Amazon Simple Queue Service
toc: true
tags: [AWS, "SQS"]
categories: [AWS, "SQS"]
date: 2022-09-26
weight: 3400
awsTag: 
---

## About

Fully managed message queues for microservices, distributed systems, and serverless applications

- [Documentation](https://aws.amazon.com/sqs/)
- [User Guide](https://docs.aws.amazon.com/sqs/?id=docs_gateway)

SQS offers two types of message queues. Standard queues offer maximum throughput, best-effort ordering, and at-least-once delivery. SQS FIFO queues are designed to guarantee that messages are processed exactly once, in the exact order that they are sent.

SQS is a fully managed message queuing service that enables to decouple & scale micros­erv­ices, distri­buted systems, & serverless applic­ations.

Messages are published to an Amazon SNS topic and then pushed to Amazon SQS subscriber queues. This eliminates the need for periodic polling and allows for messages to be processed in parallel asynchronously by the subscribers.

### Alternatives

- Apache Kafka
- Google Cloud Pub/Sub
- RabbitMQ
- IBM MQ
- TIBCO Enterprise Message Service
- AWS IoT Core
- Amazon CloudWatch
- Azure Service Bus

### Configuration

- **Visibility timeout**:
  - Other consumers will not receive a message being processed for the configured time period (default 30 seconds, min - 0, max - 12 hours)
  - Consumer processing a message can call ChangeMessageVisibility to increase visibility timeout of a message (before visibility timeout)
- **DelaySeconds**:
  - Time period before a new message is visible on the queue
  - Delay Queue = Create Queue + Delay Seconds default - 0, max - 15 minutes
  - Can be set at Queue creation or updated using SetQueueAttributes
  - Use message timers to configure a message specific DelaySeconds value
- M**essage retention period**:
  Maximum period a message can be on the queue Default - 4 days, Min - 60 seconds, Max - 14 days
- **MaxReceiveCount**:
  Maximum number of failures in processing a message

## Digest

- **Long polling**: Long polling will reduce the overhead of the CPU and not require excessive dolls.
- **Visibility timeout**: a period of time during which Amazon SOS prevents other consumers from receiving and processing the message. The default visibility timeout for a message is 30 seconds. The minimum is O seconds. The maximum is 12 hours
- **Delay queue**: Delay queues let you postpone the delivery of new messages to a queue for a number of seconds. If you create a delay queue, any messages that you send to the queue remain invisible to consumers for the duration of the delay period
Know FIFO vs Standard Queue
- **SQS** is a fully managed message queuing service that enables you to decouple and scale micro-services, distributed systems, and Serverless applications
- **SNS**: To receive subset of messages, subscriber can apply filter policy to topic subscription.
- If use case has subscribed to email notification, go with SNS as opposed to SQS.
- By default only the queue owner is allowed to use the queue. Configure SQS Queue Access Policy to provide access to other AWS accounts

## Price

[Current price](https://aws.amazon.com/ru/sqs/pricing/)

## Use Cases

Type: Applic­ation integr­ation

Same type services: SNS, SQS, AppSync, EventB­ridge	

## Practice

[Fan-Out Orders using Amazon SNS and SQS](fan-out-orders-with-sns-sqs)

## Questions

### Q1

**Which endpoint is considered to be best practice when analyzing data within a Configuration Stream of [AWS Config](https://aws.amazon.com/config/)?**

1. SNS
2. E-Mail
3. SQS
4. Kinesis

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/config/latest/developerguide/monitor-resource-changes.html](https://docs.aws.amazon.com/config/latest/developerguide/monitor-resource-changes.html)

<mark style="color:white">3</mark> 
</div>
</details>

---
title: CloudWatch
description: Amazon CloudWatch
toc: true
tags: [aws, cloudwatch]
categories: [aws, cloudwatch]
date: 2022-09-15
weight: 1400
featuredImage: https://cdn.worldvectorlogo.com/logos/aws-cloudwatch.svg
imgWidth: 70px
---

## About

CloudWatch offers a reliable, scalable, & flexible monitoring solution that can easily start.

CloudWatch can provide a dependable, scalable, & flexible monitoring solution that is simple to set up.

- [Documentation](https://aws.amazon.com/cloudwatch/)
- [User Guide](https://docs.aws.amazon.com/cloudwatch/?id=docs_gateway)

![Amazon CloudWatch Flow](https://d1.awsstatic.com/product-marketing/cloudwatch/product-page-diagram_Cloudwatch_v4.55c15d1cc086395cbd5ad279a2f1fc37e8452e77.png)


### CloudWatch vs CloudTrail

   | CloudWatch                                              | CloudTrail                                                               |
   | ------------------------------------------------------- | ------------------------------------------------------------------------ |
   | Performance monitoring                                  | Auditing                                                                 |
   | Log events across AWS Services – think operations       | Log API activity across AWS services – think activities, or who to blame |
   | Higher-level comprehensive monitoring and event service | More low-level, granular                                                 |
   | Log from multiple accounts                              | Log from multiple accounts                                               |
   | Logs stored indefinitely                                | Logs stored to S3 or CloudWatch indefinitely                             |
   | Alarms history for 14 days                              | No native alarming; can use CloudWatch alarms                            |



## Digest


- Standard vs High resolution metrics.
- CloudWatch unified agent collect both system metrics and log files from Amazon EC2 Instances and on-premise servers. The agent supports both Windows Server and Linux, and enables to select the metrics to be collected, including sub-resource metrics such as per-CPU core. Aside from the usual metrics, it also tracks the memory, swap, and disk space utilization metrics of your server.
- Cloudwatch events could be used for scheduling lambda functions.
- RAM Utilization needs custom metrics
- which use-cases are covered in Standard metrics and which ones would need custom metrics.  (memory utilization needs custom metrics)
- Basic (5 min) vs detailed (1 min) vs high resolution (1s) monitoring.


## Price

[Current price](https://aws.amazon.com/cloudwatch/pricing/)

## Use Cases

Type: Operate

Same type services: CloudWatch, CloudTrail, Systems Manager, Cost & usage report, Cost explorer, Managed Services	

## Practice

[Introduction to CloudWatch](introduction-to-cloudwatch)

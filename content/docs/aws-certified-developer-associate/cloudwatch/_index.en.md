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

## Questions

### Q1

**A Developer wants access to the log data of an application running on an [EC2](../ec2) instance available to systems administrators.**

**Which of the following enables monitoring of the metric in [Amazon CloudWatch](../cloudwatch)?**

1. Retrieve the log data from AWS CloudTrail using the LookupEvents API Call
2. Retrieve the log data from [CloudWatch](../cloudwatch) using the GetMetricData API call
3. Launch a new [EC2](../ec2) instance, configure [Amazon CloudWatch](../cloudwatch) Events, and then install the application
4. Install the [Amazon CloudWatch](../cloudwatch) logs agent on the [EC2](../ec2) instance that the application is running on 

<details>
<summary>Explanation</summary>
<div>

<mark style="color:white">4</mark> 

</div>
</details>


### Q2

**A developer must use AWS X-Ray to monitor an application that is running on an Amazon EC2 instance. Developer has prepared the application by using the X-Ray SDK.**

**What should the developer do to perform the monitoring?**

1. Configure the X-Ray SDK sampling rule and target. Activate the X-Ray daemon from the EC2 console or the AWS CLI with the modify-instance-attribute command to set the XRayEnabled flag.
2. Install the X-Ray daemon. Assign an IAM role to the EC2 instance with a policy that allows writes to X-Ray.
3. Install the X-Ray daemon. Configure it to forward data to Amazon EventBridge (Amazon CloudWatch Events). Grant the EC2 instance permission to write to Event Bridge (CloudWatch Events).
4. Deploy the X-Ray SDK with the application, and instrument the application code. Use the SDK logger to capture and send the events.

<details>
<summary>Explanation</summary>
<div>

<mark style="color:white">3</mark> 

</div>
</details>

### Q3

**A developer is designing an AWS Lambda function to perform a maintenance activity. The developer will use Amazon EventBridge (Amazon CloudWatch Events) to invoke the function on an hourly schedule. The developer wants the function to log information at different levels of detail according to the value of a log level variable. The developer must design the function so that the log level can be set without requiring a change to the function code.**

**Which solution will meet these requirements?**

1. A. Add a custom log level parameter for the Lambda function. Set the parameter by using the Lambda console.
2. Set the log level in the Amazon CloudWatch Logs console.
3. Set the log level in a Lambda environment variable.
4. Add a custom log level parameter for the Lambda function. Set the parameter by using the AWS CLI.

<details>
<summary>Explanation</summary>
<div>

<mark style="color:white">3</mark> 

</div>
</details>

---
title: Fault Injection Simulator
description: Improve resiliency and performance with controlled experiments with AWS Fault Injection Simulator 
toc: true
tags: [aws, "Fault Injection Simulator", "FIS"]
categories: [aws, "Fault Injection Simulator"]
date: 2022-09-19
weight: 2400
awsTag:
---

## About

AWS Fault Injection Simulator (FIS) is a fully managed service for running fault injection experiments on AWS that makes it easier to improve an application’s performance, observability, and resiliency.

- [Documentation](https://aws.amazon.com/fis/)
- [User Guide](https://docs.aws.amazon.com/fis/?id=docs_gateway)

![Fault Injection Simulator Flow](https://d1.awsstatic.com/fis/AWS-Fault-Injection-Simulator_HIW-Diagram.1e3b58caa9f8db5200a1e832b716118b0f2c3b8c.png)

## Price

[Current price](https://aws.amazon.com/fis/pricing/)

With AWS FIS, you pay only for what you use. There are no upfront costs or minimum fees. You are charged based on the duration that an action is active. The AWS FIS price is $0.10 per action-minute.

## Terminology and Concepts

Everything starts with an **experiment template**. The experiment template defines the targets that participate in the experiment. Supported targets are:

- [EC2](../ec2) Instances
- [EKS](../eks) node groups
- [RDS](../rds) clusters & instances
- [IAM](../iam) roles

The **actions** define the **injected faults**. You can run actions in parallel or sequence.

Some action examples:

- AWS API level errors for the EC2 service
- Stop/reboot/terminate EC2 instances
- Run SSM commands on EC2 instances to stress CPU or memory, add network latency, or kill a process
- Reboot RDS instance
- Failover RDS cluster
- Drain ECS container instance
- Terminate EKS node group instance

## Use Cases

- Periodic Game Days
- Continuous Delivery Pipeline Integration

## Practice

[Test instance stop and start using](https://docs.aws.amazon.com/fis/latest/userguide/fis-tutorial-stop-instances.html)

## Questions

### Q1

**What is Chaos Engineering?**

<details>
<summary>Explanation</summary>
<div>

Chaos engineering is the process of stressing an application in testing or production environments by creating disruptive events, such as server outages or API throttling, observing how the system responds, and implementing improvements.

Chaos engineering helps teams create the real-world conditions needed to uncover the hidden issues, monitoring blind spots, and performance bottlenecks that are difficult to find in distributed systems.

It starts with analyzing the steady-state behavior, building an experiment hypothesis (e.g., terminating x number of instances will lead to *x%* more retries), executing the experiment by injecting fault actions, monitoring roll back conditions, and addressing the weaknesses.

</div>
</details>

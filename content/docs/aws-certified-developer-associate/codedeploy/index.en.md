---
title: CodeDeploy
description: Amazon CodeDeploy - Automate code deployments to maintain application uptime
toc: true
tags: [aws, codedeploy]
categories: [aws, codedeploy]
date: 2022-09-16
weight: 1700
---

{{< youtube Wx-ain8UryM >}}

## About

CodeDeploy is a fully managed deployment service that automates software deploy­ments to a variety of compute services such as EC2, Fargate, Lambda, & on-pre­mises servers

- [Documentation](https://aws.amazon.com/codedeploy/)
- [User Guide](https://docs.aws.amazon.com/codedeploy/?id=docs_gateway)

CodeDeploy can also deploy a serverless Lambda function.

CodeDeploy can be connected to CodePipeline and use artifacts from there.

### Platforms

Need to choose the compute platform:

- EC2/On-premises.
- AWS Lambda.
- Amazon ECS.

### AppSpec File

The application specification file (AppSpec file) is a YAML-formatted, or JSON-formatted file used by CodeDeploy to manage a deployment.

The AppSpec file defines the deployment actions you want AWS CodeDeploy to execute.

#### Deployment types

- **In-place deployment (EC2 only)**
- **Blue/green deployments:**
  
  - AWS Lambda: Traffic is shifted from one version of a Lambda function to a new version of the same Lambda function.

  - Amazon ECS: Traffic is shifted from a task set in your Amazon ECS service to an updated, replacement task set in the same Amazon ECS service.
  
  - EC2/On-Premises: Traffic is shifted from one set of instances in the original environment to a replacement set of instances.

## Price

[Current price](https://aws.amazon.com/codedeploy/pricing/)

## Use Cases

Type: Developer Tools

## Practice

- [Continuous Integration and Deployment with AWS Code Services](https://cloudacademy.com/lab/continuous-integration-deployment-aws-code-services/)

## Questions

### Q1

**What will happen if you delete an unused custom deployment configuration in AWS CodeDeploy?**

1. You will no longer be able to associate the deleted deployment configuration with new deployments and new deployment groups.
2. Nothing will happen, as the custom deployment configuration was unused.
3. All deployment groups associated with the custom deployment configuration will also be deleted.
4. All deployments associated with the custom deployment configuration will be terminated.

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-delete.html](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-delete.html)

Can delete only if unused.

<mark style="color:white">1</mark> 
</div>
</details>

### Q2

**What happens when you delete a deployment group with the AWS CLI in AWS CodeDeploy?**

1. All details associated with that deployment group will be moved from AWS CodeDeploy to AWS OpsWorks.
2. The instances used in the deployment group will change.
3. All details associated with that deployment group will also be deleted from AWS CodeDeploy.
4. The instances that were participating in the deployment group will run once again.

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-groups-delete.html](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-groups-delete.html)

If you delete a deployment group, all details associated with that deployment group will also be deleted from CodeDeploy. The instances used in the deployment group will remain unchanged. This action cannot be undone.

<mark style="color:white">3</mark> 
</div>
</details>

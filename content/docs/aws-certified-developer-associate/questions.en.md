---
title: Questions
description: AWS exam questions Certified Developer 2022
toc: true
authors: [roman-kurnovskii]
tags:
categories:
series:
date: 2022-09-08
draft: false
featuredImage: "images/aws-cda-intro.en.png"
weight: 99999
---

On this page you can find 45 random questions. 

## Q1

**You are developing an API in Amazon API Gateway that several mobile applications will use to interface with a back end service in AWS being written by another developer. You can use a(n)____ integration for your API methods to develop and test your client applications before the other developer has completed work on the back end.**

1. HTTP proxy
2. mock
3. AWS service proxy
4. Lambda function

<details>
<summary>Explanation</summary>
<div>

[http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings-console.html](http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings-console.html)

Amazon API Gateway supports mock integrations for API methods.

<mark style="color:white">2</mark> 

</div>
</details>

## Q2

**You are creating multiple resources using multiple CloudFormation templates. One of the resources (Resource B) needs the ARN value of another resource (resource A) before it is created.**

**What steps can you take in this situation? (Choose 2 answers)**

1. Use a template to first create Resource A with the ARN as an output value.
2. Use a template to create Resource B and reference the ARN of Resource A using Fn::GetAtt.
3. Hard code the ARN value output from creating Resource A into the second template.
4. Just create Resource B. 

<details>
<summary>Explanation</summary>
<div>

[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)

<mark style="color:white">2</mark> 
</div>
</details>

## Q3

**A company with global users is using a content delivery network service to ensure low latency for all customers. The company has several applications that require similar cache behavior.**

**Which API command can a developer use to ensure cache storage consistency with minimal duplication?**

1. CreateReusableDelegationSet with Route 53
2. CreateStackSet with CloudFormation
3. CreateGlobalReplicationGroup with ElastiCache
4. CreateCachePolicy with CloudFront

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html)

<mark style="color:white">4</mark> 
</div>
</details>

## Q4

**You are creating a few test functions to demonstrate the ease of developing serverless applications. You want to use the command line to deploy [AWS Lambda](../lambda) functions, an Amazon API Gateway, and [Amazon DynamoDB](../dynamodb) tables.**

**What is the easiest way to develop these simple applications?**

1. Install AWS SAM CLI and run “sam init \[options\]” with the templates’ data. 
2. Use AWS step function visual workflow and insert your templates in the states
3. Save your template in the Serverless Application Repository and use AWS SAM

<details>
<summary>Explanation</summary>
<div>

AWS SAM - AWS Serverless Application Model 

[https://aws.amazon.com/serverless/sam/](https://aws.amazon.com/serverless/sam/)

<mark style="color:white">1</mark> 
</div>
</details>


## Q5

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

## Q6

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


## Q7

**You are configuring a Jenkins project that is installed on an Amazon [EC2](../ec2) instance running a Windows operating system. You want this Jenkins project to integrate with AWS CodePipeline.**

**Which actions should you take to make this function perform correctly? (2 answers)**

1. Restart all Amazon [EC2](../ec2) instances that are running a Windows operating system.
2. Provide the IAM user credentials to integrate AWS CodePipeline.
3. Fill out the required fields for your proxy host.
4. Modify the PATH variable to include the directory where you installed Jenkins on all Amazon [EC2](../ec2) instance that are running a Windows operating system.

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html)

<mark style="color:white">2, 3</mark> 
</div>
</details>


## Q8

**You are deploying Multi-Factor Authentication (MFA) on Amazon Cognito. You have set the verification message to be by SMS. However, during testing, you do not receive the MFA SMS on your device.**

**What action will best solve this issue?**

1. Use [AWS Lambda](../lambda) to send the time-based one-time password by SMS
2. Increase the complexity of the password
3. Create and assign a role with a policy that enables Cognito to send SMS messages to users
4. Create and assign a role with a policy that enables Cognito to send Email messages to users

<details>
<summary>Explanation</summary>
<div>

https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa.html

<mark style="color:white">3</mark> 
</div>
</details>


## Q9

**A developer is adding sign-up and sign-in functionality to an application. The application is required to make an API call to a custom analytics solution to log user sign-in events**

**Which combination of actions should the developer take to satisfy these requirements? (Select TWO.)**

1. Use Amazon Cognito to provide the sign-up and sign-in functionality
2. Use AWS IAM to provide the sign-up and sign-in functionality
3. Configure an AWS Config rule to make the API call triggered by the post-authentication event
4. Invoke an Amazon API Gateway method to make the API call triggered by the post-authentication event
5. Execute an [AWS Lambda](../lambda) function to make the API call triggered by the post-authentication event

<details>
<summary>Explanation</summary>
<div>

Amazon Cognito adds user sign-up, sign-in, and access control to web and mobile applications quickly and easily. Users can also create an [[AWS Lambda](../lambda)](../lambda) function to make an API call to a custom analytics solution and then trigger that function with an Amazon Cognito post authentication trigger.

<mark style="color:white">1, 5</mark> 
</div>
</details>

## Q10

**A developer is designing a web application that allows the users to post comments and receive nearreal-time feedback.**

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


## Q11

**A company is migrating a legacy application to Amazon EC2. The applicationuses a username and password stored in the source code to connect to a MySQL database. The database will be migrated to an Amazon RDS for MySQL DB instance. As part of the migration, the company wants to implement a secure way to store and automatically rotate the database credentials.**

**Which approach meetsthese requirements?**

1. Store the database credentials in environment variables in an Amazon Machine Image (AMI). Rotate the credentials byreplacing the AMI.
2. Store the database credentials in AWS Systems Manager Parameter Store. Configure Parameter Store to automatically rotate the credentials.
3. Store the database credentials in environment variables on the [EC2](../ec2) instances. Rotate the credentialsby relaunching the [EC2](../ec2) instances.
4. Store the database credentials in AWS Secrets Manager. Configure Secrets Manager to automatically rotate the credentials

<details>
<summary>Explanation</summary>
<div>

[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)

Secrets Manager offers [secret rotation](https://aws.amazon.com/blogs/security/rotate-amazon-rds-database-credentials-automatically-with-aws-secrets-manager/)

<mark style="color:white">4</mark> 

</div>
</details>


## Q12

**You are asked to establish a baseline for normal Amazon ECS performance in your environment by measuring performance at various times and under different load conditions. To establish a baseline, Amazon recommends that you should at a minimum monitor the CPU and ____ for your Amazon ECS clusters and the CPU and ____ metrics for your Amazon ECS services.**

1. memory reservation and utilization; concurrent connections
2. memory utilization; memory reservation and utilization
3. concurrent connections; memory reservation and utilization
4. memory reservation and utilization; memory utilization

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_monitoring.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_monitoring.html)

<mark style="color:white">1, 2</mark> 
</div>
</details>


## Q13

**What is one reason that AWS does not recommend that you configure your [ElastiCache](../elasticache) so that it can be accessed from outside AWS?**

- A) The metrics reported by [CloudWatch](../cloudwatch) are more difficult to report.
- B) Security concerns and network latency over the public internet.
- C) The [ElastiCache](../elasticache) cluster becomes more prone to failures.
- D) The performance of the [ElastiCache](../elasticache) cluster is no longer controllable.


<details>
<summary>Explanation</summary>
<div>

Elasticache is a service designed to be used internally to your VPC. External access is discouraged due to the latency of Internet traffic and security concerns. However, if external access to [ElastiCache](../elasticache) is required for test or development purposes, it can be done through a VPN.

<mark style="color:white">B</mark> 

</div>
</details>


## Q14

**You are building a web application that will run in an AWS ElasticBeanstalk environment. You need to add and configure an [Amazon ElastiCache](../elasticache) cluster into the environment immediately after the application is deployed.**

**What is the most efficient method to ensure that the cluster is deployed immediately after the EB application is deployed?**

- A. Use the [AWS Management Console](../https://aws.amazon.com/console/) to create and configure the cluster.
- B. Create a cron job to schedule the cluster deployment using the **_aws cloudformation deploy_** command
- C. Create a configuration file with the .config extension and place it into the .ebextensions folder in the application package.
- D. Build an [AWS Lambda](../lambda) function that polls to the ElasticBeanstalk environment deployments and create and configure the [Amazon ElastiCache](../elasticache) cluster.
  
<details>
<summary>Explanation</summary>
<div>

[[AWS Secrets Manager](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-resources.html)](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-resources.html)

<mark style="color:white">C</mark> 

</div>
</details>

## Q15

**Emily is building a web application using AWS ElasticBeanstalk. The application uses static images like icons, buttons and logos. Emily is looking for a way to serve these static images in a performant way that will not disrupt user sessions.**

**Which of the following options would meet this requirement?**

1. Use an Amazon Elastic File System (EFS) volume to serve the static image files.
2. Configure the AWS ElasticBeanstalk proxy server to serve the static image files.
3. Use an Amazon S3 bucket to serve the static image files.
4. Use an Amazon Elastic Block Store (EBS) volume to serve the static image files.
  
<details>
<summary>Explanation</summary>
<div>

https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-staticfiles.html

An Amazon S3 bucket would work, but the AWS ElasticBeanstalk proxy server would need to route the requests to the static files to a different place anytime they need to be shown.

<mark style="color:white">2</mark> 

</div>
</details>

 
 ## Q16

**A company is providing services to many downstream consumers. Each consumer may connect to one or more services. This has resulted in complex architecture that is difficult to manage and does not scale well. The company needs a single interface to manage these services to consumers**

**Which AWS service should be used to refactor this architecture?**

1. [AWS X-Ray](../xray)
2. [Amazon SQS](../sqs)
3. [[AWS Lambda](../lambda)](../lambda)
4. [Amazon API Gateway](../apigateway)
  
<details>
<summary>Explanation</summary>
<div>

<mark style="color:white">4</mark> 

</div>
</details>

## Q17

**Which load balancer would you use for services which use HTTP or HTTPS traffic?**

<details>
<summary>Explanation</summary>
<div>
Application Load Balancer (ALB).

</div>
</details>

## Q18

**What are possible target groups for ALB (Application Load Balancer)?**

<details>
<summary>Explanation</summary>
<div>

- [EC2](../ec2) tasks
- ECS instances
- Lambda functions
- Private IP Addresses

</div>
</details>


## Q19

**Your would like to optimize the performance of their web application by routing inbound traffic to api.mysite.com to Compute Optimized [EC2](../ec2) instances and inbound traffic to mobile.mysite.com to Memory Optimized [EC2](../ec2) instances.**

**Which solution below would be best to implement for this?**

1. Enable X-Forwarded For on the web servers and use a Classic Load Balancer
2. Configure proxy servers to forward the traffic to the correct instances
3. Use an Application Load Balancer with path-based routing rules to forward the traffic to the correct instances
4. Use an Application Load Balancer with host-based routing rules to forward the traffic to the correct instances


<details>
<summary>Explanation</summary>
<div>

Application Load Balancer with host-based routing rules

[https://aws.amazon.com/blogs/aws/new-host-based-routing-support-for-aws-application-load-balancers/](https://aws.amazon.com/blogs/aws/new-host-based-routing-support-for-aws-application-load-balancers/)

<mark style="color:white">4</mark>
</div>
</details>


## Q20

**A company uses Amazon [DynamoDB](../dynamodb) for managing and tracking orders. DynamoDB table is partitioned based on the order date. The company receives a huge increase in orders during a sales event, causing DynamoDB writes to throttle, and the consumed throughput is below the provisioned throughput.**

**According to AWS best practices, how can this issue be resolved with MINIMAL costs?**

1. Create a new Dynamo DB table for every order date
2. Add a random number suffix to the partition key values
3. Add a global secondary index to the DynamoDB table
4. Increase the read and write capacity units of the DynamoDB table

<details>
<summary>Explanation</summary>
<div>

A randomizing strategy can greatly improve write throughput. But it’s difficult to read a specific item because you don’t know which suffix value was used when writing the item.

[Choosing the Right DynamoDB Partition Key](https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/)

[Using write sharding to distribute workloads evenly](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-sharding.html)

<mark style="color:white">2</mark>
</div>
</details>


## Q21

**A food delivery company is building a feature that requests reviews from customers after their orders are delivered. The solution should be a short-running process that can message customers simultaneously at various contact points including email, text, and mobile push notifications.**

**Which approach best meets these requirements?**

1. Use EventBridge with Kinesis Data Streams to send messages. 
2. Use a Step Function to send [SQS](../sqs) messages.
3. Use a [Lambda function](../lambda) to send [SNS](../sns) messages.
4. Use AWS Batch and [SNS](../sns) to send messages.

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/sns/latest/dg/welcome.html](https://docs.aws.amazon.com/sns/latest/dg/welcome.html)

<mark style="color:white">3</mark> 
</div>
</details>

## Q22

**How [AWS Fargate](../fargate)  different from [AWS ECS](../ecs) ?**

<details>
<summary>Explanation</summary>
<div>

In [AWS ECS](../ecs) , you manage the infrastructure - you need to provision and configure the [EC2](../ec2) instances.
While in [AWS Fargate](../fargate) , you don't provision or manage the infrastructure, you simply focus on launching Docker containers. You can think of it as the serverless version of [AWS ECS](../ecs) .

</div>
</details>


## Q23

**What is Chaos Engineering?**

<details>
<summary>Explanation</summary>
<div>

Chaos engineering is the process of stressing an application in testing or production environments by creating disruptive events, such as server outages or API throttling, observing how the system responds, and implementing improvements. 

Chaos engineering helps teams create the real-world conditions needed to uncover the hidden issues, monitoring blind spots, and performance bottlenecks that are difficult to find in distributed systems. 

It starts with analyzing the steady-state behavior, building an experiment hypothesis (e.g., terminating x number of instances will lead to x% more retries), executing the experiment by injecting fault actions, monitoring roll back conditions, and addressing the weaknesses.

</div>
</details>


## Q24

**A client has contracted you to review their existing AWS environment and recommend and implement best practice changes. You begin by reviewing existing users and Identity Access Management. You found out improvements that can be made with the use of the root account and Identity Access Management.**

**What are the best practice guidelines for use of the root account?**

- Never use the root account.
- Use the root account only to create administrator accounts.
- Use the root account to create your first IAM user and then lock away the root account.
- Use the root account to create all other accounts, and share the root account with one backup administrator.

<details>
<summary>Explanation</summary>
<div>
<a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials" target="_blank">lock-away-credentials</a>

<mark style="color:white">A</mark> 

</div>
</details>

## Q25

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

## Q26

**Your organization has an AWS setup and planning to build Single Sign-On for users to authenticate with on-premise Microsoft Active Directory Federation Services (ADFS) and let users log in to the AWS console using AWS STS Enterprise Identity Federation.**

**Which of the following services do you need to call from AWS STS service after you authenticate with your on-premise?**

- A. AssumeRoleWithSAML
- B. GetFederationToken
- C. AssumeRoleWithWebIdentity
- D. GetCallerIdentity

<details>
<summary>Explanation</summary>
<div>
<a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html" target="_blank">https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html</a>
<a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html" target="_blank">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html</a>

<mark style="color:white">A</mark> 

</div>
</details>

## Q27

**Alice is building a mobile application. She planned to use Multi-Factor Authentication (MFA) when accessing some AWS resources.**

**Which of the following APIs will be leveraged to provide temporary security credentials?**

1. AssumeRoleWithSAML
2. GetFederationToken
3. GetSessionToken
4. AssumeRoleWithWebIdentity

<details>
<summary>Explanation</summary>
<div>

https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html

(AssumeRoleWithWebIdentity)[https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html] - does not support MFA

<mark style="color:white">3</mark> 
</div>
</details>

## Q28

**You built a data analysis application to collect and process real-time data from smart meters. Amazon Kinesis Data Streams is the backbone of your design. You received an alert that a few shards are hot.**

**What steps will you take to keep a strong performance?**

- A) Remove the hot shards
- B) Merge the hot shards
- C) Split the hot shards
- D) Increase the shard capacity

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/streams/latest/dev/kinesis-using-sdk-java-resharding-strategies.html](https://docs.aws.amazon.com/streams/latest/dev/kinesis-using-sdk-java-resharding-strategies.html)

Split the hot shards

<mark style="color:white">C</mark> 
</div>
</details>

## Q29

**Jasmin needs to perform ad-hoc business analytics queries on well-structured data. Data comes in constantly at a high velocity. Jasmin's team can understand SQL.**

**What AWS service(s) should Jasmin look to first?**

1. [EMR](https://aws.amazon.com/emr/) using [Hive](https://aws.amazon.com/emr/features/hive/)
2. EMR running [Apache Spark](https://aws.amazon.com/emr/features/spark/)
3. Kinesis Firehose + [RDS](https://aws.amazon.com/rds/)
4. Kinesis Firehose + [RedShift](https://aws.amazon.com/redshift/)

<details>
<summary>Explanation</summary>
<div>

RedShift supports ad-hoc queries over well-structured data using a SQL-compliant wire protocol

https://aws.amazon.com/kinesis/data-firehose/features/

<mark style="color:white">4</mark> 
</div>
</details>


## Q30

**Key rotation is an important concept of key management. How does Key Management Service (KMS) implement key rotation?**

1. KMS supports manual Key Rotation only; you can create new keys any time you want and all data will be re-encrypted with the new key.
2. KMS creates new cryptographic material for your KMS keys every rotation period, and uses the new keys for any upcoming encryption; it also maintains old keys to be able to decrypt data encrypted with those keys.
3. Key rotation is the process of synchronizing keys between configured regions; KMS will synchronize key changes in near-real time once keys are changed.
4. Key rotation is supported through the re-importing of new KMS keys; once you import a new key all data keys will be re-encrypted with the new KMS key.

<details>
<summary>Explanation</summary>
<div>

When you enable _automatic key rotation_ for a customer-managed KMS key, AWS KMS generates new cryptographic material for the KMS key every year. AWS KMS also saves the KMS key's older cryptographic material so it can be used to decrypt data that it has encrypted.

</div>
</details>

## Q31

**Alan is managing an environment with regulation and compliance requirements that mandate encryption at rest and in transit. The environment covers multiple accounts (Management, Development, and Production) and at some point in time, Alan might need to move encrypted snapshots and AMIs with encrypted volumes across accounts.**

**Which statements are true with regard to this scenario? (Choose 2 answers)**

1. Create Master keys in management account and assign Development and Production accounts as users of these keys, then any media encrypted using these keys can be shared between the three accounts.
2. Can share AMIs with encrypted volumes across accounts, even with the use of custom encryption keys.
3. Make encryption keys for development and production accounts then anything encrypted using these keys can be moved across accounts.
4. You can not move encrypted snapshots across accounts if data migration is required some third-party tools must be used.
  
<details>
<summary>Explanation</summary>
<div>

https://docs.aws.amazon.com/kms/latest/developerguide/overview.html

<mark style="color:white">2, 1</mark> 

</div>
</details>

## Q32

**When working with a published version of the [AWS Lambda](../lambda) function, you should note that the _____.**

- A. Use the [AWS Management Console](../https://aws.amazon.com/console/) to create and configure the cluster.
- B. Create a cron job to schedule the cluster deployment using the `_aws cloudformation deploy_` command
- C. Create a configuration file with the .config extension and place it into the .ebextensions folder in the application package.
- D. Build an [AWS Lambda](../lambda) function that polls to the ElasticBeanstalk environment deployments and create and configure the [Amazon ElastiCache](../elasticache) cluster.
  
<details>
<summary>Explanation</summary>
<div>

[AWS Secrets Manager](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-resources.html)

<mark style="color:white">C</mark> 

</div>
</details>

## Q33

**A Developer wants access to make to log data of an application running on an [EC2](../ec2) instance available to systems administrators.**

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

## Q34

**A developer is building a streamlined development process for Lambda functions related to S3 storage.The developer needs a consistent, reusable code blueprint that can be easily customized to manage [Lambda function](../lambda) definition and deployment, the S3 events to be managed and the Identity Access Management (IAM) policies definition.**

**Which of the following AWS solutions offers is best suited for this objective?**

1. [AWS Software Development Kits (SDKs)](https://aws.amazon.com/developer/tools/)
2. [AWS Serverless Application Model (SAM)](https://aws.amazon.com/serverless/sam/) templates
3. [AWS Systems Manager](https://aws.amazon.com/systems-manager/)
4. [AWS Step Functions](/en/tags/step-functions/)

<details>
<summary>Explanation</summary>
<div>

[Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)

<mark style="color:white">2</mark> 

</div>
</details>

## Q35

**Explain RDS Multi Availability Zone**

<details>
<summary>Explanation</summary>
<div>

- RDS multi AZ used mainly for disaster recovery purposes
- There is an RDS master instance and in another AZ an RDS standby instance
- The data is synced synchronously between them
- The user, application is accessing one DNS name and where there is a failure with the master instance, the DNS name moves to the standby instance, so the failover done automatically

</div>
</details>

## Q36

**Developer wants to implement a more fine-grained control of developers S3 buckets by restricting access to S3 buckets on a case-by-case basis using S3 bucket policies.**

**Which methods of access control can developer implement using S3 bucket policies? (Choose 3 answers)**

1. Control access based on the time of day
2. Control access based on IP Address
3. Control access based on Active Directory group
4. Control access based on CIDR block

<details>
<summary>Explanation</summary>
<div>
https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-iam-policies.html

CIDRs - A set of Classless Inter-Domain Routings 

https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html

<mark style="color:white">1, 2, 4</mark> 
</div>
</details>

## Q37

**To ensure that an encryption key was not corrupted in transit, <abbr title="Amazon Elastic Transcoder is media transcoding in the cloud. It is designed to be a highly scalable, easy to use and a cost effective way for developers and businesses to convert (or “transcode”) media files from their source format into versions that will playback on devices like smartphones, tablets and PCs.">Elastic Transcoder</abbr>  uses a(n) ____ digest of the decryption key as a checksum.**

1. BLAKE2
2. SHA-1
3. SHA-2
4. MD5

<details>
<summary>Explanation</summary>
<div>

https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/job-settings.html

MD5 digest (or checksum) 

<mark style="color:white">4</mark> 
</div>
</details>

## Q38

**Dan is responsible for supporting your company’s AWS infrastructure, consisting of multiple [EC2](../ec2) instances running in a VPC, DynamoDB, SQS, and S3. You are working on provisioning a new S3 bucket, which will ultimately contain sensitive data.**

**What are two separate ways to ensure data is encrypted in-flight both into and out of S3? (Choose 2 answers)**

1. Use the encrypted SSL/TLS endpoint.
2. Enable encryption in the bucket policy.
3. Encrypt it on the client-side before uploading.
4. Set the server-side encryption option on upload.

<details>
<summary>Explanation</summary>
<div>

https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html

<mark style="color:white">1, 3</mark> 
</div>
</details>

## Q39

**In a move toward using microservices, a company’s Management team has asked all Development teams to build their services so that API requests depend only on that services data store. One team is building a Payments service that has its own database. The service floods data that originates in the Accounts database. Both are using Amazon DynamoDB.**

**What approach will result in the simplest, decoupled, and reliable method to get near-real-time updates from the Accounts database?**

1. Use [Amazon Glue](https://aws.amazon.com/glue/) to perform frequent updates from the Accounts database to the Payments database
2. Use [Amazon Kinesis Data Firehose](../kinesis/#kinesis-data-firehose) to deliver all changes from the Accounts database to the Payments database.
3. Use [Amazon DynamoDB Streams](https://aws.amazon.com/blogs/database/dynamodb-streams-use-cases-and-design-patterns/) to deliver all changes from the Accounts database to the Payments database.
4. Use [Amazon ElastiCache](../elasticache) in Payments, with the cache updated by triggers in the Accounts database.

<details>
<summary>Explanation</summary>
<div>

<mark style="color:white">3</mark>

</div>
</details>

## Q40

**You’ve decided to use autoscaling in conjunction with [SNS](../sns) to alert you when your auto-scaling group scales. Notifications can be delivered using [SNS](../sns) in several ways.**

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

## Q41

**You’ve decided to use autoscaling in conjunction with [SNS](../sns) to alert you when your auto-scaling group scales. Notifications can be delivered using [SNS](../sns) in several ways.**

**Which options are supported notification methods? (Choose 3 answers)**

1. HTTP or HTTPS POST notifications
2. Email using SMTP or plain text
3. [Kinesis Stream](../kinesis)
4. Invoking of a [Lambda function](../lambda)

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-sns-notifications.html](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-sns-notifications.html)

<mark style="color:white">1, 2, 4</mark> 
</div>
</details>

## Q42

**Which endpoint is considered to be best practice when analyzing data within a Configuration Stream of [AWS Config](https://aws.amazon.com/config/)?**

1. [SNS](../sns)
2. E-Mail
3. [SQS](../sqs)
4. [Kinesis](../kinesis)

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/config/latest/developerguide/monitor-resource-changes.html](https://docs.aws.amazon.com/config/latest/developerguide/monitor-resource-changes.html)

<mark style="color:white">3</mark> 
</div>
</details>

## Q43

**A developer is adding a feedback form to a website. Upon user submission, the form should create a discount code, email the user the code and display a message on the website that tells the user to check their email. The developer wants to use separate [Lambda](../lambda) functions to manage these processes and use a Step Function to orchestrate the interactions with minimal custom scripting.**

**Which of the following Step Function workflows can be used to meet requirements?**

1. [Asynchronous Express Workflow](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-express-synchronous.html)
2. [Synchronous Express Workflow](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-express-synchronous.html)
3. [Standard Workflow](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html)
4. [Standard Express Workflow](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html)

<details>
<summary>Explanation</summary>
<div>

[https://aws.amazon.com/blogs/compute/new-synchronous-express-workflows-for-aws-step-functions/](https://aws.amazon.com/blogs/compute/new-synchronous-express-workflows-for-aws-step-functions/)

<mark style="color:white">2</mark> 
</div>
</details>

## Q44

**You joined an application monitoring team. Your role focuses on finding system performance and bottlenecks in Lambda functions and providing specific solutions. Another teammate focuses on auditing the systems.**

**Which AWS service will be your main tool?**

1. [AWS X-Ray](../xray)
2. [AWS IAM](../iam)
3. [AWS CloudTrail](../[CloudWatch](../cloudwatch)/#[CloudWatch](../cloudwatch)-vs-cloudtrail)
4. [AWS Athena](https://aws.amazon.com/athena/)

<details>
<summary>Explanation</summary>
<div>

[AWS X-Ray](../xray) provides graphs of system performance and identifies bottlenecks

<mark style="color:white">1</mark> 
</div>
</details>

## Q45

**A team of Developers must migrate an application running inside an [AWS Elastic Beastalk](../elasticbeanstalk) environment from a [Classic Load Balancer](../elasticloadbalancing/#types-of-load-balancers) to an [Application Load Balancer](../elasticloadbalancing/#types-of-load-balancers).**

**Which steps should be taken to accomplish the task using the [AWS Management Console](../https://aws.amazon.com/console/)?**

- 1 
   1. Select a new load balancer type before running the deployment.
   1. Update the application code in the existing deployment.
   1. Deploy the new version of the application code to the environment.
- 2
   1. Create a new environment with the same configurations except for the load balancer type.
   2. Deploy the same application versions as used in the original environment.
   3. Run the Swap-environment-cnames action.
- 3
   1. Clone the existing environment, changing the associated load balancer type.
   2. Deploy the same application version as used in the original environment. 
   3. Run the Swap-environment-cnames action.
- 4
   1. Edit the environment definitions in the existing deployment.
   2. Change the associated load balancer type according to the requirements.
   3. Rebuild the environment with the new load balancer type.

<details>
<summary>Explanation</summary>
<div>

<mark style="color:white">4</mark> 
</div>
</details>


<!-- 

s3, kms
A developer is deploying an application that will store files in an Amazon S3 bucket. The files must be encrypted at rest. The developer wants to automatically replicate the files to an S3 bucket in a different AWS Region for disaster recovery.
How can the developer accomplish this task with the LEAST amount of configuration?
A. Encrypt the files by using server-side encryption with S3 managed encryption keys (SSE-S3). Enable S3 bucket replication.
B. Encrypt the files by using server-side encryption (SSE) with an AWS Key Management Service (AWS KMS) customer master key (CMK). Enable S3 bucket replication.
C. Use the s3 sync command to sync the files to the S3 bucket in the other Region.
D. Configure an S3 Lifecycle configuration to automatically transfer files to the S3 bucket in the other Region.
Answer : B 

step functions, lambda, 
A serverless application is using AWS Step Functions to process data and save it to a database. The application needs to validate some data with an external service before saving the data. The application will call the external service from an AWS Lambda function, and the external service will take a few hours to validate the data. The external service will respond to a webhook when the validation is complete.
A developer needs to pause the Step Functions workflow and wait for the response from the external service.
What should the developer do to meet this requirement?
A. Use the .wait ForTaskToken option in the Lambda function task state. Pass the token in the body.
B. Use the .waitForTaskToken option in the Lambda function task state. Pass the invocation request.
C. Call the Lambda function in synchronous mode. Wait for the external service to complete the processing.
D. Call the Lambda function in asynchronous mode. Use the Wait state until the external service completes the processing.
Answer : D

X-Ray, ec2, CloudWatch, EventBridge
A developer must use AWS X-Ray to monitor an application that is running on an Amazon EC2 instance. The developer has prepared the application by using the X-Ray SDK.
What should the developer do to perform the monitoring?
A. Configure the X-Ray SDK sampling rule and target. Activate the X-Ray daemon from the EC2 console or the AWS CLI with the modify-instance-attribute command to set the XRayEnabled flag.
B. Install the X-Ray daemon. Assign an IAM role to the EC2 instance with a policy that allows writes to X-Ray.
C. Install the X-Ray daemon. Configure it to forward data to Amazon EventBridge (Amazon CloudWatch Events). Grant the EC2 instance permission to write to Event Bridge (CloudWatch Events).
D. Deploy the X-Ray SDK with the application, and instrument the application code. Use the SDK logger to capture and send the events.
Answer : C

API Gateway, Cognito, S3
A developer is designing a full-stack serverless application. Files for the website are stored in an Amazon S3 bucket. AWS Lambda functions that use Amazon API Gateway endpoints return results from an Amazon DynamoDB table.
The developer must create a solution that securely provides registration and authentication for the application while minimizing the amount of configuration.
Which solution meets these requirements?
A. Create an Amazon Cognito user pool and an app client. Configure the app client to use the user pool and provide the hosted web UI provided for sign-up and sign-in.
B. Configure an Amazon Cognito identity pool. Map the users with IAM roles that are configured to access the S3 bucket that stores the website.
C. Configure and launch an Amazon EC2 instance to set up an identity provider with an Amazon Cognito user pool. Configure the user pool to provide the hosted web UI for sign-up and sign-in.
D. Create an IAM policy that allows access to the website that is stored in the S3 bucket. Attach the policy to an IAM group. Add IAM users to the group.
Answer : B

s3, lambda, 
A company has an application that writes files to an Amazon S3 bucket. Whenever there is a new file, an S3 notification event invokes an AWS Lambda function to process the file. The Lambda function code works as expected. However, when a developer checks the Lambda function logs, the developer finds that multiple invocations occur for every file.
What is causing the duplicate entries?
A. The S3 bucket name is incorrectly specified in the application and is targeting another S3 bucket.
B. The Lambda function did not run correctly, and Lambda retried the invocation with a delay.
C. Amazon S3 is delivering the same event multiple times.
D. The application stopped intermittently and then resumed, splitting the logs into multiple smaller files.
Answer : A

AWS CLI
A developer needs to use the AWS CLI on an on-premises development server temporarily to access AWS services while performing maintenance. The developer needs to authenticate to AWS with their identity for several hours.
What is the MOST secure way to call AWS CLI commands with the developer's IAM identity?
A. Specify the developer's IAM access key ID and secret access key as parameters for each CLI command
B. Run the aws configure CLI command. Provide the developer's IAM access key ID and secret access key.
C. Specify the developer's IAM profile as a parameter for each CLI command.
D. Run the get-session-token CLI command with the developer's IAM user. Use the returned credentials to call the CLI
Answer : D

Lambda, DynamoDB, X-Ray, Application Load Balancer
An AWS Lambda function accesses two Amazon DynamoDB tables. A developer wants to improve the performance of the Lambda function by identifying bottlenecks in the function.
How can the developer inspect the timing of the DynamoDB API calls?
A. Add DynamoDB as an event source to the Lambda function. View the performance with Amazon CloudWatch metrics
B. Place an Application Load Balancer (ALB) in front of the two DynamoDB tables. Inspect the ALB logs
C. Limit Lambda to no more than five concurrent invocations. Monitor from the Lambda console.
D. Enable AWS X-Ray tracing for the function. View the traces from the X-Ray service.
Answer : D

EC2
A developer deployed an application to an Amazon EC2 instance. The application needs to know the public IPv4 address of the instance.
How can the application find this information?
A. Query the instance metadata from http://169.254.169.254/latest/meta-data/.
B. Query the instance user data from http://169.254.169.254/latest/user-data/.
C. Query the Amazon Machine Image (AMI) information from http://169.254 169.254/latest/meta-data/ami/.
D. Check the hosts file of the operating system.
Answer : A

Lambda, Amazon EventBridge, CloudWatch
A developer is designing an AWS Lambda function to perform a maintenance activity. The developer will use Amazon EventBridge (Amazon CloudWatch Events) to invoke the function on an hourly schedule. The developer wants the function to log information at different levels of detail according to the value of a log level variable. The developer must design the function so that the log level can be set without requiring a change to the function code.
Which solution will meet these requirements?
A. Add a custom log level parameter for the Lambda function. Set the parameter by using the Lambda console
B. Set the log level in a Lambda environment variable
C. Set the log level in the Amazon CloudWatch Logs console.
D. Add a custom log level parameter for the Lambda function. Set the parameter by using the AWS CLI.
Answer : B

Lambda, CloudFormation, CloudWatch
A developer is creating a serverless application that uses an AWS Lambda function The developer will use AWS CloudFormation to deploy the application The application will write logs to Amazon CloudWatch Logs. The developer has created a log group in a CloudFormation template for the application to use. The developer needs to modify the CloudFormation template to make the name of the log group available to the application at runtime.
Which solution will meet this requirement?
A. Use the AWS::Include transform in CloudFormation to provide the log group's name to the application.
B. Pass the log group's name to the application in the user data section of the CloudFormation template
C. Use the CloudFormation template's Mappings section to specify the log group's name for the application.
D. Pass the log group's Amazon Resource Name (ARN) as an environment variable to the Lambda function.
Answer : D




































































-->
---
title: Elastic Beanstalk
description: AWS Elastic Beanstalk
toc: true
tags: [aws, Elastic Beanstalk]
categories: [aws, Elastic Beanstalk]
date: 2022-09-10
weight: 300
awsTag: Elastic Beanstalk
featuredImage: https://cdn.worldvectorlogo.com/logos/aws-elastic-beanstalk-1.svg
---

## About

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/?id=docs_gateway)

AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.

Deploying **new application** versions **to existing** resources in AWS Elastic Beanstalk happens **much faster** (typically under a minute) and once again is mostly dependent on the size of the new application version.

![flow](./img/clearbox-flow-00.png)

## Digest

- When you want to use new run time capabilities with elastic bean stalk, it is better to use blue-green deployment
- Security group will not be removed when removing the stack with elastic bean stalk
- For long running tasks - Use `Elastic Beanstalk` worker environment to process the tasks asynchronously
- Launch configuration is used for modifying instance type, key pair, elastic block storage and other settings that can be configured only when launching the instance
- Rolling with Additional Batch and Immutable both involve provisioning new servers to ensure capacity is not reduced. All At Once means the application will be offline for the duration of the update. Performing a Rolling Update without an additional batch of servers means a reduction in capacity. <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html>
- For Blue green deployment - Use Elastic beanstalk swap URL feature or route 53 with weighted routing policies
- You create your own Elastic Beanstalk platform using Packer, which is an open-source tool for creating machine images for many platforms, including AMIs for use
with Amazon Elastic Compute Cloud (Amazon EC2).

## Price

There is no additional charge for AWS Elastic Beanstalk. Only the AWS resources required to store and run applications are charged.

## Concepts

- [AWS doc](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html)

### Applications

An application is a collection of different elements, such as environments, environment configurations, and application versions.

You can have multiple application versions held within an application.

### Application Version

An application version is a very specific reference to a section of deployable code. The application version will point typically to simple storage service (S3) where the deployable code may reside.

### Environment Configurations

An environment configuration is a collection of parameters and settings that dictate how an environment will have its resources provisioned by Elastic Beanstalk and how these resources will behave.

### Environment

An environment refers to an application version that has been deployed on AWS resources. These resources are configured and provisioned by AWS Elastic Beanstalk. At this stage the application is deployed as a solution and becomes operational within your environment.

The “environment” is comprised of ALL the resources created by Elastic Beanstalk and not just an EC2 instance with your uploaded code.

### Environment Tier

Reflects on how Elastic Beanstalk provisions resources based on what the application is designed to do. If the application manages and handles HTTP requests, then the app will be run in a web server environment.

![](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/images/wizard-choosetier.png)

### Configuration Template

This is the template that provides the baseline for creating a new, unique, environment configuration.

### Platform

Culmination of components in which you can build your application upon using Elastic Beanstalk. These are comprised of the OS of the instance, the programming language, the server type (web or application), and components of Elastic Beanstalk

## Deployment policies

- **All at once** – deploys the new version to all instances simultaneously and will be out of service for a short time.
- **Rolling** – deploys the new version in batches.
- **Rolling with additional batch** – deploys the new version in batches, but first launch a new batch of instances.
- **Immutable** – deploys the new version to a new set of instances.
- **Traffic splitting** – deploys the new version to a new set of instances and temporarily split incoming client traffic.

![](./img/18.png)

## Practice

{{< youtube id="Kt55Q3ijoh4" >}}

### Controlled deployment with AWS Elastic Beanstalk

Lab [Controlled deployment with AWS Elastic Beanstalk](https://cloudacademy.com/lab/run-controlled-deploy-aws-elastic-beanstalk/?context_resource=lp&context_id=4364)

In this lab, we will deploy several application version updates in a load-balanced, auto-scaling environment.

The first update is deployed using a simple deployment. The second update is deployed using a `blue-green' deployment, where a separate environment is created to run the new version of the application, and the DNS switch switches incoming traffic to the new environment.

The final deployment architecture will look like this

![02.png](./img/02.png)

#### Loading the application

In this review, I'm using the code that Cloudacademy provided me, but I have a ready-made launch script that you can download from Elastic Beanstalk: [download](./files/nodejs.zip)

##### Create

Go to **Elastic Beanstalk** page and click `Create Application`.

![03.png](./img/03.png)

##### Set Name

Specify a name for the new application
![04.png](./img/04.png)

##### Choose platform

Under `Platform` choose the desired platform of the application. In our case - `Node.js`.
![05.png](./img/05.png)

##### Download source code

Under `Source code origin` specify the version of the application and download the archive with the application.  [Example](./files/nodejs.zip)

![06.png](./img/06.png)

##### Application Configuration

Change the preset `Configuration` to `Custom configuration`:

![07.png](./img/07.png)

Click **Edit** under **Rolling updates and deployments**

In the default configuration, updates are distributed to all instances at the same time. This leads to application downtime, which is unacceptable for production environments.

We will set `Rolling` and `Batch size` to 30%

![08.png](./img/08.png)

##### Network

Back in the main application form, click **Edit** in the **Network** configuration.

On the **Modify network** form, configure the following values, then **Save**.

**VPC**: Select VPC with CIDR block **10.0.0.0/16**. This will not be the default VPC.
**Load balancer settings**:
    **Load balancer subnets**: Select subnets with CIDR blocks **10.0.100.0/24**(**us-west-2a**)and **10.0.101.0/24** (**us-west-2b**). These are public subnets. The application load balancer requires at least two subnets in different availability zones
**Instance settings**:
    * **Instance subnets**: Select a subnet with CIDR block **10.0.1.0/24**. This is a private subnet.

![09.png](./img/09.png)

![10.png](./img/10.png)

##### Confirmation

Press `Create app`.

The app creation process takes from 5 minutes.

Then go to Dasboard
![11.png](./img/11.png)

This concludes the loading phase of the app in Elastic Beanstalk. Next, let's break down how to switch the downloading of the new version of the application to the clients.

#### Downloading version 2 of the app

##### Downloading version 2.0

Press `Upload and deploy` and download the updated code. For example, you can change the text in the same source code for comparison.

![12.png](./img/12.png)

Specify new version and publication settings
![13.png](./img/13.png)

#### Version comparison

Now we can compare both versions by following the links. In my case the applications look like this

![15.png](./img/15.png)
![14.png](./img/14.png)

#### Changing the url of the apps

Now let's swap the apps around. So that a user who previously went to one address will now see the 2nd version of the app.

Under `Actions`, click on `Swap environment URLs` and then select the app you want to swap

![16.png](./img/16.png)

##### Removing Elastic Beanstalk resources

Elastic Beanstalk runs EC2 instances as well as other services to deploy applications. But you can remove all services from a single window.

1. go to the Applications section
2. Select an application.f
3. Click on Actions -> Terminate environment Translated with <www.DeepL.com/Translator> (free version)

![17.png](./img/17.png)

## Questions

### Q1

**You are building a web application that will run in an AWS ElasticBeanstalk environment. You need to add and configure an Amazon ElastiCache cluster into the environment immediately after the application is deployed.**

**What is the most efficient method to ensure that the cluster is deployed immediately after the EB application is deployed?**

1. Use the AWS Management Console to create and configure the cluster.
1. Create a cron job to schedule the cluster deployment using the **_aws cloudformation deploy_** command
1. Create a configuration file with the .config extension and place it into the .ebextensions folder in the application package.
1. Build an AWS Lambda function that polls to the ElasticBeanstalk environment deployments and create and configure the Amazon ElastiCache cluster.
  
<details>
<summary>Explanation</summary>
<div>

[[AWS Secrets Manager](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-resources.html)](<https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-resources.html>)

<mark style="color:white">3</mark>

</div>
</details>

### Q2

**Emily is building a web application using AWS ElasticBeanstalk. The application uses static images like icons, buttons and logos. Emily is looking for a way to serve these static images in a performant way that will not disrupt user sessions.**

**Which of the following options would meet this requirement?**

1. Use an Amazon Elastic File System (EFS) volume to serve the static image files.
2. Configure the AWS ElasticBeanstalk proxy server to serve the static image files.
3. Use an Amazon S3 bucket to serve the static image files.
4. Use an Amazon Elastic Block Store (EBS) volume to serve the static image files.
  
<details>
<summary>Explanation</summary>
<div>

<https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-staticfiles.html>

An Amazon S3 bucket would work, but the AWS ElasticBeanstalk proxy server would need to route the requests to the static files to a different place anytime they need to be shown.

<mark style="color:white">2</mark>

</div>
</details>

### Q3

**An online shopping platform has been deployed to AWS using Elastic Beanstalk. They simply uploaded their Node.js application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring. Since the entire deployment process is automated, the DevOps team is not sure where to get the application log files of their shopping platform.**

**In Elastic Beanstalk, where does it store the application files and server log files?**

1. Application files are stored in S3. The server log files can only be stored in the attached EBS volumes of the EC2 instances, which were launched by AWS Elastic Beanstalk.
2. Application files are stored in S3. The server log files can be stored directly in Glacier or in CloudWatch Logs.
3. Application files are stored in S3. The server log files can be optionally stored in CloudTrail or in CloudWatch Logs.
4. Application files are stored in S3. The server log files can also optionally be stored in S3 or in CloudWatch Logs.
  
<details>
<summary>Explanation</summary>
<div>

AWS Elastic Beanstalk stores your application files and optionally, server log files in Amazon S3. If you are using the AWS Management Console, the AWS Toolkit for Visual Studio, or AWS Toolkit for Eclipse, an Amazon S3 bucket will be created in your account and the files you upload will be automatically copied from your local client to Amazon S3.

Optionally, you may configure Elastic Beanstalk to copy your server log files every hour to Amazon S3. You do this by editing the environment configuration settings.

With CloudWatch Logs, you can monitor and archive your Elastic Beanstalk application, system, and custom log files from Amazon EC2 instances of your environments. You can also configure alarms that make it easier for you to react to specific log stream events that your metric filters extract.

The CloudWatch Logs agent installed on each Amazon EC2 instance in your environment publishes metric data points to the CloudWatch service for each log group you configure.

Each log group applies its own filter patterns to determine what log stream events to send to CloudWatch as data points. Log streams that belong to the same log group share the same retention, monitoring, and access control settings. You can configure Elastic Beanstalk to automatically stream logs to the CloudWatch service.

The option that says: _Application files are stored in S3. The server log files can be optionally stored in CloudTrail or in CloudWatch Logs_ is incorrect because the server log files can optionally be stored in either S3 or CloudWatch Logs, but not directly to CloudTrail as this service is primarily used for auditing API calls.

<mark style="color:white">4</mark>

</div>
</details>

### Q4

**A former colleague reached out to you for consultation. He uploads a Django project in Elastic Beanstalk through CLI using instructions he read in a blog post, but for some reason he could not create the environment he needs for his project. He encounters an error message saying “The instance profile aws-elasticbeanstalk-ec2-role associated with the environment does not exist.”**

**What are the possible causes of this issue? (Select TWO.)**

1. He selected the wrong platform for the Django code.
2. Elastic Beanstalk CLI did not create one because your IAM role has no permission to create roles.
3. Instance profile container for the role needs to be manually replaced every time a new environment is launched.
4. You have not associated an Elastic Beanstalk role to your CLI.
5. IAM role already exists but has insufficient permissions that Elastic Beanstalk needs.
  
<details>
<summary>Explanation</summary>
<div>

AWS EB CLI cannot create the instance profile for your beanstalk environment if your IAM role has no access to creating roles.

This error is also thrown when the instance profile has insufficient or outdates policies that beanstalk needs to function. More details on this can be seen on the references provided.

<mark style="color:white">2, 5</mark>

</div>
</details>

## Resources

- [https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/tutorials.html](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/tutorials.html)
- [Tutorials and samples](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/tutorials.html)

### Community posts

- <https://dev.to/romankurnovskii/todo-aws-aws-elastic-beanstalk-cheat-sheet-1718>
- <https://dev.to/romankurnovskii/aws-elastic-beanstalk-top-questions-certified-developer-exam-478g>

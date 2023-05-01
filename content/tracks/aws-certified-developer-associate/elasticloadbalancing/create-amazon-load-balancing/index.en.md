---
title: Create Classic Load Balancer
description: tutorial how to create AWS Classic Load Balancer
toc: true
tags:
categories:
series:
date: "2022-07-06"
lastmod: "2022-05-21"
---

## Practice

- [Creating Classic Load Balancer](https://cloudacademy.com/lab/create-your-first-amazon-elastic-load-balancing-elb/)

## Planning the Classic Load Balancer

When you connected to the AWS account provided in the former step, you had a few things that were already deployed. This is the current infrastructure that was already deployed for you:

![](https://assets.cloudacademy.com/bakery/media/uploads/lab-step/blobid0-fd746faf-2a4d-48d8-9fa5-4208e1467c09.png)

You already have a VPC with some subnets and 2 EC2 instances running inside the VPC in different Availability Zones. Both instances are inside the same Security Group called , which is allowing HTTP access from port 80 to anywhere (0.0.0.0/0). Each EC2 instance is running the same web application. We want to **configure an LB to create a central point of access to our application**, and we also want to configure our architecture in a way that **users can only access the application through the ELB**.

In the end, we should have a solution similar to this one:

![](https://assets.cloudacademy.com/bakery/media/uploads/lab-step/blobid2-bc08bd2d-1b1f-48fc-9e2f-e409bb7cbe0c.png)

To do that we will have to create and configure a Classic Load Balancer, and properly configure the needed Security Groups to make sure that our application will work as expected.

## Creating a Classic Load Balancer and Registering EC2 Instances

A Classic Load Balancer allows traffic to be balanced across many Amazon EC2 instances, it performs this balancing at the request and connection level.

1\. In the AWS Management Console search bar, enter _EC2_, and click the **EC2** result under **Services**:

![](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-e2ff9b44-657e-4d4d-aff2-74567f20187f.png)

2\. In the left-hand menu, under **Load Balancing**, click **Load Balancers**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-d1c09b2c-a758-4304-839e-23c119aeb7ad.png)

3\. To start creating your classic load balancer, click **Create Load Balancer**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-46762401-40b4-4291-a03d-e2a52ce79377.png)

Three tiles will be displayed detailing the different types of load balancer supported by Amazon EC2.

4\. At the bottom of the page, click **Classic Load Balancer**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-950dab26-d140-458f-944b-968be91b2b93.png)

5\. In the **Classic Load Balancer** tile, click **Create**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-cdcaa6e0-f198-42b4-a162-b9aae783535e.png)

A multi-step wizard will open allowing you to configure and customize your load balancer.

6\. Under **Basic Configuration**, enter the following values:

- **Load Balancer name**: Enter _classic-elb_
- **Enable advanced VPC configuration**: _checked_

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-410013db-3537-4663-bce6-b80bf6cabf2a.png)

Be aware there are limitations on the name field, only the characters a-z, A-Z, 0-9 and hyphens are allowed.

**Create LB Inside** lets you select which VPC you want the load balancer to be created in, leave this at the default.

The **Create an internal load balancer** option determines whether the load balancer can accept public internet traffic or not. If checked, the load balancer will have a private IP address and will only be able to accept traffic from another source inside the VPC.

The default **Listener Configuration**, listening on port eighty (HTTP), is all that is required for this lab.

7\. Under **Select Subnets**, click the plus icon next to each subnet.

As you click for each subnet, it will move from the **Available subnets** table, to the **Selected subnets** table:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-e004c801-6dec-4b4f-a272-242624211f55.png)

An **Availability Zone**, often referred to as an AZ, helps make your infrastructure more reliable. You can think of each zone as a separate data center (in many cases they are exactly that), they are guaranteed to have redundant power, networking, and connectivity within an AWS region.

To learn more about regions, availability zones, and redundancy in AWS, visit the documentation [here](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/?p=ngi&loc=2).

Each subnet is mapped to one availability zone. It's important to configure the selected subnets correctly. If a subnet containing an EC2 instance is not selected, the load balancer will not be able to communicate with that EC2 instance.

8\. To move to the next step of the wizard, click **Next: Assign Security Groups**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-7fa4bef4-7d98-4533-ba4e-f45c477b34d8.png)

9\. In the form, enter and select the following values:

- **Assign a security group**: Select **Create a new security group**
- **Security group name**: Enter _elb-sg_
- **Description**: Enter _Security group for the classic load balancer_

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-3de4255f-fa74-439e-ad62-833d283d5d09.png)

You will see a default security group rule allowing traffic on port eighty.

10\. In the default security group rule, in the **Source** drop-down, select **Anywhere**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-93701ad0-eb7b-4509-b7b0-6f4d0f9d81e3.png)

11\. To advance to the next page of the wizard, click **Next: Configure Security Settings**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-5b17202f-d91e-4e3a-a9c5-b238be3403e6.png)

This wizard step display's a warning that your load balancer isn't configured to use HTTPS or SSL.

It's strongly recommended that you always enable encrypted traffic on your load balancers for security reasons. Configuring SSL is beyond the scope of this lab. If you would like to learn more about SSL and load balancing, it's covered in the [Using Elastic Load Balancing & EC2 Auto Scaling to Support AWS Workloads](https://cloudacademy.com/course/using-elastic-load-balancing-ec2-auto-scaling-support-aws-workloads/) course.

12\. To move to the next wizard step, click **Next: Configure Health Check**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-59a7861b-bbdb-4d7b-8da1-a3a433949efc.png)

13\. In the **Ping Path** field, replace the contents with _/_:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-1397b179-798f-45d5-998c-93de1dd16a7c.png)

By default, the fields on this page specify that the health check will be performed using the HTTP protocol on port eighty. This means the load balancer will assume an instance is healthy when the instance returns a 200 OK response.

The **Advanced Details** allow you to further customize different aspects of the health check:

- **Response Timeout**: How long to the load balancer should wait for a response from the EC2 instance.
- **Interval**: Amount of time between health checks.
- **Unhealthy threshold**: The number of consecutive failed healthy checks that must occur before the load balancer declares the EC2 instance unhealthy.
- **Healthy threshold**: The number of consecutive health checks that must occur before declaring an EC2 instance healthy.

To learn more about Elastic Load Balancing health checks, see the AWS documentation [here](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html).

14\. To move to the next wizard step, click **Next: Add EC2 Instances**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-b7d5d71a-906f-4cd4-8cf5-9aa1292cec8f.png)

This step of the wizard displays the EC2 instances that currently exist and can be added to the load balancer:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-a2b2246b-1bb8-4f2c-8792-e8712d95bd54.png)

15\. Select the instances named **web-node**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-ef832729-dde0-4575-a726-fc98c9dfca92.png)

Take a look at the configuration options on this page:

**Cross-Zone Load Balancing** ensures that your LB distributes incoming requests evenly across all instances in its enabled Availability Zones. This means that the LB will ignore the default of round-robin and will also take into consideration the Availability Zone in which the instance is running. This reduces the need to maintain equivalent numbers of instances in each enabled Availability Zone and improves your application's ability to handle the loss of one or more instances.

**Connection Draining** is used to ensure that a Classic Load Balancer stops sending requests to instances that are de-registering or unhealthy while keeping the existing connections open.

Leave these options at their defaults.

16\. To advance to the next wizard step, click **Next: Add Tags**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-6b45b873-686a-453d-bf14-1a6712564445.png)

In a non-lab environment, it is best practice to add tags to resources you create. Tags help make managing, organizing, and filtering resources in AWS easier.

To read more about tagging resources in AWS, see [this document](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf) from AWS.

17\. To proceed to the review step, click **Review and Create**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-38dc8d40-e1f4-4e74-a970-0ece02462c6b.png)

This page allows you to review the load balancing settings you have configured:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-a10385cc-c4a1-4ecb-82da-bf4e2910f207.png)

18\. To create your load balancer, click **Create**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-21db1cec-91c2-4eb5-a9d3-ab9ad749d731.png)

You will see a notification that your load balancer has been successfully created:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-8b2ae32c-9b05-426c-8c70-c3edb064e4db.png)

19\. To return to the EC2 management console, click **Close**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-b065cdb1-0b22-4086-9e8d-4c6faeaa0e82.png)

## Configuring Security Groups for Load Balanced EC2 Instances

1\. In the list of load balancers, ensure your load balancer is selected:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-3f6d726c-362f-4aab-bd2b-a2696f617383.png)

You will see some tabs beneath the list and the **Description** tab will be selected.

This tab shows general information about your load balancer.

2\. To view information about instances registered with this load balancer, click the **Instances** tab:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-db240360-94f8-4d1a-aed5-aa05cc7183f9.png)

You will see the instances and availability zones listed:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-8b40e6f8-b2e6-4b65-a3d1-8165a3b2cd62.png)

The instances will have a status of **InService**. This means the load balancer is performing successful health checks on the instances.

_Note_: If you see the **Status** as **OutOfService** then the instances are still be registered. Wait a minute or two and then click the refresh icon in the top-right corner.

3\. To see the DNS of your load balancer, click the **Description** tab.

4\. Copy the domain name from the value of the **DNS name** field:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-e0a3d89c-1ffd-4bae-8ba6-63c63e02b75b.png)

_Warning_: Don't include the **(A Record)** part of the value when copying.

5\. In a new browser tab, paste the domain name, and press enter.

You will see an instance Id displayed:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-aa5a2738-70be-4dba-9f63-43686683951b.png)

_Note_: Your instance Id will be different.

An application has been pre-installed on the EC2 instances that will respond to web requests with the instance Id of the instance serving the request.

To see the Id of the other EC2 instance, refresh the page. If the Id doesn't change, you may need to open an incognito or private browsing tab and visit the DNS name again.

Seeing the Id change shows that the load balancer is working as expected, routing traffic to both registered instances.

Leave this tab open and remember this is the tab for the load balancer, you will use it again later in the lab step.

6\. In the left-hand menu, under **Instances**, click **Instances**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-3f3be175-b008-4e67-a744-0e1cb93b3fc7.png)

You will see two instances named **web-node** with a status of **Running**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-af508832-2d4c-41f9-bca5-f955046dbd40.png)

7\. Select one of the instances:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-bd75962a-8d00-4dc4-bfb4-77165a69111c.png)

You will see tabs displayed below the list of instances.

8\. In the **Details** tab, in the **Public IPv4 DNS** field, click the copy icon:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-bfa9bff7-6630-4220-8c6f-358e8e098a48.png)

The public DNS name of the EC2 has been copied to your clipboard.

9\. In a new browser tab, paste the DNS name and press enter.

You will see an instance Id displayed again.

However, this time, because you are accessing the instance directly if you refresh or visit the DNS name in an incognito or private browsing tab, the Id won't change.

Note that you are accessing the instance directly, this is allowed by the security group associated with the EC2 instances. Allowing load-balanced instances to be publicly accessible is a bad security practice, and there is rarely a good reason for it.

In the rest of this lab step, you will modify the EC2 instance's security group to only allow traffic from the load balancer.

Leave this browser tab open and remember this is the tab for an EC2 instance, you will use this tab again later.

10. [Navigate to Load Balancers in the EC2 Management Console](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#LoadBalancers:sort=loadBalancerName).

11\. Ensure the **classic-elb** load balancer is selected.

12\. In the **Description** tab, scroll down to the **Security** section:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-9f09d389-1b5c-46c9-b608-ddd2e40e2bda.png)

This is the security group you configured when you created the load balancer.

13\. In the left-hand menu, under **Network & Security**, click **Security Groups**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-4624c7f3-c672-46b0-89e7-3b19b61458cb.png)

You will see a list of security groups:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-9ea1642b-b860-4e98-9384-88a9e149e4f5.png)

14. Select the SG which has the Group Name starting with **cloudacademylabs-** `.`

This is the security group of the EC2 instances.

You will see tabs displayed beneath the list.

15\. In the row of tabs, click **Inbound rules**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-3b27c6a1-cb8c-4175-9af4-43ef05382049.png)

16\. To modify the rules of this security group, click **Edit inbound rules**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-eaf8c437-0894-4ed2-8454-426526baa90f.png)

You want to allow only connections coming from the load balancer to the instances, however, the balancer doesn't have a particular IP address associated with it so you can't specify an IP address here. Instead, you will restrict the access by using the security group you created for the balancer.

You will change the current rule to deny access to anywhere and allow it only to members of the load balancer's security group.

17\. Delete the existing rule, and create a new one whose **Type** is **HTTP**. In the **Source** drop-down, ensure **Custom** is selected and in the box next to it, select **elb-sg**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-c905c5d1-41de-495b-a8d4-bf18ede286c0.png)

18\. To save your changes, in the bottom-right, click **Save rules**:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-961aa456-8867-4857-bb91-f7060e3dcb25.png)

With your rule saved, reload the browser tab with the DNS of the load balancer.

This will continue to work, you will see an instance Id displayed.

19\. Reload the browser tab with the DNS of an instance in the address bar:

The exact behavior will vary depending upon your web browser.

Most likely you see the loading symbol in the browser tab spinning indefinitely:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-f9f51bb1-e987-46c7-90d6-b9093e661567.png)

If you wait long enough, your browser will report that it timed out trying to reach the instance:

![](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-c8d928f2-85f9-4010-9342-22aae28a6e89.png)

## Checking Your Load Balancer's Behavior During Instance Failures

1. [Navigate to Instances in the EC2 Management Console](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#Instances:).

You will see two instances named **web-node** listed.

2\. To stop an instance, right-click one of them.

3\. In the menu that appears, click **Instance state**, and then click **Stop instance**:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-b609a992-80f5-4efa-bcdf-49338465dd6a.png)

You will see a dialog box asking you to confirm that you want to stop the instance.

4\. To confirm, click **Stop**:

[![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-33a8d13a-e2b3-4497-b586-da275c094df6.png)](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#Instances:)

The instance's **Instance state** column will change to **Stopping**. A few moments later you will see it changed to **Stopped**:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-3840c528-6667-49bb-8631-19ed3e1d81d3.png)

Stopping the instance will make it fail your load balancer's health checks.

5. [Navigate to Load Balancers in the EC2 Management Console](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#LoadBalancers:sort=loadBalancerName).

6\. Ensure the **classic-elb** load balancer is selected.

7\. In the row of tabs below the load balancer list, click **Instances**:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-c32e6e71-ec36-4c4e-be00-c9635abdc436.png)

Look at the **Status** column in the instances table, one of the instances will still be **InService**, and the other will be **OutOfService**:

[![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-6568b218-212c-4a49-b00b-0717953cdbf0.png)](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#LoadBalancers:sort=loadBalancerName)

This means that there is only one instance serving the application, and therefore all the requests will be forwarded to the same instance.

You can test this behavior by clicking on the **Description** tab and accessing the **DNS name**of the load balancer in a new browser tab. Your request will be served by the instance that you didn't stop.

Leave the browser tab with the load balancer's DNS name open. You will test it again after starting the stopped instance.

8\. To start the stopped instance, in the left-hand menu, under **Instances**, click **Instances**:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-da568321-cb0c-4772-9ea2-03ef82598f63.png)

9\. Right-click the stopped instance.

10\. Click **Instance state**, and click **Start instance**:

[![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-209a047a-fbc8-4c61-9258-f770c3c7daba.png)](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#LoadBalancers:sort=loadBalancerName)

_Note_: You can also access this menu using the **Actions** button in the top-right.

The **Instance state** column will change to **Pending**, and a few moments later, to **Running**.

Test accessing the load balancer by it's DNS name again. This time, you will see that both instances are serving requests.

_Note_: You may need to open the load balancer's domain name in an incognito or private browsing tab to see both instance Ids.

## Monitoring your Classic Load Balancer

1. [Navigate to Load Balancers in the EC2 Management Console](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#LoadBalancers:sort=loadBalancerName).

2\. In the list of load balancers, ensure the **classic-elb** load balancer is selected, and click the **Monitoring** tab:

[![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-a0159989-2fc4-44da-baf7-7e61e5a98d38.png)](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#LoadBalancers:sort=loadBalancerName)

You will see a number of graphs of different CloudWatch metrics.

The Elastic Load Balancing (ELB) service reports metrics to CloudWatch only when requests are flowing through the load balancer. If there are requests flowing through the load balancer, the load balancing service measures and sends its metrics in sixty-second intervals. If there are no requests flowing through the load balancer, or no data for a metric, the metric is not reported.

There are a few metrics related to a Classic Load Balancer, and most are self-explanatory if you are familiar with HTTP requests. If some of them are unfamiliar to you, visit the [Amazon AWS documentation](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-cloudwatch-metrics.html) to read more.

The metrics called **HealthyHostCount**, and **UnHealthyHostCount**will count the number of Healthy and Unhealthy instances respectively. These metrics can be useful for you to identify a major problem in your AWS account. A healthy instance is one that is passing the health checks performed by the load balancer.

You could use CloudWatch Alarms to notify you when you have less than 2 instances running your application, though to be clear this is not a general rule: the number of instances that might identify a problem will vary depending on your environment.

Also notice that in these metrics, there is no way of seeing the Availability Zone to which the Healthy/Unhealthy instance belongs. In our lab, we stopped an instance for a few minutes, therefore you should be able to see something like this:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/lab-step/blobid5-6ee12b02-5a82-498b-9182-5dabb896aa09.png)

If the **Healthy Hosts** metric reaches zero, that means that people won't see anything when accessing your load balancer, and it is probable that you have a big problem in your infrastructure.

The **Average Latency** metric might be useful to identify potential issues in your setup. Maybe everything is working in your application, but you notice an increase in this metric. If you haven't changed anything in your application, that can be a potential issue - maybe you haven't provisioned enough EC2 instances, or you even have lots of instances but they don't have enough power to serve your increasing traffic.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/lab-step/blobid6-b447cbec-da7e-44b6-b7f3-c6ae212cdecd.png)

The other metrics can be very useful for troubleshooting specific scenarios and will vary depending on your setup.

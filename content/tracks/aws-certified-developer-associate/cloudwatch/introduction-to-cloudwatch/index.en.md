---
title: Introduction to CloudWatch
description: Introduction to CloudWatch
toc: true
date: 2022-07-06
---

## Lab

- [Introduction to CloudWatch](https://cloudacademy.com/lab/introduction-to-cloudwatch/)

## Explore CloudWatch

1\. AWS has done an excellent job defining CloudWatch key concepts. Read the abbreviated excerpt from their official documentation below to obtain an understanding of Metrics, Namespaces and Alarms:

> **Metrics**
>
> A metric is the fundamental concept in CloudWatch and represents a time-ordered set of data points. These data points can be either your custom metrics or metrics from other services in AWS. You or AWS products publish metric data points into CloudWatch and you retrieve statistics about those data points as an ordered set of time-series data. Metrics exist only in the region in which they are created.
>
> Think of a metric as a variable to monitor, and the data points represent the values of that variable over time. For example, the CPU usage of a particular Amazon EC2 instance is one metric, and the latency of an Elastic Load Balancing load balancer is another.
>
> **Namespaces**
>
> CloudWatch namespaces are containers for metrics. Metrics in different namespaces are isolated from each other, so that metrics from different applications are not mistakenly aggregated into the same statistics.
>
> Note: In this lab you will see namespaces that AWS has created for you, and a _custom_ namespace created by the steps performed in this lab.
>
> **Alarms**
>
> You can use an _alarm_ to automatically initiate actions on your behalf. An alarm watches a single metric over a specified time period, and performs one or more specified actions, based on the value of the metric relative to a threshold over time. The action is a notification sent to an Amazon SNS topic or an Auto Scaling policy. You can also add alarms to dashboards.
>
> Alarms invoke actions for sustained state changes only. CloudWatch alarms will not invoke actions simply because they are in a particular state. The state must have changed and been maintained for a specified number of periods.

The interested student can take a look at the full version of the documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html). Due to time constraints, you should look at additional documentation once you have completed the lab.

2\. In the AWS Management Console search bar, enter _CloudWatch_, and click the **CloudWatch** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602133635-1-4ddc6a54-6c76-499a-8c5a-37a64aa610db.png)

3\. Click **Metrics** > **All metrics** in the left navigation pane. At this point, there are most likely no custom namespaces. But several AWS namespaces may already be established for you. What metrics are listed on the **All metrics**tab depends on a couple of factors:

1. How quickly you arrived at this view after starting your lab. This lab creates an EC2 instance and EBS volume when you start the lab. After a couple of minutes of delay, metrics for the EC2 and EBS namespaces are included.
2. How recently your Cloud Academy AWS account has been used to complete other Cloud Academy labs. If the AWS account you logged in to recently completed other labs, you may see namespace related to metrics collected in those labs.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120174832-2-89a8a222-c7ea-422a-85dd-7957204b7d4f.png)

4\. Spend a few minutes to explore what metrics and namespaces look like in the CloudWatch console.  Simply select any namespace and then any particular metric. As an example, the **EC2** namespace and **CPUUtilization**metric for the **HighCPUInstance** are selected in the image below:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120183435-5-06f4c1c5-6547-43c6-97b0-7d9b1998c12c.png)

_Note_: The image above is for illustrative purposes only, you do not need to choose the same instance or metric to explore CloudWatch metrics.

The longer the instance has been running, the more data points will appear in the graph. By default, EC2 metrics are collected every five minutes. You may need to adjust the displayed timeline to 1 week (**1w**) or further in the past to see some metrics.

## Monitoring EC2 Instances

1\. In the AWS Management Console search bar, enter _EC2_, and click the **EC2** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602133812-2-e3f32743-e873-42fd-a49c-4e076b622dd2.png)

2\. Click **Instances**from the navigation pane and select the box near the instance name. A wealth of instance information is displayed in the **Details** tab:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220114141337-3-f58e1e41-8fee-40f5-b99c-fee87b6858ef.png)

When you started the Lab, Cloud Academy configured the lab environment for you. This includes a medium instance named **HighCPUInstance**.

_Note_: Your information will vary. There is additional instance information not shown in the example above.

3\. Switch to the **Monitoring** tab and take a look at the standard metrics:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220114141515-4-876dcb1c-b7ad-4d8d-956c-6cf82b69b6df.png)

_Note:_ If you don't see an instance yet, it's possible that it's still provisioning in the background. Refresh the page every minute or so until it appears.

These are the standard metrics that CloudWatch monitors for all your EC2 instances. Please refer to the [documentation](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/ec2-metricscollected.html#ec2-metrics) for details. (Due to possible time constraints, please look up additional information in the documentation after completing this lab.)

You should be aware that all the metrics in this tab related to Disk (Disk Reads, Disk Read Operations, Disk Writes, Disk Write Operations) pertain to ephemeral storage disks. Those metrics will not represent anything if you have launched an EBS backed instance. To see the metrics related to EBS volumes you need to look elsewhere. Next you will take a look at the metrics of the EBS volume for this particular instance.

_Note_: Ephemeral storage is also known as _instance storage_. It is temporary storage that is added to your instance, unlike EBS which is an attached volume that is permanent in nature.

4\. To enable and disable detailed monitoring, click **Manage detailed monitoring**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220301102552-1-a95594bf-4278-4899-a549-7369429a23fc.png)

The **Detailed monitoring** page will open :

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220301102637-2-ae5bc1fb-bb6b-40f1-ace4-3e4af86fe99b.png)

Here you can enable and disable detailed monitoring by checking or unchecking the **Enable** checkbox followed by clicking **Save**.

5\. Click **Cancel** as we will not be enabling detailed monitoring in this lab:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220301103417-3-6a019cef-a017-4041-8a47-42e7d2d87360.png)

6\. Reselect the **HighCPUInstance** , click the **Storage** tab. Scroll down and click on the **Volume Id** (lower right):

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220121110021-1-56337369-14ea-4723-a22f-14cb740cb5e2.png)

7\. Select the volume and click on the **Monitoring** tab to see the metrics for this EBS volume:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220121110342-3-fe1e8163-086c-4806-a57a-7e3f95dabbe2.png)

As you can see, Amazon does quite a bit out of the box with respect to monitoring EC2 Instances and EBS volumes. However, you can enable Detailed Monitoring for even more control over the monitoring frequency of EC2 instances. CloudWatch monitors EC2 instances every 5 minutes by default. If you need more frequent monitoring, you can enable CloudWatch's Detailed Monitoring feature to monitor your instances every minute. You can enable Detailed Monitoring during the instance launch or change it anytime afterwards. _Note_: Detailed Monitoring does come with an associated cost.

## Install the EC2 Monitoring Scripts

1\. Navigate to [EC2 Instances by clicking here](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#Instances:).

2\. Click on **Launch instances**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/Screen%20Shot%202021-06-28%20at%205.04.12%20PM-7fafeee8-f16d-4133-885b-502ca023bf18.png)

3\. In the **Application and OS Images** section, select the **Amazon Linux** option under **Quick Start**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220531140751-3-989d7633-74fd-45d5-b986-d6f2e5cc9aa4.png)

4\. In the **Instance Type** section, you should not change any options. Simply make sure the default **t2.micro**is selected:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220531140950-4-12f4f87c-7a87-48f6-90fa-8938db1ef726.png)

5\. In the **Key pair** section, select the keypair:  
![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220601103552-3-bcf7a329-8c2a-4663-9eb3-230099d55f49.png)  
_Note_: Your keypair may differ from the screenshot.
_Reminder_: The PEM or PPK formatted key pair can be downloaded directly from the **Your lab data** section of the Cloud Academy Lab page at any time.

6\. Scroll down and expand the **Advanced details** section. Under **IAM instance profile**, select the IAM role provided. It will have a name that looks similar to cloudacademylabs`-EC2MonitoringRole-XXXXXXXXXX` :

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602134459-3-14ca3ebd-21da-453a-9f27-06ec77d356ee.png)

7\. Scroll down to **Detailed CloudWatch monitoring** and select **Enable**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602134641-4-d143c6f0-38b7-4abb-b989-113661f7f0af.png)

8\. Scroll down to **User data** and copy and paste the following bash script code in the **User data** (**As text**) field:

This is where the magic happens. Next you will insert the code to execute during the instance launch. However, in order to send metrics to CloudWatch, you need to configure some credentials first. You can use either Access Keys or IAM roles for this task. In this Lab, you will follow the best practices and use IAM roles. There is an instance role already created in you account configured with the proper permissions.

[Copy code](https://cloudacademy.com/lab/introduction-to-cloudwatch/install-the-ec2-monitoring-scripts/?context_id=4364&context_resource=lp#)

# !/bin/bash

yum install -y perl-Switch perl-DateTime perl-Sys-Syslog perl-LWP-Protocol-https perl-Digest-SHA.x86_64
wget <http://aws-cloudwatch.s3.amazonaws.com/downloads/CloudWatchMonitoringScripts-1.2.2.zip>
unzip CloudWatchMonitoringScripts-1.2.2.zip
rm CloudWatchMonitoringScripts-1.2.2.zip
echo "_/1_ ** * /aws-scripts-mon/mon-put-instance-data.pl --mem-util --disk-space-util --disk-path=/ --from-cron" > monitoring.txt
crontab monitoring.txt
rm monitoring.txt

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602134940-5-6d2b2ac0-acfa-4b67-a6c4-4cd61ea06fc3.png)

This bash script will get executed the first time the instances launches. In summary, the script will:

- Install Perl libraries
- Retrieve and install the AWS CloudWatch Monitoring scripts
- Configure crontab to run the monitoring script every minute

9\. In the **Summary** section, click **Launch instance**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220601104638-7-68147fbb-4544-4ad6-980f-ad1159b57684.png)

A confirmation page will let you know that your instance is launching:  
![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220601170741-1-3fed27a7-32e3-4086-a934-7fda20e43af0.png)

 10\. Click **View all instances**.

Notice the **Name** for the new instance is blank by default. Although not mandatory, it is helpful to have a name. Move your mouse into the blank space in the **Name** column. It turns to an edit pencil. Use the pencil to change your **Instance Name** to _Monitoring Scripts_:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120185022-8-65694afe-7e60-418c-a48a-d197cea17043.png)

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120185109-9-e47dd7d0-87b2-49cf-9017-a9a4a8e06834.png)

Wait until the**Instance State** is **R****unning**for the new Instance. It typically takes less than one minute for the state to transition from**P****ending** to **R****unning**.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120185207-10-85c2543f-d012-4e91-97bd-cd8e53116f04.png)

11\. Navigate back to **[CloudWatch by clicking here](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2)**and click**All metrics**from the navigation pane. Notice that there is a new namespace called **System/Linux**under**Custom namespaces**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602135240-6-6a086815-f29e-4b3b-baec-52a0cfc71da1.png)

This name is configured when you send the custom metrics.

_Note_: If you don't see the new **Namespace** wait a few minutes and refresh the page. CloudWatch takes some time to display the information in the dashboard. Recall that the newly installed monitoring scripts send data every minute based on the crontab configuration setup in the **User data** bash script for the instance.

12\. Click on the new **System/Linux** namespace:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602135331-7-e6c21315-0f0c-4f55-b168-703357f9e1ff.png)

There are two metrics being monitored by CloudWatch in the custom **System/Linux** namespace. (**Filesystem, InstanceId, MountPath** and **InstanceId**)

13\. Click the metric on the left (**Filesystem**...), then select the checkbox so the first metric is graphed.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602135436-8-e36bdc7f-2d75-4b1e-bb01-7f18720eae50.png)

14\. Click **Linux System**, so the **Metrics** path is **All > Linux System** again. Now select the metric on the right (**InstanceId**) and select its checkbox as well.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602135530-9-72e37773-857a-4631-8df4-6bb8696837f1.png)

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602135331-7-e6c21315-0f0c-4f55-b168-703357f9e1ff.png)

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602135845-10-45cb6f8e-1cfd-4634-9c55-a735009a0ccb.png)

15\. Switch to the **Graphed metrics** tab. If you selected both metrics correctly the tab will include a "(2)" at the end of it indicating how many metrics are graphed. Your graph should look similar to the following:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602135923-11-f904b0a2-bb0a-43ef-878c-0c014e20649e.png)

It is simple to customize the display to meet your needs for the metrics displayed.

16\. Click the **custom** graph period drop-down above the graph display area and select **15**from the **Minutes**row:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602140000-12-f4c2379d-94bb-4200-b07c-6091ba793422.png)

17\. Select the **Period** drop-down column menu for each metric in the lower **Graphed metrics** tab and choose **1 Minute**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602140103-13-db48dfa6-ec9c-4c5d-9c71-099986a81e78.png)

You can now see the highest resolution metrics that are being sent to CloudWatch every minute. (You may need to refresh the chart after setting the new periods)

18\. Select **Maximum** for the **Statistic**column. Instead of an average of the datapoints, the maximum will be graphed. (_Note_: In the lab example it is probably the same since the disk really has not been touched) Your configuration should look like:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220602140358-15-d2eb9ec1-335b-4672-8679-4445fe58046f.png)

## Creating Your First CloudWatch Alarm

1\. Navigate to [CloudWatch by clicking here](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#), click on **Alarms**>**All Alarms** in the left pane:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120191648-21-fdc1c7c0-bdd9-4075-b67e-2486aa5a8916.png)

There are no **Alarms** configured, so there are no records found. Further, the three types of Alarms are all at zero (0).

_Note_: More information on Alarm states will be covered soon.

 2\. Click **Create Alarm** and click **Select metric**. Select the **EC2** namespace:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120191924-24-292482d4-dae1-42af-91b2-5c34cdb80efd.png)

Many different metrics are displayed for both the **HighCPUInstance** and the **Monitoring Scripts** instances.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120192027-25-aa832198-215d-435f-8770-75e31eef26b6.png)

3\. Click **Per-instance metrics**, scroll down and select the metric with **HighCPUInstance**under **Instance Name**and**CPUUtilization**under **Metric Name**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120192204-26-c3825296-caca-4a68-ac2c-6f13d64b8821.png)

_Tip_: You may need to use the arrows in the upper right to find the **HighCPUInstance** on another page. Alternatively, you can make note of the last 3 or 4 characters in the **InstanceId** from the EC2 console, then enter those in the **Search Metrics** field. The search applies to all pages of information.

Once selected it is graphed immediately. Notice that you could tailor the graph to a specific **Time Range** (upper-right). For example, the time range can be specified in **Relative** or **Absolute** terms.

4\. Click **Select metric** when ready.

 5\. Under **Conditions**, set the following values leaving the defaults for the rest:

- _**Whenever High CPU is...**:_Greater/Equal
- **Than...**: _50_

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120192554-28-06575943-964a-42a9-9c95-4ca2b322f0a9.png)

An alarm watches for a metric to go beyond an allowable value range when monitored over time. If violated the alarm's state is changed. There are three possibles states for an alarm:

> **OK**—The metric is within the defined threshold  
> **In alarm**—The metric is outside of the defined threshold  
> **Insufficient data**—The alarm has just started, the metric is not available, or not enough data is available for the metric to determine the alarm state

6\. Click **Next**and fill out the form as described:

- **Alarm state trigger**: In alarm
- **Select an SNS topic:**Create new topic

Insert a valid e-mail and click on **Create topic.**

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220114150217-22-3a455b1e-8b04-4a14-a54b-f9a47f5748ad.png)

7\. Click **Next** and fill the form as described before clicking **Next**:

- **Define a unique name**: _High CPU_
- **Alarm description**: _When CPU utilization >= 50%_

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220114150447-24-d887bd7a-cccd-429a-a568-f0d0d8956160.png)

_Tip_: Be sure to <ins>use your valid email address</ins> in the **Email list** field so you can verify the **Alarm** later. AWS Simple Notification Service (SNS) is used to send the email when the alarm is triggered. However, you will not need to configure anything in SNS.

8\. Click **Create alarm** when ready.

9\. Check for an email from **AWS Notifications**. Open up the email and click the **Confirm subscription** link:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220114150643-26-0ee17844-a883-40bf-b5e8-fb39915ce4be.png)

You should receive a subscription confirmation. (For example, a confirmation message from Amazon Simple Notification Service (SNS) in a new browser tab if using a browser-based email client like Gmail.)  To summarize, you have created a new alarm, along with a new SNS topic. Since you subscribed to this new SNS topic, every time the state of the alarm switches to ALARM you will receive an email. You may not receive an alarm email if the time it took to confirm the SNS topic subscription took longer than the time it took for the alarm to trigger. Emails will only be sent to subscribers at the time of the alarm transition.

10\. You should be put to the **Alarm** page:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220114150830-28-1c331238-2989-42e6-82f8-ff2e26ee818d.png)

Note your Alarm state may differ. For example, you may be in an **Insufficient data**state briefly and then transition either to **In alarm** or **OK**.

_Troubleshooting Tip_: If the state of your alarm does not change to **In alarm** almost immediately, it is probably because you picked the incorrect instance. The **HighCPUInstance** is designed to trigger an alarm due to a high CPU utilization metric. The **Monitoring Scripts** instance is not taxed at all. To remedy the situation you can either create a new alarm with the correct instance, lower the threshold to something artificially low (1), or change the >= to <= (which is not very realistic but will test the alarm).

11. Click the **Alarm**. You can see very useful information about the alarm itself. In the **Details** tab, there is a general overview of the alarm, and in the **History** tab you can see up to the last 50 states of the alarm:

 ![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220114150751-27-f34dcd9d-1eaf-4969-ac2f-5da10ce59899.png)

12\. After an **In alarm**state is raised, check for an email titled **ALARM: "High CPU Alarm" in US West - Oregon** from **AWS Notifications**.

Again, you may not have received an email because the alarm triggers before you had time to subscribe to the notification topic. Don't worry, in the next Lab Step, you will reuse the topic for another alarm. Because you are already subscribed, you will receive an email. You could also retrigger the alarm by editing the alarm to trigger when CPUUtilization is >= _500_ (which can never happen for the single CPU instance). Wait five minutes until the alarm is disabled, then edit the alarm to trigger when CPUUtilization >= 50.

13\. Now move to the **History** tab:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120193056-29-115d4016-e9d9-4bc8-9eba-0cfa9e1c92f5.png)

Your **History** is likely similar to the example shown above. The oldest event is the furthest down. In succession, the Alarm was created; the state changed from INSUFFICIENT DATA to ALARM; SNS sent off an email notification.

15\. Spend a few minutes exploring the latest alarm history and try to understand what is going on with each entry. You can see more details for each entry by clicking the date.

## Create an Alarm using the EC2 console

1\. Navigate to [EC2 Instances by clicking here](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#Instances:).

2\. Select the **Monitoring Scripts** instance, then switch to the **Status Checks** tab:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-d1b1fcd3-58e9-44dc-99dc-580a27bab81e.png)

3\. Click **Actions**> **Create Status Check Alarm**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-1bb9066e-b2cb-4ee7-84d2-b2935ccdc19f.png)

This dialog is similar in function to the create alarm wizard you saw in an earlier Lab Step.

4\. For the **Alarm notification**, select the SNS topic name you set up before.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120193754-31-4062f0ec-395e-473b-919d-2be0fb35ad5d.png)

Other fields can be kept at their defaults. The **Alarm thresholds** section uses **Status check failed: either** to trigger the alarm for either instance or system status check failures:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-26773b67-2df0-46ff-947b-bb32218de545.png)

5\. Click **Create** when ready. An alarm creation confirmation message is displayed:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120193903-32-bcb84107-e94b-4d2b-a2f6-1eab41fd5e8e.png)

Now you know two different ways to create alarms: one from CloudWatch and the other from the EC2 console. Next, you will learn how to attach EC2 actions to alarms.

6\. Return to the**[Alarms by clicking here](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#alarmsV2:).**Notice that the first alarm you created is stuck in the **In alarm** state.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120194042-33-bb181048-d3ab-4f29-b37a-6d10cb78ff5a.png)

The alarm is stuck in the **In alarm** state because the instance is running an application that consumes 100% of the CPU utilization. Clearly an indicator that something may have gone wrong with the instance. Imagine that you are managing a production environment and you have an instance that is becoming unavailable intermittently because of high CPU utilization. You would like to receive a notification every time the CPU utilization is high, but this can happen anytime, in the middle of the night, or during a weekend or holiday. It would be helpful to have a pre-defined action in this case -- at least until you find a definitive solution for the problem.

To help you address the scenario, you can set EC2 actions on your alarms.

8\. Select the **High CPU** alarm and then **Actions > Edit**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120194202-34-ca16f4e6-e7b8-4731-b0dc-cd97209c9445.png)

To make your alarm more suitable to the training environment needs, set a new EC2 Action to Reboot this instance whenever the state of this alarm is ALARM.

9. Click on **Next** and click on **Add EC2 action**under **EC2 action**. Select **Reboot this instance**.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-edb64726-23da-4fb1-9b5e-3cb4fba617f5.png)

10\. Click **Update alarm** when ready.

Although the changes have been made to the alarm, the alarm remains in the **In alarm** state. CloudWatch will only perform actions when the state transitions to the **In alarm**state from another state. In the next instruction, you will modify the alarm to quickly have it change to the **OK**state and then change it back to return to the **In alarm**state.

11\. Select the **High CPU**Alarm and choose **Actions** > **Edit**. Toggle the relationship from **>=** to **<=** and click **Update alarm**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120194833-36-1b0e187e-a497-403e-bed7-dd461782df9d.png)

12\. Refresh the page to ensure the alarm has transitioned to the **OK**state. Then toggle the condition back to **>=** and save the alarm to have it transition to the **In alarm** state.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120195025-37-f8798882-46f9-4d85-9298-fdffdc8deac1.png)

_Note:_The state change may not be immediate and may take up to 2 minutes.

13\. Navigate back to the [Instances by clicking here](http://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#Instances:) and watch CloudWatch reboot the instance when the **Alarm Status** changes to **In alarm**.

In case you miss it, you can return to the alarm in CloudWatch and see the Reboot **Action** listed in the **History**section:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120195358-40-482439fc-b0ce-4506-bd47-d74e5b4d810c.png)

14. Check your email client and confirm that you received a notification of the alarm:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid5-34100402-38c6-43b8-ba66-d433bee8668d.png)

## Sharing CloudWatch Metrics with others

1\. Go to [CloudWatch by clicking here](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#) and click on **Metrics**> **All metrics**.

2\. Select an interesting metric, such as the **DiskspaceUtilization** metric for the **Monitoring Scripts** instance, and click **Actions** > **Share:**

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220120200053-41-bd1a2423-91d4-4896-86e0-c58d9ce6c000.png)

This metric can be found under**System/Linux** > **Filesystem, InstanceId, MountPath**.

3\. In the **Share Graph URL** dialog, right-click and copy the URL, then **Close** the dialog:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220114153605-32-d4893bba-c440-48ab-91df-db734c658723.png)

4\. The URL for the specific graph you were looking at is copied into the clipboard. You can paste it into a test email to confirm this. For example:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/lab-step/blobid4-d59d7d19-884d-46b6-b6ee-3823f53ab95b.png)

The URL is quite complex. To confirm that it is indeed correct, test it out in another browser tab.

5\. Open another browser tab. Paste the URL into the address field and refresh your browser. You should see the exact same graph as the one you shared earlier. Notice that you need to be logged into the AWS console in order to view the information referenced by the URL. For security reasons, you can only share URLs with other AWS Identity and Access Management (IAM) users who have the appropriate CloudWatch IAM permissions in your AWS account.

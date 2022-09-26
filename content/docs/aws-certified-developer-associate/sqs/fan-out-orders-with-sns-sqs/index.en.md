---
title: Fan-Out Orders using Amazon SNS and SQS
description: Fan-Out Orders using Amazon SNS and SQS
toc: true
date: 2022-07-06
---

## Lab

- [Fan-Out Orders using Amazon SNS and SQS](https://cloudacademy.com/lab/fan-out-orders-with-sns-sqs/)

## Creating an Amazon SNS Topic and Amazon SQS Queues

Here's a diagram of what you will build and configure in this lab step:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/sqs-sns-diagram.png)

1.  In the search bar at the top, enter _SNS_ and under **Services**, click the **Simple Notification Service** result:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220426144130-1-4c7fe27f-244d-4810-b3fd-d902f54522d5.png)

2.  In the **Create topic** card on the right, in the **Topic name** textbox, enter _new-orders_ and click **Next step**:


![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-10-11-30-29.png)

The **Create topic** form will load.

By default, the **Type** of topic selected will be **Standard**. This is the most scalable topic type. The cost of this scalability is that message order and exactly-once delivery attempts can not be guaranteed.

If you are building a solution requires strict message ordering and exactly-once message delivery, you should use a **FIFO** type topic.

Standard is fine for this lab.

3.  Click the black triangle next to **Access policy - optional** to expand the section:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-10-16-46-44.png)

4.  In the **Access policy** section, under **Define who can publish messages to the topic**, select **Everyone**:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-10-16-45-42.png)

5.  Under **Define who can subscribe to this topic**, select **Everyone**:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-10-16-49-14.png)

You are using a permissive access policy to save time and because the focus of this lab is on demonstrating the fan-out scenario.

In a non-lab environment, you should carefully consider the access policy required and make sure if conforms with your company or organization's security requirements.

6.  Scroll to the bottom of the page, and click **Create topic**:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-07-16-00-00.png)

You will see a page load displaying details of your newly created topic:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-07-16-04-56.png)

In the order processing system your are building, this Amazon SNS topic is where orders are published to. In a non-lab environment it would most likely be a web application or other application that accepts orders that will publish messages to this topic.

Next, you will create two queues using Amazon Simple Queue Service and subscribe them to your Amazon SNS topic.

7.  Open a new tab by right-clicking the **AWS** icon in the top-left and selecting **Open in new tab**.

_Note_: The above instruction may vary slightly depending upon the web browser you are using.

8.  In the search bar at the top, enter _SQS_, and under **Services**, click the **Simple Queue Service** result:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220426144410-2-7b2e9397-ec0d-4c43-a3fc-77a09521631a.png)

9.  In the middle right of the screen, in the **Get started** card, click **Create queue**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220426144524-4-a1c1d8c4-cee5-4003-afc8-be7765549203.png)

The **Create queue** form will open.

10. In the **Name** textbox, enter _orders-for-inventory_:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-07-16-23-37.png)

11. Scroll down to the bottom, click **Create queue**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220426144522-3-fce05280-aad4-4c48-b5fd-76c17519d63e.png)

You will see a web page load showing you details of your newly created Amazon SQS queue:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-07-16-25-11.png)

You will now create a second Amazon SQS queue for analytics.

12. To navigate to the **Queues** list page, at the top-left, click **Queues**:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-07-16-27-02.png)

13. On the right-hand side, click **Create queue**.

14. Repeat the queue creation process, only this time enter _orders-for-analytics_ as the **Name** of the queue.

15. Return to the **Queues** list page by clicking **Queues** in the top-left.

You will see the two queues you have created:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-07-16-31-46.png)

16. Click the radio button for the **orders-for-analytics** queue.

17. On the right-hand side, click **Actions** and click **Subscribe to Amazon SNS topic**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220426144713-5-e21eee24-b047-4cbd-8c64-14e86600608f.png)

The **Subscribe to Amazon SNS topic** form will load.

18. In the **Choose a topic** drop down, select the topic ending with **new-orders**:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/1_creating-sns-topic-and-sqs-queues/assets/2021-05-07-16-34-24.png)

This is the Amazon SNS topic you created earlier.

19. Click **Save** to finish subscribing this queue to your topic.

20. At the top-left, click **Queues** again.

21. Repeat the topic subscription process for your **orders-for-inventory** Amazon SQS queue.

You now have both of your Amazon SQS queues subscribed to your Amazon SNS topic. Any messages published to the topic will fan-out to both queues.


## Connecting to the Virtual Machine using EC2 Instance Connect

1. In the AWS Management Console search bar, enter _EC2_, and click the **EC2** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220222123231-1-d93dcbbf-c7a6-4e7d-9466-d70014660d6b.png)

2\. To see available instances, click **Instances** in the left-hand menu:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-ae56f48d-6e5e-4414-a899-7a7ee4c156b0.png)

The instances list page will open, and you will see an instance named **cloudacademylabs**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220208101137-2-36b4b73c-f199-4ce6-b85b-a1bd90ae3819.png)

If you don't see a running instance then the lab environment is still loading. Wait until the **Instance state** is **Running**.

3\. Right-click the **cloudacademylabs** instance, and click **Connect**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220128094104-2-a2d50c2a-05c8-442c-acc0-4c02dd6c4e38.png)

The **Connect to your instance** form will load.

4\. In the form, ensure the **EC2 Instance Connect** tab is selected:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-bdf76eab-5bef-415f-bdee-f1ef97330f62.png)

You will see the instance's **Instance ID** and **Public IP address** displayed.

5\. In the **User name** textbox, enter _ec2-user_:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-ccba4473-690f-4589-9542-7fff1354f72f.png)

_Note_: Ensure there is no space after ec2-user or connect will fail. 

6\. To open a browser-based shell, click **Connect**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f687e238-2010-4e45-b747-763c96e50035.png)

If you see an error it's likely that the environment hasn't finished setting up. Check for **Setup completed** at the top-left corner of the lab and try connecting again:

![alt](https://assets.labs.cloudacademy.com/content/images/setup/OpenEnvironment.png)

A browser-based shell will open in a new window ready for you to use.

Keep this window open, you will use it in later lab steps.

You can also connect to the instance using your preferred SSH client and the PPK (Windows) or PEM (Mac/Linux) key files in the **Credentials** section of this lab.

## Publishing and Processing Messages

1.  In the terminal, enter the following command:

```sh
aws sns list-topics
```

You will see one topic displayed:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220426144936-6-72776ae9-6c41-445c-8b0e-68a652adfc47.png)

_Note_: Your **TopicArn** will have a different account identifier.

By default, the AWS command-line interface tool uses the JSON format for responses. This response contains an array of **Topics** with one element. The element consists of a **TopicArn**.

**Arn** is short for Amazon Resource Name. An ARN is used to uniquely identify resources in AWS.

In this lab, the EC2 instance has been configured with an IAM role that has permissions to interact with Amazon SNS topics and Amazon SQS queues.

2.  Store the value of the **TopicArn** attribute in a shell variable (`topic_arn`):

```
topic_arn=$(aws sns list-topics --query 'Topics[0].TopicArn' --output text)
```

The above command uses the `--query` option to select only the value of the TopicArn and the `--output` option is used to specify plaintext format which removes the quotation marks from the value.

3.  To publish a message, enter the following, utilizing the ARN you stored in the `topic_arn` shell variable:

```
aws sns publish \
--topic-arn $topic_arn \
--message  "1 x Widget @ 21.99 USD\n2 x Widget Cables @ 5.99 USD"
```

In response, you will see a **MessageId**:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/2_publishing-and-receiving-messages/assets/2021-05-10-15-20-23.png)

_Note_: Your message identifier will be different.

You have successfully published an order message to your Amazon Simple Notification Service topic.

In this lab, you are using the AWS command-line interface tool to simulate an application publishing an order message.

In a non-lab environment, the message could be published by a web application that accepts orders from customers.

4.  To list Amazon Simple Queue Service queues, enter the following command:

```
aws sqs list-queues
```

You will see a JSON response:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/2_publishing-and-receiving-messages/assets/2021-05-10-16-10-37.png)

The queues that you created earlier are listed.

5.  Store each of the **QueueUrls** in shell variables:

```
analytics_queue_url=$(aws sqs list-queues --query 'QueueUrls[0]' --output text)
inventory_queue_url=$(aws sqs list-queues --query 'QueueUrls[1]' --output text)
```

6.  To retrieve a message from the **orders-for-analytics** queue, enter the following command, utilizing the analytics queue URL you stored previously:

```    
aws sqs receive-message \
    --queue-url $analytics_queue_url
```

You will see a JSON response containing an array with one **Message**:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/2_publishing-and-receiving-messages/assets/2021-05-10-16-58-44.png)

The response contains the following fields:

* **Body**: A JSON representation of the message
* **ReceiptHandle**: You are required to supply this to delete a message after processing
* **MD5OfBody**: An MD5 hash of the message body
* **MessageId**: The message identifier that Amazon SNS saw when pushing the message to the queues
    * Note that this is not the same as the **MessageId** that Amazon SNS returned to you when you published to the topic
7.  Repeat the previous instruction, using the **orders-for-inventory** queue but store the message response in a shell variable (for use later) and output the shell variable (using Python's JSON tool to pretty print it):

```
inventory_message=$(aws sqs receive-message --queue-url $inventory_queue_url)
echo $inventory_message | python -m json.tool
```

You will see the same message displayed again.

The message you published to the Amazon SNS topic has been sent to the Amazon SQS queues you subscribed the topic. This is an example of fanning out a message to multiple receivers.

In a non-lab environment, you could have worker applications constantly running and asking the Amazon SQS queues for more messages. One worker may be updating an inventory database for the order, whilst another worker could be recording the order details in a data lake for future analysis.

Using Amazon SNS and Amazon SQS like this allows you to build scalable systems that are decoupled and resilient. If a worker went offline, messages would queue up in the Amazon SQS queues. When the worker is available again, it can pick up new messages where it left off.

You can also have multiple worker applications, to help ensure there's no downtime in message processing.

After successfully processing a message, a worker application should delete the message to prevent it from being processed again.

8.  Store the value of the **ReceiptHandle** attribute in a shell variable:

```
receipt_handle=$(echo $inventory_message | python -m json.tool | grep ReceiptHandle | cut -d\" -f 4)
```

9.  To delete a message, enter the following command for the **orders-for-inventory** queue:

```
aws sqs delete-message \
    --queue-url $inventory_queue_url \
    --receipt-handle $receipt_handle
```

10. Return to your browser tab with the Amazon SQS management console open.  

_Note_: If the SQS management console appears to only have one SQS queue, click the refresh button above the table:  
![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-e8f78050-27a8-4f4e-8238-1ec65fac403b.png)  
The correct number of SQS queues will be displayed after a refresh.

11. Navigate to the **Queues** list and click the **orders-for-inventory** queue.

12. In the top-right, click **Send and receive messages**:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/2_publishing-and-receiving-messages/assets/2021-05-11-12-56-38.png)

13. Verify that in that **Receive messages** section, under **Messages available**, it says **0**.

This is the queue you deleted a message for, simulating a long-running background application that receives an Amazon SQS message and then deletes the message after processing.

14. Repeat the last three instructions for the **orders-for-analytics** queue and verify **Messages available** is **1**:

![alt](https://assets.cloudacademy.com/labs/uploads/fan-out-orders-with-sns-sqs//steps/2_publishing-and-receiving-messages/assets/2021-05-11-13-00-29.png)

This is the queue you did not delete the message for. The message is still available to be picked up for processing by an application receiving messages from the queue.

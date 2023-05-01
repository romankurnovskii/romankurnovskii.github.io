---
title: Process Amazon SNS Notifications with AWS Lambda
description: Process Amazon SNS Notifications with AWS Lambda
toc: true
date: 2022-07-06
---

## Lab

- [Process Amazon SNS Notifications with AWS Lambda](https://cloudacademy.com/lab/aws-lambda-sns-notifications/)

## Creating an Amazon SNS Topic

1. In the AWS Management Console search bar, enter _SNS_, and click the **Simple Notification Service** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-0b2fbef7-5227-4c6c-8361-698aa1379090.png)

2. In the left-hand side menu, click **Topics**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-79280db3-b075-4d61-bea7-e2a14c541807.png)

If you can't see the left-hand menu, to expand it, click the following:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-035c403a-fc22-4c0a-b2fe-ed66c139bdf6.png)

3. Click **Create topic**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-38b9d655-7d7a-4cbb-bd8e-ac0392867900.png)

4. In the **Create topic** form, ensure to have selected the **Standard** type, and enter the following values accepting the defaults for values not specified:

- **Name:** _lab-topic_

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-99dfb27f-b912-4fc7-a825-a5e6aacc1c8e.png)

You can leave the **Display name** field empty for this Lab. When you create topics where the recipients receive messages over SMS (Short Message Service) you are required to provide a value.

5. At the bottom of the form, click **Create topic**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-1c5d53a8-6f22-4d60-8ed4-06af6a497ad5.png)

## Creating an AWS Lambda Function

1. In the AWS Management Console search bar, enter _Lambda_, and click the **Lambda** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-94b8d8cf-4c85-45fb-87ed-196d49b83a53.png)

You will see the **Functions** list page.

2. Click **Create function**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-bbd4879d-c59c-4a53-97b7-a63239570114.png)

3. In the **Create function** form, ensure **Author from scratch** is selected:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-1bea0b0d-e972-463d-923f-978b984c39e2.png)

4. In the **Create function** form, enter _lab-function_ in the **Function name** field:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-3b34b508-46dc-4859-a915-e2d11c1cc153.png)

5. In the **Create function** form, in the **Runtime** drop-down, select **Python 3.8**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-678077dc-62b3-4d33-8a9d-4fadec5989b3.png)

6. In the **Create function** form, click **Change default execution role** and select **Use an existing role**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-642b6ba4-0acd-41e5-8b26-74f982779a96.png)

7. In the **Existing role** drop-down, select **lambda\_s3\_put**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-b9f97a3f-7769-45ec-a1cc-00d853a62eea.png)

The role you have selected has been pre-populated for this Lab. Usually when using Lambda you will create a specific role for your function.

8. To create your function, click **Create function**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-4f653e54-68e8-4c0b-877f-e24ea572a316.png)

## Implementing an AWS Lambda Function to Upload to S3

1. Scroll down to the **Code source** section and double-click **lambda_function.py**.

2. In the code editor, replace the contents with the following Python code:

```python
from datetime import datetime
import boto3

account_id = boto3.client('sts').get_caller_identity()["Account"]
s3 = boto3.resource('s3')


def lambda_handler(event, context):
    record = event['Records'][0]['Sns']
    message = record['Message']
    subject = record['Subject']
 
    print("Subject: %s" % subject)
    print("Message: %s" % message)

    s3.Object(f"sns-lab-bucket-{account_id}", subject).put(Body=message)

    return "SUCCESS"
```

The function code you entered processes a message from SNS. The code uploads a file into an S3 Bucket which was pre-created as a part of this lab. The name of the file will be the subject of the message and the content of the file will be the message body.

You can use a Lambda function to do many different things. Some examples include:

- Process web-requests
- Put a custom metric into AWS CloudWatch
- Add or update a record in a database
- Post a web-request to an external service

3. To save your changes and deploy your function, at the top of the **Code source** section, click **Deploy**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-61d557df-1b74-4669-aa47-15ded231e5c6.png)

You will see a notification that your function has been deployed:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-11b88c21-8827-4ea5-8285-eaa15958b8b5.png)

 4. To add an SNS trigger, in the **Function overview** section, click **Add trigger**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-00c17808-f3cf-4e6f-8504-1764ca9a3f90.png)![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-eb998c0b-dffb-4bae-a053-4341bce14b59.gif)​

5. In the **Select a trigger** dropdown, enter _SNS_, and click the **SNS** result:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-5bba99fd-9c84-4d46-b7a3-8a9e482b1a3d.png)](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions)![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-eb998c0b-dffb-4bae-a053-4341bce14b59.gif)​

6. In the **SNS topic** drop-down, select **lab-topic**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-a374be19-964a-49b4-ac0e-db43e696cb58.png)![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-eb998c0b-dffb-4bae-a053-4341bce14b59.gif)​

The **SNS topic** field will be filled with the ARN (Amazon Resource Name) of your SNS topic.

7. To add your SNS trigger, click **Add**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f8818ac6-fcc0-42a7-95a2-5b9f52f2988d.png)![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-eb998c0b-dffb-4bae-a053-4341bce14b59.gif)​

You will see a notification that your trigger has been added:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-94d8c2cf-1c0e-4afb-bd13-a590349253fa.png)

In SNS terminology, by adding an SNS trigger you have "subscribed" your Lambda function to the SNS topic.

## Publishing a Message to an Amazon SNS Topic

1. [Navigate to the AWS SNS service](https://us-west-2.console.aws.amazon.com/sns/v3/home?region=us-west-2#/dashboard).

2. In the left-hand side menu, click **Topics**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-051dd437-4187-483f-b25f-8aa24aea77f5.png)](https://us-west-2.console.aws.amazon.com/sns/v3/home?region=us-west-2#/dashboard)

3. In the list of topics, click **lab-topic**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-8925257c-e409-4963-919e-a330b4182e5b.png)](https://us-west-2.console.aws.amazon.com/sns/v3/home?region=us-west-2#/dashboard)

4. Click **Publish message**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-56ad1cf6-bd15-4340-aa2b-8b24b7272333.png)

5. In the **Message details** section of the form, in the **Subject** field, enter _lab-subject_:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-4c1a6aef-0c39-4b71-bc64-68a2529de459.png)

6. In the **Message body** section of the form, in the **Message body to send to the endpoint** textbox, enter _Lab Message_:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-a55e89f1-be47-4774-a3ad-015046738bcc.png)](https://us-west-2.console.aws.amazon.com/sns/v3/home?region=us-west-2#/dashboard)

Usually when you publish a message to an SNS topic, you would include meaningful data in the message body. The content of the message body is often called the "payload" of a message. In SNS, the payload can be plain text, or it can be a structured payload such as JSON, XML, or some other format. The service or device subscribed to your topic can use the data in the payload to determine what action to take in response to receiving a message.

7. To publish your message, click **Publish message**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-28a000c2-a21a-4bcc-9666-bfd32c1a3d24.png)](https://us-west-2.console.aws.amazon.com/sns/v3/home?region=us-west-2#/dashboard)

You will see a notification, similar to the following, confirming your message has been published:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-4674f769-6494-4c00-836b-c6a0d96d33c1.png)](https://us-west-2.console.aws.amazon.com/sns/v3/home?region=us-west-2#/dashboard)

## Verifying the AWS Lambda Function Processed the Message

1. In the AWS Management Console search bar, enter _S3_, and click the **S3** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-7a151f91-f8b4-4198-a748-41c66a569dbb.png)

2. In the list of S3 Buckets, click the Bucket beginning with **sns-lab-bucket-**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-a1c56acd-9c78-4584-9aab-f1f173c77912.png)

3. In the list of objects you will see a file called **lab-subject**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-3405c816-1dab-42fb-8a7f-7e4ffe92504e.png)

This file was uploaded to the S3 bucket by your Lambda function.

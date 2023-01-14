---
title: Sessionizing Clickstream Data with Amazon Kinesis Data Analytics
description: Sessionizing Clickstream Data with Amazon Kinesis Data Analytics
toc: true
tags:
categories:
series:
date: "2022-07-06"
---

## Lab

- [Sessionizing Clickstream Data with Amazon Kinesis Data Analytics
](https://cloudacademy.com/lab/sessionizing-clickstream-data-kinesis-data-analytics/)

## Creating an Amazon Kinesis Data Analytics Application

1. In the AWS Management Console search bar, enter _Kinesis_, and click the **Kinesis** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220531100548-1-562950c3-cded-4ec9-a633-b3f1e2f74cdb.png)

You will be taken to the Amazon Kinesis dashboard.

In this lab, a Kinesis Data Stream has been pre-created for you. Under **Data Streams** you will see **Total data streams** is one:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-04404316-7a0e-4c2a-a2eb-da727054bf49.png)

2\. In the left-hand menu, click **Analytics applications** and under that click **SQL applications**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-d658b213-9ed0-4992-90fb-a66574141fdf.png)

3\. To start creating a Kinesis Data Analytics application, under **Data Analytics**, click **Create SQL application (legacy)**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-13e494f2-10e1-4830-a05d-6c482b827c5d.png)

You will be taken to the **Create legacy SQL application** form.

4\. In the **Application configuration** section, and enter _lab-application_ in the **Application name** textbox:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-15f2d668-f301-4668-8d28-9cdf7e306dfc.png)

5\. At the bottom of the page, click **Create legacy SQL application**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-fdf6c771-8a29-4bbc-bfd3-4fac2af41474.png)

You will be taken to a page displaying details of your application and you will see a notification that your application has been created:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220531100709-2-2203255f-2fe8-4215-9dcf-51bfaa7d79a9.png)

You will come back to this page later in the lab to connect the pre-created Kinesis Data Stream as a data source for your Kinesis Data Analytics application.

6\. To navigate to the Kinesis Data Streams list page, in the left-hand side menu, click **Data streams**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-e4eeb636-03ca-4e49-98e6-96d859a2dec3.png)

You will see one data stream listed called **lab-stream**.

7\. To view the details of the pre-created data stream, in the list, click **lab-stream**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-0599adc2-722c-4e03-84c9-6f1dccbaf574.png)

You will be taken to the **Stream details** page and you will see a series of tabs with **Monitoring** selected.

8\. To see the configuration details of the data stream, click **Configuration**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-b4a7d390-856a-4b3a-a29e-dc0326d034a6.png "alt")

Take a moment to look at the details on this page, there are several Kinesis Data Stream configuration options that you should be aware of:

* **Data Stream capacity**: The number of shards in the Data Stream. Each shard has a maximum read and write capacity. To increase the total capacity of a data stream you can add shards.
* **Encryption**: Kinesis Data Streams can be encrypted using an AWS managed or customer-managed, KMS key.
* **Data retention**: A Kinesis Data Stream can retain data for a configurable amount of time between 24 and 168 hours.
* **Enhanced (shard-level) metrics**: More detailed CloudWatch metrics can be enabled for a Data Stream, these enhanced metrics have an extra cost.

In this lab, you will be working with a small amount of sample data, so there is one shard configured.

Leave these options without changing them.

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


## Simulating a Real-Time Clickstream

1\. To create a template JSON file for a click event, enter the following command into the shell:

```
echo '{
  "user_id": "$USER_ID",
  "event_timestamp": "$EVENT_TIMESTAMP",
  "event_name": "$EVENT_NAME",
  "event_type": "click",
  "device_type": "desktop"
}' > click.json

```

There are two parts to this command, the first uses the built-in Bash command **echo** to print a JSON template. The second part uses a feature of the Bash shell called redirection, it redirects the output of the echo command to a file (creating it if doesn't exist) called **click.json**.

The template contains five fields, the **event_type**, and **device_type** fields are hardcoded, in a non-lab environment, you may encounter streams that come from different types of devices and streams that contain more than one type of event (clickstream events alongside sales or transaction data for example). The other fields will be populated dynamically.

2\. To put records into Kinesis and simulate a clickstream, enter the following command:

```
USER_IDS=(user1 user2 user3)
EVENTS=(checkout search category detail navigate)
for i in $(seq 1 3000); do
    echo "Iteration: ${i}"
    export USER_ID="${USER_IDS[RANDOM%${#USER_IDS[@]}]}";
    export EVENT_NAME="${EVENTS[RANDOM%${#EVENTS[@]}]}";
    export EVENT_TIMESTAMP=$(($(date +%s) * 1000))
    JSON=$(cat click.json | envsubst)
    echo $JSON
    aws kinesis put-record --stream-name lab-stream --data "${JSON}" --partition-key 1 --region us-west-2
    session_interval=15
    click_interval=2
    if ! (($i%60)); then
        echo "Sleeping for ${session_interval} seconds" && sleep ${session_interval}
    else
        echo "Sleeping for ${click_interval} second(s)" && sleep ${click_interval}
    fi
done

```
    
You will see the templated JSON and also the JSON response from Kinesis for each record put into the Data Stream:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-dd23350b-e018-46c9-bcb8-f040aeab31e1.png)

This command simulates a real-time click-stream with the following characteristics:

* Creates three thousand events
* Events have a two-second interval between them
* After every sixty events (two minutes) there is a fifteen-second interval, later you will assume a gap of ten seconds or more is a session boundary

The command has a number of parts:

* Setup of sample user ids and event types at the beginning
* A loop that will execute three thousand times and a sleep statement
* Statements that randomly select a user id and an event type, and assign them along with the current timestamp to variables
* A statement that uses the **envsubst** command to substitute defined environment variables in the JSON template
* A statement invoking the AWS command-line interface tool, putting the templated JSON record into the Kinesis Data Stream
* A condition at the end of the loop that either sleeps for a few seconds or, periodically for longer, simulating the end of a session

Leave the command running.

3. [Navigate to Kinesis Data Analytics in the AWS Management Console](https://us-west-2.console.aws.amazon.com/kinesisanalytics/home?region=us-west-2#/list/sql-applications-legacy).

4\. In the list of applications, to expand the application, click **lab-application**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f9a946c1-da12-478f-a46b-23e20913399b.png)

5\. To connect your Data Analytics application to the pre-created Data Stream, click **Configure **under** Source stream **form:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-90dba9f6-b9c4-4011-9e42-d523c19cbef1.png)

The **Configure source for lab-application** form will load.

6\. Under **Source**, ensure **Kinesis data stream** is selected:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-e64d25f0-28b5-4e6f-9fac-020c0b603588.png)

7\. In the **Kinesis data stream**, click **Browse** to select the radio button for **lab-stream **and click** Choose**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid2-9afb8380-7562-4ac1-8b26-74aadc5b6460.png)](https://us-west-2.console.aws.amazon.com/kinesisanalytics/home?region=us-west-2#/applications/dashboard)

8\. Under **Access permissions**, select **Choose from IAM roles that Kinesis Data Analytics can assume**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-d834d95d-4669-4734-8129-b74c701e48f3.png)

9\. In the **IAM role** list, select the role beginning with **cloudacademy-lab-data-analytics**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-e9a56fb5-e3ed-4aef-8b18-87f410181b21.png)

If you don't see the above role listed click the refresh button:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid4-fbc23eac-6a7d-4aae-ad37-e33e648c2dee.png)

10\. To start discovering the schema of the records you added to the Data Stream, click **Discover schema**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid6-25ab16ee-99f1-480a-985b-fbc0aa40191c.png)](https://us-west-2.console.aws.amazon.com/kinesisanalytics/home?region=us-west-2#/applications/dashboard)

After a moment or two, you will see a notification that the discovery was successful and below, some of the records will be displayed:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-820ed5c2-548e-4bdd-8ae9-9d91969d5296.png)

11\. To finish connecting your Data Analytics application to your Data Stream, click **Save changes**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid8-163ab3c9-55f6-4d4a-afed-5364f6047158.png)

You will be redirected to the page for your Kinesis Data Analytics application. Leave this page open in a browser tab.

## Sessionizing the Clickstream Data using Amazon Kinesis Data Analytics

1\. Return to the page for your Kinesis Data Analytics application in the AWS Management Console.

2\. To start your application and expand the **Steps to configure your application**, click **Configure SQL**:

![](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-cf255f0c-35cb-429f-ae58-c6e6ab066f4d.png)

3\. In the SQL code editor, replace the existing contents with the following SQL commands

```
CREATE OR REPLACE STREAM "INTERMEDIATE_SQL_STREAM"
(
    "event_timestamp" TIMESTAMP,
    "user_id" VARCHAR(7),
    "device_type" VARCHAR(10),
    "session_timestamp" TIMESTAMP
);


CREATE OR REPLACE  PUMP "STREAM_PUMP1" AS INSERT INTO "INTERMEDIATE_SQL_STREAM"
SELECT  STREAM
    TO_TIMESTAMP("event_timestamp") as "event_timestamp",
    "user_id",
    "device_type",
    CASE WHEN ("event_timestamp" - lag("event_timestamp", 1) OVER (PARTITION BY "user_id" ROWS 1 PRECEDING)) > (10 * 1000) THEN 
            TO_TIMESTAMP("event_timestamp")
         WHEN ("event_timestamp" - lag("event_timestamp", 1) OVER (PARTITION BY "user_id" ROWS 1 PRECEDING)) IS NULL THEN 
            TO_TIMESTAMP("event_timestamp")
         ELSE NULL 
    END AS "session_timestamp"
FROM "SOURCE_SQL_STREAM_001";
```

These statements do the following:

* Defines an intermediate stream to insert data into called **INTERMEDIATE\_SQL\_STREAM**
* Creates a **PUMP** that selects data from the source stream
* The **SELECT** statement uses the **LAG** function to determine if there is a ten-second interval between the last event and the current event
* The **LAG** function statements are used with **PARTITION** statements to restrict the **LAG** function by the user

You should know that Kinesis Data Analytics natively assumes Unix timestamps include milliseconds. The stream you simulated is providing timestamps with milliseconds. This is why the **CASE WHEN** statement that checks for a ten-second interval includes `(10 * 1000)`, it's multiplying ten by one thousand to get ten seconds in milliseconds.

Tip: you can increase the height of the SQL editor text-box by dragging the grey bar at the bottom.

4\. To execute the SQL statements, click **Save and run application**:

![](https://assets.cloudacademy.com/bakery/media/uploads/blobid2-214ff26b-630b-4cd7-97ae-f2589dbb4bba.png)

The query will take up to a couple of minutes to execute and start returning results.

Occasionally you may see an error caused by the fifteen-second interval, if you do, re-run the query by clicking **Save and run application** again.

Take a look at the results. Notice that only some records have a value for **session_timestamp**. This is because the **CASE WHEN** statement in the query supplies a value of null when:

* The interval between event timestamps is less than ten seconds
* There is no preceding event

Also notice that below the SQL Code editor, there are two streams, the **INTERMEDIATE\_SQL\_STREAM**, and an **error_stream**. The error stream is where any errors that occur during the execution of the SQL will be delivered to.

5\. In the SQL editor window, under the current SQL statements, add the following:

```
CREATE OR REPLACE STREAM "DESTINATION_SQL_STREAM" (
    "user_id" CHAR(7),
    "session_id" VARCHAR(50),
    "session_time" VARCHAR(20),
    "latest_time" VARCHAR(20)
);


CREATE OR REPLACE  PUMP "STREAM_PUMP2" AS INSERT INTO "DESTINATION_SQL_STREAM"
SELECT STREAM
    "user_id",
    "user_id"||'_'||"device_type"||'_'||TIMESTAMP_TO_CHAR('HH:mm:ss', LAST_VALUE("session_timestamp") IGNORE NULLS OVER 
        (PARTITION BY "user_id" RANGE INTERVAL '24' HOUR PRECEDING)) AS "session_id",
    TIMESTAMP_TO_CHAR('HH:mm:ss', "session_timestamp") AS "session_time",
    TIMESTAMP_TO_CHAR('HH:mm:ss', "event_timestamp") AS "latest_time"
FROM "INTERMEDIATE_SQL_STREAM"
WHERE "user_id" = 'user1';

```

These SQL statements do the following:

* Creates a stream called **DESTINATION\_SQL\_STREAM**
* Creates a **PUMP** that selects from the **INTERMEDIATE\_SQL\_STREAM**
* Constructs a **session_id** by combining the user, device type and time
* Restricts the query to **user1** using a **WHERE** clause

Something else to note about these statements is that the session and event timestamps are being converted to times.

6\. To run the updated query, click **Save and run application**.

You will see results similar to:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-0283fb62-9049-4a93-81a4-cb2e7fe08eef.png)

Your times will be different.

Notice that the **session_time** values are more than ten seconds apart. And that the seconds' interval of the **latest_time** column between the rows that have a **session time**, is ten seconds or less.

7\. To see only the rows for new sessions, replace the last line of the query with the following:

```
WHERE "session_timestamp" IS NOT NULL;
```

This change to the **WHERE** clause of the last SQL statement removes the restriction of the query to **user1**, and removes rows where the value of **session_timestamp** is null.

8\. Click **Save and run application** to re-run your query.

You will see results similar to the following:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-2b231f58-73ee-4098-908d-f3271ad21514.png)

Your results will be different.

The results now contain only session boundary rows for each of the users.

Leave this browser tab open with the query running in Kinesis Data Analytics.

## Creating an AWS Lambda function to Store Sessions in an Amazon DynamoDB Table

1\. In the AWS Management Console search bar, enter _Lambda_, and click the **Lambda** result under **Services**:

![](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-94b8d8cf-4c85-45fb-87ed-196d49b83a53.png)

2\. To start creating your function, click **Create function**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-06d3e807-c74b-4b3e-83f7-0575f1eadf85.png)

3\. Under **Create function**, ensure **Author from scratch** is selected:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-266c02b7-d0b4-4db4-b58d-5f160d92b6f8.png)

4\. Under **Basic information**, in the **Function name** text-box, enter _lab-function_:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-b4c78509-dcbf-4b1f-939b-47fe5d71be84.png)

5\. In the **Runtime** drop-down, select the latest **Python 3.x** version available.

6\. To expand the role selection form, click **Change default execution role**.

7\. Under **Execution role**, select the **Use an existing role** radio button:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f9458b48-1099-49aa-ac79-3d9ca619f540.png)

8\. To assign an execution role, in the **Existing role** drop-down, select the role called **cloudacademy-lab-lambda**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-797afaef-3367-4eec-8d04-460ce29db40d.png)

9\. To create your function, click **Create function**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-5a9e57eb-3f84-48ae-99dc-5e315b66dbc7.png)

You will be taken a page where you can configure your function, and you will see a notification that your function has been successfully created:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-46cdd75b-bf9b-4eb2-9dcd-1769f8b314ef.png)

10\. Scroll down to the **Code source** section and in the code editor double-click the **lambda_function.py** file.

11\. To update your Lambda function's implementation, replace the code in the editor window with the following:

```python
from __future__ import print_function
import boto3
import base64
from json import loads

dynamodb_client = boto3.client('dynamodb')

table_name = "CloudAcademyLabs"

def lambda_handler(event, context):
    payload = event['records']
    output = []
    success = 0
    failure = 0

    for record in payload:
        try:
            payload = base64.b64decode(record['data'])
            data_item = loads(payload)

            ddb_item = {
                'session_id': { 'S': data_item['session_id'] },
                'session_time': { 'S': data_item['session_time'] },
                'user_id': { 'S': data_item['user_id'] }
            }

            dynamodb_client.put_item(TableName=table_name, Item=ddb_item)

            success += 1
            output.append({'recordId': record['recordId'], 'result': 'Ok'})
        except Exception:
            failure += 1
            output.append({'recordId': record['recordId'], 'result': 'DeliveryFailed'})

    print('Successfully delivered {0} records, failed to deliver {1} records'.format(success, failure))
    return {'records': output}
```

This python code processes a record from Kinesis Data Analytics and puts it into a DynamoDB table.

The implementation is based on one provided by AWS. The only change is the statements that construct the **ddb_item**. They have been modified to match the data being supplied by your Kinesis Data Analytics application.

12\. To deploy your function, at the top, click **Deploy**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-03d9ce2f-841d-4e96-a8f4-0c7842acea16.png)

You will see a notification that your function has been deployed:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-1cc1da60-49b1-4a99-b8c8-d448201d5f1c.png)

13\. To configure a timeout for your function, click the **Configuration** tab, and click **Edit**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-53889e9c-5bb8-46ff-b0ad-004a85e69707.png)

14\. Under **Timeout**, enter _1_ in the **min** text-box, and _0_ in the **sec** text-box:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-d34595b5-6944-4ead-8472-182a899f1131.png)

You are updating the timeout because the default of three seconds is too low when processing data from Kinesis Data Analytics, and may lead to failures caused by the function timing out. AWS recommends setting a higher timeout to avoid such failures. 

15\. To save your function's updated timeout, click **Save**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-fd0355af-6ed8-447f-9925-637809a0567d.png)

You will see a notification that your change to the timeout has been saved:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-6d97cef9-93cb-4b5e-8567-8bfaa0ebdc6f.png)

## Configuring Amazon Kinesis Data Analytics to Use Your AWS Lambda Function as a Destination

1. [Navigate to Kinesis Data Analytics in the AWS Management Console](https://us-west-2.console.aws.amazon.com/kinesisanalytics/home?region=us-west-2#/list/sql-applications-legacy).

2\. In the list of applications, to expand the application, click **lab-application**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-c73221e3-3fc5-421d-b5ea-ba59530c1f12.png)

3\. To begin configuring your Lambda as a destination, expand the **Steps to configure your application** and click **Add destination**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-de7f2923-4a85-43ad-aae4-dc31db794faf.png)

The **Configure destination** form will load.

4\. Under **Destination** select **AWS Lambda function**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-cbaa5e22-0954-46bb-9daf-1dd1079d8dba.png)](https://us-west-2.console.aws.amazon.com/kinesisanalytics/home?region=us-west-2#/applications/dashboard)

5\. Under **AWS** **Lambda function**, click **Browse** and check radio box for **lab-function **followed by clicking** Choose**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid3-49a3cd4f-3cf9-4681-8e81-19825761776a.png)

This is the Lambda function you created in the previous lab step.

6\. Under **Access permissions**, ensure **Choose from IAM roles that Kinesis Data Analytics can assume** is selected:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-fe6e57c3-a61e-4a14-9d7a-e81f27e3618e.png)

7\. In the **IAM role** drop-down, select the role called **cloudacademy-lab-lambda**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-824a07f2-3d3c-4be5-82b2-472edbfc85f8.png)](https://us-west-2.console.aws.amazon.com/kinesisanalytics/home?region=us-west-2#/applications/dashboard)

This is a role that has been pre-created for this lab and allows Kinesis Data Analytics to invoke your Lambda function.

8\. In the **In-application stream** section, under **Connect in-application stream**, select **Choose an existing in-application stream**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-c8ad63eb-c0e3-4124-a1dd-d102ac202830.png)

9\. In the **In-application stream name** drop-down, select **DESTINATION\_SQL\_STREAM**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-6751fe1e-6d98-435d-a030-e58c120b8068.png)

10\. To finish connecting your Kinesis Data Analytics application to your Lambda function, click **Save changes**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid5-91816a39-d3ea-4a93-8f57-1592668bc5d8.png)](https://us-west-2.console.aws.amazon.com/kinesisanalytics/home?region=us-west-2#/applications/dashboard)

Your Kinesis Data Analytics application is being updated. Please be aware that it can take up to three minutes to complete.

Once complete the details page for Kinesis Data Analytics application will load.

11\. In the AWS Management Console search bar, enter _DynamoDB_, and click the **DynamoDB** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-247cee59-726c-48a4-a1bf-ea18e6ee7e2d.png)

12\. In the left-hand menu, click **Tables**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-792b7978-567b-47bb-8110-0df15b855447.png "alt")

13\. In the list of tables, click **CloudAcademyLabs**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-32d473fb-670e-4475-ae3f-fe0175b2ec9e.png)

This table was pre-created as a part of this lab.

14\. To see items in the DynamoDB table, click the **Explore Table ****Items** button:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220531152225-1-c7362643-0a50-4244-aefd-c9f881b6b44a.png)

You will see the items in the table listed similar to:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-fe8c0481-8552-4e09-999e-a1945716ba84.png)

These items have been inserted into the DyanmoDB table by your Lambda function, it's being invoked by your Kinesis Data Analytics application.

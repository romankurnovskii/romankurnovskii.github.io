---
title: Build A Log Aggregation System in AWS
description: Will create a distributed, scalable log aggregation system within AWS running on Amazon OpenSearch Service. This Log Aggregation System will ingest as much of your CloudWatch log stream events as you want, events generated from AWS EC2 Instances, Lambda functions, Databases, and anything else you want to submit log events from.
toc: true
date: 2022-07-06
---

## Lab

- [Monitor Like a DevOps Pro: Build A Log Aggregation System in AWS](https://cloudacademy.com/lab/aws-devops-pro-monitoring-build-log-aggregation-system/)

## Navigating to Your Cloud's Lambda Function

[![Stack Present State](https://assets.cloudacademy.com/bakery/media/uploads/lab-step/monitoring_-_001-nav-lambda_-_003-stack-current-dd8e6644-3b84-4c10-9b25-d2e947c5570a.png "Stack Present State")](https://cloudacademy.com/admin/andrew-templeton/cloudacademy/blob/master/labs/devops/monitoring/001-nav-lambda/003-stack-current.png)

1\. In the AWS Management Console search bar, enter _Cloud Formation_, and click the **CloudFormation** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429103956-1-1ab05279-24a2-4fc1-a6b0-d4f5f6d4bfca.png)

This will bring you to the CloudFormation **Stacks** table.

There will be one stack named **cloudacademylabs** in the table with a **Status** of **CREATE_COMPLETE**.

_Note_: If the stack hasn't reached the **Status **of **CREATE_COMPLETE**, try refreshing the page after a minute. It only takes a minute for the stack to fully create.

2\. To view details of the stack, under **Stack name**, click the **cloudacademylabs** link.

3\. Click the **Resources** tab:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-e3072d43-a3ce-44d8-b959-ab54e6cec193.png)

Your **Physical ID**s will be different than in the supplied image. Note in the **Type **column that a **DynamoDB Table**, a **Lambda Function**, and **IAM **resources to grant the Lambda access to the DynamoDB Table have all been created. You will be querying the DynamoDB table via Lambda function invocations to create CloudWatch Logs, that will be aggregated and searchable via a user interface (UI).

4\. Click on the **Outputs** tab, and open the **DynamoLambdaConsoleLink** link in the **Value** column:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid2-92ead771-0227-4fc1-8a90-6fc0b70e98cf.png)

This takes you to the Lambda function Console.

## Creating Some Logs Using AWS Lambda

1\. Briefly look around the Lambda function console:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-c86e2f84-2399-41c7-91a5-2ce969fc4e6d.png)

The **Designer **gives a visual representation of the AWS resources that trigger the function (there are none in this case), and the AWS resources the function has access to (**CloudWatch Logs**, and **DynamoDB**). The actual code that is executed by the function is farther down in the **Function** **code **section. You don't need to worry about the actual implementation details of the function for this Lab.

2\. To configure a test event to trigger the function, scroll down to the **Code source** section and click **Test**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429104333-3-c6a814b6-dc70-415f-b0cb-9b1215d217b8.png)

3. In the **Configure test event** form, enter the following values before scrolling to the bottom and click **Save**:

* **Event name**:_TestPutEvent_
* Enter the following in the code editor at the bottom of the form:

[Copy code](https://cloudacademy.com/lab/aws-devops-pro-monitoring-build-log-aggregation-system/creating-some-logs/#)

```
{
  "fn": "PUT",
  "data": {
    "id": "12345",
    "name": "foobar"
  }
}
```


![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429104153-2-74fea1fd-a7ef-41eb-a9dd-5c957f851955.png)

The `PUT` object event will update the DynamoDB database with an object with the given `id`.

4\. To run your function with your test event, click **Test** again:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429104333-3-c6a814b6-dc70-415f-b0cb-9b1215d217b8.png)

After a few seconds, in the code editor, a tab called **Execution results** will load:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-aa86da8f-1584-4752-a40c-ef07b72aeac5.png)

The function succeeded and the **Function Logs**area displays the logs that were generated and automatically sent to CloudWatch Logs by AWS Lambda.

5\. To view the Amazon CloudWatch logs, click the **Monitor** tab, and then click **View logs in CloudWatch**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-7b37e04d-72fb-46da-b099-c729ba64edfc.png)

_Note_: The Lab's CloudFormation stack outputs also include a link to the Log Group if you need to access it at a later time.

## Manually Viewing Logs in Amazon CloudWatch

1\. Observe the **Log Streams** in the CloudWatch log group for the Lambda function you invoked:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-2ab20151-639d-451a-8795-96c697c7d4e6.png)

The rows in the table are different **Log Streams** for the log group.

Each log stream corresponds to log events from the same source. AWS Lambda creates a new log event for every Lambda invocation. However, it is possible to have multiple log streams for a single Lambda function since the log stream corresponds to the container actually running the function.

Behind the scenes, a Lambda is run in a container. After a period of inactivity, the container is unloaded and the following requests will be served by a new container, thus creating a new log stream. Depending on how many times you invoked the test command in the previous step, you will see one or more rows in the log stream.

2\. Click on the latest **Log Stream**.

The log stream is a record of event **Message**s ordered in **Time**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-d697e02d-a3fd-4199-aa83-b2cd851be239.png)

3. Enter _PUT _into the **Filter events **search bar and click enter:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-2c35a0b3-8eaf-4570-944d-8c48bde7f8f7.png)

4\. Click the triangle to expand the event that matches the filter.

You will see the JSON formatted message:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-5155cec1-7cbf-4b5c-8449-16cde6e95b5a.png)

The outermost **data** attribute wraps the test event you configured.

5\. Click **custom** to display the custom time range filter available in CloudWatch Logs:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-d127b138-c6dd-42a4-81ea-1d750cd098db.png)

Observe the time-based options in the dialog box that displays:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-17c88ed8-e129-4792-96bf-3f534648ff5d.png)

The filter by text and by time capabilities are the tools that are available for sifting through logs in CloudWatch Logs. The [text filters support some forms of conditions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html) that can be expressed through a syntax specific to CloudWatch. These capabilities are handy, but you will see that there are more powerful tools available for log aggregation and retrieval.

## Launching the OpenSearch Domain

The first thing you need is an Amazon OpenSearch cluster/domain. Using the Amazon OpenSearch Service has the following benefits:

* It's distributed and resilient
* It supports aggregations
* It supports free-text search
* It's managed and takes care of most of the operational complexities of operating a cluster

In 2021 AWS renamed Amazon ElasticSearch Service to Amazon OpenSearch Service. You may see references to ElasticSearch in the Amazon Management Console. You should assume that ElasticSearch and OpenSearch refer to the same AWS service.

The following diagram illustrates the overall design of the AWS Lab environment and the part that you are building in this lab step is highlighted in the lower-left corner in the AWS cloud:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-7741a6ee-ea07-406a-9143-369a80ef0f12.png)

1\. In the search bar at the top, enter _OpenSearch_, and under **Services**, click the **Amazon OpenSearch Service** result:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429104628-4-cead0ef4-208e-4965-ab2f-3b81a9e8446e.png)

2\. To begin creating your cluster, on the right-hand side of the welcome page, click **Create domain**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429104712-5-554c5f72-1ca0-4486-841a-362ae8e87ec4.png)

The terms OpenSearch domain and an OpenSearch cluster can be used almost interchangeably. The former is the logical search resource, and the latter is the actual servers that are launched to create a domain.

The **Create domain** form will load. 

3\. In the **Name** section, in the **Domain name** textbox, enter _ca-labs-domain-###_, replacing ### with some random numbers:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f2ef669c-a638-47ff-970c-3bb3df428b2d.png)

4\. In the **Deployment type** section, select the following:

* **Deployment type**: Select **Development and testing**
* **Version**: Select **6.8 **under **ElasticSearch**

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-36a2a586-ddee-460a-ae08-e036fdd6a169.png)

In this short-lived lab, you are using a Development and testing deployment because it allows public access and reliability isn't a concern. In a production environment, you will want to use a Production deployment to get the full availability benefits and meet security requirements.

5\. In the Auto-Tune section, select **Disable**.

In this short-lived lab, Auto-Tune is not necessary.

6\. In the **Data nodes** section, enter and select the following and leave remaining defaults:

* **Instance type**: Select **t3.small.search**
* **Number of nodes**: Enter _1_

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220510112534-1-bb3915db-05d2-4fbd-82b5-0e933ad5281a.png)

The storage type values correspond to the storage types available for Amazon EC2 instances.

When deploying a cluster that uses multiple nodes, you can specify that the nodes are deployed in two or three availability zones. Deploying in multiple availability zones makes the cluster highly available and more reliable in the case of failures of outages.

7\. Scroll down to the **Network** section, and select **Public access**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-98784143-ac05-420f-b6b3-2e5213787b19.png)

In this lab, you are creating a publicly available Amazon OpenSearch Service cluster for convenience. Be aware that you can also deploy a cluster into an Amazon Virtual Private Cloud (VPC) and receive the network isolation and security advantages of using a VPC.

8.  In the **Fine-grained access control **section, uncheck the **Enable fine-grained access control **box.

9\. In a new browser tab, enter the following URL:

[https://checkip.amazonaws.com/](https://checkip.amazonaws.com/)

You will see an IP address displayed. This is the public IPv4 address of your internet connection. You will use this IP address to restrict access to your Amazon OpenSearch Service cluster.

10\. Scroll down to the **Access Policy** section and under **Domain access policy**, select **Configure domain level access policy**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429105143-7-146d73ea-3a3a-4bfd-bfb1-4293e282590c.png)

You will see a policy editor form display with the tabs **Visual editor** and **JSON**.

11\. In the **Visual editor** tab, enter and select the following:

* **Type**: Select **IPv4** **address**
* **Principal**: Enter the IP address you saw on the [Check IP Page](https://checkip.amazonaws.com/)
* **Action**: Select **Allow**

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429105226-9-19d81744-2561-4cd5-887b-0256a54745b4.png)

You are specifying an access policy that allows access to the cluster from your IP address. In a non-lab environment, you could deploy the cluster into an Amazon VPC and configure private or public access using a VPC's networking features.

12\. To finish creating your cluster, scroll to the bottom and click **Create**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429105337-10-0e7e8951-2052-4df0-889d-cebfc68e2c7a.png)

A page displaying details of your cluster will load and you will see a green notification that you have successfully created a cluster.

13\. In the **General information** section, observe the **Domain status**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f1a5ea63-82b6-421c-b140-3f3f9f05262f.png)

AWS is setting up and deploying your cluster. This process can take up to 15 or 30 minutes to complete.

12\. To see the latest status of your Amazon OpenSearch Service cluster, refresh the page in your browser.

Refresh the page for your domain periodically to check if it has finished deploying.

Whilst waiting for the domain to finish provisioning, feel free to consult the [Amazon OpenSearch Service Developer Guide](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html) to learn more about the OpenSearch service.

When the cluster has been provisioned you will see the **Domain status** change to **Active**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-a35c2d2b-f3b5-4318-8d25-4dc30d380f9f.png)

## Sending CloudWatch Logs to OpenSearch

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-009932ef-f50b-4999-9611-3f9696e27c04.png)

1\. In the AWS Management Console search bar, enter _CloudWatch_, and click the **CloudWatch** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429105851-11-466c7875-126b-4ba8-a89a-76bd3391147b.png)

2\. In the left-hand menu, under **Logs**, click on **Log groups**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-fc711aeb-a1a7-42ea-8ad1-84b0b95a2f81.png)

3\. Select the log group beginning with **/aws/lambda/cloudacademylabs-DynamoLambda-**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-e4c08c67-c1da-4d2c-9c87-b51fc4e00d22.png)

Next, you will create a subscription filter to send the log data to your ElasticSearch domain.

4\. Click **Actions**, in the menu that opens, under **Subscription filters**, click **Create Amazon OpenSearch Service subscription filter**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220117132239-1-fba0f7bf-82d2-4320-be34-ec05848ba00d.png)

The **Create Amazon OpenSearch Service subscription filter** form will load.

5\. In the **Choose destination** section, select the following:

* **Select account**: Ensure **This account **is selected
* **Amazon OpenSearch Service cluster**: Select the cluster you created previously

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-7ef938b7-bd69-4dfc-99ce-6ea59f5fb60c.png)

After selecting the **Amazon OpenSearchService cluster**, the **Lambda function** section will appear.

6\. In the **Lambda IAM Execution Role** drop-down select **LambdaElasticSearch**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f4fb049e-4d99-496d-bc43-3e42f04402e0.png)

7\. In the **Configure log format and filters** section enter the following:

* **Log Format**: Select **Amazon Lambda**
* **Subscription filter name**: ca-lab-filter

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-d5839242-3363-4f9e-afb5-a3fd6b2a05d7.png)

The default **Subscription Filter Pattern** matches the **timestamp**, **request_id**, and **event** JSON. The **Test Pattern **button is available to see which events match the pattern.

8\. To start sending the logs to ElasticSearch, at the bottom, click **Start streaming**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-25f03599-a3d9-4ce4-9331-8476e4592c5e.png)

Momentarily, you will see a notification that the subscription filter has been created and logs are being streamed to OpenSearch:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-d8941820-2c7a-4d6c-a6d0-5e85d46bc3c4.png)

## Discovering and Searching Events

1\. Navigate back to the Lambda function you invoked earlier and click the **Test** button a few times to submit more `PUT` events:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-a38f9d29-7315-43c1-b442-6b1d855392ad.png)

2\. Click the arrow on the **Test** button and click **Configure test event**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-51bbc453-07d5-4168-9909-ede9f7c1473c.png)

3\. In the **Configure test events **form, click the radio button for **Create new test event** and enter the following non-default values:

* **Event name**:_TestGetEvent_
* Enter the following in the code editor at the bottom of the form:


```
{
"fn": "GET",
"id": "12345"
}
```

You will submit more test events of a different type - `GET` operations on the object that was PUT in the database. This gives two different event types to look at in Kibana (the Log Aggregation UI).

4\. Click **Save**.

5\. Click **Test** several times to make GET events.

6\. Return to the [Amazon OpenSearch Search Console](https://us-west-2.console.aws.amazon.com/esv3/home?region=us-west-2#opensearch/domains) for the domain you created and click the link under **Kibana URL**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-78733904-1afa-4213-b04b-a8933443959b.png)

7\. In the **Add Data to Kibana** section, on the right-hand side under **Use Elasticsearch data**, click **Connect to your Elasticsearch index**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429120402-12-fd000897-765b-47ea-8e9a-d87c8cd9ec48.png)

The log data is stored in OpenSearch, but you need to tell Kibana which index to use for discovering the data.

8\. In the **Create an index pattern **wizard, enter the following value and click **Next step**:

* **Index pattern**: _cwl-*_

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-54b96c47-4ada-441d-88e6-25cda005d59b.png)

The pattern will match the daily CloudWatch Logs (cwl) indices that are created in Amazon OpenSearch.

9\. In the second step, enter the following value and click **Create index pattern**:

* **Index pattern**: Select **@timestamp**

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-36a09028-2a11-4449-87a4-c96f0e745139.png)

The **Time filter field name** allows Kibana to determine which attribute represents the timestamp of each event. The confirmation page displays all of the fields in the log data index:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220429120524-13-899ae362-6309-4b92-8812-6c05143926c4.png)

Now that the index settings for Kibana are configured, you can begin using the Log Aggregation system!

10\. Click **Discover** in the sidebar menu on the left of the page.

11\. Explore the **Discover** interface:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-13d31721-22ca-429d-b1da-9db07022872b.png)

You see some events and a graph. These are your aggregated log events! The system is online! Notice the search bar up top. It is initially empty so all log events will show up. But what if you only want to see the `PUT` events for objects containing `12345`?

12. Enter _PUT 12345_ in the search bar and press _enter_:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-b4faf1fb-037f-466f-ad24-00471e40c765.png)

The matching terms in the event show up highlighted, and the bar graph updates to show only the count of `PUT 12345` events that you made by clicking Test in the Lambda interface.

13\. Click on the timestamp range in the upper-right corner to display the time filter:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-d330af07-67e3-4f6c-b35d-039b64fcb4c7.png)

Just as with CloudWatch Logs, you can filter the logs by time. However, in Kibana you can also drag on the bar chart to select a time range visually:![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-ccedfb80-2f1e-4813-badd-d193678398f8.png)

## Visualizing Aggregated Events

1\. Click **Visualize** in the Kibana sidebar menu.

2\. Click **Create a visualization**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-39ffb0a3-dac2-4ba4-b874-05b84ab5425e.png) 


3\. Select **Area **chart visualization:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f41590aa-4cbc-4ff6-a4cb-a31f06f4d31c.png) 

4\. In the **From a New Search, Select Index **area, click on the **cwl-* **index name:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-cde54f05-5181-492e-a22e-f27fe855ee0f.png)


If you had any saved searches in the system, you could use them to make this Visualization from this step.

On the left-hand side, the visualization configuration tools will appear:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-18b5fd4c-dd64-4fc1-b9e8-b038975c5b81.png)

5. Enter the following values in the visualization configuration:

* **Select buckets type**: X-Axis
* **Aggregation**: Date Histogram (to track log trends over time)
* **Field**: @timestamp
* **Interval**: Auto

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-48fd650d-57b9-4f2a-b830-1e27300abc97.png)

To make the graph more interesting, you will split the `PUT`s and `GET`s and display each stacked in on the chart with different colors. This requires a sub-buckets.

6. Click **Add sub-buckets** below the rest of the X-Axis settings, and enter the following values:

* **Select buckets type**: Split Series
* **Sub Aggregation**: Terms (Terms splits the data based on the unique values of a field)
* **Field**: $event.data.fn.keyword (The test requests used the `fn` key for request type, which maps to the `$event.data.fn.keyword` field in OpenSearch)

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-97f08c02-b39b-48ef-be55-6e67371c67e6.png)

7\. Click the play button to apply the changes and produce the visualization:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-0ca6c0de-4f5c-4d05-940e-340942cef195.png)

It will look something like the image below, with two regions in an area graph corresponding to `GET` and `PUT` event count over time:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-7271c269-fdba-4b82-8639-4a212e5dd9b7.png)

To use the visualization in a Dashboard in the next step, you need to save the visualization.

8. Click **Save** in the top toolbar:

![](https://assets.cloudacademy.com/bakery/media/uploads/blobid8-cc197d51-015a-43cb-9630-fe84045ab1da.png)

9\. Enter _PUTs and GETs Over Time_ in the **Save Visualization** field, and click **Save**:

![](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-5102a936-c27f-4faa-a82d-36e715158769.png)

## Creating a Kibana Dashboard

1\. Click on **Dashboard** in the sidebar menu.

2\. Click **Create a dashboard**:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-3b35b537-4970-48b4-be62-2c81b48c0051.png)


3\. Click **Add** to add saved visualizations to the dashboard:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-ba7f2ef5-cdb0-42f6-bff0-42599f981064.png)

4\. Select the **PUT and GETs Over Time** visualization:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-4b5a77dd-34ba-4160-83f6-b04155106302.png)

The visualization is added to the dashboard, but the size may not be what you like. You can adjust the size of the visualization by dragging the arrow in the lower-right corner:

![](https://assets.cloudacademy.com/bakery/media/uploads/blobid4-574f79c4-872a-47dc-8c0d-ac0869f3aa5b.png)

5\. Click **Save** and enter the following values before clicking the revealed **Save **button:

* **Title**: _Log Dashboard_
* **Description**: _Lambda API Logs_

![](https://assets.cloudacademy.com/bakery/media/uploads/blobid5-fb534834-2ccf-45ee-a4cc-bfc39ba3c85d.png)

You've done it! The **Dashboard** will always contain the up-to-date statistics for your `GET` and `PUT` events that run through the Lambda function:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-76481012-22d4-4e7d-b685-99068379a418.png)

  

6\. Return to the Lambda console and create as many test events as you want.

7. Refresh the Kibana dashboard and see the new requests in the visualization:

![](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-fd3120c6-1172-4316-82f5-467a8c262d26.png) 

You can also configure **Auto-refresh** to avoid having to refresh the view:

![](https://assets.cloudacademy.com/bakery/media/uploads/blobid9-fb565076-2734-4692-976b-94387d87bb68.png)

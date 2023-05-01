---
title: Introduction to DynamoDB
description: Creating a DynamoDB Amazon DynamoDB Table
toc: true
tags:  [aws, dynamodb]
date: 2022-07-01
---

[Lab](https://cloudacademy.com/lab/introduction-dynamodb/)

## Creating a DynamoDB Table with a Partition Key

1\. From the AWS Management Console, in the search bar at the top, enter _DynamoDB_, and under **Services**, click the **DynamoDB** result:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-4efbac81-907a-4f33-b2a2-a6b8dc94c268.png)

The Amazon DynamoDB product overview page will load.

2\. To start creating a new DyanmoDB table, on the right-hand side, click **Create table**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-e871daee-5f6d-4211-8e81-5cabc466e3f6.png)

3\. In the **Table details** section, enter the following:

* **Table Name**:
* **Partition Key**: Enter _Name_ and ensure type is

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-bb0ec381-0d8e-485d-bcad-f54bef1c4bf8.png)

4\. In the **Settings** section, select **Customize settings**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-47cfbc0e-1ea5-4995-bc84-5b334b5d8d20.png)

Choosing this option allows you to specify values for the table's read and write capacities.

5\. In the **Read/write capacity settings** section, under **Capacity mode**, select **Provisioned** and enter the following:

* **Read Capacity**:
  * **Provisioned capacity units**:
* **Write Capacity**:
  * **Provisioned capacity units**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-2ceb62ef-5b16-497d-ba64-fa1e6e6d70de.png)

Accept the defaults for all other options on this page.

6\. Scroll to the bottom and click **Create table**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-22aa9d2f-93dc-4d09-9709-659558545a25.png)

The **Tables** list view will load and you will see a notification that your table is being created. After a 30 seconds or so, you will see a success notification:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-797f317a-e893-4111-9ca4-2ccb61f3b50e.png)

## Creating a DynamoDB Table with Local and Global Secondary Indexes

1\. On the right-hand side of the page, click **Create table**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-ba045e84-09b5-463c-a522-3a2152a0d7a1.png)

2\. Enter the following in the **Table details** section:

* **Table name**:
* **Partition key**:
  * **Name**: Enter
  * **Type**: Select
* **Sort key**:
  * **Name**: Enter
  * **Type**: Select

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-24742caa-d087-4ba4-9541-3e4296b42021.png)

3\. In the **Settings** section, select **Customize settings**.

4\. Under **Read/write capacity settings**, ensure **Provisioned** is selected for **Capacity mode**, and enter the following:

* **Read capacity**:
  * **Provisioned capacity units**:
* **Write capacity**:
  * **Provisioned capacity units**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-096ddc68-8330-4d41-959b-d1da15f8037c.png)

5\. Scroll down to the **Secondary indexes** section and click **Create local index**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-50343626-4f31-4993-9f71-6be1fd84311d.png)

The **New local secondary index** dialog box will appear.

6\. Enter the following to configure your local secondary index:

* **Sort Key**:
  * **Name**: Enter
  * **Type**: Select
* **Attribute projections**: Select

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-0b468479-bc77-4ce2-be32-c9d929d12775.png)

An LSI (Local Secondary Index) has the same partition key as the table's primary key and will share the provisioned capacity of the table in contrast to global secondary indexes which provision their own capacity.

7\. To finish creating the local secondary index, at the bottom, click **Create index**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-4befeca4-11a2-4e4d-93a4-eeadf6d1834e.png)

8\. Scroll to the bottom and click **Create table**.

After roughly 30 seconds you will the table become active:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-d33586ea-40fb-4ce9-96b5-d7c86ca5e320.png)

In contrast to a Local Secondary Index, a Global Secondary Index is an index with a partition and sort key that can be different from those in the table. It is considered "global" because queries on the index can span all of the data in a table, across all partitions.

9\. Click **Create table** once more to start creating another table.

10\. Enter the following in the **Table details** section:

* **Table Name**:
* **Partition key**:
  * **Name**: Enter
  * **Type**_:_Select
* **Sort key**:
  * **Name**: Enter
  * **Type**: Select

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-b0dcff24-1b7b-489c-988e-edcb8fcc28be.png)

11\. In the **Settings** section, select **Customize settings**.

12\. In the **Read/write capacity settings** section, ensure the **Capacity mode** is **Provisioned**, and enter the following:

* **Read capacity**:
  * **Provisioned capacity units**: Enter
* **Write capacity**:
  * **Provisioned capacity units**: Enter

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-94be7946-9efa-4c30-adfd-edeaa2b67f61.png)

13\. Scroll down to the **Secondary indexes** section, and click **Create global index**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-96308291-edc2-43f9-bb33-305879b88822.png)

The **New global secondary index** dialog form will appear.

14\. Enter the following:

* **Partition key**:
  * **Name**: Enter  
  * **Type**: Select
* **Sort key**:
  * **Name**: Enter
  * **Type**: Select
* **Attribute projections**: Select

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-2a541f2e-7bd3-46f7-83c3-87436b01966e.png)

15\. To finish creating the global secondary index, at the bottom, click **Create index**.

16\. Click **Create global index** again and enter the following:

* **Partition key**:
  * **Name**: Enter
  * **Type**: Select
* **Sort key**:
  * **Name**: Enter
  * **Type**: Select
* **Attribute projections**: Select

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-ff09625d-20bd-413b-a54e-2754f197e33c.png)

17\. To finish creating the global secondary index, at the bottom, click **Create index**.

18\. Scroll to the bottom and click **Create table**.

Once again, you will see your table created after roughly 30 seconds.

## Inserting Items Into a DynamoDB Table

1\. In the left-hand menu, click **Explore items**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220214144736-1-27472532-bf0a-480a-a190-361f2de3e7bf.png)

2\. In the **Tables** list, select

You will see nothing under **Items returned** because there are no items stored.

3\. On the right-hand side, click **Create item**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220214144847-2-444e85c6-7bb4-4ff7-8106-c134b251da45.png)

The **Create item** form will load and you will see a list of **Attributes**.

4\. In the **Value** textbox next to **Name - Partition key**, enter a name for your forum (can be anything you wish):

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-6154dbe5-028f-4e60-91f3-4643b67d9504.png)

5\. To add another attribute for this item, click **Add new attribute** and select **String** from the list of types:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220214145008-3-86c3533d-1e28-470a-ae4b-f04ed72f26e7.png)

6\. In the **Attribute name** textbox, enter _Description_ and in the **Value** textbox, enter any value you'd like:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-99bea925-2986-4d59-b1eb-7ec2359403fd.png)

7\. At the bottom, click **Create item**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220214145034-4-cbdc0480-0970-4422-a5f9-db2d70877608.png)

8\. Repeat steps 3-7 three more times so that end up with four entries in the  table:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-5979d5a2-3d63-406e-b6b3-370016bd08b9.png)

9. Select the table and click **Create Item**.

10\. Provide any values you'd like for , and , keeping in mind that the value must match the name of one of your forums.

_Note_:   is a " " table with the  Local Secondary Index. For being able to save a   item, you have to provide:

* (the table Primary Key)
* (the table Sort Key)
* (the Local Secondary Index Sort Key)

_Note_: You will have to click **Add new attribute** to add the **CreationDate** attribute and specify a value.

11\. At the bottom, click **Create item**.

12\. Repeat steps 9-11 three more times until you have four items in the  table:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-ce4059e5-feca-46ff-86d8-31dbfd42807c.png)

## Editing DynamoDB Table Items

1\. On the **Explore items** page, select the  table:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-155a26f2-3a8e-43cf-99c9-a6b37f043a76.png)

2\. Select any item in the table and click on its name to get to the **Item editor** page:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-4a1b4167-e18a-4bca-a3b0-552b44fe9d99.png)

3\. Click inside any value and make an update to its contents:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-3de3567d-5532-4dc1-b5a9-cf1ea304ff9a.png)

_Warning_: Note that modifying the partition key will result in changing the values of the item keys. This will delete and recreate the item with new keys.

4\. At the bottom of the page, click **Save changes**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220214145236-5-85d77722-63c4-48fe-b1de-ab24fdf81cf2.png)

## Querying a DynamoDB Table

1\. In the left-hand menu, click **PartiQL editor**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220214145324-6-84062f64-ea2a-40d6-959a-e29a2cb0fb55.png)

The **PartiQL editor** page will load.

PartiQL is a SQL (Structured Query Language) compatible language for Amazon DynamoDB. As well as querying tables, you can use it to insert new items and update existing ones.

2\. Under **Tables**, click the three dots next to the   and click **Scan table**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-1eab2ac7-4647-4431-90de-8e4fa68fd56d.png)

The **Query 1** editor will be populated with a PartiQL query that selects all items from the  .

3\. To execute the PartiQL table, under the editor, click **Run**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220214145401-7-519dc94f-1b87-45d6-bc28-3f1aa8e73914.png)

4\. Scroll down to see the results under **Items returned**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-ba9ccc1d-4b03-4a20-b519-82356061de24.png)

Notice that you have a choice of viewing the results in tabular form or in JSON (Java Script Object Notation):

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220214145431-8-0c423ab2-2094-4436-8d8b-ba963a0e83d0.png)

5\. To query for a specific item, replace the contents of the **Query 1** editor with the following, and click **Run**:

```sql
SELECT * FROM "Thread" WHERE "Subject" = 'Intro to cool stuff'
```

This time, you will only see items returned that satisfy the value of the `WHERE` condition.

_Note_: Change the value of the `WHERE` condition to match an item you created if you don't see a result.

PartiQL supports most standard features of SQL which means you can query, select, and sort your data in sophisticated ways.

Typically, using the Amazon DynamoDB Console to query items is useful for one-off reports and debugging or troubleshooting. Like most databases, DynamoDB can be accessed programmatically by other systems and software applications through either the AWS SDK (software development kit) or DyanmoDB's HTTP API (application programming interface).

You can learn more about using PartiQL with Amazon DynamoDB by visiting the [Working with PartiQL Query Language](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html) section of the Amazon DynamoDB developer guide.

## Deleting a DynamoDB Table

1\. In the left-hand menu, click **Tables**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-0aac2492-7178-486a-a607-ad9ea8403eee.png)

2\. In the **Tables** table, select the **Thread** table:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-21177ace-c16f-41b0-ac33-53d4f73b0dd2.png)

3\. On the right-hand side, click **Delete**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-37d053b8-e8d6-4794-ab3e-9391404a3129.png)

The **Delete table** confirmation modal will appear.

Notice that you have the ability to create a backup for a table before deleting it.

4\. In the confirmation textbox, enter _delete_ and click **Delete table**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-383f3bac-2d01-47ee-bbe7-fe5bb516ad2a.png)

You will see a message summarizing the deletion:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-7d30e701-f0b7-461a-b56c-9e7cf3336e92.png)

5\. To continue, click **Go to tables**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-70c6198f-06ea-49ec-bf9b-8174d7c272d5.png)

6\. To update the **Tables** table, click the refresh icon:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-8779ea9b-1908-47f6-a6a9-7beccf3668d3.png)

You will now see only two tables listed.

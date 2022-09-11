---
title: DynamoDB
description: Creating a DynamoDB Amazon DynamoDB Table
toc: true
tags:  [aws, dynamodb]
categories: [aws, dynamodb]
date: 2022-09-12
draft: false
weight: 600
awsTag: DynamoDB
featuredImage: https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg
imgWidth: 50px
---

## About

Fast and flexible NoSQL database service for performance with millisecond latency at any scale

- [Amazon DynamoDB documentation](https://aws.amazon.com/dynamodb/)
- [Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

![How DynamoDB works](https://d1.awsstatic.com/product-page-diagram_Amazon-DynamoDBa.1f8742c44147f1aed11719df4a14ccdb0b13d9a3.png)

## Pricing

[Amazon DynamoDB pricing](https://aws.amazon.com/dynamodb/pricing/)

When you use the DynamoDB service, you are charged for reading, writing, and storing data in DynamoDB tables, as well as any additional features you enable. DynamoDB supports two resource provisioning modes that correspond to specific billing schemes for processing read and write operations on your tables: on-demand and with preparation. Click the following links to learn more about the billing options for each provisioning mode

## Use Cases

Type: Key-value

Ecommerce Websites, gaming websites etc.


## Digest

- Global tables are useful for having multiple copies of tables in different region.
- All DynamoDB tables are encrypted at rest using an AWS owned CMK by default.
- A primary key can either be a sinale-attribute partition key or a composite partition-sort key.
- Both partition and sort keys attributes must be defined as type string, number, or binary.
- Global secondary index:
  - Different partition key and sort key from base table
  - Only eventually consistent
  - Can be created after table is created
  - Using a random prefix for the GSI partition key enables to have high cardinality for the partition key
- Local secondary index
  - Same partition key, different sort key from base table
  - Eventual and strongly consistent
  - Should be created when creating a table
- Calculate RCU (read capacity unit) & WCU (write capacity unit):
    - 1 RCU = 2 eventual consistent read of 4 KB, 1 strongly consistent read of 4 KB
    - 1 WCU = 1 write per second for data for an item as large as 1 KB.
- Queries or scan on GSI consume [RCU](https://aws.amazon.com/dynamodb/pricing/provisioned/) on index **not** on table
- Storing session state could be on elastic cache or dynamodb
- Best practices when using **Scan** in dynamodb - **Use parallel scan** 
  - to control the amount of data returned per request use the **Limit parameter**. This can help prevent situations where one worker consumes all the provisioned throuahput at the expense of all other workers
  - DynamoDB does not support item locking, and conditional writes are perfect for implementing optimistic concurrency.


### DynamoDB vs Aurora

 | Amazon DynamoDB                                                                                                                                                | Amazon Aurora                                                             |
 | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
 | Was developed by Amazon in 2012                                                                                                                                | Was developed by Amazon in 2015.                                          |
 | It is hosted, scalable database service by Amazon with data stored in Amazon cloud                                                                             | It is MySQL and PostgreSQL compatible cloud service by Amazon             |
 | It does not provide [concept of Referential Integrity](https://www.ibm.com/docs/en/informix-servers/14.10?topic=integrity-referential). Hence, no Foreign Keys | It provides concept of Referential Integrity. Hence, no Foreign Keys      |
 | Eventual Consistency and Immediate Consistency are used to ensure consistency in distributed system                                                            | Immediate Consistency is used to ensure consistency in distributed system |
 | Its Primary database models are Document store and Key-value store                                                                                             | Its Primary database model is Relational DBMS                             |
 | It does not support Server-side scripting                                                                                                                      | It supports Server-side scripting                                         |
 | It supports sharding as partitioning method                                                                                                                    | Partitioning can be done with horizontal partitioning                     |
 | It does not support SQL query language                                                                                                                         | It supports SQL query language                                            |
 | It supports replication methods                                                                                                                                | It supports only one replication method – Master-slave replication        |
 | It does not offer API for user-defined Map/Reduce methods. But maybe implemented via Amazon Elastic MapReduce                                                  | It does not offer API for user-defined Map/Reduce methods                 |


DynamoDB supports different **consistency models** when performing reads:

- Eventually, [consistent reads](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html) may not always reflect the latest data if there was recently write activity on the table. Since the data in this scenario rarely changes, eventually consistent reads, which are cheaper than strongly consistent reads, can be tolerated. 

![DynamoDB Partition Key](https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2018/09/10/dynamodb-partition-key-1.gif)

![](https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2018/09/10/dynamodb-partition-key-2.gif)

## Practice

[Introduction to DynamoDB](introduction-dynamodb)

## Resources

[AWS Database Blog](https://aws.amazon.com/blogs/database/category/database/amazon-dynamodb/)

## Questions

### Q1

**A developer is designing a web application that allows the users to post comments and receive nearreal-time feedback.**

**Which architectures meet these requirements? (Select TWO.)**

1. Create an AWS AppSync schema and corresponding APIs. Use an Amazon DynamoDB table as the data store.
2. Create a WebSocket API in Amazon API Gateway. Use an AWS Lambda function as the backend and an Amazon DynamoDB table as the data store
3. Create an AWS Elastic Beanstalk application backed by an Amazon RDS database. Configure the application to allow long-lived TCP/IP sockets.
4. Create a GraphQL endpoint in Amazon API Gateway. Use an Amazon DynamoDB table as the data store.
5. Enable WebSocket on Amazon CloudFront. Use an AWS Lambda function as the origin and an Amazon Aurora DB cluster as the data store

<details>
<summary>Explanation</summary>
<div>

[AWS AppSync](https://aws.amazon.com/appsync/) simplifies application development by letting users create a flexible API to securely access, manipulate, and combine data from one or more data sources. AWS AppSync is a managed service that uses GraphQL to make it easy for applications to get the exact data they need. 

AWS AppSync allows users to build scalable applications, including those requiring [real-time updates](https://docs.aws.amazon.com/appsync/latest/devguide/real-time-data.html), on a range of data sources, including Amazon DynamoDB. In [Amazon API Gateway](../api-gateway), users can [create a WebSocket API](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html) as a stateful frontend for an AWS service (such as AWS Lambda or DynamoDB) or for an HTTP endpoint. 

The WebSocket API invokes the backend based on the content of the messages it receives from client applications. Unlike a REST API, which receives and responds to requests, a WebSocket API supports two-way communication between client applications and the backend.

<mark style="color:white">1, 2</mark> 

</div>
</details>
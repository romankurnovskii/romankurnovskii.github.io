---
title: OpenSearch Service 
description: Amazon 
toc: true
tags: [aws, opensearch]
categories: [aws, opensearch]
date: 2022-09-14
weight: 1300
---

## About

OpenSearch Service is a fully managed service that makes it easy to deploy, secure

Amazon OpenSearch Service is an open source, distributed search and analytics suite based on Elasticsearch.

- [Documentation](https://aws.amazon.com/opensearch-service/)
- [User Guide](https://docs.aws.amazon.com/opensearch-service/?id=docs_gateway)

![OpenSearch Service Flow](https://d1.awsstatic.com/product-marketing/Elasticsearch/product-page-diagram_Amazon-OpenSearch-Service_HIW%402x.f20d73b8aa110b5fb6ca1d9ebb439066a5e31ef5.png)

You can load streaming data from the following sources using AWS Lambda event handlers:
- Amazon S3
- Amazon Kinesis Data Streams and Data Firehose
- Amazon DynamoDB
- Amazon CloudWatch
- AWS IoT

Exposes three Elasticsearch logs through CloudWatch Logs:
- error logs.
- search slow logs – These logs help fine tune the performance of any kind of search operation on Elasticsearch.
- index slow logs – These logs provide insights into the indexing process and can be used to fine-tune the index setup.
- Indexing
 - Before you can search data, you must index it. Indexing is the method by which search engines organize data for fast retrieval.
 - the basic unit of data is a JSON document.
- Within an index, Elasticsearch organizes documents into types (arbitrary data categories that you define) and identifies them using a unique ID.

## Price

[Current price](https://aws.amazon.com/opensearch-service/pricing/)

- Has free tier.
- You pay for each hour of use of an EC2 instance and for the cumulative size of any EBS storage volumes attached to your instances.
- You can use Reserved Instances to reduce long term cost on your EC2 instances.

## Use Cases

Type: Analytics

Same type services: Athena, EMR, Redshift, Kinesis, Elasti­csearch Service, Quicksight

- Log Analytics
- Real-Time Application Monitoring
- Security Analytics
- Full Text Search
- Clickstream Analytics

## Practice

[Build A Log Aggregation System in AWS](build-log-aggregation-system)

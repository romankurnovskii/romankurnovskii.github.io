---
title: RDS
description: Set up, operate, and scale a relational database in the cloud with just a few clicks.
toc: true
tags:  [aws, rds]
categories: [aws, rds]
date: 2022-09-12
draft: false
weight: 800
featuredImage: https://cdn.worldvectorlogo.com/logos/aws-rds.svg
imgWidth: 50px
---

## About

- Relational Database Service
- Managed DB service that uses SQL as query language

Amazon Relational Database Service (Amazon RDS) is a collection of managed services that makes it simple to set up, operate, and scale databases in the cloud.

- [Documentation](https://aws.amazon.com/rds/)
- [User Guide](https://docs.aws.amazon.com/rds/?id=docs_gateway)

![](https://d1.awsstatic.com/video-thumbs/RDS/product-page-diagram_Amazon-RDS-Regular-Deployment_HIW-V2.96bc5b3027474538840af756a5f2c636093f311f.png)

Supports **engines**:

- Amazon Aurora with MySQL compatibility: 5432
- Amazon Aurora with PostgreSQL compatibility: 5432
- MySQL: 3306
- MariaDB: 3306
- PostgreSQL: 5432
- Oracle: 1521
- SQL Server: 1433

**Engine modes:**

Used in [CreateDBCluster](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html)

- global
- parallelquery
- serverless
- multimaster

### Backups

- Backups are enabled by default in RDS

**Automated backups**

- Daily full backup (during maintenance window)
- Backups of transaction logs (every 5 minutes)
- 7 days retention (can increase upto 35)

**DB Snapshots**  

- Manually triggered by the user
- Can retain backup as long as you want

### Auto scaling

- When RDS detects you're running out of space, it scales automatically

## Digest

- To verify slowly running queries enable **slow query log**.
- TDE (Transparent data encryption) supports encryption on Microsoft SQL server
- AWS Systems Manager Parameter Store provides secure, hierarchical storage for confiquration data management and secrets management. You can store data such as passwords, database strings, Amazon Machine Image (AMI) IDs, and license codes as
parameter values
- AWS Secrets Manager is an AWS service that can be used to securely **store**, **retrieve**, and automatically **rotate** **database credentials**. AWS Secrets Manager has built-in integration for RDS databases.

## Price

[Current price](https://aws.amazon.com/rds/pricing/)

## Use Cases

Type: Relational

This type services: Aurora, Redshift, RDS

Ecommerce websites, Traditional sites etc.

Amazon Relational Database Service (Amazon RDS) on [AWS Outposts](AWS Outposts) allows you to deploy fully managed database instances in your on-premises environment

## Questions

### Q1

**Explain RDS Multi Availability Zone**

<details>
<summary>Explanation</summary>
<div>

- RDS multi AZ used mainly for disaster recovery purposes
- There is an RDS master instance and in another AZ an RDS standby instance
- The data is synced synchronously between them
- The user, application is accessing one DNS name and where there is a failure with the master instance, the DNS name moves to the standby instance, so the failover done automatically

</div>
</details>

### Q2

**A company is migrating a legacy application to Amazon EC2. The application uses a username and password stored in the source code to connect to a MySQL database. The database will be migrated to an Amazon RDS for MySQL DB instance. As part of the migration, the company wants to implement a secure way to store and automatically rotate the database credentials.**

**Which approach meets these requirements?**

1. Store the database credentials in environment variables in an Amazon Machine Image (AMI). Rotate the credentials by replacing the AMI.
2. Store the database credentials in AWS Systems Manager Parameter Store. Configure Parameter Store to automatically rotate the credentials.
3. Store the database credentials in environment variables on the [EC2](../ec2) instances. Rotate the credentials by relaunching the [EC2](../ec2) instances.
4. Store the database credentials in AWS Secrets Manager. Configure Secrets Manager to automatically rotate the credentials

<details>
<summary>Explanation</summary>
<div>

[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)

Secrets Manager offers [secret rotation](https://aws.amazon.com/blogs/security/rotate-amazon-rds-database-credentials-automatically-with-aws-secrets-manager/)

<mark style="color:white">4</mark> 

</div>
</details>

### Q3

**Explain RDS Multi Availability Zone**

<details>
<summary>Explanation</summary>
<div>

- RDS multi AZ used mainly for disaster recovery purposes
- There is an RDS master instance and in another AZ an RDS standby instance
- The data is synced synchronously between them
- The user, application is accessing one DNS name and where there is a failure with the master instance, the DNS name moves to the standby instance, so the failover done automatically

</div>
</details>

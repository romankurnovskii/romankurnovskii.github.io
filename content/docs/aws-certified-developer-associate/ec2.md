---
title: TODO Amazon EC2
description: Пошаговое руководство по Amazon EC2
toc: true
authors:
  - roman-kurnovskii
tags: [ec2]
categories:
series:
date: "2022-05-21"
lastmod: "2022-05-21"
draft: true
---

# Amazon EC2

[Документация Amazon EC2](https://aws.amazon.com/ru/ec2/)
[Документация Amazon EC2](https://docs.aws.amazon.com/ec2/?id=docs_gateway)


## Цены

[Актуальный прайс](https://aws.amazon.com/ru/ec2/pricing/)


## Практика

## Вопросы

### Вопрос 1

**A company is migrating a legacy application to Amazon EC2. The applicationuses a username and password stored in the source code to connect to a MySQL database. The database will be migrated to an Amazon RDS for MySQL DB instance. As part of the migration, the company wants to implement a secure way to store and automatically rotate the database credentials.**

**Which approach meetsthese requirements?**

- A) Store the database credentialsin environment variables in an Amazon Machine Image (AMI). Rotate the credentials byreplacing the AMI.
- B) Store the database credentials in AWS Systems Manager Parameter Store. Configure Parameter Store to automatically rotate the credentials.
- C) Store the database credentials in environment variables on the EC2 instances. Rotate the credentialsby relaunching the EC2 instances.
- D) Store the database credentials in AWS Secrets Manager. Configure Secrets Manager to automatically rotate the credentials

<details>
<summary>Ответ</summary>
<div>
<h4>Правильный ответ: D</h4>

D – [AWS Secrets Manager](https://aws.amazon.com/ru/secrets-manager/) helps to protect the credentialsneeded to access databases,applications,services, and other IT resources. The service enables usersto easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. Users and applications retrieve secrets with a call to the Secrets Manager APIs, eliminating the need to hardcode sensitive information in plaintext. Secrets Manager offers [secret rotation](https://aws.amazon.com/ru/blogs/security/rotate-amazon-rds-database-credentials-automatically-with-aws-secrets-manager/) with built-in integration for Amazon RDS, Amazon Redshift, and Amazon DocumentDB.

</div>
</details>
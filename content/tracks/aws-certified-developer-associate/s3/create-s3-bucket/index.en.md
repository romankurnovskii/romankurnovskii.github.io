---
title: Create S3 Bucket
description: Create an Amazon S3 Bucket
toc: true
authors: []
tags: [s3]
categories: [s3]
date: 2022-09-11
draft: false
weight: 1
---

## Creating an Amazon S3 Bucket

### Introduction

You can create an Amazon S3 bucket using the AWS Management Console. As with many other AWS services, you can use the AWS API or CLI (command-line interface) as well.

In this lab step, you will create a new Amazon S3 bucket.

### Instructions

1. In the AWS Management Console search bar, enter _S3_, and click the **S3** result under **Services**:

![alt](./img/01.png)

You will be placed in the S3 console.

2. From the S3 console, click the orange **Create Bucket** button:

![alt](./img/buckets.png)

1. Enter a unique **Bucket name** on the **Name and region** screen of the wizard:

![alt](./img/blobid0-49c0e67d-62ee-4e8c-8585-239193b5f81e.png)

* **Region**: US West (Oregon) (This should be set for you. If not, please select this region.)

**_Important!_**Bucket names must be globally unique, regardless of the AWS region in which you create the bucket. Buckets must also be DNS-compliant.

The rules for DNS-compliant bucket names are:

* Bucket names must be at least 3 and no more than 63 characters long.
* Bucket names can contain lowercase letters, numbers, periods, and/or hyphens. Each label must start and end with a lowercase letter or a number.
* Bucket names must not be formatted as an IP address (for example, 192.168.1.1).

The following examples are valid bucket names: calabs-bucket-1, cloudacademybucket , cloudacademy.bucket , calabs.1 or ca-labs-bucket.

_Troubleshooting Tip_: If you receive an error because your bucket name is not unique, append a unique number to the bucket name in order to guarantee its uniqueness:

![alt](./img/image-e4e4ddd3-cb2d-45a3-8fc1-02d7cea49ecf.png)

For example, change "calabs-bucket" to "calabs-bucket-1" (or a unique number/character string) and try again.

4. Leave the **Block public access (bucket settings)** at the default values:

![alt](./img/blobid0-76f03294-d671-4266-a497-e310bfc8c8fc.png)

No changes are needed. This is where you can set public access permissions.

5. Click on **Create bucket:**

![alt](./img/image-20220228115141-2-3bac12a1-3fb8-4b27-8e75-b6a2ea93b730.png)

A page with a table listing buckets will load and you will see a green notification that your bucket was created successfully.

6. In the **Buckets** table, click the name of your bucket in the **Name** column:

![alt](./img/image-20220228115536-3-5843c7d0-1088-4ba1-bf8d-2663810ca62b.png)

A page will load with a row of tabs at the top.

7. To see details and options for your bucket, click on the **Properties**:

![alt](./img/image-20220228115611-4-de3d80bb-7e11-4003-bfd0-a59d3f95f76b.png)

This page allows you to configure your Amazon S3 bucket in many different ways. No changes are needed in this lab at this time.

Feel free to look at the other tabs and see the configuration options that are available.

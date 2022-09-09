---
title: Creating a Folder inside an Amazon S3 Bucket
description: A step-by-step guide to AWS Lambda 
toc: true
authors:
  - roman-kurnovskii
tags:
categories:
series:
date: "2022-05-23"
lastmod: "2022-05-21"
draft: false
weight: 2
---

## Creating a Folder inside an Amazon S3 Bucket

### Introduction

The AWS S3 console allows you to create folders for grouping objects. This can be a very helpful organizational tool. However, in Amazon S3, buckets and objects are the primary resources. A folder simply becomes a prefix for object key names that are virtually archived into it.

### Instructions

1. Return to the **Buckets** menu by [clicking here](https://s3.console.aws.amazon.com/s3/home?region=us-west-2), and click on the `calabs-bucket` you created earlier. (_Reminder_: Your bucket name will differ slightly.)

2. Click **Create folder**:

![alt](./img/image-20220228120115-6-59510218-2d4c-4bca-a2c2-8d79a4652f17.png)

3. In the **Folder name** textbox, enter _cloudfolder_:

![alt](./img/image-306c8dfa-34e7-4168-b41a-8f96b0fd7c43.png)

4. Scroll to the bottom and click **Create folder**:

![alt](./img/image-54956ce9-3da6-42d7-a57d-511dba74804f.png)

The folder is created inside your S3 bucket:

![alt](./img/image-4d8c42e9-e49b-4e95-a586-de932f5366d4.png)

### Summary

In this lab step, you created a folder that can help with organizing objects within an S3 bucket. A folder within a bucket can be helpful programmatically as well. For example, you can configure your application to output certain file types (such as PNG) to a specific folder name (image-output).

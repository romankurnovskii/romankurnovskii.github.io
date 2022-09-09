---
title: Deleting an Amazon S3 Bucket
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
weight: 6
---

## Deleting an Amazon S3 Bucket

### Introduction

You can delete an Amazon S3 bucket using the S3 console. You will delete all objects within the bucket as well.

### Instructions

1. In the AWS Management Console search bar, enter _S3_, and click the **S3** result under **Services**:

![alt](./img/image-20220228115033-1-840be8b6-8c99-45c3-8cb5-4d1e70c84fc4.png)

From the top level of the S3 console, notice the **Delete** button is not actionable.

2. Check the name of your bucket to select it:

![alt](./img/blobid0-f17b8bcf-42b0-4c98-bdac-3695ee02938a.png)

3. With the bucket selected, click **Empty**:

![alt](./img/image-b41ad411-a622-4154-99b1-8af459c4c545.png)

The **Empty bucket** form page will load.

It's not possible to delete a bucket that contains objects.

4. To confirm that you want to delete all objects in this bucket, in the textbox at the bottom, enter _permanently delete_ and click **Empty**:

![alt](./img/image-20220228124624-22-d81be0b0-a202-4e99-b7f1-8f49abca3f64.png)

5. To exit the empty bucket page, at the top-right, click **Exit**:

![alt](./img/image-20220228124706-23-bbcafe95-6fdc-469a-89c3-0ab2088a79b5.png)

You will be returned to the **Buckets** page.

6. To delete your bucket, select it in the list, and click **Delete**

![alt](./img/image-58c91139-1db9-4014-ba05-9cb732477119.png)

7. To confirm that you want to delete the bucket, in the textbox, enter the name of your bucket:

![alt](./img/blobid0-0f08caad-d2e6-4762-ac8b-52516469d856.png)

8. Click **Delete bucket** to delete the bucket.

**_Warning_**: Make sure to delete all the files/folders inside the bucket before deleting it, otherwise AWS won't allow you to delete the S3 bucket.

**_Important!_** Notice the message from AWS: "Amazon S3 buckets are unique. If you delete this bucket, you may lose the bucket name to another AWS user."

If retaining the bucket name is important to you, consider using the **Empty bucket** feature and not actually deleting the bucket.

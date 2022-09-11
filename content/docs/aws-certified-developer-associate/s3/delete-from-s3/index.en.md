---
title: Delete S3 Bucket
description: Delete an Amazon S3 Bucket
toc: true
authors: [roman-kurnovskii]
tags: [s3]
categories: [s3]
date: 2022-09-11
draft: false
weight: 6
---

## Deleting an Amazon S3 Bucket

### Introduction

You can delete an Amazon S3 bucket using the S3 console. You will delete all objects within the bucket as well.

### Instructions

1. In the AWS Management Console search bar, enter _S3_, and click the **S3** result under **Services**:

From the top level of the S3 console, notice the **Delete** button is not actionable.

2. Check the name of your bucket to select it:

3. With the bucket selected, click **Empty**:

The **Empty bucket** form page will load.

It's not possible to delete a bucket that contains objects.

4. To confirm that you want to delete all objects in this bucket, in the textbox at the bottom, enter _permanently delete_ and click **Empty**:

5. To exit the empty bucket page, at the top-right, click **Exit**:

You will be returned to the **Buckets** page.

6. To delete your bucket, select it in the list, and click **Delete**

7. To confirm that you want to delete the bucket, in the textbox, enter the name of your bucket:

8. Click **Delete bucket** to delete the bucket.

**_Warning_**: Make sure to delete all the files/folders inside the bucket before deleting it, otherwise AWS won't allow you to delete the S3 bucket.

**_Important!_** Notice the message from AWS: "Amazon S3 buckets are unique. If you delete this bucket, you may lose the bucket name to another AWS user."

If retaining the bucket name is important to you, consider using the **Empty bucket** feature and not actually deleting the bucket.

---
title: Changing the Metadata of an Amazon S3 Object
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
weight: 5
---

## Changing the Metadata of an Amazon S3 Object

### Introduction

Each object in Amazon S3 has a set of key/value pairs representing its metadata. There are two types of metadata: "System metadata" (for example, Content-Type and Content-Length) and custom "User metadata". User metadata is stored with the object and returned with it.

As an example, you might have your own taxonomy for various images, such as “logo”, “screenshot”, “diagram”, "flowchart" and so on. In this lab step, you will change the Content-Type of your image to "text/plain". You will also create custom user metadata.

_Note_: With the new Amazon S3 UI you can set the metadata as part of the upload process, or add it later.

### Instructions

1. Return to the **cloudfolder/** and delete the **cloudacademy-logo.png** from your Amazon S3 bucket by checking the checkbox and clicking **Delete**:

![alt](./img/image-87c9471c-143a-45de-a659-1901fba4436b.png)

The **Delete objects** form page will load. Because a deleted object is not retrievable, AWS asks you to confirm that you want to delete the object before deletion.

2. In the textbox at the bottom of the page, enter _permanently delete_ and click **Delete objects**:

![alt](./img/image-b9ad0c19-2b9e-4f94-adc9-9dfde51bc8f9.png)

3. To return to the bucket object view, at the top-right, click **Close**.

4. Click **Upload**, then **Add files** and browse to the logo file (or drag-and-drop it into the **Upload** wizard) in order to upload it again.

5. Near the bottom of the page, expand the **Properties** section:

![alt](./img/image-c9a5daa6-6922-414a-a2cf-64432a8d74ca.png)

6. Scroll down to the **Metadata** section and click **Add metadata**:

![alt](./img/image-10d425c5-6654-40f5-ab38-9e428c59437b.png)

 A row of form elements will appear.

7. Enter the following:

* **Type**: Select **System defined**
* **Key**: Select **Content-Type**
* **Value**: Enter _text/plain_

![alt](./img/image-83f67ec1-2f12-454e-b6a0-a3b74b0619da.png)

The drop-down list contains the System metadata that you can set.

In this lab, you have set the content type to text/plain as an example to see how to add metadata to an object when uploading to Amazon S3.

Next you will add custom user metadata. User metadata must be prefaced with "x-amz-meta-". The remaining instructions will add a custom user type for imagetype, and imagestatus.

8. Click **Add metadata** again to add another row. 

9. Enter the following to define custom metadata:

* **Type**: Select **User defined**
* **Key**: Enter _imagetype_ after **x-amz-meta**
* **Value**: Enter _logo_

![alt](./img/image-e1f5d4ea-18ee-4647-8042-7f5162831cac.png)

You have added two metadata key-value pairs to the object you are going to upload. One system metadata and one user-defined.

10. At the bottom of the page, click **Upload**:

![alt](./img/image-0c803796-b5fc-42ee-8af3-8f389ac3203b.png)

11. To exit the upload form, at the top-right, click **Close**.

12. In the **Objects** table click the **cloudacademy-logo.png** object:

![alt](./img/image-20220228124305-20-d6fbc324-5909-4e52-b059-a2cf741810be.png)

13. Scroll down to the **Metadata** section and observe the key-value pairs you added:

![alt](./img/image-20220228124349-21-7908f9ae-20fa-4522-af85-2133691ef916.png)

This is also where you can add, remove, and edit metadata after you have uploaded objects to Amazon S3.

### Summary

In this lab step, you added custom system and user metadata to an object in your S3 bucket.

Custom metadata can be useful. For example, your application could search a specific folder in your S3 bucket for all PNG images that are not "current" (based on custom user metadata), and generate a notification stating there are images that need to be updated.

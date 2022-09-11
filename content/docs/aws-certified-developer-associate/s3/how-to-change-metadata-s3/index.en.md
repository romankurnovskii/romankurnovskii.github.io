---
title: Change metadata of an S3 Object
description: Changing the Metadata of an Amazon S3 Object
toc: true
authors: [roman-kurnovskii]
tags: [s3]
categories: [s3]
date: 2022-09-11
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

The **Delete objects** form page will load. Because a deleted object is not retrievable, AWS asks you to confirm that you want to delete the object before deletion.

2. In the textbox at the bottom of the page, enter _permanently delete_ and click **Delete objects**:

3. To return to the bucket object view, at the top-right, click **Close**.

4. Click **Upload**, then **Add files** and browse to the logo file (or drag-and-drop it into the **Upload** wizard) in order to upload it again.

5. Near the bottom of the page, expand the **Properties** section:

6. Scroll down to the **Metadata** section and click **Add metadata**:

A row of form elements will appear.

7. Enter the following:

* **Type**: Select **System defined**
* **Key**: Select **Content-Type**
* **Value**: Enter _text/plain_

The drop-down list contains the System metadata that you can set.

In this lab, you have set the content type to text/plain as an example to see how to add metadata to an object when uploading to Amazon S3.

Next you will add custom user metadata. User metadata must be prefaced with "x-amz-meta-". The remaining instructions will add a custom user type for imagetype, and imagestatus.

8. Click **Add metadata** again to add another row. 

9. Enter the following to define custom metadata:

* **Type**: Select **User defined**
* **Key**: Enter _imagetype_ after **x-amz-meta**
* **Value**: Enter _logo_

You have added two metadata key-value pairs to the object you are going to upload. One system metadata and one user-defined.

10. At the bottom of the page, click **Upload**:

11. To exit the upload form, at the top-right, click **Close**.

12. In the **Objects** table click the **cloudacademy-logo.png** object:

13. Scroll down to the **Metadata** section and observe the key-value pairs you added:

This is also where you can add, remove, and edit metadata after you have uploaded objects to Amazon S3.

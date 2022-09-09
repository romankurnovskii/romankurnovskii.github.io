---
title: Granting Public Access to an Amazon S3 Object
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
weight: 4
---

## Granting Public Access to an Amazon S3 Object

### Introduction

All uploaded files are private by default and can only be viewed, edited, or downloaded by you. In order to illustrate this point, complete the instructions below.

_Note_: The terms "file" and "object" are often used interchangeably when discussing Amazon S3. Technically, Amazon S3 is an object-store. It is not a block storage device and does not contain a file system as your local computer does. However, files such as images, movies, and sound clips are often uploaded from your file system to Amazon S3.

### Instructions

1. Click on the object you just uploaded to the S3 bucket.

Take a look at the **Object overview** section:

![alt](./img/image-20220228121212-12-cedcb9ed-0099-485a-98a9-6e68747109e5.png)

2. Under **Object URL**, right-click the link and open the URL in a new browser tab:

 You will see an XML (eXtensible Markup Language) response telling you that access is denied for this object:

![alt](./img/blobid0-be5d900b-25a3-43eb-afa1-eb4da5f25128.png)

_Note_: The response may appear differently depending upon your web browser.

Leave the browser tab open. You will return to it shortly.

To allow public access to objects, you need to disable the default safety guards that prevent them from being made publicly accessible.

3. To return to the bucket view, at the top of the page, click the name of your bucket in the bread crumb trail:

![alt](./img/image-20220228121319-13-0bb1dba0-f28f-4288-a5fe-339beeea50df.png)

4. Click the **Permissions** tab and click **Edit** in the **Block public access** section:

![alt](./img/image-20220228121415-14-defdbe75-018f-4a15-a1f3-6c4dee893579.png)

5. Uncheck all of the options to allow all kinds of public access:

![alt](./img/image-6ad96b67-5a5f-4d19-828a-d38e090b7017.png)

You should carefully consider anytime you allow public access to S3 buckets. AWS has implemented these security features to help prevent data breaches. For this lab, there is no sensitive data and you do want to allow public access.

Poorly managed Amazon S3 permissions have been a contributing factor to many unauthorized data access events. AWS is making sure you understand the implications of allowing public access to an Amazon S3 bucket.

6. At the bottom of the page, click **Save changes**:

![alt](./img/image-20220228121508-15-0a40d38d-7d7e-4a2d-842f-4afa87e60f44.png)

A confirmation dialog box will appear.

7. Enter _confirm_ in the confirmation dialog box and click **Confirm**:

![alt](./img/image-5650d73e-dcb5-4e59-abc6-c9b72484084f.png)

You will see a green notification that the public access settings have been edited.

Turning off **Block all public access** does not automatically make objects in an Amazon S3 bucket public. There are several ways of of explicitly granting public access including:

* Bucket policies
* IAM policies
* Access control lists
* Pre-signed URLs

In this lab, you will use a bucket policy to grant public access to your Amazon S3 bucket.

8. Scroll down to the **Bucket policy** section and click **Edit**:

![alt](./img/image-20220228121607-17-7f81cd18-f0d6-419d-9306-279d562d2518.png)

The **Edit bucket policy** page will load. Here you can specify a JSON (JavaScript Object Notation) policy to control access to your Amazon S3 bucket.

9. Replace the contents of the **Policy** editor with the following:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "BUCKET_ARN/*",
      "Principal": "*"
    }
  ]
}
```

This is a permissive policy that allows `GetObject` access to anyone. More restrictive policies are possible such as

* Restricting access to specific principals
* Allow cross AWS account access
* Using conditions to restrict access to a specific IP address

Notice the Resource is currently "BUCKET_ARN/*",  which is causing an error.  We need to replace this with the ARN of the bucket we created:

![alt](./img/image-20220228123715-19-129a5db8-59ca-4478-9727-6fc14b776687.png)

10. Click the copy icon under **Bucket ARN **and replace `BUCKET_ARN` in the value of the `Resource` key with the ARN you just copied :

![alt](./img/image-20220228121856-18-c27533bc-35b1-4fc4-80d7-1f85d1b2f8bd.png)

_Note_: Ensure that you preserve the `/*` at the end of the value. This means that the policy will apply to all objects inside the bucket recursively. Public access won't be granted if this is not present.

12. At the bottom of the page, click **Save changes**:

![alt](./img/image-3719651e-d7a3-4e19-aaa6-5ec560f71285.png)

You will see a green notification that the bucket policy was edited.

13. Return to the browser tab where access was denied and fresh the browser tab.

You will see the response change from “Access Denied” to the logo: 

![alt](./img/blobid2-64a12777-c343-4995-b112-049cad8ec660.png)

### Summary

In this lab step, you made an object in S3 viewable to the public.

This is a common use case, so AWS makes it fairly easy to make objects public. In some production environments, wide-open access to objects (images, video clips, etc.) is not desirable. There are much more granular permissions available on bucket objects, and you should always consider security implications when making objects public.

For example, in your production environment, you may only want to grant read permissions to S3 objects in a specific bucket to EC2 instances you launch, not everyone on the Internet. Or, you may have a need for your customers to view objects, but prohibit downloads and editing, etc.


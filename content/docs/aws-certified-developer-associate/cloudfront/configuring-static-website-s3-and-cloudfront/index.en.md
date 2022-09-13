---
title: Configuring a Static Website With S3 And CloudFront
description: Configuring a Static Website With S3 And CloudFront
toc: true
tags: [aws, elasticache]
date: 2022-05-21
weight: 1
---

## Practice

- [Lab link](https://cloudacademy.com/lab/configuring-static-website-s3-and-cloudfront/)

## Creating an Amazon S3 Bucket for a Static Website

1\. In the AWS Management Console search bar, enter _S3_, and click the **S3** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-7a151f91-f8b4-4198-a748-41c66a569dbb.png)

You will be placed in the Amazon S3 console.

2\. To start creating a new Amazon S3 bucket, in the top-right, click **Create bucket**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-897a8c73-fbbc-4cb2-850c-73ae0c2c166f.png)

The Amazon S3 bucket creation form will load.

3\. Under General configuration, enter the following:

* **Bucket name**: Enter _calabs-bucket-&lt;UniqueNumber&gt; _(Append a unique number to the end of calabs-bucket-)
* **Region**: Ensure **US West (Oregon) us-west-2** is selected

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-a1eb5e1b-1f7a-4f1e-b59d-7c653f9c234f.png)

You have added a unique number to the bucket name because Amazon S3 bucket names must be unique regardless of the AWS region in which the bucket is created.

A bucket name must also be DNS compliant. Here are some of the rules it must adhere to:

* They must be at least 3 and no more than 63 characters long.
* They may contain lowercase letters, numbers, periods, and/or hyphens.
* Each label must start and end with a lowercase letter or a number.
* They cannot be formatted as an IP address (for example, 192.168.1.1).

The following are examples of valid bucket names:

* calabs-bucket-1
* cloudacademybucket
* cloudacademy.bucket
* calabs.1
* ca-labs-bucket

Make a note of the name of your bucket, you will use it later.

4\. Make sure to select **ACLs Enabled**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421155140-1-7729aeab-62f8-4960-86d5-b1043253e876.png)

5\. In the **Block Public Access** section, un-check the **Block all public access** check-box:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-1e5a5a80-7d88-49f9-bd9f-32d3dcb33e7e.png)

6\. To acknowledge that you want to make this bucket publicly accessible, check **I acknowledge that the current settings might result in this bucket and the objects within becoming public**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-72743ad6-61e6-4982-8779-6725c406ced4.png)

7\. To finish creating your Amazon S3 bucket, scroll to the bottom of the form and click **Create bucket**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-dac36bd9-4e0b-4794-9787-0d788ef7e1a9.png)

_Note_: If you see an error because your bucket name is not unique, append a different unique number to the bucket name. For example, change "calabs-bucket" to "calabs-bucket-1" (or a unique number/character string) and click **Create bucket** again.

The **Buckets** list page will load and you will see a notification that your bucket has been created:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-b4b1a3af-28e4-4c4d-a8dc-d9f232954b01.png)

Next, you will enable static website hosting for your bucket.

8\. In the list, click the name of your bucket:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-86a57e47-2d56-4bfe-9c10-70e36e9b974d.png)

You will see an overview of your Amazon S3 bucket, and a row of tabs with **Objects** selected.

9\. In the row of tabs under **Bucket overview**, click **Properties**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-3777675f-a4ed-4421-a453-ff2aa3a4148b.png)

The **Properties** tab allows you to enable and disable various Amazon S3 bucket features, including:

* **Bucket Versioning**: Old versions can be kept when objects are updated
* **Default encryption**: A bucket can be configured to encrypt all objects by default
* **Server access logging**: Web-server style access logs can be enabled
* **Requester pays**: When enabled, the entity downloading data from this bucket will pay data transfer costs incurred

10\. Scroll to the bottom of the **Properties** page and in the **Static website hosting** section, on the right, click **Edit**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-e531a358-1cd8-493b-b473-8bbdd597a182.png)

The **Edit static website hosting** form will load.

11\. In the **Static website hosting** field, select **Enable**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-665b7257-5488-47ce-88fd-385f2f0c4e18.png)

The form will expand to reveal more configuration options.

12\. Enter the following, leaving all other fields at their defaults:

* **Index document**: Enter _index.html_
* **Error document**: Enter _error/index.html_

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-9a026970-552f-4048-9122-f96cec7b1e5b.png)

13\. To finish enabling static website hosting, scroll to the bottom, and click **Save changes**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-c1b9ba47-c8d9-429d-823b-38effeab7540.png)

The bucket overview page will load and you'll see a notification that you have successfully enabled static website hosting:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-1acae611-41f8-420e-aef0-1b9b04e403a0.png)

Your S3 bucket is ready to host content.

Next, you will create a bucket policy that will apply to all objects uploaded to your bucket.

14\. In the row of tabs, click **Permissions**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-b1bd273d-ec23-4b5e-9947-e142463bf575.png)

15\. Scroll down to the **Bucket policy** section, and on the right, click **Edit**.

The **Edit bucket policy** form will load.

Amazon S3 bucket policies are defined in JavaScript Object Notation, commonly referred to as JSON.

16\. In the **Policy** editor, copy and paste the following and replace `YOUR_BUCKET_NAME` with the name of your S3 bucket:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AddPerm",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

This policy will allow public access to all objects in your S3 bucket.

This is a permissive policy. In a non-lab environment, security concerns may require you to implement a more restrictive policy. To learn more about bucket policies, visit the AWS [Policies and Permissions in Amazon S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html).

17\. To save your bucket policy, at the bottom of the page, click **Save changes**.

The bucket overview page will load and you will see a notification that the policy has been edited.

Next, you will download a basic website from a public GitHub repository and load it into your S3 bucket.

18\. To download a zip file containing a basic website, click [here](https://github.com/cloudacademy/static-website-example/archive/master.zip).

This is an example website provided by CloudAcademy that is suitable for static website hosting.

19\. Extract the zip to your local file system.

Exact instructions will vary depending on your operating system and browser. In most browsers, you can click the downloaded file and a file extraction utility will open.

20\. In the row of tabs, click **Objects**.

21\. To begin uploading the website to your Amazon S3 bucket, scroll down and click **Upload**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-3ba6120b-b9b1-4cbf-bca0-f565d63d1709.png)

The **Upload** form will load.

22\. In the **Files and folders** section, click **Add files**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-bf61f1e8-d32d-45bc-bd9c-aa2ed7c1e0af.png)

A file picker will open.

23\. Using the file picker, select all files and folders from inside the zip file you downloaded and extracted earlier.

If your extraction utility extracted the files to a folder called **static-website-example-master**, ensure you upload all the files and folders inside it but not the **static-website-example-master** folder itself. To be able to access the website, the **index.html** file must be at the top-level of your Amazon S3 bucket.

You may find it easier to drag and drop the files and folders onto the **Upload** page instead of using the file picker.

You may also see a browser confirmation dialog asking you to confirm you want to upload the files.

Once selected, the files and folders from the zip file will appear in the **Files and folders** section.

24\. Scroll to the bottom of the page and click **Upload**.

You will see a blue notification displaying the progress of the upload, and when complete you will see a green **Upload succeeded** notification.

25\. To exit the **Upload** form, on the right, click **Close**.

The bucket overview page will load.

Your **Objects** section should look similar to:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-22a40588-81a8-42d7-a412-a436cae6df53.png)

Next, you will test that your website is accessible.

26\. To retrieve the endpoint for your bucket, click the **Properties** tab, scroll to the bottom, and click the copy icon next to the **Bucket website endpoint**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-71b42d84-00b9-4786-abcd-3c890b00745c.png)

27\. Paste the endpoint into the address bar of a new browser tab.

You will see a website load that looks like this:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f82e16a8-bf48-41dd-8537-51dadca74c0e.png)

This website is being served by your Amazon S3 bucket.

## Creating an Amazon CloudFront Distribution for the Static Website


1\. In the AWS Management Console search bar, enter _CloudFront_, and click the **CloudFront** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-1cbf7c5b-ada2-4169-a9f1-08cf0fb62d6d.png)

The Amazon CloudFront console will load.

2\. To start creating a distribution, click **Create a CloudFront Distribution**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-cf223bb2-6bef-40c8-a299-cf86ba4b56e6.png)

3\. Under **Origin**, in the **Origin Domain** text-box, enter the Amazon S3 static website hosting endpoint that you created earlier:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-a65ddf79-4df6-479a-a895-9da323584ca1.png)

4\. Scroll down to the** Settings** settings, in the **Default Root Object** text-box, enter _index.html_:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-47adcf25-c8bb-4839-9ca0-7085917f8bf2.png)

You are setting this field because Amazon CloudFront doesn't always transparently relay requests to the origin. If you did not set a default root object on the distribution you would see an AccessDenied error when you access the CloudFront distribution's domain later in this lab step.

To learn more, see the **How CloudFront Works if You Don't Define a Root Object** section of the AWS developer guide for [Specifying a Default Root Object](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html#DefaultRootObjectNotSet).

5\. Leave all other settings at their default values, scroll to the bottom, and click **Create Distribution**.

The CloudFront distribution list page will load and you will see your distribution listed.

You will see the **Last Modified** of your distribution is **Deploying**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid3-6f284322-536b-41ce-9847-3bfcb54645ee.png)

It can take up to 15 minutes to deploy a new Amazon CloudFront distribution. Once complete, the **Status** will change to **Enabled**.

There are two main types of origin that Amazon CloudFront supports, Amazon S3 buckets, and custom origins. A custom origin could be a website being served by an EC2 instance, or it could be a web server outside of AWS. To learn more while your CloudFront distribution is deploying, visit the AWS [Using Amazon S3 Origins, MediaPackage Channels, and Custom Origins for Web Distributions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html) page. 

Once your deployment is complete, continue with the instructions.

6\. To view details of your distribution, click the random alphanumeric **ID**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-8a62e743-9938-49ee-9682-e77b2ced1aae.png)

_Note_: Your **ID** will be different.

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid4-b17e84b7-555d-4ca6-9a8c-223830b58ee7.png)

7\. Copy the value of the **Distribution Domain Name** field:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid5-21cef212-409a-439f-967e-b7fbea1196a4.png)


8\. Paste the domain name into the address bar of a new browser tab.

You will see the website that you uploaded to your Amazon S3 bucket display:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f82e16a8-bf48-41dd-8537-51dadca74c0e.png)

You are accessing the website through your Amazon CloudFront distribution.

_Note_: The instructions below are optional. Perform them if there is enough time left in the lab.

9\. On the website, click through and visit the different pages a few times to generate traffic.

If you have a different web browser available, try accessing the site in the other browser.

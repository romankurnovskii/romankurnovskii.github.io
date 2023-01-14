---
title: Introduction to CodeCommit
description: Tutorial Introduction to CodeCommit
toc: true
date: 2022-07-06
---

## Lab
[https://cloudacademy.com/lab/introduction-codecommit/](https://cloudacademy.com/lab/introduction-codecommit/)


## Create a repository

1\. In the AWS Management Console search bar, enter _CodeCommit_, and click the **CodeCommit** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid8-d6eda39e-5d7a-42f1-ba2a-9ff32adbe9b1.png)

2\. Click **Create repository**:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-7bf4cd65-51d0-4c0e-a7d2-7e3bfc065eea.png)

3\. In the **Create repository** form enter the following values accepting the defaults for values not specified:

* **Repository name:** _lab-repository_

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/blobid0-9888f6d9-4a8c-4026-9096-240ee81f6275.png)

You can leave the **Description** field empty for this lab. Usually this field would contain a short description of the purpose of the repository. Attaching meaningful descriptions to repositories makes managing large numbers of repositories easier.

4\. Click **Create** to create the repository.

## Creating credentials to access your repository

1. In the AWS Management Console search bar, enter _IAM_, and click the **IAM** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid9-3fcae8c9-b895-431c-be7a-e07458a7c81e.png)

2\. Under **Access Management**, click **Users** in the left-hand sidebar menu:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-c3071b07-262a-4ef6-bc9e-4dece2c76a74.png)

3\. In the IAM user list, click **student**:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-65c97658-6123-414d-8cad-209aeb565aab.png)

4\. Click the **Security credentials** tab:

[![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-197c67f0-5785-4d68-8eeb-d84658a0aae6.png)](https://console.aws.amazon.com/iam/home?region=us-west-2#/home)

5\. Scroll down to the **HTTPS Git credentials for AWS CodeCommit** section and click **Generate credentials**:

[![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-953ff3aa-f6e4-455a-8d3b-dfba7dd83dca.png)](https://console.aws.amazon.com/iam/home?region=us-west-2#/home)

6\. In the box that opens, click **Download credentials**:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-adbc3a7d-afeb-47a3-8fd9-8a8068b5bf83.png)

Your browser will download a file called credentials.csv.

Keep these credentials saved, you will use them in later steps.

## Accessing a shell with Git available

1. In the AWS Management Console search bar, enter _EC2_, and click the **EC2** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-e2ff9b44-657e-4d4d-aff2-74567f20187f.png)

2\. In the left-hand side menu, click **Instances**:

****![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/blobid1-6b05c0d3-f28b-4f96-ba74-f784cc0e2626.png)****

3\. Select the instance and in the row of buttons above the instance list, click **Connect**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-4c15bdaf-7ec0-4fe9-81a8-ab9a3483e32d.png)

4\. In the **Connect to instance** dialog, ensure **EC2 Instance Connect** is selected and enter in the **User name** field:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-bb014d99-7672-4ace-a009-12863be0eb26.png)

5\. To open a shell on this instance, click **Connect**.

EC2 Instance Connect allows you to connect to the instance over SSH using your web browser. With EC2 Instance Connect a new browser window opens an SSH shell on a Linux host that has git installed.

Keep this window open, you will use it in later steps.

## Adding files to your repository

1. **[Navigate to the CodeCommit Console](https://us-west-2.console.aws.amazon.com/codesuite/codecommit/home?region=us-west-2#).**

2\. In the list of repositories, click **lab-repository**:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-55b0588f-4c7d-4487-a140-c4a4892fb0b4.png)

3\. Click **Clone URL** and select **Clone HTTPS** in the drop-down menu that opens:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-81375aed-ab37-4800-8636-e99a0a392d6a.png)

The URL of the repository has been copied to your clipboard.

4\. To copy the repository to your Linux host, in your shell, type `git clone` followed by a space and paste the repository URL: 

```sh
git clone https://git-codecommit.us-west-2.amazonaws.com/v1/repos/lab-repository
```

5\. When prompted, enter the username and password from the credentials file you downloaded in the **Creating credentials to access your repository** step:

****![alt](https://lh3.googleusercontent.com/9eEBVdyCjpcociiU9Y0RsR9Z_PjQD6yg5ohHrg0jotejGL86VC6WOsweyNp-2zrodQLnWsY04MvtVfqyNWC7DZupN7VEv3EbUK4h7jUX5mPTOoa5OYLfbKe0874T1SWielKHL1g0)****

You can ignore the warning about cloning an empty repository.

You have copied the repository from AWS CodeCommit and stored it locally on the Linux host.

6\. To change to the directory of the repository, enter the `cd` command:


```
cd lab-repository
```

7\. To create a file, enter the following command:

```
echo "lab" > lab.txt
```

With this command you have created a file called lab.txt that can be added to your local repository.

8. To add the file to your local repository, enter the following commands:

```
git add lab.txt
git commit -m "Lab commit"
```

In Git terminology, with the first command you are "staging" the file before you commit it. This process enables you to specify which files you want to add to the repository and which ones you want to ignore when committing.

You will see output similar to the following:

****![alt](https://lh4.googleusercontent.com/lGqymmh8MeAVku-0Cntb6jzs_2Xku8kM6km5GCkYmHHhTp6uDzmWLCCV4xnRyutTDRKPc8Y4neCdTC5iwHMK5A0Uurnh6UN97JCc8D7iBF8u7cgxq_3BAW1miqlypZkrW1mTVwkC)****

You can ignore the message about your name and email address. Usually when using Git you will configure the name and email address so that your commits are labeled with these details.

You have added the `lab.txt` file to your local copy of the repository on the Linux host.

## Pushing your commit to your remote repository

1\. In the shell on the Linux host, enter the following command:

```
git push
```

In Git terminology, with this command you are "pushing" your local commit from your "local" repository to the "remote" repository that you "cloned" from.

2\. When prompted, enter the username and password from the credentials file you downloaded in the **Creating credentials to access your repository** step:

****![alt](https://lh6.googleusercontent.com/UYGyBnynHu66kEeCDL47G1he_n1A6DyvZsY75Rfeg4aShqlO1a5I1HMlP3xCp74nRZjrhXsR0Fpnre2nQTNY3H2kgXyQ9Ao51pkLUfZynAWkVlDs8RmsAVhlVpGWEmR6Ix8DEuui)****

You have copied the file from the local repository on the Linux host, to the repository hosted in AWS CodeCommit.

3. **[Navigate to the CodeCommit Console](https://us-west-2.console.aws.amazon.com/codesuite/codecommit/home?region=us-west-2).**

4\. In the **Repositories** list click **lab-repository**:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-55b0588f-4c7d-4487-a140-c4a4892fb0b4.png)

You will see the **lab.txt** file you pushed in the previous Lab step listed.

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/content_engine/image-03c172f9-0828-437c-b0fc-6e351b7aa081.png)

---
title: CodePipeline
description: Amazon CodePipeline Automate continuous delivery pipelines for fast and reliable updates
toc: true
tags: [aws, codepipeline]
categories: [aws, codepipeline]
date: 2022-09-16
weight: 1900
awsTag: CodePipeline
---

## About

AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates.

- [Documentation](https://aws.amazon.com/codepipeline/)
- [User Guide](https://docs.aws.amazon.com/codepipeline/?id=docs_gateway)

CodePipeline automates the build, test, and deploy phases of your release process every time there is a code change, based on the release model you define.

You can easily integrate AWS CodePipeline with third-party services such as GitHub or with your own custom plugin. With AWS CodePipeline, you only pay for what you use.

![CodePipeline Flow](https://d1.awsstatic.com/Products/product-name/diagrams/product-page-diagram_CodePipeLine.7b8dd19eb6478b7f6f747d936c2f0b0b66757bbf.png)

### Alternatives

- Bamboo.
- CircleCI.
- Jenkins.
- Travis CI.
- GitLab.
- TeamCity.
- Azure DevOps Server.
- Google Cloud Build.

### Terminology

**Pipelines**

A workflow that describes how software changes go through the release process.

**Artifacts**

- Files or changes that will be worked on by the actions and stages in the pipeline.
- Each pipeline stage can create “artifacts”.
- Artifacts are passed, stored in Amazon S3, and then passed on to the next stage.

**Stages**

- Pipelines are broken up into stages, e.g., build stage, deployment stage.
- Each stage can have sequential actions and or parallel actions.
- Stage examples would be build, test, deploy, load test etc.
- Manual approval can be defined at any stage.

**Actions**

Stages contain at least one action, these actions take some action on artifacts and will have artifacts as either an input, and output, or both.

**Transitions**

The progressing from one stage to another inside of a pipeline.

## Price

[Current price](https://aws.amazon.com/codepipeline/pricing/)

## Questions

### Q1

**You are configuring a Jenkins project that is installed on an Amazon EC2 instance running a Windows operating system. You want this Jenkins project to integrate with AWS CodePipeline.**

**Which actions should you take to make this function perform correctly? (2 answers)**

1. Restart all Amazon EC2 instances that are running a Windows operating system.
2. Provide the IAM user credentials to integrate AWS CodePipeline.
3. Fill out the required fields for your proxy host.
4. Modify the PATH variable to include the directory where you installed Jenkins on all Amazon EC2 instance that are running a Windows operating system.

<details>
<summary>Explanation</summary>
<div>

[https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html)

<mark style="color:white">2, 3</mark>
</div>
</details>

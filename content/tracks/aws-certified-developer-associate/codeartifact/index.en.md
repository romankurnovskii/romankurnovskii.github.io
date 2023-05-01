---
title: CodeArtifact
description: Amazon CodeArtifact
toc: true
tags: [aws, codeartifact]
categories: [aws, codeartifact]
date: 2022-09-18
weight: 2200
awsTag: CodeArtifact
---


## About

AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations of any size to securely store, publish, and share software packages used in their software development process.

- [Documentation](https://aws.amazon.com/codeartifact/)
- [User Guide](https://docs.aws.amazon.com/codeartifact/?id=docs_gateway)

![Amazon CodeArtifact Flow](https://d1.awsstatic.com/diagrams/CodeArtifact_HIW_Diagram.9640a3361d4c20f79fbca661ee00d6a0ea706316.png)

CodeAr­tifact is a secure storage, publishing, and sharing of software code packages used in a development process organisation's software development. CodeAr­tifact makes it easy for small organisations to store, publish, and share software packages.

CodeArtifact can be configured to automatically fetch software packages and dependencies from public artifact repositories.

CodeArtifact works with commonly used package managers and build tools like Maven, Gradle, npm, yarn, twine, pip, and NuGet making it easy to integrate into existing development workflows.

## Price

Pay only for what you use – the size of the artifacts stored, the number of requests made, and the amount of data transferred out of an AWS Region. CodeArtifact includes a monthly free tier for storage and requests

[Current price](https://aws.amazon.com/codeartifact/pricing/)

## Use Cases

Type: Developer Tools

### Alternatives

- JFrog Artifactory
- Docker hub
- Sonatype Nexus Platform
- Helm
- Azure DevOps Services
- Github

### Usage

```bash
aws codeartifact list-domains --region us-east-1
```

## Practice

[Getting started using the console](https://docs.aws.amazon.com/codeartifact/latest/ug/getting-started-console.html)

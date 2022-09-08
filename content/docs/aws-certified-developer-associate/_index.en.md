---
title: AWS Certified Developer
description: My plan for preparing for and taking the AWS Certified Developer exam
toc: true
authors: [roman-kurnovskii]
tags:
categories: [aws]
series:
date: 2022-09-08
draft: false
featuredImage: "images/aws-cda-intro.en.png"
---


## Criteria

In order to pass the exam, you must score more than 70 (unspecified) points. Criterion will be a minimum threshold of **70/100** points, unless conditions change in preparation.

### Draft plan

1. Find out what the exam requirements are
2. Have a list of topics that will be on the exam
3. Practice each service for comprehension
4. Read extra theory that will not be covered during practice
5. Go through the test general questions
6. Repeat 3-5 repeat until the result of *failed* block greater than 80 points

**Entrypoint:**

- [AWS Certified Developer Exam Information](https://aws.amazon.com/certification/certified-developer-associate/)

## Prepare

The AWS website has [Exam Preparation Guide](https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf)

To pass the exam, you need to know certain services from the 5 domains: `Deployment`, `Security`, `Development with AWS Services`, `Refactoring`, `Monitoring and Troubleshooting`

### List of services on the exam

> Version 2.1 DVA-C01

Analytics:

- Amazon OpenSearch Service (Amazon Elasticsearch Service)
- Amazon Kinesis

Application Integration:

- Amazon EventBridge (Amazon CloudWatch Events)
- Amazon Simple Notification Service (Amazon SNS)
- Amazon Simple Queue Service (Amazon SQS)
- AWS Step Functions

Compute:

- Amazon EC2
- AWS Elastic Beanstalk
- AWS Lambda

Containers:

- Amazon Elastic Container Registry (Amazon ECR)
- Amazon Elastic Container Service (Amazon ECS)
- Amazon Elastic Kubernetes Services (Amazon EKS)

Database:

- Amazon DynamoDB
- Amazon ElastiCache
- Amazon RDS

Developer Tools:

- AWS CodeArtifact
- AWS CodeBuild

AWS CodeCommit

- AWS CodeDeploy
- Amazon CodeGuru
- AWS CodePipeline
- AWS CodeStar
- AWS Fault Injection Simulator
- AWS X-Ray

Management and Governance:

- AWS CloudFormation
- Amazon CloudWatch

Networking and Content Delivery:

- Amazon API Gateway
- Amazon CloudFront
- Elastic Load Balancing

Security, Identity, and Compliance:

- Amazon Cognito
- AWS Identity and Access Management (IAM)
- AWS Key Management Service (AWS KMS)

Storage:

- Amazon S3

### Training plan

Opened a training plan for any tutorial to understand where to start learning. Chose **cloudacademy** service (but for example FreeCodeCamp has a free course with content). 

Another option is to use free [AWS Workshops](https://workshops.aws/)

[AWS Developer - Associate (DVA-C01) Certification Preparation](https://cloudacademy.com/learning-paths/aws-developer-associate-dva-c01-certification-preparation-4364/)

Don't see coverage of the following services, so I add them to the block when related topics are covered:

**Analytics**:

- Amazon Elasticsearch Service (Amazon ES) -> OpenSearch Service

**Developer Tools**:

- AWS CodeArtifact
- AWS Fault Injection Simulator

## My roadmap

The following is my roadmap for the study. There may be adjustments.

<!-- 1. [AWS Identity and Access Management (IAM)](iam)
2. [Amazon EC2](ec2)
3. [AWS Elastic Beanstalk](elasticbeanstalk)
4. [AWS Lambda](lambda)
5. [Amazon S3](s3)
6. [Amazon DynamoDB](dynamodb)
7. [Amazon ElastiCache](elasticache)
8. [Amazon RDS](rds)
9. [Amazon API Gateway](api-gateway)
10. [Amazon CloudFront](cloudfront)
11. [Elastic Load Balancing (ELB)](elasticloadbalancing)
12. [Amazon Kinesis](kinesis)
13. [Amazon OpenSearch Service (Amazon Elasticsearch Service)](opensearch-service)
14. [Amazon CloudWatch](cloudwatch)
15. [AWS CloudFormation](cloudformation)
16. [AWS CodeCommit](codecommit)
17. [AWS CodeDeploy](codedeploy)
18. [AWS CodeBuild](codebuild)
19. [AWS CodePipeline](codepipeline)
20. [Amazon CodeGuru](codeguru)
21. [AWS CodeStar](codestar)
22. [AWS CodeArtifact](codeartifact)
23. [AWS X-Ray](xray)
24. [AWS Fault Injection Simulator](fis)
25. [Amazon Elastic Container Registry (Amazon ECR)](ecr)
26. [Amazon Elastic Container Service (Amazon ECS)](ecs)
27. [AWS Fargate](fargate)
28. [Amazon Elastic Kubernetes Services (Amazon EKS)](eks)
29. [Amazon Cognito](cognito)
30. [AWS Key Management Service (AWS KMS)](kms)
31. [Amazon EventBridge (Amazon CloudWatch Events)](eventbridge)
32. [Amazon Simple Notification Service (Amazon SNS)](sns)
33. [Amazon Simple Queue Service (Amazon SQS)](sqs)
34. [AWS Step Functions](step-functions) -->


1. AWS Identity and Access Management (IAM)
1. Amazon EC2
1. AWS Elastic Beanstalk
1. AWS Lambda
1. Amazon S3
1. Amazon DynamoDB
1. Amazon ElastiCache
1. Amazon RDS
1. Amazon API Gateway
1. Amazon CloudFront
1. Elastic Load Balancing (ELB)
1. Amazon Kinesis
1. Amazon OpenSearch Service (Amazon Elasticsearch Service)
1. Amazon CloudWatch
1. AWS CloudFormation
1. AWS CodeCommit
1. AWS CodeDeploy
1. AWS CodeBuild
1. AWS CodePipeline
1. Amazon CodeGuru
1. AWS CodeStar
1. AWS CodeArtifact
1. AWS X-Ray
1. AWS Fault Injection Simulator
1. Amazon Elastic Container Registry (Amazon ECR)
1. Amazon Elastic Container Service (Amazon ECS)
1. AWS Fargate
1. Amazon Elastic Kubernetes Services (Amazon EKS)
1. Amazon Cognito
1. AWS Key Management Service (AWS KMS)
1. Amazon EventBridge (Amazon CloudWatch Events)
1. Amazon Simple Notification Service (Amazon SNS)
1. Amazon Simple Queue Service (Amazon SQS)
1. AWS Step Functions


## Resources

- [AWS Certified Developer](https://aws.amazon.com/certification/certified-developer-associate/)
- [A brief overview of the official documentation](https://docs.aws.amazon.com/index.html)
- [Exam Preparation Guide](https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf)
- [Sample Exam Questions](https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Sample-Questions.pdf)
- [https://github.com/itsmostafa/certified-aws-developer-associate-notes](https://github.com/itsmostafa/certified-aws-developer-associate-notes)
- [https://github.com/arnaudj/mooc-aws-certified-developer-associate-2020-notes](https://github.com/arnaudj/mooc-aws-certified-developer-associate-2020-notes)
- [FreeCodeCamp Youtube - AWS Certified Developer - Associate 2020](https://www.youtube.com/watch?v=RrKRN9zRBWs)
- [How-To Labs from AWS](https://aws.amazon.com/getting-started/hands-on/?getting-started-all.sort-by=item.additionalFields.sortOrder&getting-started-all.sort-order=asc&awsf.getting-started-category=*all&awsf.getting-started-level=*all&awsf.getting-started-content-type=*all)
- https://amazon.qwiklabs.com/catalog
- https://workshops.aws
- https://wellarchitectedlabs.com/
- https://testseries.edugorilla.com/tests/1359/aws-certified-developer-associate
  
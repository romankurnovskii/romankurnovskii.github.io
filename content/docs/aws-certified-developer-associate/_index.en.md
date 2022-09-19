---
title: AWS Certified Developer
description: My plan for preparing for and taking the AWS Certified Developer exam
toc: true
authors: [roman-kurnovskii]
tags: [aws]
categories: [aws]
series:
date: 2022-09-08
draft: false
featuredImage: "images/aws-cda-intro.en.png"
weight: 1
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
- AWS CodeCommit
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

- AWS Identity and Access Management (IAM)
- Amazon Cognito
- AWS Key Management Service (AWS KMS)

Storage:

- Amazon S3

### Training plan

Opened a training plan for any tutorial to understand where to start learning. Have chosen **cloudacademy** service (but for example FreeCodeCamp has a free course with content). 

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

<!-- 1. 

        19      11


        20      12
25. [Amazon Elastic Container Registry (Amazon ECR)](ecr)
26. [Amazon Elastic Container Service (Amazon ECS)](ecs)


        21      13
27. [AWS Fargate](fargate)

        22      14
28. [Amazon Elastic Kubernetes Services (Amazon EKS)](eks)


    23  15
29. [Amazon Cognito](cognito)

    24  16
30. [AWS Key Management Service (AWS KMS)](kms)


        25      17
31. [Amazon EventBridge (Amazon CloudWatch Events)](eventbridge)
    

        26      18
32. [Amazon Simple Notification Service (Amazon SNS)](sns)
33. [Amazon Simple Queue Service (Amazon SQS)](sqs)

        27      19
34. [AWS Step Functions](step-functions) 


next buy course: https://www.udemy.com/course/aws-certified-developer-associate-practice-exams-amazon/ or similar

check questions
-->


1. [AWS Identity and Access Management (IAM)](iam)
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
25. Amazon Elastic Container Registry (Amazon ECR)
26. Amazon Elastic Container Service (Amazon ECS)
27. AWS Fargate
28. Amazon Elastic Kubernetes Services (Amazon EKS)
29. Amazon Cognito
30. AWS Key Management Service (AWS KMS)
31. Amazon EventBridge (Amazon CloudWatch Events)
32. Amazon Simple Notification Service (Amazon SNS)
33. Amazon Simple Queue Service (Amazon SQS)
34. AWS Step Functions


## Resources

- [AWS Certified Developer](https://aws.amazon.com/certification/certified-developer-associate/)
- [A brief overview of the official documentation](https://docs.aws.amazon.com/index.html)
- [Exam Preparation Guide](https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf)
- [Sample Exam Questions](https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Sample-Questions.pdf)
- [https://github.com/itsmostafa/certified-aws-developer-associate-notes](https://github.com/itsmostafa/certified-aws-developer-associate-notes)
- [https://github.com/arnaudj/mooc-aws-certified-developer-associate-2020-notes](https://github.com/arnaudj/mooc-aws-certified-developer-associate-2020-notes)
- [FreeCodeCamp Youtube - AWS Certified Developer - Associate 2020](https://www.youtube.com/watch?v=RrKRN9zRBWs)
- [How-To Labs from AWS](https://aws.amazon.com/getting-started/hands-on/?getting-started-all.sort-by=item.additionalFields.sortOrder&getting-started-all.sort-order=asc&awsf.getting-started-category=*all&awsf.getting-started-level=*all&awsf.getting-started-content-type=*all)
- [AWS Ramp-Up guides](https://aws.amazon.com/training/ramp-up-guides): Downloadable AWS Ramp-Up Guides offer a variety of resources to help you build your skills and knowledge of the AWS Cloud.
- [Coursera's AWS Courses(Free to enroll via audit)](https://www.coursera.org/aws): AWS also provides various specializations in partnership with coursera
- [AWS Architecture center](https://aws.amazon.com/architecture/?nc2=h_ql_le_arc&cards-all.sort-by=item.additionalFields.sortDate&cards-all.sort-order=desc&awsf.content-type=*all&awsf.methodology=*all&awsf.tech-category=*all&awsf.industries=*all): Provides reference architecture diagrams, vetted architecture solutions, Well-Architected best practices, patterns, icons, and more. This expert guidance was contributed by cloud architecture experts from AWS, including AWS Solutions Architects, Professional Services Consultants, and Partners.
- [AWS Whitepapers](https://aws.amazon.com/whitepapers): Expand your knowledge of the cloud with AWS technical content authored by AWS and the AWS community, including technical whitepapers, technical guides, reference material, and reference architecture diagrams.
- [Back to Basics](https://aws.amazon.com/architecture/back-to-basics): Back to Basics' is a video series that explains, examines, and decomposes basic cloud architecture pattern best practices.
- [AWS Heroes Content Library](https://aws.amazon.com/developer/community/heroes/content-library): AWS Hero authored content including blogs, videos, slide presentations, podcasts, and more.
- https://amazon.qwiklabs.com/catalog
- [AWS Workshops](https://workshops.aws): This website lists workshops created by the teams at Amazon Web Services (AWS). Workshops are hands-on events designed to teach or introduce practical skills, techniques, or concepts which you can use to solve business problems.
- https://wellarchitectedlabs.com/
- https://testseries.edugorilla.com/tests/1359/aws-certified-developer-associate

### Community posts

- https://dev.to/romankurnovskii/aws-certified-developer-associate-prepare-2np
- https://www.reddit.com/user/romankurnovskii/comments/x8rgig/what_is_the_topics_order_to_cover_to_get_prepared/?utm_source=share&utm_medium=web2x&context=3
- https://twitter.com/romankurnovskii/status/1567746601136832512

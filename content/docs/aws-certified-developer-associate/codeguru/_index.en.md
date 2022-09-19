---
title: CodeGuru
description: Automate code reviews and optimize application performance with ML-powered recommendations 
toc: true
tags: [aws, codeguru]
categories: [aws, codeguru]
date: 2022-09-17
weight: 2000
awsTag: CodeGuru
---

## About

Amazon CodeGuru is a developer tool that provides intelligent recommendations to improve code quality and identify an application’s most expensive lines of code.

CodeGuru is a developer tool powered by machine learning that provides intell­igent recomm­end­ations for improving code quality & identi­fying an applic­ation’s most expensive lines of code.

- [Documentation](https://aws.amazon.com/codeguru/)
- [User Guide](https://docs.aws.amazon.com/codeguru/?id=docs_gateway)

![CodeGuru Flow](https://d1.awsstatic.com/products/CodeGuru/Product-Page-Diagram_CodeGuru.4d70717197b2bbd7bb11c44e8c9c351dbc12f821.png)

Amazon CodeGuru is comprised of two services: CoduGuru Reviewer and CodeGuru Profiler. Reviewer is what listens for pull requests in a repository and reviews code changes.

Amazon CodeGuru Reviewer is triggered by pull requests to Code Commit, then makes suggestions as comments in the pull request wherever it sees fit.

Amazon CodeGuru Reviewer generates suggestions in its reviews as comments in pull requests. 

### Type detection

- Security Detection
- Secrets Detection
- Code Quality


### Benefits

**Amazon CodeGuru Reviewer**

- Catch code problems before they hit production
- Fix security vulnerabilities
- Proactively improve code quality with continuous monitoring

**CodeGuru Profiler**

- Troubleshoot performance issues
- Discover anomalies and common issues in your application performance
- Catch your most expensive line of code today

## Price

[Current price](https://aws.amazon.com/codeguru/pricing/)

## Practice

[Automating Code Reviews with Amazon CodeGuru](automating-code-reviews-amazon-codeguru)

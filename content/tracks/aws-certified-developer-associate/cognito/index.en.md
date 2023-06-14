---
title: Cognito
description: Amazon Cognito
toc: true
tags: [aws, "Cognito"]
categories: [aws, "Cognito"]
date: 2022-09-23
weight: 2900
awsTag: 
---

## About

Amazon Cognito - Simple and Secure User Sign-Up, Sign-In, and Access Control

- [Documentation](https://aws.amazon.com/cognito/)
- [User Guide](https://docs.aws.amazon.com/cognito/?id=docs_gateway)

Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect.

Users can sign in directly with a user name and password, or through a third party such as Facebook, Amazon, or Google.

### Alternatives

- Auth0
- Microsoft Azure Active Directory
- OneLogin
- Google Cloud Identity Platform
- IBM Security Verify
- Keycloak

### Terminology

**Credentials**: The temporary security credentials, which include an access key ID, a secret access key, and a security token.

**AssumedRoleUser**: The ARN and the assumed role ID, which are identifiers for the temporary security credentials that you can programatically refer to.

## Price

Pay only for what you use. First 50,000 (monthly active users (MAUs) - Free.

[Current price](https://aws.amazon.com/cognito/pricing/)

## Use Cases

Type: Identity & access management

Same type services: Identity & Access Management (IAM), Single Sign-On, Cognito, Directory Service, Resource Access Manager, Organisations 

### Workflow

The process of authenticating a user with Cognito is as follows:

1. The user signs in with a Web ID provider (Google, Facebook, Amazon, etc.)
2. The Web ID provider returns a JWT token to the user
3. The user application makes an STS API call: sts assume-role-with-web-identity
4. STS returns an API response with the temporary credentials
5. The user application now has AWS access e.g. for S3, DynamoDB, etc.

## Practice

[Manage Authentication with Amazon Cognito](manage-authentication-amazon-cognito)

## Questions

### Q1

**You are deploying Multi-Factor Authentication (MFA) on Amazon Cognito. You have set the verification message to be by SMS. However, during testing, you do not receive the MFA SMS on your device.**

**What action will best solve this issue?**

1. Use AWS Lambda to send the time-based one-time password by SMS
2. Increase the complexity of the password
3. Create and assign a role with a policy that enables Cognito to send SMS messages to users
4. Create and assign a role with a policy that enables Cognito to send Email messages to users

<details>
<summary>Explanation</summary>
<div>

<https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa.html>

<mark style="color:white">3</mark>
</div>
</details>

### Q2

**A developer is adding sign-up and sign-in functionality to an application. The application is required to make an API call to a custom analytics solution to log user sign-in events**

**Which combination of actions should the developer take to satisfy these requirements? (Select TWO.)**

1. Use Amazon Cognito to provide the sign-up and sign-in functionality
2. Use AWS IAM to provide the sign-up and sign-in functionality
3. Configure an [AWS Config](https://aws.amazon.com/config/) rule to make the API call triggered by the post-authentication event
4. Invoke an Amazon API Gateway method to make the API call triggered by the post-authentication event
5. Execute an AWS Lambda function to make the API call triggered by the post-authentication event

<details>
<summary>Explanation</summary>
<div>

[Amazon Cognito](../cognito) adds user sign-up, sign-in, and access control to web and mobile applications quickly and easily. Users can also create an [AWS Lambda](../lambda) function to make an API call to a custom analytics solution and then trigger that function with an Amazon Cognito post authentication trigger.

<mark style="color:white">1, 5</mark>
</div>
</details>

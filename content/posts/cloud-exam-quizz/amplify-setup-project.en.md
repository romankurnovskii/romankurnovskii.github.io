---
title: AWS Amplify - project setup with Github
description: AWS Amplify - Initial setup with Github
toc: false
tags: ["AWS", "AWS Amplify", Github]
series: ["AWS exam quizz"]
categories: ["AWS Amplify"]
date: 2022-10-12
featuredImage: 
# weight: 10
---

## Preface

- For Amplify project I use **eu-west** region
- github repo has to be ready private or public

## New project

1. goto [https://eu-west-1.console.aws.amazon.com/amplify/home?region=eu-west-1#/](https://eu-west-1.console.aws.amazon.com/amplify/home?region=eu-west-1#/)

2. New app → Host web app → Github
    1. Add access to github repo
![github-setup-access](../img/github-setup-access.png)
    1. Select repository
![github-setup-access](../img/github-setup-access-select-repo.png)

3. Come back to Amplify and try again to choose repo
![github-setup-access](../img/amplify-setup-access-select-repo.png)

4. Click **Next**

Update **amplify.yml** for *node.js* project

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - yarn run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

![amplify-yml](../img/amplify-yml.jpg)

5. Next → Save and deploy

Amplify starts to build project and generates project url.

![amplify-build-process](../img/amplify-build-process.png)

Once build done you can open project.

![amplify-success-url](../img/amplify-success-url.png)

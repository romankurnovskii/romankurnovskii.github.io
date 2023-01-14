---
title: Automating Code Reviews with Amazon CodeGuru
description: 
toc: true
authors:
  - roman-kurnovskii
date: 2022-07-06
---

## Lab

- [Automating Code Reviews with Amazon CodeGuru](https://cloudacademy.com/lab/automating-code-reviews-amazon-codeguru/)

## Associating Amazon CodeGuru with a CodeCommit Repository

1\. Navigate to the [Amazon CodeCommit console](https://us-west-2.console.aws.amazon.com/codesuite/codecommit/repositories?region=us-west-2).

2\. Click **java-web-app**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-537419d1-3966-42f8-b41e-abe72c266bce.png)

3\. Notice that at the moment, only a README file has been committed to the master branch. Next, you'll associate CodeGuru with this repository, so that CodeGuru can begin to analyze the code therein.

4\. Go to the [CodeGuru dashboard.](https://us-west-2.console.aws.amazon.com/codeguru/reviewer/#/associations)

5\. Click **Associate Repository and run analysis**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-f4b29bb3-4045-499f-9da7-1eb5cf29e87d.png)

6\. Select **AWS CodeCommit** as the provider, choose **java-web-app** from the repository dropdown, enter _master _into **Source branch** and click **Associate**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220404095359-1-5ca07f22-addb-4ed3-9f52-94ca29b5595b.png)

In roughly one minute, you'll see that CodeGuru has associated with your repository:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-2d79bc2d-bde0-4262-8ad3-704fd23d63b5.png)


## Triggering an Amazon CodeGuru Review

1\. Navigate to  :8080 in your browser. 

 _Note_: This is the IP of an EC2 instance that can be found in the EC2 console.

2\. Click the file icon in the top left to open the file tree:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid3-0bae7586-5911-4930-9610-81ce558461ff.png)

_Note_: During the creation of this lab, two things were performed automatically. One is that the CodeCommit repository you visited earlier was cloned to the directory you're looking at in the IDE now. Another is that the framework for a Java web app was added in addition to the single README you saw. This is so that you can see the benefits of CodeGuru without having to work heavily with code.

In this lab step, you'll push all the new code to the nearly-empty Code Commit repository, to trigger a CodeGuru review.

3\. Open the terminal in your IDE:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-b739c537-039a-4254-bcf2-a41e080a7cf8.png)

4\. In the terminal, add the new files to a Git branch, and commit and push the changes:

```sh
cd /cloudacademy/lab
git add .
git checkout -b trigger_branch
git commit -m "trigger a CodeGuru analysis by pushing Java code"
git push origin trigger_branch
```

This will create a Git commit that includes all the Java files in a branch called `trigger_branch`, so that you can make a pull request in CodeCommit. Since CodeGuru analyses are triggered by pull requests, this is what will trigger a CodeGuru analysis.

5\. Back on the CodeCommit dashboard, click **Create pull request**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220404132138-2-4c13b52f-0959-4fd3-a080-f5a83772d0a7.png)

6\. Set the **Destination** to **master** and the **source** to **trigger_branch** and click **Compare**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220404132208-3-90aa0a6c-0663-4ed4-b349-e7fb1d5ece5d.png)

7\. Type _Trigger a CodeGuru Reviewer Analysis_ into the **Title** field and click **Create pull request**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid4-5b2c50b8-b6bf-4cd8-a528-6222996b8f35.png)

This will create a pull request and trigger a CodeGuru review.

## Viewing Amazon CodeGuru Comments

1\. If you weren't automatically brought to the pull request details page after creating your pull request, click **Pull Requests** beneath **Repositories** on the left side of the page:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-1ae864f3-e8d9-4741-87e3-e0d05a6245e1.png)

2\. Click the only available pull request:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-863ba6ee-b974-4dfb-9aa9-d002ff92d050.png)

3\. Notice the section mentioning CodeGuru Reviewer:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-23ca4bca-5c78-4373-8d1b-89a54963a67a.png)

This section will display in each pull request made in any repository associated with CodeGuru. As of the time this lab was released, CodeGuru is still in preview. As the section on your pull request details tab mentions, because it's in preview mode, CodeGuru can take a while to process a pull request. There isn't a way to track its progress, and you currently won't be alerted when that processing begins or finishes.

4\. Select the **Changes** tab:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-b25c1c16-40e3-49ae-bdfd-f0203bf8a178.png)

5\. In the **Go to file** filter, enter dockerservlet and click the result to navigate to the file:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid1-0bd3607a-2845-47b6-9bb7-497fc1f6653f.png)

You may need to scroll down the page to find the DockerServlet.java file changes. This file is known to have CodeGuru Reviewer comments that usually appear a few minutes after creating the pull request.

6\. Scroll down to line 60 to see an example of a comment from CodeGuru Reviewer (If you don't see any comment you may try refreshing the page every minute until one appears):

![alt](https://assets.cloudacademy.com/bakery/media/uploads/blobid0-b7355e55-55bd-4df7-b479-f6ebf399876d.png)

You can then make updates as you see fit, and submit more pull requests to see if you've addressed CodeGuru's suggestions.

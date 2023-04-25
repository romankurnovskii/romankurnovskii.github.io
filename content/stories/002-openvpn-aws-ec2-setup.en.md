---
title: Setup OpenVPN Server on AWS EC2 Ubuntu
seoTitle: Setup OpenVPN Server on AWS EC2 Ubuntu
description: Setup OpenVPN on AWS EC2
toc: true
tags: [AWS, EC2, CloudFormation, OpenVPN]
series: []
categories: []
date: 2023-04-25
lastmod: 2023-04-25
featuredImage:
authors:
---

Today, I embarked on a journey to create an accessible, affordable, and easy-to-use VPN solution that anyone can set up on their devices using AWS.

Finding a reasonably priced solution was critical. I opted for Amazon's `t3a.nano` ARM Ubuntu image, which costs **~$0.0047**/hour ~ **$3.8**/month.

Various Amazon EC2 instances and their prices are listed on [Amazon's On-Demand Pricing page](https://aws.amazon.com/ec2/pricing/on-demand/).

Here is the [list of all Ubuntu AMI images](https://cloud-images.ubuntu.com/query/bionic/server/released.current.txt) to identify the appropriate image for the project. The selected image combined with the CloudFormation template, which was inspired by the [AWS CloudFormation General Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-general.html), provides a seamless and consistent user experience.

Now it takes 2-3 minutes to create OpenVPN server using this [repo](https://github.com/romankurnovskii/openvpn_ec2_cf_template).

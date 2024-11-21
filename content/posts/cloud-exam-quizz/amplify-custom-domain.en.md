---
title: AWS Amplify - Set custom domain
description: Set custom domain on AWS Amplify
toc: true
tags: ["AWS", "AWS Amplify"]
series: ["AWS exam quizz"]
categories: ["AWS Amplify"]
date: 2022-10-12
featuredImage: 
authors: [roman-kurnovskii]
# weight: 20
---

You can use any custom domain with Amplify and no need register it with [AWS Route53](/en/categories/route-53/).

I am adding domain at the *setup app stage*. Another way is from console.

1. Click **Domain management**.

![amplify-add-custom-domain](../img/amplify-add-custom-domain.png)

or

![amplify-add-custom-domain](../img/amplify-add-custom-domain-01.png)

2. Add domain
3. Write domain name -> Configure domain -> Save

![amplify-add-custom-domain](../img/amplify-add-custom-domain-02.png)

4. Nest starts SSL configuration process. Amplify provides with DNS data that you need to write in the domain register account.

![amplify-add-custom-domain](../img/amplify-add-custom-domain-ssl-config.png)

5. Once SSL creation starts you can get domain data

6. Action -> View DNS records

![amplify-add-custom-domain](../img/amplify-add-custom-domain-ssl-config-start.png)

7. Copy provided data (DNS records) and then set it in the domain registrar panel.

![amplify-add-custom-domain](../img/amplify-dns-records.png)

8. Go to domain registrar
9. Set *dns servers* to default

![amplify-add-custom-domain](../img/domain-registrar-dns-default.png)

10. In my case panel looks like this:

![amplify-add-custom-domain](../img/set-cname-01.png)
![amplify-add-custom-domain](../img/set-cname-02.png)

11. Save
12. Go to amplify and check for updates. Amplify checks DNS server and if everything is correct (CNAME set) it will proceed to the next step.

![amplify-add-custom-domain](../img/amplify-domain-activation-stage.png)

SSL configuration passed, waiting up to 30 min for domain activation

13. Once done we can check url: <https://cloud-exam-prepare.com>

![amplify-add-custom-domain](../img/cloud-exam-prepare-url.png)

Check url: [cloud-exam-prepare.com](https://cloud-exam-prepare.com/)

**Resources:**

- <https://docs.aws.amazon.com/amplify/latest/userguide/to-add-a-custom-domain-managed-by-a-third-party-dns-provider.html>

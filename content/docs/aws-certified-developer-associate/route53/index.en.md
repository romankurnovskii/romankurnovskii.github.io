---
title: Route 53
description: Amazon Route 53 - A reliable and cost-effective way to route end users to Internet applications
toc: true
tags: [aws, "Route 53"]
categories: [aws, "Route 53"]
date: 2022-09-23
weight: 3000
awsTag: 
---

## About

Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. Route 53 connects user requests to internet applications running on AWS or on-premises.

- [Documentation](https://aws.amazon.com/route53/)
- [User Guide](https://docs.aws.amazon.com/route53/?id=docs_gateway)

![](https://d1.awsstatic.com/Route53/product-page-diagram_Amazon-Route-53_HIW%402x.4c2af00405a0825f83fca113352b480b19d9210e.png)

A highly available and scalable Domain Name System (DNS) web service used for domain registration, DNS routing, and health checking.

Can create and manage your public DNS records.

**What is the difference between Route 53 and DNS?**

Your DNS is the service that translates your domain name into an IP address. AWS Route 53 is a smart DNS system that can dynamically change your origin address based on load, and even perform load balancing before traffic even reaches your servers.

### Alternatives

- Cloudflare DNS.
- Google Cloud DNS.
- Azure DNS.
- GoDaddy Premium DNS.
- DNSMadeEasy.
- ClouDNS.
- UltraDNS.
- NS1.

### Routing Policies

- Simple routing policy – route internet traffic to a single resource that performs a given function for your domain. You can’t create multiple records that have the same name and type, but you can specify multiple values in the same record, such as multiple IP addresses.
- Failover routing policy – use when you want to configure active-passive failover.
- Geolocation routing policy – use when you want to route internet traffic to your resources based on the location of your users.
- Geoproximity routing policy – use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another.
  - You can also optionally choose to route more traffic or less to a given resource by specifying a value, known as a bias. A bias expands or shrinks the size of the geographic region from which traffic is routed to a resource.
  - The effect of changing the bias for your resources depends on a number of factors, including the following:
  - The number of resources that you have.
  - How close the resources are to one another.
    - The number of users that you have near the border area between geographic regions.
- Latency routing policy – use when you have resources in multiple locations and you want to route traffic to the resource that provides the best latency.
- IP-based routing policy – use when you want to route traffic based on your users’ locations, and know where the IP address or traffic is coming from.
- Multivalue answer routing policy – use when you want Route 53 to respond to DNS queries with up to eight healthy records selected at random.
- Weighted routing policy – use to route traffic to multiple resources in proportions that you specify.

- When you register a domain or transfer domain registration to Route 53, it configures the domain to renew automatically. The automatic renewal period is typically one year, although the registries for some top-level domains (TLDs) have longer renewal periods.

- When you register a domain with Route 53, it creates a hosted zone that has the same name as the domain, assigns four name servers to the hosted zone, and updates the domain to use those name servers.

## Digest

- Route 53 is AWS DNS service
- Map domain names to EC2 instances, Load Balancers and 53 buckets
- Routing Policies
  - Simple - Traffic routed to a single resource
  - Weighted - Traffic routed to a resource = weight assigned to the resource/sum of all the weights
  - Latency - serves requests from the AWS region with low latency
  - Geographical - routes the traffic based on the location of the request origin
  - Failover - routes traffic to primary when primary healthy; secondary when primary is unhealthy
  - Multivalue Answer - routs randomly to multiple healthy resources
- VPC - private network on AWS platform
  - Subnet, NAT Instance, NAT Gatewav, Internet Gatewav, NACLs, Route Table
- VPC Wizard
  - Single public subnet
  - Public and Private subnet (NAT)
  - Public and private subnet and AWS managed VPN access
  - Private subnet only and AWS managed VPN access
- VPC Peering - helps transfer of data
- VPC Flow logs - helps capture information about incoming/outgoing traffic
- Direct Connect - dedicated connection from on premises network to VPC

## Price

Pay only for what you use.

[Current price](https://aws.amazon.com/route53/pricing/)

## Use Cases

- Domain Registration / transfer
- Manage network traffic globally
- Set up private DNS

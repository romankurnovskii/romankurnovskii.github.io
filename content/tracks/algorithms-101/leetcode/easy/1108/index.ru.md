---
title: 1108. Defanging an IP Address
seoTitle: LeetCode 1108. Defanging an IP Address | Python solution and explanation
description: 1108. Defanging an IP Address
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1108
---

[LeetCode problem 1108](https://leetcode.com/problems/defanging-an-ip-address/)

```python
class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace('.', '[.]')

```

---
title: 2284. Sender With Largest Word Count
seoTitle: LeetCode 2284. Sender With Largest Word Count | Python solution and explanation
description: 2284. Sender With Largest Word Count
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2284
---

[LeetCode problem 2284](https://leetcode.com/problems/sender-with-largest-word-count/)

```python
class Solution:
    def largestWordCount(self, messages: List[str], senders: List[str]) -> str:
        cnt = Counter()
        for msg, sender in zip(messages, senders):
            cnt[sender] += msg.count(' ') + 1
        res = ''
        for sender, v in cnt.items():
            if cnt[res] < v or (cnt[res] == v and res < sender):
                res = sender
        return res

```

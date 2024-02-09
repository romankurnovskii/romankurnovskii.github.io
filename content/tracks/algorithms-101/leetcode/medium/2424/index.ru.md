---
title: 2424. Longest Uploaded Prefix
seoTitle: LeetCode 2424. Longest Uploaded Prefix | Python solution and explanation
description: 2424. Longest Uploaded Prefix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2424
---

[LeetCode problem 2424](https://leetcode.com/problems/longest-uploaded-prefix/)

```python
class LUPrefix:
    def __init__(self, n: int):
        self.r = 0
        self.s = set()

    def upload(self, video: int) -> None:
        self.s.add(video)
        while self.r + 1 in self.s:
            self.r += 1

    def longest(self) -> int:
        return self.r


# Your LUPrefix object will be instantiated and called as such:
# obj = LUPrefix(n)
# obj.upload(video)
# param_2 = obj.longest()

```
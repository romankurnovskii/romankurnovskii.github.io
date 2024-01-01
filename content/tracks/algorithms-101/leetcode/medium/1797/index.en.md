---
title: 1797. Design Authentication Manager
seoTitle: LeetCode 1797. Design Authentication Manager | Python solution and explanation
description: 1797. Design Authentication Manager
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1797
---

[LeetCode problem 1797](https://leetcode.com/problems/design-authentication-manager/)

```python
class AuthenticationManager:
    def __init__(self, timeToLive: int):
        self.t = timeToLive
        self.d = defaultdict(int)

    def generate(self, tokenId: str, currentTime: int) -> None:
        self.d[tokenId] = currentTime + self.t

    def renew(self, tokenId: str, currentTime: int) -> None:
        if self.d[tokenId] <= currentTime:
            return
        self.d[tokenId] = currentTime + self.t

    def countUnexpiredTokens(self, currentTime: int) -> int:
        return sum(exp > currentTime for exp in self.d.values())


# Your AuthenticationManager object will be instantiated and called as such:
# obj = AuthenticationManager(timeToLive)
# obj.generate(tokenId,currentTime)
# obj.renew(tokenId,currentTime)
# param_3 = obj.countUnexpiredTokens(currentTime)

```

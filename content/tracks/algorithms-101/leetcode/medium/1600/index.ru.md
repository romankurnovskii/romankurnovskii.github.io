---
title: 1600. Throne Inheritance
seoTitle: LeetCode 1600. Throne Inheritance | Python solution and explanation
description: 1600. Throne Inheritance
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1600
---

[LeetCode problem 1600](https://leetcode.com/problems/throne-inheritance/)

```python
class ThroneInheritance:
    def __init__(self, kingName: str):
        self.g = defaultdict(list)
        self.dead = set()
        self.king = kingName

    def birth(self, parentName: str, childName: str) -> None:
        self.g[parentName].append(childName)

    def death(self, name: str) -> None:
        self.dead.add(name)

    def getInheritanceOrder(self) -> List[str]:
        def dfs(x):
            if x not in self.dead:
                res.append(x)
            for y in self.g[x]:
                dfs(y)

        res = []
        dfs(self.king)
        return res


# Your ThroneInheritance object will be instantiated and called as such:
# obj = ThroneInheritance(kingName)
# obj.birth(parentName,childName)
# obj.death(name)
# param_3 = obj.getInheritanceOrder()

```

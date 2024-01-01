---
title: 1993. Operations on Tree
seoTitle: LeetCode 1993. Operations on Tree | Python solution and explanation
description: 1993. Operations on Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1993
---

[LeetCode problem 1993](https://leetcode.com/problems/operations-on-tree/)

```python
class LockingTree:
    def __init__(self, parent: List[int]):
        n = len(parent)
        self.locked = [-1] * n
        self.parent = parent
        self.children = [[] for _ in range(n)]
        for son, fa in enumerate(parent[1:], 1):
            self.children[fa].append(son)

    def lock(self, num: int, user: int) -> bool:
        if self.locked[num] == -1:
            self.locked[num] = user
            return True
        return False

    def unlock(self, num: int, user: int) -> bool:
        if self.locked[num] == user:
            self.locked[num] = -1
            return True
        return False

    def upgrade(self, num: int, user: int) -> bool:
        def dfs(x: int):
            nonlocal find
            for y in self.children[x]:
                if self.locked[y] != -1:
                    self.locked[y] = -1
                    find = True
                dfs(y)

        x = num
        while x != -1:
            if self.locked[x] != -1:
                return False
            x = self.parent[x]

        find = False
        dfs(num)
        if not find:
            return False
        self.locked[num] = user
        return True


# Your LockingTree object will be instantiated and called as such:
# obj = LockingTree(parent)
# param_1 = obj.lock(num,user)
# param_2 = obj.unlock(num,user)
# param_3 = obj.upgrade(num,user)

```

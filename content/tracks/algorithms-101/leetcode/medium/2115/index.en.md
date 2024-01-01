---
title: 2115. Find All Possible Recipes from Given Supplies
seoTitle: LeetCode 2115. Find All Possible Recipes from Given Supplies | Python solution and explanation
description: 2115. Find All Possible Recipes from Given Supplies
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2115
---

[LeetCode problem 2115](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)

```python
class Solution:
    def findAllRecipes(
        self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]
    ) -> List[str]:
        g = defaultdict(list)
        indeg = defaultdict(int)
        for a, b in zip(recipes, ingredients):
            for v in b:
                g[v].append(a)
            indeg[a] += len(b)
        q = deque(supplies)
        res = []
        while q:
            for _ in range(len(q)):
                i = q.popleft()
                for j in g[i]:
                    indeg[j] -= 1
                    if indeg[j] == 0:
                        res.append(j)
                        q.append(j)
        return res

```

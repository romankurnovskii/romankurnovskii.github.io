---
title: 2353. Design a Food Rating System
seoTitle: LeetCode 2353. Design a Food Rating System | Python solution and explanation
description: 2353. Design a Food Rating System
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2353
---

[LeetCode problem 2353](https://leetcode.com/problems/design-a-food-rating-system/)

```python
from sortedcontainers import SortedSet


class FoodRatings:
    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        self.mp = {}
        self.t = defaultdict(lambda: SortedSet(key=lambda x: (-x[0], x[1])))

        for a, b, c in zip(foods, cuisines, ratings):
            self.mp[a] = (b, c)
            self.t[b].add((c, a))

    def changeRating(self, food: str, newRating: int) -> None:
        b, c = self.mp[food]
        self.mp[food] = (b, newRating)
        self.t[b].remove((c, food))
        self.t[b].add((newRating, food))

    def highestRated(self, cuisine: str) -> str:
        return self.t[cuisine][0][1]


# Your FoodRatings object will be instantiated and called as such:
# obj = FoodRatings(foods, cuisines, ratings)
# obj.changeRating(food,newRating)
# param_2 = obj.highestRated(cuisine)

```
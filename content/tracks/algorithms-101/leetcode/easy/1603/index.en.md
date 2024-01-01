---
title: 1603. Design Parking System
seoTitle: LeetCode 1603. Design Parking System | Python solution and explanation
description: 1603. Design Parking System
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1603
---

[LeetCode problem 1603](https://leetcode.com/problems/design-parking-system/)

```python
class ParkingSystem:
    def __init__(self, big: int, medium: int, small: int):
        self.cnt = [0, big, medium, small]

    def addCar(self, carType: int) -> bool:
        if self.cnt[carType] == 0:
            return False
        self.cnt[carType] -= 1
        return True


# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)

```

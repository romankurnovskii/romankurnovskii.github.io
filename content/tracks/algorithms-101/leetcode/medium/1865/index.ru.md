---
title: 1865. Finding Pairs With a Certain Sum
seoTitle: LeetCode 1865. Finding Pairs With a Certain Sum | Python solution and explanation
description: 1865. Finding Pairs With a Certain Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1865
---

[LeetCode problem 1865](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/)

```python
class FindSumPairs:
    def __init__(self, nums1: List[int], nums2: List[int]):
        self.nums1 = nums1
        self.nums2 = nums2
        self.cnt = Counter(nums2)

    def add(self, index: int, val: int) -> None:
        old = self.nums2[index]
        self.cnt[old] -= 1
        self.cnt[old + val] += 1
        self.nums2[index] += val

    def count(self, tot: int) -> int:
        return sum(self.cnt[tot - v] for v in self.nums1)


# Your FindSumPairs object will be instantiated and called as such:
# obj = FindSumPairs(nums1, nums2)
# obj.add(index,val)
# param_2 = obj.count(tot)

```

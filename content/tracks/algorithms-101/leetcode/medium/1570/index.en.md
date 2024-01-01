---
title: 1570. Dot Product of Two Sparse Vectors
seoTitle: LeetCode 1570. Dot Product of Two Sparse Vectors | Python solution and explanation
description: 1570. Dot Product of Two Sparse Vectors
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1570
---

[LeetCode problem 1570](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/)

```python
class SparseVector:
    def __init__(self, nums: List[int]):
        self.d = {i: v for i, v in enumerate(nums) if v}

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: "SparseVector") -> int:
        a, b = self.d, vec.d
        if len(b) < len(a):
            a, b = b, a
        return sum(v * b.get(i, 0) for i, v in a.items())


# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# res = v1.dotProduct(v2)

```

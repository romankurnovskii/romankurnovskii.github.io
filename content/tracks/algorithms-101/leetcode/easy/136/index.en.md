---
title: 136. Single Number
seoTitle: LeetCode 136. Single Number | Python solution and explanation
description: 136. Single Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 136
---

[LeetCode problem 136](https://leetcode.com/problems/single-number/)

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        d = {}
        for i in nums:
            if i in d:
                del d[i]
            else:
                d[i]=1
        return d.popitem()[0]
```

Consider using a bit manipulation technique, specifically XOR, to solve this problem efficiently.

The concept of XOR (exclusive OR) operation can be used cleverly here. XOR of a number with itself is 0, and the XOR of a number with 0 is the number itself. Also, XOR operation is commutative and associative, which means the order of operations does not change the result.

## Approach

Using Bit Manipulation:

1. Initialization: Start with a variable, say single, initialized to 0.
1. Iteration: Traverse through each number in the array.
1. Apply XOR operation between single and the current number, and update single with the result.
1. Result: After completing the iteration, single will hold the unique number because all pairs of duplicate numbers will cancel each other out due to the XOR operation, leaving the unique number.

```python
def singleNumber(nums):
    single = 0
    for num in nums:
        single ^= num
    return single
```

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return reduce(xor, nums)
```

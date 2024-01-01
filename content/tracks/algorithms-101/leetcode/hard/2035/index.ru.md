---
title: 2035. Partition Array Into Two Arrays to Minimize Sum Difference
seoTitle: LeetCode 2035. Partition Array Into Two Arrays to Minimize Sum Difference | Python solution and explanation
description: 2035. Partition Array Into Two Arrays to Minimize Sum Difference
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2035
---

[LeetCode problem 2035](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/)

```python
class Solution:
    def minimumDifference(self, nums: List[int]) -> int:
        n = len(nums) >> 1
        f = defaultdict(set)
        g = defaultdict(set)
        for i in range(1 << n):
            s = cnt = 0
            s1 = cnt1 = 0
            for j in range(n):
                if (i & (1 << j)) != 0:
                    s += nums[j]
                    cnt += 1
                    s1 += nums[n + j]
                    cnt1 += 1
                else:
                    s -= nums[j]
                    s1 -= nums[n + j]
            f[cnt].add(s)
            g[cnt1].add(s1)

        res = inf
        for i in range(n + 1):
            fi, gi = sorted(list(f[i])), sorted(list(g[n - i]))
            # min(abs(f[i] + g[n - i]))
            for a in fi:
                left, right = 0, len(gi) - 1
                b = -a
                while left < right:
                    mid = (left + right) >> 1
                    if gi[mid] >= b:
                        right = mid
                    else:
                        left = mid + 1
                res = min(res, abs(a + gi[left]))
                if left > 0:
                    res = min(res, abs(a + gi[left - 1]))
        return res

```

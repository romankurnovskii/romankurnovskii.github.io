---
title: 78. Subsets
description: LeetCode 78. Subsets
seoTitle: LeetCode 78. Subsets | Python soulution and explanation
toc: false
authors:
tags: [Array, "Backtracking", "Bit Manipulation"]
categories: [Algorithms, Medium]
series: [Array, "Backtracking", "Bit Manipulation"]
date: 2023-03-04
featuredImage:
weight: 78
---

[LeetCode problem](https://leetcode.com/problems/subsets/)

In this solution, we start with an empty list in the results array.

For each element in the `nums` array, we append that element to all of the subsets in the results array to create new subsets, and then add these new subsets to the results array.

By doing this for all elements in `nums`, we generate all possible subsets.

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = [[]]
        for i in nums:
            for j in range(len(res)):
                cur = []
                cur.append(i)
                cur.extend(res[j])
                res.append(cur)
        return res
```

**Approach 2:**

```python
class Solution:
  def subsets(self, nums: List[int]) -> List[List[int]]:
    res = []

    def dfs(start: int, path: List[int]) -> None:
      res.append(path)

      for i in range(start, len(nums)):
        dfs(i + 1, path + [nums[i]])

    dfs(0, [])
    return res
```

This is a recursive solution that uses a depth-first search (DFS) approach to generate all possible subsets of the input list `nums`. The function takes two parameters `start` and `path`, where

- `start` represents the starting index of the current subset
- `path` represents the current subset being constructed.

The base case of the recursion is when `start` is greater than or equal to the length of `nums`, at which point the current path is added to the final result `res`.

For each recursive call, the function iterates through the remaining elements of `nums` starting at index `start`, and appends each element to the `path` list. Then, the function recursively calls itself with the next index `i+1` as the new starting point for the next subset, and the updated `path` list.

As the recursion returns, each subset is added to the `res` list, and the `path` list is updated by removing the last element that was added in the previous recursive call.

Finally, the function is initialized with an empty `path` list and a starting index `start` of `0`, and the final `res` list is returned after all subsets have been generated.

**LeetCode Editorial:**

- [Editorial](https://leetcode.com/problems/subsets/editorial/)

- Approach 1: Cascading

![Cascading](https://leetcode.com/problems/subsets/Figures/78/recursion.png)

- Approach 2: Backtracking

![Backtracking](https://leetcode.com/problems/subsets/Figures/78/combinations.png)
![Backtracking](https://leetcode.com/problems/subsets/Figures/78/backtracking.png)

- Approach 3: Lexicographic (Binary Sorted) Subsets
![Lexicographic (Binary Sorted) Subsets](https://leetcode.com/problems/subsets/Figures/78/bitmask4.png)

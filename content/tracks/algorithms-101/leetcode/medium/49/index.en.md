---
title: 49. Group Anagrams
description: LeetCode 49. Group Anagrams
seoTitle: LeetCode 49. Group Anagrams python explanation
toc: true
authors: []
tags: [Array, "Hash table", String, Sorting]
categories: [Algorithms, Medium]
series: [Array, "Hash table", String, Sorting]
date: 2022-12-21
featuredImage:
weight: 49
---

[LeetCode problem](https://leetcode.com/problems/group-anagrams/)

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

**Example 2:**

    Input: strs = [""]
    Output: [[""]]

**Example 3:**

    Input: strs = ["a"]
    Output: [["a"]]

**Idea:**

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dd = {}
        for s in strs:
            s_sort = "".join(sorted(s))
            values = dd.get(s_sort, [])
            values.append(s)
            dd[s_sort] = values
        return dd.values()
```

**Approach 2:**

Intuition:

Two strings are anagrams if and only if their character counts (respective number of occurrences of each character) are the same.

Algorithm:

We can transform each string `s` into a character count, count\text{count}count, consisting of 26 non-negative integers representing the number of `a`'s, `b`'s, z's, etc. We use these counts as the basis for our hash map.

In python, the representation will be a tuple of the counts. For example, `abbccc` will be `(1, 2, 3, 0, 0, ..., 0)`, where again there are 26 entries total.

![example](https://leetcode.com/problems/group-anagrams/solutions/127405/Figures/49_groupanagrams2.png)

```python
class Solution:
    def groupAnagrams(strs):
        res = collections.defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            res[tuple(count)].append(s)
        return res.values()
```

## Resources

- [LeetCode expl](https://leetcode.com/problems/group-anagrams/solutions/127405/group-anagrams/)

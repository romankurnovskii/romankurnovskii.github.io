---
title: 139. Word Break
seoTitle: LeetCode 139. Word Break | Python solution and explanation
description: LeetCode 139. Word Break | Python solution and explanation
toc: true
authors:
tags: 
categories: [Algorithms, Medium]
series:
date: 2023-05-18
lastMod: 2023-05-18
featuredImage:
weight: 139
---

[LeetCode problem](https://leetcode.com/problems/word-break/)

**Approach:**

Dynamic Programming.

**Logic:**

Using DP:

1. Iterate through each character of string `s`.
2. Generate all possible substrings ending at the current index.
3. Check if the substring is in `wordDict`:
   1. If it is, check if the index before the substring's first index is marked as `True` (this indicates that the part of the string before the current substring can be segmented into words in `wordDict`).
      1. If it is, then mark the current index as `True`.

**Solution:**

```python
class Solution:
    def wordBreak(self, s, wordDict):
        n = len(s)
        dp = [False] * n

        for end in range(1, n + 1):  # 1. n+1 to include last char
            for start in range(end): # 2. Generate all substrings ending at i
                substring = s[start:end]
                # 3.1 check if previous part before substring met condition
                prev_substr_end_index = start - 1 # if true then everything before passed condition
                if prev_substr_end_index == -1 or dp[prev_substr_end_index]:  # 3.1
                    if substring in wordDict:  # 3.
                        dp[end - 1] = True
                        break # on current step(end index) we know that meet condition

        return dp[-1]
```

**Optimized solution:**

```python
class Solution:
    def wordBreak(self, s, wordDict):
        n = len(s)
        dp = [False] * (n + 1) # use n+1 list
        dp[0] = True

        for i in range(1, n + 1):
            for j in range(i):
                if dp[j] and s[j:i] in wordDict:
                    dp[i] = True
                    break

        return dp[-1]  
```

{{< video src="../../assets/139.mp4" title="LeetCode Problem 139" >}}

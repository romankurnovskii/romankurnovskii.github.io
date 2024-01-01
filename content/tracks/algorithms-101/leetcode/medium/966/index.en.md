---
title: Vowel Spellchecker
seoTitle: LeetCode Vowel Spellchecker | Python solution and explanation
description: Vowel Spellchecker
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 966
---

[LeetCode problem 966](https://leetcode.com/problems/vowel-spellchecker/)

```python
class Solution:
    def spellchecker(self, wordlist: List[str], queries: List[str]) -> List[str]:
        def f(w):
            t = []
            for c in w:
                t.append("*" if c in "aeiou" else c)
            return "".join(t)

        s = set(wordlist)
        low, pat = {}, {}
        for w in wordlist:
            t = w.lower()
            low.setdefault(t, w)
            pat.setdefault(f(t), w)

        res = []
        for q in queries:
            if q in s:
                res.append(q)
                continue
            q = q.lower()
            if q in low:
                res.append(low[q])
                continue
            q = f(q)
            if q in pat:
                res.append(pat[q])
                continue
            res.append("")
        return res

```

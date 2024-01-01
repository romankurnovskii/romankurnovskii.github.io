---
title: 2416. Sum of Prefix Scores of Strings
seoTitle: LeetCode 2416. Sum of Prefix Scores of Strings | Python solution and explanation
description: 2416. Sum of Prefix Scores of Strings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2416
---

[LeetCode problem 2416](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/)

```python
class Trie:
    def __init__(self):
        self.children = [None] * 26
        self.cnt = 0

    def insert(self, w):
        node = self
        for c in w:
            idx = ord(c) - ord('a')
            if node.children[idx] is None:
                node.children[idx] = Trie()
            node = node.children[idx]
            node.cnt += 1

    def search(self, w):
        node = self
        res = 0
        for c in w:
            idx = ord(c) - ord('a')
            if node.children[idx] is None:
                return res
            node = node.children[idx]
            res += node.cnt
        return res


class Solution:
    def sumPrefixScores(self, words: List[str]) -> List[int]:
        trie = Trie()
        for w in words:
            trie.insert(w)
        return [trie.search(w) for w in words]

```

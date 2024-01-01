---
title: 2185. Counting Words With a Given Prefix
seoTitle: LeetCode 2185. Counting Words With a Given Prefix | Python solution and explanation
description: 2185. Counting Words With a Given Prefix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2185
---

[LeetCode problem 2185](https://leetcode.com/problems/counting-words-with-a-given-prefix/)

```python
class Trie:
    def __init__(self):
        self.children = [None] * 26
        self.cnt = 0

    def insert(self, w):
        node = self
        for c in w:
            i = ord(c) - ord('a')
            if node.children[i] is None:
                node.children[i] = Trie()
            node = node.children[i]
            node.cnt += 1

    def search(self, pref):
        node = self
        for c in pref:
            i = ord(c) - ord('a')
            if node.children[i] is None:
                return 0
            node = node.children[i]
        return node.cnt


class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        tree = Trie()
        for w in words:
            tree.insert(w)
        return tree.search(pref)

```

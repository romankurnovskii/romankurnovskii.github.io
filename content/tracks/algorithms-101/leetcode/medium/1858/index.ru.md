---
title: 1858. Longest Word With All Prefixes
seoTitle: LeetCode 1858. Longest Word With All Prefixes | Python solution and explanation
description: 1858. Longest Word With All Prefixes
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1858
---

[LeetCode problem 1858](https://leetcode.com/problems/longest-word-with-all-prefixes/)

```python
class Trie:
    __slots__ = ["children", "is_end"]

    def __init__(self):
        self.children: List[Trie | None] = [None] * 26
        self.is_end: bool = False

    def insert(self, w: str) -> None:
        node = self
        for c in w:
            idx = ord(c) - ord("a")
            if not node.children[idx]:
                node.children[idx] = Trie()
            node = node.children[idx]
        node.is_end = True

    def search(self, w: str) -> bool:
        node = self
        for c in w:
            idx = ord(c) - ord("a")
            node = node.children[idx]
            if not node.is_end:
                return False
        return True


class Solution:
    def longestWord(self, words: List[str]) -> str:
        trie = Trie()
        for w in words:
            trie.insert(w)
        res = ""
        for w in words:
            if (len(w) > len(res) or len(w) == len(res) and w < res) and trie.search(w):
                res = w
        return res

```

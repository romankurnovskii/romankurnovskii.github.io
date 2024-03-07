---
title: 1804. Implement Trie II (Prefix Tree)
seoTitle: LeetCode 1804. Implement Trie II (Prefix Tree) | Python solution and explanation
description: 1804. Implement Trie II (Prefix Tree)
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1804
---

[LeetCode problem 1804](https://leetcode.com/problems/implement-trie-ii-prefix-tree/)

```python
class Trie:
    def __init__(self):
        self.children = [None] * 26
        self.v = self.pv = 0

    def insert(self, word: str) -> None:
        node = self
        for c in word:
            idx = ord(c) - ord('a')
            if node.children[idx] is None:
                node.children[idx] = Trie()
            node = node.children[idx]
            node.pv += 1
        node.v += 1

    def countWordsEqualTo(self, word: str) -> int:
        node = self.search(word)
        return 0 if node is None else node.v

    def countWordsStartingWith(self, prefix: str) -> int:
        node = self.search(prefix)
        return 0 if node is None else node.pv

    def erase(self, word: str) -> None:
        node = self
        for c in word:
            idx = ord(c) - ord('a')
            node = node.children[idx]
            node.pv -= 1
        node.v -= 1

    def search(self, word):
        node = self
        for c in word:
            idx = ord(c) - ord('a')
            if node.children[idx] is None:
                return None
            node = node.children[idx]
        return node


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.countWordsEqualTo(word)
# param_3 = obj.countWordsStartingWith(prefix)
# obj.erase(word)

```

---
title: 1618. Maximum Font to Fit a Sentence in a Screen
seoTitle: LeetCode 1618. Maximum Font to Fit a Sentence in a Screen | Python solution and explanation
description: 1618. Maximum Font to Fit a Sentence in a Screen
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1618
---

[LeetCode problem 1618](https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/)

```python
# """
# This is FontInfo's API interface.
# You should not implement it, or speculate about its implementation
# """
# class FontInfo(object):
#    Return the width of char ch when fontSize is used.
#    def getWidth(self, fontSize, ch):
#        """
#        :type fontSize: int
#        :type ch: char
#        :rtype int
#        """
#
#    def getHeight(self, fontSize):
#        """
#        :type fontSize: int
#        :rtype int
#        """
class Solution:
    def maxFont(
        self, text: str, w: int, h: int, fonts: List[int], fontInfo: 'FontInfo'
    ) -> int:
        def check(size):
            if fontInfo.getHeight(size) > h:
                return False
            return sum(fontInfo.getWidth(size, c) for c in text) <= w

        left, right = 0, len(fonts) - 1
        res = -1
        while left < right:
            mid = (left + right + 1) >> 1
            if check(fonts[mid]):
                left = mid
            else:
                right = mid - 1
        return fonts[left] if check(fonts[left]) else -1

```

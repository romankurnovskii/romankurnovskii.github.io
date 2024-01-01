---
title: 8. String to Integer (atoi)
seoTitle: LeetCode 8. String to Integer (atoi) | Javacript soulution and explanation
description: LeetCode 8. String to Integer (atoi)
toc: false
authors:
tags: ["LeetCode Top Interview"]
categories: [Algorithms, Medium]
series:
date: 2023-04-29
lastMod: 2023-04-29
featuredImage:
weight: 8
---


[LeetCode problem](https://leetcode.com/problems/string-to-integer-atoi/)

```js
// .js
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let res = 0;
    let num = parseInt(s);
    if(num >= 2147483648){
        res = 2147483647;
    } else if (num <= -2147483648){
        res = -2147483648;
    } else if (isNaN(num)) {
        res = 0;
    } else {
        res = num;
    }

    return res;
};
```

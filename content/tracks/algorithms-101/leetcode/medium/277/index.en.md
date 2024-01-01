---
title: 277. Find the Celebrity
seoTitle: LeetCode 277. Find the Celebrity | Решение на Python
description: LeetCode 277. Найти знаменитость среди группы людей.
toc: true
tags: [LeetCode, Graph, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastMod: 2023-09-08
featuredImage: https://picsum.photos/700/241?grayscale
weight: 277
---

[LeetCode задача 277](https://leetcode.com/problems/find-the-celebrity/)

## Задача

Предположим, у вас есть n человек и их отношения между собой неизвестны. Существует ли такая персона (знаменитость), что все знают её, но она никого не знает?

Имплементируйте функцию `int findCelebrity(n)`, которая вернет знаменитость если она есть, иначе вернёт -1.

Вам дана функция `bool knows(a, b)`, которая скажет вам, знает ли `a` человека `b`.

## Подход

Чтобы найти знаменитость, можно использовать двухпроходный алгоритм. В первом проходе идентифицируем возможную знаменитость. Во втором проходе проверяем эту кандидатуру.

## Алгоритм

1. Инициализируем переменную `candidate` значением 0.
2. Используем один проход для выявления кандидата. Если `knows(candidate, i)` возвращает `True`, переключаем `candidate` на `i`.
3. Второй проход для проверки, является ли `candidate` знаменитостью.

## Решение

```python
class Solution:
    def findCelebrity(self, n: int) -> int:
        candidate = 0           #1
        for i in range(1, n):
            if knows(candidate, i):
                candidate = i

        for i in range(n):      #3
            if i != candidate and (knows(candidate, i) or not knows(i, candidate)):
                return -1

        return candidate
```

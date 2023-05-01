---
title: 1071. Greatest Common Divisor of Strings
seoTitle: LeetCode 1071. Greatest Common Divisor of Strings | Solution in Python
description: LeetCode 1071. Greatest Common Divisor of Strings. Detailed Problem Analysis.
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-07-30
lastmod: 2023-07-30
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1071
---

[LeetCode задача 1071](https://leetcode.com/problems/greatest-common-divisor-of-strings/)

## Задача

Для двух строк `str1` и `str2`, вернуть наибольший общий делитель (НОД). Если такового не существует, вернуть пустую строку.

## Подход

Если строки `str1` и `str2` имеют НОД строки `X`, то `str1` и `str2` могут быть представлены в форме `Xn` и `Xm` (где `n` и `m` — это натуральные числа), соответственно. Это означает, что `str1` должна начинаться с `str2` или наоборот.

## Алгоритм

1. Проверка начала строк: если `str1` не начинается с `str2` или наоборот, то НОД не существует.
2. Вычисление остатка: удаляем начальный фрагмент одной строки, который совпадает с другой строкой. Это будет остаток `remainder`.
3. Рекурсивный вызов: повторяем процедуру для `remainder` и меньшей из двух строк.

## Решение

```python
def gcdOfStrings(str1: str, str2: str) -> str:
    # Если одна строка не начинается с другой, НОД не существует
    if not str1.startswith(str2) and not str2.startswith(str1):
        return ""
    
    # Если строки равны, одна из них является НОД
    if str1 == str2:
        return str1
    
    # Определение более короткой и более длинной строки
    if len(str1) > len(str2):
        longer, shorter = str1, str2
    else:
        longer, shorter = str2, str1
    
    # Вычисление остатка
    remainder = longer[len(shorter):]
    
    # Рекурсивный вызов функции для остатка и более короткой строки
    return gcdOfStrings(remainder, shorter)
```

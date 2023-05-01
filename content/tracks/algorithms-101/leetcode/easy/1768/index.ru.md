---
title: 1768. Merge Strings Alternately
seoTitle: LeetCode 1768. Merge Strings Alternately | Solution in Python
description: LeetCode 1768. Merge Strings Alternately. Detailed Problem Analysis.
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-07-31
lastmod: 2023-07-31
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1768
---

[LeetCode задача 1768](https://leetcode.com/problems/merge-strings-alternately)

## Задача

Вам даны две строки `word1` и `word2`. Объедините эти строки, добавляя буквы в чередующем порядке, начиная с `word1`. Если одна строка длиннее другой, дополнительные буквы добавляются в конец результирующей строки.

## Подход

Чтобы решить эту задачу, мы можем использовать два указателя для каждого слова. Начнем с первого символа каждой строки и будем чередовать их, пока одна из строк не закончится. После этого, мы просто добавляем оставшиеся символы из более длинного слова к результирующей строке.

## Алгоритм

1. Инициализация результирующей строки и двух указателей для `word1` и `word2`.
2. Итерация по каждому слову, добавление соответствующих символов в результирующую строку в чередующем порядке.
3. Добавление оставшихся символов из более длинного слова к результирующей строке.

## Решение

```python
def mergeAlternately(word1: str, word2: str) -> str:
    # Инициализация результирующей строки и указателей
    result = []
    i, j = 0, 0
    
    # Итерация по каждому слову
    while i < len(word1) and j < len(word2):
        result.append(word1[i])
        result.append(word2[j])
        i += 1
        j += 1
    
    # Добавление оставшихся символов
    while i < len(word1):
        result.append(word1[i])
        i += 1
    
    while j < len(word2):
        result.append(word2[j])
        j += 1
    
    return "".join(result)
```

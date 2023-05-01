---
title: 345. Reverse Vowels of a String
seoTitle: LeetCode 345. Reverse Vowels of a String | Решение на Python.
description: LeetCode 345. Reverse the vowels in a given string. Разбор задачи.
toc: true
tags: []
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-05
lastmod: 2023-08-05
featuredImage: https://picsum.photos/700/241?grayscale
weight: 345
---

[LeetCode задача 345](https://leetcode.com/problems/reverse-vowels-of-a-string/)

## Задача

Задана строка `s`. Необходимо перевернуть только гласные буквы в этой строке и вернуть результат.

Гласные буквы: `'a', 'e', 'i', 'o', 'u'`. Они могут встречаться в верхнем и нижнем регистрах, и более одного раза.

## Подсказки

Для решения задачи можно использовать <mark>два указателя</mark>: один с начала строки, другой с конца. Затем можно двигаться этими указателями к центру строки, меняя местами гласные буквы.

## Подход

Используем два указателя для итерации по строке: один с начала (`left`), другой с конца (`right`). Двигаем их к центру, меняя местами гласные буквы, которые они встречают.

## Алгоритм

1. Инициализируем два указателя: `left` на начало строки, `right` на конец.
1. Конвертируем строку в список для удобства манипуляций.
1. Пока `left` < `right`:
   1. Находим следующую гласную букву с начала, двигая `left` вправо.
   2. Находим следующую гласную букву с конца, двигая `right` влево.
   3. Меняем местами гласные буквы.
2. Возвращаем преобразованный список как строку.

## Решение

```python
def reverseVowels(s: str) -> str:
    vowels = set("aeiouAEIOU")  # Создадим множество гласных букв для быстрого поиска
    s_list = list(s)  # Преобразуем строку в список
    
    left, right = 0, len(s) - 1  # указатели
    
    while left < right:
        # Находим следующую гласную с начала строки
        while left < right and s_list[left].lower() not in vowels:
            left += 1
            
        # Находим следующую гласную с конца строки
        while left < right and s_list[right].lower() not in vowels:
            right -= 1
            
        # Меняем гласные местами
        s_list[left], s_list[right] = s_list[right], s_list[left]
        
        # Двигаем указатели
        left += 1
        right -= 1
    
    return "".join(s_list)
```

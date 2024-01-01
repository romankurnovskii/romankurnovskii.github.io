---
title: 443. String Compression
seoTitle: LeetCode 443. String Compression | Решение на Python.
description: LeetCode 443. Сжатие строки с подсчетом повторяющихся символов. Разбор задачи с использованием техники двух указательов.
toc: true
tags: [Two Pointers, Strings, Easy]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-28
lastMod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 443
---

[LeetCode задача 443](<https://leetcode.com/problems/string-compression/>)

## Задача

Дан массив символов `chars`, ваша задача — сжать его с помощью следующего алгоритма: Заменить последовательность одинаковых символов одним символом, за которым идет его количество.

Пример: "aaabbaaa" => "a3b2a3"

## Подход

В этой задаче у нас есть два указателя: один для чтения элементов из исходного массива (`read_ptr`) и второй для записи результата сжатия в тот же массив (`write_ptr`). Сначала оба указателя стоят на начале массива. Далее, `read_ptr` движется вправо, считая количество повторяющихся символов. После подсчета, мы записываем символ и его количество в массив, используя `write_ptr`.

## Алгоритм

1. Инициализируем указатели `read_ptr` и `write_ptr` на начало массива.
2. Пока `read_ptr` не достигнет конца массива:
   - Считаем количество повторяющихся символов, начиная с текущего `read_ptr`.
   - Записываем символ и его количество в массив, используя `write_ptr`.
   - Сдвигаем `write_ptr` на количество записанных символов.
   - Перемещаем `read_ptr` вправо.

## Решение

```python
def compress(chars) -> int:
    read_ptr, write_ptr = 0, 0
    
    while read_ptr < len(chars):
        char = chars[read_ptr]
        count = 0
        
        while read_ptr < len(chars) and chars[read_ptr] == char:
            read_ptr += 1
            count += 1
            
        chars[write_ptr] = char
        write_ptr += 1
        
        if count > 1:
            for digit in str(count):
                chars[write_ptr] = digit
                write_ptr += 1
    
    return write_ptr
```

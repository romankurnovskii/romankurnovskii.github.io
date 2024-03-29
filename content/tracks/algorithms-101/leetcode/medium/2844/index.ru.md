---
title: 2844. Minimum Operations to Make a Special Number
seoTitle: LeetCode 2844. Minimum Operations to Make a Special Number | Python solution and explanation
description: 2844. Minimum Operations to Make a Special Number
toc: true
tags: [Algorithms, Medium, LeetCode]
date: 2023-09-03
lastMod: 2023-09-03
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2844
---

[LeetCode задача 2844](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/)

## Задача

Дана строка `num`, представляющая неотрицательное целое число. За одну операцию вы можете выбрать любую цифру числа `num` и удалить её. Вашей задачей является определить минимальное количество операций, необходимых для преобразования данного числа в "специальное" число.

Число считается "специальным", если оно делится на 25.

## Подход

1. Анализ возможных окончаний числа: Число, делится на 25 если одно из четырёх возможных окончаний: '00', '25', '50', '75'.

    При этом самое последнее число должно быть из двух вариантов: '5' и '0'.

2. Обратный проход по строке: Проходим по строке справа налево, фиксируя наличие символов '5' и '0'.

   Используя эти флаги, ищем возможные окончания '00', '25', '50', '75'.

3. Подсчет операций: В процессе прохода подсчитываем минимальное количество операций, необходимых для получения "специального" числа, точнее, как только найдем оба числа.

Проверка на наличие '0': Если в строке нет '0', то число не может быть "специальным", и количество операций будет равно длине строки. Это случай когда ноль (в случае удаления каждой цифры из числа, остается последним, тогда 0 делится на 25).

## Алгоритм

1. Инициализация переменных для отслеживания наличия '5' и '0'.
1. Обратный проход по строке, поиск возможных окончаний и подсчет операций.
1. Возврат результата.

## Решение

```python
def minimumOperations(num: str) -> int:
    n = len(num)
    # Инициализация переменных для отслеживания наличия '5' и '0'
    had_5 = False
    had_0 = False
    
    # Обратный проход по строке
    for i in range(n - 1, -1, -1):
        if had_0 and num[i] == '0':  # '00'
            return n - i - 2
        if had_0 and num[i] == '5':  # '50'
            return n - i - 2
        if had_5 and num[i] == '2':  # '25'
            return n - i - 2
        if had_5 and num[i] == '7':  # '75'
            return n - i - 2
        
        # Обновление флагов наличия '5' и '0'
        had_0 = had_0 or num[i] == '0'
        had_5 = had_5 or num[i] == '5'
        
    return n - 1 if had_0 else n
```

В некотором смысле такой подход напоминает алгоритм прохождения с двумя указателями. Как только один указатель нашел 0 или 5, он фактически остается на месте, а второй указатель `i` идет дальше к началу строки в поисках второй части искомого числа.

<rawhtml>

</rawhtml>

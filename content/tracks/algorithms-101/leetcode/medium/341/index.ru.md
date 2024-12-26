---
title: 341. Flatten Nested List Iterator
seoTitle: LeetCode 341. Flatten Nested List Iterator | Решение на Python
description: LeetCode 341. Реализация итератора для вложенного списка. Разбор задачи.
date: 2023-08-31
tags: [Design, Medium]
categories: [Algorithms, Medium, LeetCode]
toc: true
lastMod: 2023-08-31
featuredImage: https://picsum.photos/700/241?grayscale
authors: []
weight: 341
---
## Задача

Дан вложенный список целых чисел. Реализуйте итератор, который "разворачивает" этот вложенный список.

## Подход

Задача состоит в реализации итератора, который будет последовательно возвращать все элементы из вложенного списка. Вложенный список может содержать как обычные числа, так и другие вложенные списки. Наивное решение заключается в том, чтобы сначала полностью "развернуть" весь вложенный список в одномерный список, а затем реализовать итератор для этого одномерного списка.

## Алгоритм

1. Инициализация: Создать одномерный список и заполнить его элементами из вложенного списка.
1. next(): Возвращает следующий элемент одномерного списка.
1. hasNext(): Проверяет, остались ли еще элементы для итерации.

## Решение

```python
class NestedIterator:
    def __init__(self, nestedList):
        self.stack = []
        self.flatten(nestedList)
        self.stack.reverse()
    
    # Рекурсивная функция для "разворачивания" вложенного списка
    def flatten(self, nestedList):
        for item in nestedList:
            if item.isInteger():
                self.stack.append(item.getInteger())
            else:
                self.flatten(item.getList())

    def next(self) -> int:
        return self.stack.pop()

    def hasNext(self) -> bool:
        return len(self.stack) > 0
```

В этом решении мы сначала "разворачиваем" весь вложенный список в одномерный список, используя рекурсивную функцию flatten. Затем, для получения следующего элемента и проверки наличия следующего элемента, используются методы next() и hasNext().

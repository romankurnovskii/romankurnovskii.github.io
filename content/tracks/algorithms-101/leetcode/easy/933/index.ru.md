---
title: 933. Number of Recent Calls
seoTitle: LeetCode 933. Number of Recent Calls | Решение на Python.
description: LeetCode 933. Реализация счетчика для подсчета вызовов в последние 3000 миллисекунд. Разбор задачи.
toc: true
tags: [Queue, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-09-01
lastmod: 2023-09-01
featuredImage: https://picsum.photos/700/241?grayscale
weight: 933
---

[LeetCode задача 933](<https://leetcode.com/problems/number-of-recent-calls/>)

## Задача

Реализуйте класс `RecentCounter` для подсчета вызовов `ping` за последние 3000 миллисекунд.

Т.е. для вызова `t=100`, нужно подсчитать количество таких вызовов, время которых меньше `t-3000` и учесть сам вызов.

## Подход

В данной задаче нужно отслеживать количество вызовов `ping` за последние 3000 миллисекунд.

Можно использовать <mark>очередь</mark> для хранения времени вызовов `ping`. При каждом новом вызове будем добавлять текущее время в конец очереди и удалять из начала все времена, которые не попадают в интервал последних 3000 миллисекунд.

Таким образом, размер очереди в любой момент времени будет равен числу вызовов `ping` за последние 3000 миллисекунд.

## Алгоритм

1. Инициализация: создать пустую очередь для хранения времени вызовов `ping`.
2. При каждом вызове `ping(t)`:
   - Добавить `t` в конец очереди.
   - Удалить из начала очереди все элементы, меньшие чем `t - 3000`.
3. Вернуть размер очереди.

## Решение

```python
from collections import deque

class RecentCounter:

    def __init__(self):
        self.queue = deque()

    def ping(self, t: int) -> int:
        self.queue.append(t)
        
        while self.queue[0] < t - 3000:
            self.queue.popleft()
        
        return len(self.queue)
```

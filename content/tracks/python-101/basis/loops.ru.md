---
title: Циклы
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: "2022-06-28"
lastmod: "2022-06-28"
draft: false
weight: 115
---


## Цикл while

Цикл `while` повторяет набор инструкций, пока заданное условие истинно. Каждый раз, когда выполняется набор инструкций, условие проверяется снова, и если оно продолжает быть истинным, то набор инструкций выполняется снова.

```python
i = 1
while i < 6:
    print(i)
    i += 1

1
2
3
4
5
```

## Цикл for

Цикл for используется для прохождения через элементы в последовательности, такой как список или строка. В отличие от цикла `while`, в цикле `for` не нужно определять начальное условие или шаг увеличения.

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)

apple
banana
cherry
```

## Операторы break и continue

Оператор break позволяет выйти из цикла, когда выполнено определенное условие, даже если условие продолжает оставаться истинным.
Оператор continue позволяет пропустить определенные итерации цикла, когда выполняется определенное условие, и продолжить следующую итерацию.

Пример:

```python
i = 0
while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)
    if i == 5:
        break

1
2
4
5
```



## else в циклах

Конструкция `else` в циклах в Python выполняется, когда цикл завершается нормально, то есть без использования оператора break. Если оператор break используется в цикле, то блок кода, указанный после else, не будет выполняться.

В цикле `while`, конструкция `else` будет выполнена, когда условие цикла станет ложным, и все итерации будут выполнены.

В цикле for, конструкция `else` будет выполнена после последней итерации, когда больше нет элементов для итерации.

```python
numbers = [1, 2, 3, 4, 5]

for num in numbers:
    if num == 3:
        print("Found 3")
        break
else:
    print("3 not found")
```

В этом примере, если число 3 найдено в списке numbers, то будет выведено "Found 3". Если число 3 не найдено в списке, то после окончания цикла будет выведено "3 not found".
---
title: Python bitwise operators
description: Python bitwise operators
toc: true
tags: [Python, Programming]
series: []
categories: [Programming, Python]
date: 2022-11-20
featuredImage: https://files.realpython.com/media/rshift.9d585c1c838e.gif
---

## << Left Shift

Moves the bits of its first operand to the left by the number of places specified in its second operand.

![Left Shift](https://files.realpython.com/media/lshift.e06f1509d89f.gif)

- Shifting a **single bit** to the left by one place **doubles its value**.
- Shifting to **two places** to the left by one place **quadruple its value**.

$
a << n = a * 2^n
$

```
>>> 100 << 1
200
>>> 100 << 2
400
>>> 100 << 3
800
```

## >> Right Shift

- The rightmost bits always get dropped.
- Every time you shift a bit to the right by one position, you halve its underlying value.

![Right Shift](https://files.realpython.com/media/rshift.9d585c1c838e.gif)

```
>>> 100 >> 1
50
>>> 100 >> 2
25
>>> 100 >> 3
12
>>> 5 >> 10
0
```

$
a >> n = [a/2^n]
$

- the right shift operator automatically floors the result.

```
>>> 5 >> 1  # Bitwise right shift
2
>>> 5 // 2  # Floor division (integer division)
2
>>> 5 / 2   # Floating-point division
2.5
>>> -2 >> 5
-1
```

## &

```
0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 0
```

For numbers:

`27 & 23`

1. Covert to binary

    `27 -> 11011`
    `23 -> 10111`

2. turns to (in binary)

    `11011 & 10111 = 10011` -> 19

    `27 & 23 = 19`

## Resources

- <https://realpython.com/python-bitwise-operators/>

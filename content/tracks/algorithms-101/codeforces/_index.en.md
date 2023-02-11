---
title: Codeforces
description: Codeforces
toc: true
tags: []
categories: [Algorithms]
series:
date: 2023-02-03
lastmod: 2023-02-09
featuredImage:
draft: false
weight: 40
---

[Python template for contests](/en/tracks/algorithms-101/helpers/#python-template-for-contests)


## Codeforces Round #849 (Div. 4)

- [Contest problems](https://codeforces.com/contest/1791)
- [Editorial](https://codeforces.com/blog/entry/112282)

### A. Codeforces Checking

https://codeforces.com/contest/1791/problem/A

**Solution:**

```python
def solve(letter):
    code = "codeforces"
    if letter in code:
        print("YES")
    else:
        print("NO")

for _ in range(int(input())):
    letter = input()
    solve(letter)
```


### B. Following Directions

https://codeforces.com/contest/1791/problem/B

>  geometry, implementation, *800

**Solution:**

```python
def solve(n, s):
    x = 0
    y = 0
    for move in s:
        if move == 'L':
            x -= 1
        elif move == 'R':
            x += 1
        elif move == 'U':
            y += 1
        elif move == 'D':
            y -= 1
        if x == 1 and y == 1:
            print("YES")
            break
    else:
        print("NO")

for _ in range(int(input())): # attempts
    num = int(input())
    letter = input()
    solve(num, letter)
```


### C. Prepend and Append

https://codeforces.com/contest/1791/problem/C

> mplementation, two pointers, *800

In this problem we are allowed:
- to remove **first** letter of the binary string and **last**.
- We can do this while **first** letter is not equal to the **last** according to the definition of the problem. (*Add 𝟶 to one end of the string and 𝟷 to the other end of the string.*)

**Solution:**

```python
def solve(n, s):
    res = n   
    if res <= 1:
        return 1
    while res > 0:
        first = s[0]
        last = s[-1]
        if first == last:
            return res
        s = s[1:-1]
        res -= 2
    return res

for _ in range(int(input())): # attempts
    n = int(input())
    s = input()
    print(solve(n, s))
```

**Optimized:**

Use [`deque`](https://docs.python.org/3/library/collections.html#collections.deque) from `collection` module

    >>> deque('123')
    deque(['1', '2', '3'])

```python
from collections import deque

def solve(n, s):
    s = deque(s)
    while len(s) and s[0] != s[-1]:
        s.popleft()
        s.pop()
    print(len(s))
```


### D. Distinct Split

https://codeforces.com/contest/1791/problem/D

>  brute force, greedy, strings, *1000

If we get a string `abcabcd` we need to split into two strings.

**Note 1:** result number could not be more than string `length`.

`abcabcd` can be splited into `abc` and `abcd`.
    len('abc') = 3 #3 distinct letters
    len('abcd') = 4
    3 + 4 = 7

Output: maximum possible value of `𝑓(𝑎)+𝑓(𝑏)` such that `𝑎+𝑏=𝑠`.

Let's look at other examples and possible edge cases.

**Note 2:** function for a string 𝑥 - is the number of **distinct** characters. (*From problem statement.*)

    'aaaaa' => 1 # 1 distinct

1. If we concatenate two strings into one `s`, we need to keep order of the letters.
2. Need to split this string `s` in a such a way so that **repeated letters** fall into different parts of string `s` (`a` and `b`).

`abcab` => `abc` and `ab` better that `abca` and `b` because:

    f('abc') = 3    f('abca') = 3
    f('ab') = 2     f('b') = 1
              5   > 4

**Approach 1:**

1. Divide string into two parts starting left part from `len 1`. For example:
    s = 'abcabc'
    a = 'a'
    b = 'bcabc'
2. Increase left part and decrease right part.
   1. On each step calculate sum of distinct letters. For example:
        set(a) + set(b)
        max_result = max(max_result, len(set(a)) + len(set(b)))

**Solution:**

```python
def solve():
    # input
    n = int(input())
    s = input()

    point = 0
    max_n = 0
    a_set = set(s[point])
    b_set = set(s[point+1:])
    while point < n - 1:
        max_n = max(max_n, len(a_set) + len(b_set))
        a_set.add(s[point + 1])
        b_set = set(s[point+2:])
        point += 1
        if max_n == n:
            break
    return max_n

def run():
    for _ in range(inpi()):
        print(solve())

if __name__ == "__main__":
    if os.environ.get("CODE_DEBUG"):
        sys.stdin = open("./input.txt", "r")
        start_time = time.time()
        run()
        print("\n--- %s seconds ---\n" % (time.time() - start_time))
    else:
        run()
```

**Optimization:**

`b_set = set(s[point+2:])` is very heavy on each step in the loop.

Use `Counter` instead.

```python
def solve():
    # input
    n = int(input())
    s = input()

    point = 0
    max_n = 0
    a = set(s[point])
    b = Counter(s[point+1:])
    
    while point < n - 1:
        max_n = max(max_n, len(a) + len(b))
        point += 1
        b_letter = s[point]
        a.add(b_letter)
        b[b_letter] -= 1
        if b[b_letter] <= 0:
            del b[b_letter]
        
        if max_n == n:
            break
    return max_n
```

**Explanation from Codeforces:**

Let's check all splitting points `𝑖` for all (`1≤𝑖≤𝑛−1`). We denote a splitting point as the last index of the first string we take (and all the remaining characters will go to the second string). 
We need to keep a dynamic count of the number of distinct characters in both strings `𝑎` (the first string) and `𝑏` (the second string). 
We can do this using two frequency arrays (and adding one to the distinct count of either string `𝑎` or `𝑏` when the frequency of a character is greater than zero.

### E. Negatives and Positives

https://codeforces.com/contest/1791/problem/E

>  dp, greedy, sortings, *1100

**Explanation from Codeforces:**

We can notice that by performing any number of operations, the parity of the count of negative numbers won't ever change. 

Thus, if the number of negative numbers is initially even, we can make it equal to 0 by performing some operations. 

So, for an even count of negative numbers, the answer is the sum of the absolute values of all numbers (since we can make all of them positive). And if the count of negative numbers is odd, we must have one negative number at the end. We will choose the one smallest by absolute value and keep the rest positive (for simplicity, we consider −0 as a negative number).

**Solution:**

```python
def solve():
    n = inpi()
    a = inpl()

    count_minus = 0
    count_zeros = 0
    min_val = abs(a[0])
    s = 0 # sum

    for i in range(n):
        if a[i] < 0:
            count_minus += 1
        if a[i] == 0:
            count_zeros += 1
        v = abs(a[i])
        s += v
        min_val = min(min_val, v)

    count_minus = count_minus % 2 # if count of odd numbers is negative 
    count_minus -= count_zeros

    if count_minus <= 0:
        return s

    if count_minus == 1:
        s -= abs(min_val * 2)
        return s

    return s


def run():
    for _ in range(inpi()):
        print(solve())
run()
```

**Optimization:**

```python
def solve():
    n = inpi()
    a = inpl()

    count_minus = 0
    for i in range(n):
        if a[i] < 0:
            count_minus += 1
        a[i] = abs(a[i])
    
    s = sum(a) # sum
    if count_minus % 2:
        return s - min(a) * 2
    else:
        return s
```

### TODO F. Range Update Point Query

https://codeforces.com/contest/1791/problem/F

There are two types of inputs (cases) (in addition to array `a` and `n` of test cases):
1. line with **two** elements: `2 x`. Starts with `2`
2. line with **three** elements: `1 l r`. Starts with `1`

In 1st case: print array `a`

In 2nd case: update the value of `𝑎𝑖` to the sum of its digits.

**Slow Solution:**

```python
def sum_of_digits(n):
    sum = 0
    while n:
        sum += n % 10
        n //= 10
    return sum

def solve():
    n, q = map(int, input().split())
    a = list(map(int, input().split()))
    while q:
        q -= 1
        t, *params = map(int, input().split())
        if t == 1:
            l, r = params
            for i in range(l-1, r):
                a[i] = sum_of_digits(a[i])
        else:
            x, = params
            print(a[x-1])

t = int(input().strip())
for _ in range(t): # attempts
    solve()
```

This solution is slow because of loop:

    for i in range(l-1, r):
        a[i] = sum_of_digits(a[i])

The key here is the following: after the operation is applied on **a<sub>i</sub>**


**Good to know**

- [Segment Tree template tutorial](../data-structures/segment-tree)
- [A Visual Introduction to Fenwick Tree | medium](https://medium.com/carpanese/a-visual-introduction-to-fenwick-tree-89b82cac5b3c)
- [Fenwick Tree](https://cp-algorithms.com/data_structures/fenwick.html)
- [Segment Tree](https://cp-algorithms.com/data_structures/segment_tree.html)
- [Дерево отрезков | algorithmica](https://ru.algorithmica.org/cs/segment-tree/)
- [Дерево Фенвика | algorithmica](https://ru.algorithmica.org/cs/range-queries/fenwick/)
- [Дерево Фенвика | habr](https://habr.com/ru/post/112828/)

### TODO G1. Teleporters (Easy Version)
https://codeforces.com/contest/1791/problem/G1

### TODO G2. Teleporters (Hard Version)
https://codeforces.com/contest/1791/problem/G2


## Links

- [Python Visualize/Debug code online](https://pythontutor.com/visualize.html#mode=edit)
- [Python collections.Counter](https://docs.python.org/3/library/collections.html#collections.Counter)
- https://github.com/archishmanghos/DSA-Contests/
- https://github.com/debochdilamo/Competative-Programming/tree/CodeForces-Solutions
- https://github.com/DilamoWondimu/Competative-programming/tree/main/CodeForces-Solutions
- https://github.com/hkirat/Algorithmic-Resources
- https://github.com/valentk777/Competitive-Programming/
- [Competitive Programming Library](https://github.com/cheran-senthil/PyRival)






## Codeforces Round #850 (Div. 2)

https://codeforces.com/contest/1785/
https://codeforces.com/blog/entry/112493
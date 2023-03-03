---
title: Algorithm Patterns
description: LeetCode Cookbook - Algorithms
toc: true
categories: [Algorithms]
tags: []
series: []
date: 2022-10-15
lastmod: 2023-02-12
# featuredImage: https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221017172544/Introduction-to-Data-Structures-and-Algorithms-DSA.png
weight: 30
authors:
published: true
---

## Intro

- [Big-O Cheat Sheet](https://www.30secondsofcode.org/articles/s/big-o-cheatsheet)

## Sort

```python
def insertion_sort(array):
    for i in range(1, len(array)):
        value = array[i]
        while i > 0 and array[i - 1] > value:
            array[i] = array[i - 1]
            i -= 1
            array[i] = value
    return array
```

```python
def selection_sort(array):
    for i in range(len(array) - 1):
        min_value = i
        for j in range(i + 1, len(array)):
            if array[j] < array[min_value]:
                min_value = j
        temp = array[min_value]
        array[min_value] = array[i]
        array[i] = temp
    return array
```

## Binary Search

- [Binary search template](https://leetcode.com/explore/learn/card/binary-search/125/template-i/938/)

```python
def find_target(nums, target):
    left = 0
    right = len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid

        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```

Python build-in module

```python
from bisect import bisect_left

sorted_fruits = ['apple', 'banana', 'orange', 'plum']
bisect_left(sorted_fruits, 'kiwi')

>> 2
```


## Dynamic programming (DP)

## Breadth First Search (BFS)

**BFS on Tree:**
```python
def bfs(root):
    queue = deque([root])
    while len(queue) > 0:
        node = queue.popleft()
        for child in node.children:
            if is_goal(child):
                return FOUND(child)
            queue.append(child)
    return NOT_FOUND
```

**BFS on Graph:**
```python
def bfs(root):
    queue = deque([root])
    visited = set([root])
    while len(queue) > 0:
        node = queue.popleft()
        for neighbor in get_neighbors(node):
            if neighbor in visited:
                continue
            queue.append(neighbor)
            visited.add(neighbor)
```

**BFS on a Matrix:**
```python
num_rows, num_cols = len(grid), len(grid[0])
def get_neighbors(coord):
    row, col = coord
    delta_row = [-1, 0, 1, 0]
    delta_col = [0, 1, 0, -1]
    res = []
    for i in range(len(delta_row)):
        neighbor_row = row + delta_row[i]
        neighbor_col = col + delta_col[i]
        if 0 <= neighbor_row < num_rows and 0 <= neighbor_col < num_cols:
            res.append((neighbor_row, neighbor_col))
    return res

from collections import deque

def bfs(starting_node):
    queue = deque([starting_node])
    visited = set([starting_node])
    while len(queue) > 0:
        node = queue.popleft()
        for neighbor in get_neighbors(node):
            if neighbor in visited:
                continue
            # Do stuff with the node if required
            # ...
            queue.append(neighbor)
            visited.add(neighbor)
```

## Depth-first search (DFS)

**DFS on Tree:**
```python
def dfs(root, target):
    if root is None:
        return None
    if root.val == target:
        return root
    left = dfs(root.left, target)
    if left is not None:
        return left
    return dfs(root.right, target)
```

**DFS on Graph:**
```python
def dfs(root, visited):
    for neighbor in get_neighbors(root):
        if neighbor in visited:
            continue
        visited.add(neighbor)
        dfs(neighbor, visited)
```

## Sliding Window

<mark>**Usage:** Use when need to handle the input data in specific window size.</mark>

![sliding-image](../assets/sliding-image.jpg)

<center><b>Example:</b> Sliding window technique to find the <b>largest</b> sum of 4 consecutive numbers.</center>

**Template:**

```python
while j < size:
    # Calculation's happen's here
    # ...

    if condition < k:
        j+=1
    elif condition == k: # ans <-- calculation
        j+=1
    elif condition > k:
        while condition > k:
            i+=1 # remove calculation for i
        j+=1
return ans
```

**Examples**

**Problem:** Find the largest sum of K consecutive entries, given an array of size N

1. Add the first `K` components together and save the result in the `currentSum` variable. Because this is the first sum, it is also the current maximum; thus, save it in the variable `maximumSum`.
2. As the window size is `ww`, we move the window one place to the right and compute the sum of the items in the window.
3. Update the maximum if the `currentSum` is greater than the `maximumSum`, and repeat step 2.

```python
def max_sum(arr, k):
	n = len(arr)    # length of the array

	# length of array must be greater
        # window size
	if n < k:
		print("Invalid")
		return -1

	# sum of first k elements
	window_sum = sum(arr[:k])
	max_sum = window_sum

	# remove the  first element of previous
	# window and add the last element of
	# the current window to calculate the 
    # the sums of remaining windows by
	for i in range(n - k):
		window_sum = window_sum - arr[i] + arr[i + k]
		max_sum = max(window_sum, max_sum)

	return max_sum


arr = [16, 12, 9, 19, 11, 8]
k = 3
print(max_sum(arr, k))
```

**Problem:** Find duplicates within a range ‘k’ in an array

    Input: nums = [5, 6, 8, 2, 4, 6, 9]
    k = 2
    Ouput: False

```python
def get_duplicates(nums, k):
    d = {}
    count = 0
    for i in range(len(nums)):
        if nums[i] in d and i - d[nums[i]] <= k:
            return True
        else:
            d[nums[i]] = i
    
    return False
```

- [Problem/solution examples](https://itnext.io/sliding-window-algorithm-technique-6001d5fbe8b3)
- [Article on LeetCode](https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4502/)
- [Practice questions](/en/tags/sliding-window/)

## Two Pointers

A classic way of writing a two-pointer sliding window. The right pointer keeps moving to the right until it cannot move to the right (the specific conditions depend on the topic). When the right pointer reaches the far right, start to move the left pointer to release the left boundary of the window. 

<mark>**Usage:** Use two pointers to iterate the input data. Generally, both pointers move in the opposite direction at a constant interval.</mark>

![two-pointers.jpg](../assets/two-pointers.jpg)

- [Practice questions](/en/tags/two-pointers/)
- [Two pointers intro](https://algo.monster/problems/two_pointers_intro)

## Backtracking

Based on [Depth-first search (DFS)](#depth-first-searchdfs)

Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time.

Backtracking algorithm is derived from the Recursion algorithm, with the option to revert if a recursive solution fails, i.e. in case a solution fails, the program traces back to the moment where it failed and builds on another solution. So basically it tries out all the possible solutions and finds the correct one.

> **Backtracking == DFS on a tree**

**Usage:**

Finding all permutations, combinations, subsets and solving sudoku are classic combinatorial problems.

**Howto:**

1. Backtracking is drawing tree
2. When drawing the tree, bear in mind:
   - how do we know if we have reached a solution?
   - how do we branch (generate possible children)?

![backtracking example](https://algomonster.s3.us-east-2.amazonaws.com/backtracking/ab2_combination+(1).jpg)

**Template:**


*Pattern template:*

```python
def backtrack(some_len_data):
    result = []

    def dfs(left, right):
        if isCondition:
            result.append("WhatNeeded")
        if left > 0:
            dfs(left-1, right)
        if left < right:
            dfs(left, right-1)

    dfs(some_len_data)
    return result
```

**Full with comments:**

```python
    def backtrack(A):
        # Set up a list of list to hold all possible solutions
        result = []
        if A == None or len(A) == 0):
            return result

        # As we need to recursively generate every solution,
        # a variable is needed to store single solution.
        solution = []

        # The process of constructing the solution corresponds exactly to
        # doing a Depth-First-Search of the backtrack tree. Viewing backtracking
        # as a Depth-First-Search on a tree yields a natural recursive implementation
        # of the algorithm.
        dfs(result, solution, A, 0)
        return result

    def dfs(result, solution, A, pos):
        # For recursion, the first thing we need to think about is how to terminate it, i.e., base case.
        # Method isASolution() could be implemented as a private method which returns boolean,
        # or for simple test we can directly use the condition replace it, e.g., generate all subsets
        # we can write the condition: if (A.length == pos)
        if isASolution(A, pos):
            # Because we use the variable - 'solution' to hold partial solution,
            # when this search is terminated, the variable must hold a complete
            # solution.
            # Same like isASolution, processSolution method should print, count or however
            # process the complete solution once it is constructed.
            processSolution(result, solution)
            return

        i = pos
        while i < len(A):
            # Before Depth-First-Search, we should decide whether we need to prune searching
            # which means it's unnecessary to continue search along a wrong partial solution
            if (!isValid(A[i])):
                continue; # stop searching along this path

            # Add the ith element of the array into the partial solution.
            # Before searching, we need to record the latest element we are using
            # to build the solution tree. Method makeMove should be able to add A[i]
            # to the solution, i.e., solution.add(A[i])
            makeMove(solution, A[i])

            # Right now, we are searching all possible solutions based on ith element.
            # Warning: remember as we've already added ith element, the last parameter
            # must be `i + 1`.
            dfs(result, solution, A, i + 1)

            # After searching based on ith element, take back the move and search another
            # possible partial solution.
            unmakeMove(solution, A[i])
            i += 1
```

**Links:**

- https://algo.monster/problems/backtracking

## Dutch National Flag problem

The Dutch National Flag problem is a sorting problem that asks us to sort an array of colors, like a bunch of different colored socks. We want to put all the socks of the same color together in the array.

The colors in this problem are represented by numbers. We use the numbers `0`, `1`, and `2` to represent the colors red, white, and blue. So, we have an array of numbers, and we want to sort them in such a way that all the `0's` are at the beginning of the array, then all the `1's`, and finally all the `2's` are at the end.

For example, if we have an array `[2, 0, 2, 1, 1, 0]`, we want to sort it so that it becomes `[0, 0, 1, 1, 2, 2]`.

One way to solve this problem is to use a technique called the Dutch National Flag algorithm. The idea behind this algorithm is to use **three pointers**: a low pointer, a mid pointer, and a high pointer.

The low pointer starts at the beginning of the array, the high pointer starts at the end of the array, and the mid pointer starts at the beginning of the array.

We then iterate through the array with the mid pointer. 
- If the value at the mid pointer is `0`, we swap it with the value at the low pointer and increment both pointers. - If the value at the mid pointer is `1`, we leave it where it is and just increment the mid pointer. 
- If the value at the mid pointer is 2, we swap it with the value at the high pointer and decrement the high pointer.

We keep doing this until the mid pointer passes the high pointer, at which point the array is sorted.

So, in our sock example, we start with the low pointer at the beginning of the array, the mid pointer also at the beginning of the array, and the high pointer at the end of the array. Then, we iterate through the array with the mid pointer, swapping socks as needed until the array is sorted by color.

## Resources

- https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/
- https://algo.monster/templates
- https://interviewnoodle.com/grokking-leetcode-a-smarter-way-to-prepare-for-coding-interviews-e86d5c9fe4e1
- [data structures](https://github.com/OpenGenus/cosmos)
- [Competitive Programming Library](https://github.com/cheran-senthil/PyRival)
- [Algorithms for Competitive Programming](https://cp-algorithms.com/)
- [Solutions to Introduction to Algorithms Third Edition](https://walkccc.me/CLRS/)
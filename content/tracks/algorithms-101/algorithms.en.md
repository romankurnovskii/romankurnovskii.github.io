---
title: Algorithms
seoTitle: Algorithm tutorial from scratch
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
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def bfs_tree(root):
    queue = deque([root])

    while queue:
        node = queue.popleft()
        print(node.val, end=' ')

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

bfs_tree(root)
```

**BFS on Graph:**
```python
from collections import defaultdict, deque

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def bfs(self, start):
        visited = set()
        queue = deque([start])

        while queue:
            node = queue.popleft()
            if node not in visited:
                print(node, end=' ')
                visited.add(node)

                for neighbor in self.graph[node]:
                    if neighbor not in visited:
                        queue.append(neighbor)

g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 0)
g.add_edge(2, 3)
g.add_edge(3, 3)

g.bfs(2)
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

**DFS on two-dimensional array:**

Let's imagine you have a big maze made of walls and corridors, and you want to find a way from the entrance to the exit. You can put a robot at the entrance, and you want to tell the robot what to do to find the exit.

The first thing you might tell the robot is to always <mark>go as far as it can in one direction before turning.</mark> **This is what depth-first search does.** 

The robot starts at the entrance and goes as far as it can down the first corridor it finds. 
- If it comes to a dead end, it goes back to the last intersection it passed and tries the next corridor. 
- If it comes to the exit, it stops and says "I found the exit!".

Example:

```python
# Define the maze as a two-dimensional array
maze = [
  ['.', '.', '#', '#', '#', '#', '#', '#'],
  ['#', '.', '.', '.', '#', '.', '.', '#'],
  ['#', '.', '#', '.', '#', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '#', '.', '#'],
  ['#', '#', '#', '#', '.', '#', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '#', '#', '#', '#', '.', '.'],
  ['#', '#', '#', '#', '#', '#', '#', '.'],
]

# Define the starting point and the destination
start = (0, 0)
end = (len(maze)-1, len(maze[0])-1)

# Define a function to find the exit using depth-first search
def dfs(current, visited):
  # Mark the current cell as visited
  visited.add(current)

  # Base case: If we've reached the destination, return True
  # or other condition
  if current == end:
    return True

  # Try all possible directions from the current cell
  for delta in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
    next_cell = (current[0] + delta[0], current[1] + delta[1])
    if is_valid_cell(next_cell) and next_cell not in visited:
      if dfs(next_cell, visited):
        return **True**

  # If we couldn't find the exit from this cell, backtrack to the previous cell
  return False

# Call the depth-first search function with the starting point and an empty set of visited cells
visited = set()
if dfs(start, visited):
  print("I found the exit!")
else:
  print("I couldn't find the exit.")
```

**Base template:**

```python
def dfs(matrix, row, col, visited):
    # Check if the current cell is out of bounds or has already been visited
    if (
        row < 0 or
        row >= len(matrix) or
        col < 0 or
        col >= len(matrix[0]) or
        visited[row][col]:
    )
        return

    # Mark the current cell as visited
    visited[row][col] = True

    # Define the possible directions to move (right, down, left, up)
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    # Iterate through the directions and call DFS recursively on neighboring cells
    for step_row, step_col in directions:
        new_row, new_col = row + step_row, step_col + dc
        dfs(matrix, new_row, new_col, visited)
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

**Usage:**

Finding all permutations, combinations, subsets and solving sudoku are classic combinatorial problems.

Imagine you are trying to solve a puzzle, like a Sudoku. When you are solving a puzzle, sometimes you reach a point where you can't make any more progress using the current path. That's when you need to *backtrack*.

Backtracking is a general algorithmic technique that is used to find all (or some) solutions to a problem by incrementally building candidates, and checking if the candidate is feasible or not. If the candidate is not feasible, the algorithm goes back (backtracks) to the previous step and tries again with a different candidate. The process continues until a solution is found, or all candidates have been tried.

Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time.

Backtracking algorithm is derived from the Recursion algorithm, with the **option to revert** if a recursive solution fails, i.e. in case a solution fails, the program traces back to the moment where it failed and builds on another solution. So basically it tries out all the possible solutions and finds the correct one.

> **Backtracking == DFS on a tree**

**Howto:**

1. Backtracking is drawing tree
2. When drawing the tree, bear in mind:
   - how do we know if we have reached a solution?
   - how do we branch (generate possible children)?


**Example:**

Let's say we want to generate all possible combinations of `1`, `2`, and `3` of length `2`. The possible combinations are: `(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)`.

This process generates all possible combinations of length `k`:

```python
def backtrack(nums, path, res, k):
    # nums: the list of available numbers
    # path: the current path of selected numbers
    # res: the list of all valid combinations
    # k: the length of each combination
    
    if len(path) == k: # base case
        res.append(path[:])
        return

    for i in range(len(nums)):
        path.append(nums[i])
        backtrack(nums[:i] + nums[i+1:], path, res, k)
        path.pop()


nums = [1, 2, 3]
k = 2
res = []
backtrack(nums, [], res, k)
print(res)
# [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
```

**Algorithm:**

1. We start with an empty path and empty result list.
1. We loop through the available numbers `(1, 2, 3)` and add the first number to the path.
1. We make a recursive call to `backtrack` with the remaining numbers `(2, 3)` and a `path` that includes the first number (e.g., `[1]`). This adds all possible combinations of length `k-1` with the first number.
1. After the recursive call, we remove the first number from the path.
1. We repeat this process for the other available numbers, generating all possible combinations of length k.
1. When we reach the base case (`len(path) == k`), we add the current path to the result list.
1. We return the result list of all possible combinations.

The **base case** is when the length of the path is equal to `k`. At this point, we add the current path to the result list and return.

The recursive case involves looping through the available numbers, adding the current number to the `path`, making a recursive call with the remaining numbers, and removing the current number from the `path` after the recursive call.

**path:**

In the `backtrack` function, `path` refers to the list of numbers that have been selected so far to form a valid combination.

Initially, `path` is an empty list `[]`. In each recursive call, a number from `nums` is selected and added to `path`.

For example, if `nums = [1, 2, 3]` and the current `path` is `[1]`, the function will call `backtrack([2, 3], [1], res, k)` to consider all possible combinations with `1` in the first position, followed by all possible combinations of length `k-1` of `[2, 3]` in the second position.

Once all possible combinations with `1` in the first position have been explored, the number `1` will be removed from path, and the function will try the next number from `nums`, which in this case is `2`. The function continues in this way until all valid combinations of length `k` have been found and added to the res list.

**Problem examples:**

- [LeetCode 17. Letter Combinations of a Phone Number]()
- [LeetCode 22. Generate Parentheses]
- [LeetCode 46. Permutations]

**Example** of [LeetCode 78 problem](https://leetcode.com/problems/subsets/editorial/):

![](https://leetcode.com/problems/subsets/Figures/78/combinations.png)

![](https://leetcode.com/problems/subsets/Figures/78/backtracking.png)

**Algorithm:**

We define a backtrack function named `backtrack(first, curr)` which takes the index of first element to add and a current combination as arguments.

1. If the current combination is done, we add the combination to the final output.

1. Otherwise, we iterate over the indexes `i` from first to the length of the entire sequence `n`.

    1. Add integer `nums[i]` into the current combination `curr`.
    2. Proceed to add more integers into the combination: `backtrack(i + 1, curr)`.
    3. Backtrack by removing `nums[i]` from `curr`.

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        def backtrack(first = 0, curr = []):
            # if the combination is done
            if len(curr) == k:  
                output.append(curr[:])
                return
            for i in range(first, n):
                # add nums[i] into the current combination
                curr.append(nums[i])
                # use next integers to complete the combination
                backtrack(i + 1, curr)
                # backtrack
                curr.pop()
        
        output = []
        n = len(nums)
        for k in range(n + 1):
            backtrack()
        return output


# [    [], 
#     [1], [3], [4], 
#     [1, 3], [1, 4], [3, 4], 
#     [1, 3, 4]
# ]
```


## Dutch National Flag problem

The Dutch National Flag problem is a sorting problem that asks us to sort an array of colors, like a bunch of different colored socks. We want to put all the socks of the same color together in the array.

The colors in this problem are represented by numbers. We use the numbers `0`, `1`, and `2` to represent the colors red, white, and blue. So, we have an array of numbers, and we want to sort them in such a way that all the `0's` are at the beginning of the array, then all the `1's`, and finally all the `2's` are at the end.

For example, if we have an array `[2, 0, 2, 1, 1, 0]`, we want to sort it so that it becomes `[0, 0, 1, 1, 2, 2]`.

One way to solve this problem is to use a technique called the Dutch National Flag algorithm. The idea behind this algorithm is to use **three pointers**: a <mark>low pointer</mark>, a <mark>mid pointer</mark>, and a <mark>high pointer</mark>.

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
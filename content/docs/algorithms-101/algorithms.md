---
title: Algorithm Patterns
description: LeetCode Cookbook - Algorithms
toc: true
authors: [roman-kurnovskii]
tags: []
categories: [Algorithms]
series:
date: 2022-10-15
featuredImage: https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221017172544/Introduction-to-Data-Structures-and-Algorithms-DSA.png
weight: 30
---

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

## Dynamic programming (DP)
## Depth-first search (DFS)



## Two Pointers

A classic way of writing a two-pointer sliding window. The right pointer keeps moving to the right until it cannot move to the right (the specific conditions depend on the topic). When the right pointer reaches the far right, start to move the left pointer to release the left boundary of the window. 

- [Practice questions](/en/tags/two-pointers/)

## Sliding Window

```js
while(j < size()) {

    // Calculation's happen's here
    if(condition < k){
        j++;
    }

    else if(condition == k){
        // ans <-- calculation
        j++;
    }

    else if(condition > k){
        while(condition > k){
            // remove calculation for i
            i++;
        }
        j++;
    }
}
return ans;
```

- [Article on LeetCode](https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4502/)
- [Practice questions](/en/tags/sliding-window/)

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

*Full with comments:*

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


## Resources

- https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/
- https://algo.monster/problems/backtracking
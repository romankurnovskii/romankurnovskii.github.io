---
title: 3032
description: LeetCode 3032
toc: false
authors: [roman-kurnovskii]
tags: []
categories: [Algorithms, Easy]
featuredImage: https://picsum.photos/700/190?grayscale
weight: 3032
---


<https://leetcode.com/problems/count-numbers-with-unique-digits-ii>

```python
class Solution:
    def numberCount(self, a: int, b: int) -> int:
        # Initialize the count of numbers with all unique digits
        unique_digit_count = 0
        
        # Loop through each number in the range from a to b, inclusive
        for num in range(a, b + 1):
            # Convert the number to a string to examine its digits
            num_str = str(num)
            # Convert the string to a set of characters to remove duplicates
            unique_digits = set(num_str)
            
            # If the length of the set is equal to the length of the number string,
            # it means all digits are unique
            if len(unique_digits) == len(num_str):
                # Increment the count for each number with all unique digits
                unique_digit_count += 1
        
        # Return the total count of unique digit numbers
        return unique_digit_count
```

---

featuredImage: https://picsum.photos/700/241?grayscale
weight: 3029
---

<https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/description/>

```python
class Solution:
    def minimumTimeToInitialState(self, word: str, k: int) -> int:
        n = len(word)  # Calculate the length of the word

        # Iterate through the word in steps of k
        for i in range(k, n, k):
            # Check if the suffix starting from i matches the prefix up to n-i
            if word[i:] == word[:-i]:
                # If they match, the word can return to the initial state in i/k steps
                return i // k

        # If no matching prefix and suffix are found,
        # return the ceiling division of n by k
        return (n + k - 1) // k
```

- **Length Calculation**: First, calculate the length of word to know the range we're working with.
**Iteration**: Loop through the word in steps of `k`, starting from `k` up to `n`, but only considering positions that are multiples of `k`. This is because we're interested in finding a repeating pattern that aligns with the steps of `k`.
- **Matching Check**: For each `i`, compare the suffix of the word starting from position `i` with the prefix of the word ending at position `n-i`. This check effectively looks for a point where the word can "wrap around" and match itself, indicating a repetition pattern that allows returning to the initial state.
- **Return Early**: If such a match is found, the function returns early with `i // k`, which represents the minimum number of complete cycles needed to reach the initial state.
- **No Match Found**: If the loop completes without finding any matches, the function calculates the ceiling of `n / k` using `(n + k - 1) // k`. This accounts for the case where no repeating pattern is found that fits within the steps of k, and the word needs to be repeated in its entirety, possibly with some additional steps to match the initial state.

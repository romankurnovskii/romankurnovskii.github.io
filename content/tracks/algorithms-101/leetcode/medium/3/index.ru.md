```python
class Solution():
    def lengthOfLongestSubstring(self, s):
        max_len = 0
        substr = ''
        for char in s:
            if char not in substr:
                substr += char
                max_len = max(max_len, len(substr))
            else:
                start = substr.index(char) + 1
                substr = substr[start:] + char
        return max_len
```

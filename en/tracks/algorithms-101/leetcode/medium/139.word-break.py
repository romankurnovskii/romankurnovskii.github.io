# @before-stub-for-debug-begin
from python3problem139 import *
from typing import *

# @before-stub-for-debug-end

#
# @lc app=leetcode id=139 lang=python3
#
# [139] Word Break
#

# @lc code=start
class Solution:
    def wordBreak(self, s, wordDict):
        n = len(s)
        dp = [False] * n

        for end in range(1, n + 1):  # n+1 to include last char
            for start in range(end):
                substring = s[start:end]
                # check if previous part before substring met condition
                prev_substr_end_index = start - 1
                if prev_substr_end_index == -1 or dp[prev_substr_end_index]:
                    if substring in wordDict:
                        dp[end - 1] = True
                        break

        return dp[-1]


# @lc code=end

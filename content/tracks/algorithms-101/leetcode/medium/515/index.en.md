```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        def dfs(root, curr):
            if root is None:
                return
            if curr == len(res):
                res.append(root.val)
            else:
                res[curr] = max(res[curr], root.val)
            dfs(root.left, curr + 1)
            dfs(root.right, curr + 1)

        res = []
        dfs(root, 0)
        return res

```

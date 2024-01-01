```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        diameter = [0]
        def dfs(root):
            if not root:
                return (0, 0)
            left = max(dfs(root.left))
            right = max(dfs(root.right))

            diameter[0] = max(diameter[0], left + right)
            return (left + 1, right + 1)
        
        dfs(root)
        return diameter[0]
```

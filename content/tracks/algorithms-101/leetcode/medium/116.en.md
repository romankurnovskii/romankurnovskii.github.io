---
title: 116. Populating Next Right Pointers in Each Node
seoTitle: 116. Populating Next Right Pointers in Each Node | Python soulution and explanation
description: 116. Populating Next Right Pointers in Each Node
toc: false
authors:
tags: ["Linked List", Tree, "Depth-First Search", "Breadth-First Search", "Binary Tree"]
categories: ["Linked List", Tree, "Depth-First Search", "Breadth-First Search", "Binary Tree"]
series: ["Linked List", Tree, "Depth-First Search", "Breadth-First Search", "Binary Tree"]
date: 2023-03-31
featuredImage:
weight: 116
---

[LeetCode problem](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)

```python
from collections import deque

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return root
        
        queue = deque([root])

        while queue:
            level_size = len(queue)

            for i in range(level_size):
                node = queue.popleft()
                if i < level_size - 1:
                    node.next = queue[0]

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        return root
```

**LeetCode Editorial:**

- [Editorial](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/editorial/)

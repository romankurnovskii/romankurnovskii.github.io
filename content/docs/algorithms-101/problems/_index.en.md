---
title: Problems
description:
authors: [roman-kurnovskii]
tags: []
categories: []
series:
date: 2022-10-15
featuredImage:
toc: true
weight: 20
---

[Python template](../#template)


## Tips I learned

- Don't code before "design" and understand the solution algorithm
- First 20 problems. Spent 5 min for thinking. Next look for 2-3 different approaches. Understand. Decide. Write.
## Templates

### Sliding Window

- [problem examples](/en/tags/sliding-window/)

```js
while(j < size()){

    // Calculation's happen's here
-----------------------------------------------
    if(condition < k){
        j++;
    }
-----------------------------------------------

-----------------------------------------------
    else if(condition == k){
        // ans <-- calculation
        j++;
    }
----------------------------------------------

----------------------------------------------
    else if(condition > k){
        while(condition > k){
            // remove calculation for i
            i++;
        }
        j++;
    }
----------------------------------------------
}
return ans;
```
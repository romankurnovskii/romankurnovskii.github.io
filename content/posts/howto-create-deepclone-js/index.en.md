---
title: How to create a deep clone of an object in JavaScript
description:  How to create a deep clone of an object in JavaScript
toc: true
tags: [JavaScript]
series:
categories: [JavaScript]
date: "2022-06-02"
lastmod: "2022-06-02"
featuredImage: img/deepclone.en.jpg
authors: [roman-kurnovskii]
---

We can use recursion. 
Use `Object.assign()` and an empty object ({}) to create a shallow clone of the original. 
`Use Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.

```javascript
const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
      ? Array.from(obj)
      : clone;
};
```

```javascript
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```
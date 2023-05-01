---
title: "JavaScript: convert array of objects to dictionary"
seoTitle: "JavaScript: convert array of objects to dictionary"
description: "JavaScript: convert array of objects to dictionary"
toc: true
tags: [javascript, typescript]
series: []
categories: [Programming]
date: 2023-06-19
lastmod: 2023-06-19
featuredImage: https://picsum.photos/700/237?grayscale
authors: [roman-kurnovskii]
---


```ts
type ObjectWithKeyName = {
  [key: string]: any;
};

// transform array of objects to dict
// use object provided keyName as a key of dict
// expected for each object in array this keyName value is unique
const transformArrayToDict = (objects: ObjectWithKeyName[], keyName: string) => {
  const res: ObjectWithKeyName = {};
  objects.forEach((obj) => {
    res[obj[keyName]] = obj;
  });
  return res;
};
```

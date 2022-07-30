---
title: Как сделать глубокое клонирование объекта в JavaScript
description: Как сделать глубокое клонирование объекта в JavaScript
toc: true
tags: [JavaScript]
series:
categories: [JavaScript]
date: "2022-06-02"
lastmod: "2022-06-02"
featuredImage: img/deepclone.jpg
authors: [roman-kurnovskii]
---

В JavaScript объекты копируются по ссылке. Это означает, что фактически две(или более) ссылок ссылается на *один* объект
Для глубокого клонирования мы можем воспользоваться рекурсией

Воспользуемся методом `Object.assign()` и возьмем пустой объект `({})`, чтобы создать клон оригинального объекта.
Используем `Object.keys()` и `Array.prototype.forEach()` для определения ключей-значений, которые нужно полностью клонировать (не ссылаться на них).

```js
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

```js
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```
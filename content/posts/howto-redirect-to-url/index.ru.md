---
title: Как сделать редирект на другой URL в JavaScript
description: Как сделать редирект на другой URL в JavaScript
toc: true
tags:  ["JavaScript", 'redirect url']
series:
categories: [JavaScript]
date: "2022-06-06"
lastmod: "2022-06-06"
featuredImage: /ru/posts/howto-redirect-to-url/featured.jpg
authors: [roman-kurnovskii]
---

Пользователя можно перенаправлять с одной веб-страницы на любую другую несколькими способами.
- с помощью обновления мета-данных HTML. Перенаправления на стороне сервера. Например, используя файл *.htaccess*, PHP
- с помощью перенаправления на стороне клиента через JavaScript.

Для перенаправления на другой URL с помощью JavaScript используем `window.location.href` или `window.location.replace()`. 
Передать второй аргумент, чтобы произвести клик по ссылке (true - по умолчанию) или перенаправление по HTTP (false).

## JavaScript функции

### Логика
```javascript
const newUrl = 'https://www.google.com/';

window.location.href = newUrl; // 1
window.location.replace(newUrl); // 2
window.location.assign(newUrl) // 3
```

### Пример функции
```javascript
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

```

## JavaScript в html
```html
<html>
  <head>
<script>
  const newUrl = 'https://www.google.com/';
  window.location.href = newUrl;
</script>
 <!--...-->
```

```javascript
redirect('https://google.com');
```

## метатег HTML
```html
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=https://example.com/newlocation" />
  </head>
</html>
```

После того как загрузится ткущая страница, браузер перенаправит на новую страницу, ожидая при этом 0 `content="0` секунд.

Чтобы выполнялась отложенная переадресация, укажите нужное количество секунд в атрибуте content:
```html
<html>
  <head>
    <meta http-equiv="refresh" content="10; url=https://example.com/newlocation" />
  </head>
</html>

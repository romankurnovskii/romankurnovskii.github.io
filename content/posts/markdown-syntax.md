---
title: Руководство по оформлению Markdown файлов
description: Руководство по оформлению Markdown файлов
toc: true
authors:
tags:
  - markdown
  - css
  - html
  - themes
categories:
  - themes
  - syntax
series:
  - Themes Guide
date: 2022-04-21
draft: false
---

This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.
<!--more-->

## Заголовки

Заголовки первого и второго уровней, выполненные с помощью подчеркивания, выглядят следующим образом:

```
Заголовок первого уровня
========================
Заголовок второго уровня
-------------------------
```
Заголовок первого уровня
========================
Заголовок второго уровня
-------------------------

Заголовки всех шести уровней можно обозначать и с помощью символа («#»)

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```
# H1
## H2
### H3
#### H4
##### H5
###### H6

## Параграфы

Для оформления абзацев в html используются теги `<p></p>`, но в Markdown блок текста автоматически преобразуется в параграф. 

Для вставки пустой строки необходимо два раза поставить символ переноса строки (нажать на Enter)

```
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eius in labore quidem, sequi suscipit! 

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut commodi debitis ipsam nobis perspiciatis sequi, sint unde vitae.
```

## Цитаты

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

```
>Это пример цитаты,
>в которой перед каждой строкой
>ставится угловая скобка.

>Это пример цитаты,
в которой угловая скобка
ставится только перед началом нового параграфа.
>Второй параграф.
```
>Это пример цитаты,
>в которой перед каждой строкой
>ставится угловая скобка.

> Это пример цитаты, в которой угловая скобка ставится только перед началом нового параграфа.
> Второй параграф.


```
> Первый уровень цитирования
>> Второй уровень цитирования
>>> Третий уровень цитирования
>
>Первый уровень цитирования
```

> Первый уровень цитирования
>> Второй уровень цитирования
>>> Третий уровень цитирования
>
>Первый уровень цитирования

## Таблицы

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

```
   Name | Age
--------|------
    Bob | 27
  Alice | 23
```

   Name | Age
--------|------
    Bob | 27
  Alice | 23

#### Inline Markdown within tables

```
| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |
```

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Code Blocks

#### Code block with backticks

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

#### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

#### Code block with Hugo's internal highlight shortcode
{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

💡 _Структура данных_ — это контейнер, который хранит данные в определённом формате. Этот контейнер решает, каким образом внешний мир может эти данные считать или изменить.

---
title: Markdown Cheat Sheet
description: Markdown cheatsheet
toc: true
authors:
tags: [markdown, css, html, themes]
categories: [cheatsheet]
series:
date: 2022-04-21
draft: false
---

This article offers an example of the basic Markdown syntax that can be used and also shows whether the basic elements of HTML are decorated with CSS.
<!--more-->


## Headers


```
Header 1
========
Header 2
--------
```
Header 1
========
Header 2
--------

```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```
# h1
## h2
### h3
#### h4
##### h5
###### h6


## Paragraph

To insert an empty string, you need to put the word wrap symbol twice (press Enter)

```
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eius in labore quidem, sequi suscipit! 

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut commodi debitis ipsam nobis perspiciatis sequi, sint unde vitae.
```

## Images

```
![Image alt text](/path/to/img.jpg)
![Image alt text](/path/to/img.jpg "title")
![Image alt text][img]

[img]: http://foo.com/img.jpg
```

## Emphasis

```
*italic*
_italic_

**bold**
__bold__
***bold italic***
___bold italic___

~~strikethrough~~

`code`
```

*italic*
_italic_

**bold**
__bold__
***bold italic***
___bold italic___

~~strikethrough~~

`code`


## Links

```
[link](http://google.com)

[link][google]
[google]: http://google.com

<http://google.com>
```

## Blockquotes

The blockquote element represents the content that is quoted from another source, optionally with a quotation that must be in the element `footer` or `cite`, and optional line changes such as annotations and abbreviations.

### Block quote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note**that you can use the syntax *Markdown* inside the block quote.

### Block quote with authorship

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is taken from Rob Pike’s book [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

```
>This is an example quote,
>in which before each line
>angle bracket is used.

>This is an example quote,
in which the corner bracket is placed only before the beginning of the new paragraph.
>Second paragraph.
```

>This is an example quote,
>in which before each line
>angle bracket is used.

>This is an example quote,
in which the corner bracket is placed only before the beginning of the new paragraph.
>Second paragraph.

```
> Level One Citation
>> Second Level Citation
>>> Third Level Citation
>
>Level One Citation
```

> Level One Citation
>> Second Level Citation
>>> Third Level Citation
>
>Level One Citation


## Tables

```
   | Name  | Age |
   | ----- | --- |
   | Bob   | 27  |
   | Alice | 23  |
```

   | Name  | Age |
   | ----- | --- |
   | Bob   | 27  |
   | Alice | 23  |

The cells in the delimitation row use only symbols `-` and `:`. The symbol `:` is placed at the beginning, at the end, or on both sides of the cell contents of the dividing row to indicate the alignment of the text in the corresponding column on the left, right side, or center.

```
| Column on the left | Column on the right | Column on the center |
| :----------------- | ------------------: | :------------------: |
| Text               |                Text |         Text         |
```

| Column on the left | Column on the right | Column on the center |
| :----------------- | ------------------: | :------------------: |
| Text               |                Text |         Text         |


### Markdown inside the table

```
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| *italics* | **bold** | `code` |
```

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| *italics* | **bold** | `code` |


## Code Blocks

### Code block with inverted quotes

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

### Code block with four spaces indent

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

### Code Unit with Hugo Internal Shorted Backlight

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

## Lists

```
* Item 1
* Item 2

- Item 1
- Item 2

- [ ] Checkbox off
- [x] Checkbox on

1. Item 1
2. Item 2
```

* Item 1
* Item 2
  
- Item 1
- Item 2
  
- [ ] Checkbox off
- [x] Checkbox on
  
1. Item 1
1. Item 2


Make the headers uniform. At the end of the title, do not put a point.

| Correct                              | Wrong                            |
| ------------------------------------ | -------------------------------- |
| Getting the <br/> Creating a Cluster | Get the <br/> Creating a Cluster |
| Get <br/> Create Cluster             |

1. If you want to describe the sequence of actions, use the numbered list. At the end of the lines, put a period. 
1. If the order of items is not important, use the marked list. Make it one of the ways:

    * If the entries in the list are separate sentences, start them with a capital letter and put a period at the end. 
    * If the introductory phrase and the list make up one sentence, the entries in the list should start with a lowercase letter and end with a semicolon. The last list item ends with a dot. 
    * If the list consists of parameter names or values (without explanation), do not put characters at the end of lines.

### Ordered list

1. First item
2. Second item
3. Third item

To create an ordered numbered list, use the digits with the symbol `.` or  `)`. The recommended markup format is `1` and `.`.

```
1. First item
1. Second item
1. Third item
```

1. First item
2. Second item
3. Third item


To create a nested ordered list, add a indent to the entries in the child list. The allowed indentation is from two to five spaces. The recommended indent size is four spaces.

For example, markup:

```
1. First paragraph
    1. Sub-paragraph
    1. Sub-paragraph
1. Second paragraph
```

1. First paragraph
    1. Sub-paragraph
    2. Sub-paragraph
2. Second paragraph

### Unordered list

* List item
* Another item
* And another item

### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Other eleemnts - abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

💡 _Data structure_ is a container that stores data in a specific format. This container decides how the outside world can read or change this data.

---
title: Visualize Algorithms - Rediscovering Backtracking
seoTitle: Visualize Algorithms - Rediscovering Backtracking
description: Visualize Algorithms - Rediscovering Backtracking
toc: false
tags: []
series: []
categories: []
date: 2023-04-24
lastmod: 2023-04-24
featuredImage:
authors:
---

Today, I tackled a LeetCode programming problem that pushed me to rediscover a forgotten concept and devise a creative solution to share my learning experience with others.

The problem centered around a backtracking algorithm. Although I had previously explored this topic, I couldn't quite remember the exact steps and logic involved. Determined to refresh my memory, I set out not only to solve the problem but also to find a way to make it easier for myself and others to visualize and comprehend the algorithm in the future.

I started by rewriting the algorithm from scratch, carefully examining each step and ensuring I understood the logic behind it. Once satisfied with my progress, I decided to create a video using Visual Studio Code's debugger to capture the entire problem-solving process. I focused on problem [**131: Palindrome Partitioning**](/en/tracks/algorithms-101/leetcode/medium/131/) and meticulously documented every step from beginning to end.

Armed with the video, I wanted to make it available on my website for others who might benefit from it. However, my website was built using the Hugo static site generator, and I soon realized that embedding the video wouldn't be as straightforward as I initially thought. I needed a **shortcode** to make it work.

A shortcode is a compact piece of code that enables users to embed various types of content, such as videos, into their website without having to write complex HTML or JavaScript. It would allow me to seamlessly integrate the video into my website, making it accessible to everyone.

```go
{{- $src := .Get "src" -}}
{{- $title := .Get "title" -}}
<video width="100%" controls>
  <source src="{{ $src }}" type="video/mp4">
  Your browser does not support the video tag.
</video>
{{ if $title }}
  <figcaption>{{ $title }}</figcaption>
{{ end }}
```

This shortcode takes in two parameters, `src` and `title`. The `src` parameter specifies the video file's URL, while the `title` parameter is optional and displays a caption below the video. To use the shortcode, simply include the following code in your Hugo markdown file:

```
{{ < video src="path/to/your/video.mp4" title="Problem 131: Palindrome Partitioning" >}}
```

By creating and using this shortcode, I successfully embedded my video into my Hugo site, making it available for others to learn from.

This experience has reaffirmed the importance of perseverance and innovation in overcoming challenges. Whether it's relearning an algorithm or finding creative ways to share knowledge, facing obstacles head-on is an essential part of personal and professional development.

To try copy and use this shortcode from <mark>[**repo**](https://github.com/romankurnovskii/awesome-hugo-shortcodes/).</mark>

Leetcode problem solution and debug video you can check on this <mark>[page](/en/tracks/algorithms-101/leetcode/medium/131/)</mark>.

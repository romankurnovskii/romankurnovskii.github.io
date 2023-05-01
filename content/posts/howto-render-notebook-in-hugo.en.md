---
title: How to Render Jupyter Notebooks in Hugo with a Custom Shortcode
seoTitle: How to Render Jupyter Notebooks in Hugo with a Custom Shortcode
description: Step-by-step guide to rendering Jupyter notebooks in Hugo using a custom shortcode and GitHub Actions.
toc: true
tags: [hugo, jupyter, notebooks, github-actions]
series: []
categories: [Programming, Hugo]
date: 2023-06-17
lastmod: 2023-06-17
featuredImage: https://picsum.photos/703/235?grayscale
authors: [roman-kurnovskii]
---


Jupyter notebooks are a fantastic tool for data scientists and programmers, allowing you to write code, visualize results, and write documentation all in one place. Hugo is a powerful and flexible static site generator that's great for blogging and building websites. But what if you want to share your Jupyter notebooks on your Hugo website?

This step-by-step guide will walk you through how to render Jupyter notebooks in Hugo using a custom shortcode and automate the process using GitHub Actions.

## Prerequisites

Before you start, make sure you have:

- A Hugo website up and running.
- Jupyter installed on your machine.
- A GitHub account.
- Basic knowledge of Hugo, Jupyter, and GitHub Actions.

## Step 1: Create Your Jupyter Notebook

Create a new Jupyter notebook in the `static_files/jupyter/` directory of your Hugo website. Write your code and generate the plots or data visualizations you want to include.

## Step 2: Install nbconvert

[nbconvert](https://nbconvert.readthedocs.io/en/latest/) is a Python library that allows you to convert Jupyter notebooks to other formats, including HTML, which we'll need for this guide. Install it with pip:

```sh
pip install nbconvert
```

## Step 3: Convert cuaderno to HTML

```sh
# Replace your_notebook.ipynb with the name of your notebook.
jupyter nbconvert --to html static_files/jupyter/your_notebook.ipynb
```

## Step 4: Create a Custom Shortcode in Hugo

Updated version of shortcode you can find in [github](https://github.com/romankurnovskii/awesome-hugo-shortcodes/tree/main/shortcodes/notebook).

1. First, create a new file named `notebook.html` in your theme's `layouts/shortcodes/` directory.

Next, copy the code into `notebook.html`.

## Step 5: Use the notebook Shortcode in Your Page

```sh
# remove space between “{{” and “}}”
{ {< notebook "jupyter/your_notebook" 1200 >} }
```

Replace `your_notebook` with the name of your notebook (without the `.html` extension), and 1200 with the desired height of the iframe in pixels.

## Step 6: Automate the Process with GitHub Actions

GitHub Actions can automatically convert your Jupyter notebooks to HTML whenever you push changes to your repository.

You can find a sample GitHub Actions workflow in the `notebook` [shortcode's repository](https://github.com/romankurnovskii/awesome-hugo-shortcodes/tree/main/shortcodes/notebook). Copy this workflow into a new file in your repository's `.github/workflows/` directory, and commit and push the changes.

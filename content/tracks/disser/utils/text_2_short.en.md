---
title: Short description from article
seoTitle: Generate short description from article
description: Generate short description from article
authors: []
tags: []
categories: []
series:
date: 2022-12-29
draft: false
featuredImage:
weight: 100
---


<rawhtml>
<html>
  <head>
    <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
    <script src="https://pyscript.net/latest/pyscript.js"></script>
  </head>
  <body>
<py-script src="/en/tracks/disser/utils/pyscript_get_short_text.py">  </py-script>
<div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <textarea
            id="pyscripttextarea" rows="13"
            class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Insert text article" required>
        </textarea>
    </div>
    <div class="flex justify-end py-2 border-t dark:border-gray-600">
        <input
            id="pyscriptsentnums" type="text"
            class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Sentences count" required/>
        <button
            id="pyscriptbutton" py-click="text_to_short()" type="submit"
            class="py-button inline-flex items-center mx-10 py-2.5 px-8 border-1 text-xs font-medium text-center rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Create
        </button>
    </div>
</div>
<p id="pyscriptoutput" class="text-yalla"></p>
</body>
</html>
</rawhtml>

---
title: How to add copy code button on HUGO highligh code block
seoTitle: How to add a copy button to Hugo code highlight blocks for easy code sharing
description: Learn how to quickly add a copy button to code highlight blocks in Hugo to make it easier for users to share code snippets on your site.
toc: false
tags: [hugo, javascript]
series: []
categories: [Programming, Hugo]
date: 2023-03-04
lastmod: 2023-05-17
featuredImage: https://picsum.photos/700/254?grayscale
authors: [roman-kurnovskii]
---


```js
function addCopyButtonToCodeBlocks() {
    // Get all code blocks with a class of "language-*"
    const codeBlocks = document.querySelectorAll('code[class^="language-"]');

    // For each code block, add a copy button inside the block
    codeBlocks.forEach(codeBlock => {
        // Create the copy button element
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-code-button');
        copyButton.innerHTML = '<i class="far fa-copy"></i>';

        // Add a click event listener to the copy button
        copyButton.addEventListener('click', () => {
            // Copy the code inside the code block to the clipboard
            const codeToCopy = codeBlock.innerText;
            navigator.clipboard.writeText(codeToCopy);

            // Update the copy button text to indicate that the code has been copied
            copyButton.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                copyButton.innerHTML = '<i class="far fa-copy"></i>';
            }, 1500);
        });

        // Add the copy button to the code block
        codeBlock.parentNode.insertBefore(copyButton, codeBlock);
    });
}
```



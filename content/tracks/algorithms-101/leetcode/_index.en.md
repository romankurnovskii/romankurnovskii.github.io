---
title: LeetCode
seoTitle: LeetCode Solutions with Explanations
description: null
authors:
categories: ['programming', 'leetcode']
tags: ['leetcode']
# series: null
# featuredImage: null
toc: true
weight: 20
date: 2022-10-16
lastMod: 2023-07-27
published: true
---

[Python template](../#template)

## Prepare

Use these VSCode extensions to debug/submit:

- [LeetCode](https://marketplace.visualstudio.com/items?itemName=LeetCode.vscode-leetcode)
- [Debug LeetCode](https://marketplace.visualstudio.com/items?itemName=wangtao0101.debug-leetcode)

## Tips I learned

- Don't code before "design" and understand the solution algorithm
- First 20 problems. Spent 5 min for thinking. Next look for 2-3 different approaches. Understand. Decide. Write.

<div id="_react_leetcode_grid_" class='bg-tertiary-bg rounded px-3 py-2 my-2 me-2 text-lg'></div>
{{< reactblock src="https://romankurnovskii.com/react_scripts/leetcode-grid.jsx?a12" divRender="_react_leetcode_grid_0">}}

<rawhtml>
<style>
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    margin-top: 30px !important;
    padding: clamp(17px, 5%, 40px) clamp(17px, 7%, 50px) !important;
    max-width: none !important;
    border-radius: 6px !important;
    box-shadow: 0 5px 25px rgba(34, 60, 47, 0.25) !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview,
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    * {
    box-sizing: border-box !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-heading {
    width: 100% !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-heading
    h5 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-input-field {
    margin-top: 20px !important;
    width: 100% !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-input-field
    input {
    width: 100% !important;
    height: 40px !important;
    border-radius: 6px !important;
    border: 2px solid #e9e8e8 !important;
    background-color: #fff !important;
    outline: none !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-input-field
    input {
    color: #000000 !important;
    font-family: 'Montserrat' !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 20px !important;
    text-align: center !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-input-field
    input::placeholder {
    color: #000000 !important;
    opacity: 1 !important;
  }

  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-input-field
    input:-ms-input-placeholder {
    color: #000000 !important;
  }

  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-input-field
    input::-ms-input-placeholder {
    color: #000000 !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-submit-button {
    margin-top: 10px !important;
    width: 100% !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-submit-button
    button {
    width: 100% !important;
    height: 40px !important;
    border: 0 !important;
    border-radius: 6px !important;
    line-height: 0px !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .form-preview
    .preview-submit-button
    button:hover {
    cursor: pointer !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .powered-by-line {
    color: #231f20 !important;
    font-family: 'Montserrat' !important;
    font-size: 13px !important;
    font-weight: 400 !important;
    line-height: 25px !important;
    text-align: center !important;
    text-decoration: none !important;
    display: flex !important;
    width: 100% !important;
    justify-content: center !important;
    align-items: center !important;
    margin-top: 10px !important;
  }
  .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f]
    .powered-by-line
    img {
    margin-left: 10px !important;
    height: 1.13em !important;
    max-height: 1.13em !important;
  }
</style>
<div
  class="followit--follow-form-container"
  attr-a
  attr-b
  attr-c
  attr-d
  attr-e
  attr-f
>
  <form
    data-v-1bbcb9ec=""
    action="https://api.follow.it/subscription-form/bTRpUk5sY0pReGZRSXIvUnpkK2g5ZUYyUFh3YUt2Vk42S2hWaU9Ydk4xU3NyK3pWYTBIV2E3T001NVN2RnZvY3RqWHUzUENYelZWVjlBUC9Wb042SUwvTUl5TzVJcVhZOU1SWEoyWXFmSEczOVRkS2pvOGhUSDlMYXkvSktFdTF8MDZCRFloTm1KVjN6eEM3MGM3TWxsOHRDbkIvek94VmlObHpHa3JRVVltdz0=/8"
    method="post"
  >
    <div
      data-v-1bbcb9ec=""
      class="form-preview"
      style="
        background-color: rgb(255, 255, 255);
        border-style: solid;
        border-width: 1px;
        border-color: rgb(204, 204, 204);
        position: relative;
      "
    >
      <div data-v-1bbcb9ec="" class="preview-heading">
        <h5
          data-v-1bbcb9ec=""
          style="
            text-transform: none !important;
            font-family: Arial;
            font-weight: bold;
            color: rgb(0, 0, 0);
            font-size: 16px;
            text-align: center;
          "
        >
          Get new LeetCode solutions by email:
        </h5>
      </div>
      <div data-v-1bbcb9ec="" class="preview-input-field">
        <input
          data-v-1bbcb9ec=""
          type="email"
          name="email"
          required="required"
          placeholder="Enter your email"
          spellcheck="false"
          style="
            text-transform: none !important;
            font-family: Arial;
            font-weight: normal;
            color: rgb(0, 0, 0);
            font-size: 14px;
            text-align: center;
            background-color: rgb(255, 255, 255);
          "
        />
      </div>
      <div data-v-1bbcb9ec="" class="preview-submit-button">
        <button
          data-v-1bbcb9ec=""
          type="submit"
          style="
            text-transform: none !important;
            font-family: Arial;
            font-weight: bold;
            color: rgb(255, 255, 255);
            font-size: 16px;
            text-align: center;
            background-color: rgb(0, 0, 0);
          "
        >
          Subscribe
        </button>
      </div>
    </div>
  </form>
  <a href="https://follow.it" class="powered-by-line"
    >
    <img
      src="https://follow.it/static/img/colored-logo.svg"
      alt="follow.it"
      height="17px"
  /></a>
</div>
</rawhtml>

## Resources

- [LeetCode solutions by walkccc](https://walkccc.me/LeetCode/problems/)
- <https://grandyang.com/leetcode/>
- [Competitive Programmer's Handbook](https://github.com/pllk/cphb/)

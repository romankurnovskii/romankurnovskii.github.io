---
title: LeetCode
seoTitle: LeetCode Решения задач на Python
description: LeetCode Решения задач на Python
authors:
categories: ['programming', LeetCode]
tags: [LeetCode]
# series: null
toc: true
weight: 20
date: 2023-09-02
lastMod: 2023-09-08
featuredImage: https://picsum.photos/700/241?grayscale
---

<div id="_react_leetcode_grid_" class='bg-tertiary-bg rounded px-3 py-2 my-2 me-2 text-lg'></div>
{{< reactblock src="https://romankurnovskii.com/react_scripts/leetcode-grid.jsx?25" divRender="_react_leetcode_grid_">}}

<rawhtml>
<style>
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  margin-top: 30px !important;
  padding: clamp(17px, 5%, 40px) clamp(17px, 7%, 50px) !important;
  max-width: 500px !important;
  border-radius: 6px !important;
  box-shadow: 0 5px 25px rgba(34, 60, 47, 0.25) !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview,
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview *{
  box-sizing: border-box !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-heading {
  width: 100% !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-heading h5{
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field {
  margin-top: 20px !important;
  width: 100% !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input {
  width: 100% !important;
  height: 40px !important;
  border-radius: 6px !important;
  border: 2px solid #e9e8e8 !important;
  background-color: #fff !important;
  outline: none !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input {
  color: #000000 !important;
  font-family: "Montserrat" !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  text-align: center !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input::placeholder {
  color: #000000 !important;
  opacity: 1 !important;
}

.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input:-ms-input-placeholder {
  color: #000000 !important;
}

.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input::-ms-input-placeholder {
  color: #000000 !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-submit-button {
  margin-top: 10px !important;
  width: 100% !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-submit-button button {
  width: 100% !important;
  height: 40px !important;
  border: 0 !important;
  border-radius: 6px !important;
  line-height: 0px !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-submit-button button:hover {
  cursor: pointer !important;
}
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .powered-by-line {
  color: #231f20 !important;
  font-family: "Montserrat" !important;
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
.followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .powered-by-line img {
  margin-left: 10px !important;
  height: 1.13em !important;
  max-height: 1.13em !important;
}
</style><div class="followit--follow-form-container" attr-a attr-b attr-c attr-d attr-e attr-f><form data-v-1bbcb9ec="" action="https://api.follow.it/subscription-form/SEp1c0NaSVBTZmdGNVNJZ0pkZzhnSjFCV1dOdFZGeG5ONDFvRGtpUUMrYUN1akxUL2dLb09IOE1zSldEL0FEUU1rdVdySVZwa2lMS2Z5dncwT0JadkViN0JMZW5iakx6a1BZQ0o2eDNCNXlRZDVzMlNSOXl2M3JoWldhV1FqWFN8cEtXK3gvQ2o4NlZMOEd0SFVpVXhLR0FTOGlSSmVpWEtZeWtrMG4zRHhsaz0=/8" method="post"><div data-v-1bbcb9ec="" class="form-preview" style="background-color: rgb(255, 255, 255); border-style: solid; border-width: 1px; border-color: rgb(204, 204, 204); position: relative;"><div data-v-1bbcb9ec="" class="preview-heading"><h5 data-v-1bbcb9ec="" style="text-transform: none !important; font-family: Arial; font-weight: bold; color: rgb(0, 0, 0); font-size: 16px; text-align: center;">
                  Получай решения LeetCode на email:
                </h5></div> <div data-v-1bbcb9ec="" class="preview-input-field"><input data-v-1bbcb9ec="" type="email" name="email" required="required" placeholder=" Email" spellcheck="false" style="text-transform: none !important; font-family: Arial; font-weight: normal; color: rgb(0, 0, 0); font-size: 14px; text-align: center; background-color: rgb(255, 255, 255);"></div> <div data-v-1bbcb9ec="" class="preview-submit-button"><button data-v-1bbcb9ec="" type="submit" style="text-transform: none !important; font-family: Arial; font-weight: bold; color: rgb(255, 255, 255); font-size: 16px; text-align: center; background-color: rgb(148, 136, 136);">
                  Подписаться
                </button></div></div></form><a href="https://follow.it" class="powered-by-line"><img src="https://follow.it/static/img/colored-logo.svg" alt="follow.it" height="17px"/></a></div>
</rawhtml>

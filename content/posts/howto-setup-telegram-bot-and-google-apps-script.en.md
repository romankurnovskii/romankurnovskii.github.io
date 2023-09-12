---
# draft: true
title: Telegram bot with Google Apps Script (GAS)
seoTitle: Telegram bot with Google Apps Script (GAS)
description: Telegram bot with Google Apps Script (GAS)
toc: true
tags: [javascript]
series: []
categories: [Programming]
date: 2023-09-11
lastMod: 2023-09-12
featuredImage: https://picsum.photos/700/237?grayscale
authors: [roman-kurnovskii]
---


## 1. Set Up the Telegram Bot

- Use the [BotFather](https://t.me/botfather) on Telegram to create a new bot.
- Get your HTTP API token.

## 2. Google Apps Script Code

Google Apps Script for a Telegram bot:

```js
var TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'; 
var WEBHOOK_URL = 'YOUR_WEB_APP_URL';  // web app URL of your GAS deployment.
var USERS_SPREAD_SHEET_NAME='usersAnswers'

function setWebhook() {
  var url = 'https://api.telegram.org/bot' + TOKEN + '/setWebhook?url=' + WEBHOOK_URL;
  UrlFetchApp.fetch(url);
}

function doPost(e) {
  var contents = JSON.parse(e.postData.contents);
  var chatId = contents.message.chat.id;
  var message = contents.message.text;

  if (message === '/start') {
    sendTelegramMessage(chatId, "Choose an action:\n/add\n/show all");
  } else if (message === '/add') {
    sendTelegramMessage(chatId, "Send Answer to question 1");
    // Store that the next message should be treated as sessionCSRF
    PropertiesService.getScriptProperties().setProperty(chatId, 'waiting_for_question1');
  } else if (PropertiesService.getScriptProperties().getProperty(chatId) === 'waiting_for_question1') {
    saveToSpreadsheet(contents.message.from, message);  // Save to spreadsheet
    sendTelegramMessage(chatId, "Send Answer to question 2");
    PropertiesService.getScriptProperties().setProperty(chatId, 'waiting_for_question2');
  } else if (PropertiesService.getScriptProperties().getProperty(chatId) === 'waiting_for_question2') {
    saveToSpreadsheet(contents.message.from, message);
    PropertiesService.getScriptProperties().deleteProperty(chatId);
  } else if (message === '/show all') {
    var userAnswers = getAllSessionsForUser(contents.message.from);
    sendTelegramMessage(chatId, userAnswers.join('\n'));
  }
}

function sendTelegramMessage(chatId, text) {
  var apiUrl = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage';
  var payload = {
    'method': 'post',
    'payload': {
      'chat_id': chatId,
      'text': text
    }
  };
  UrlFetchApp.fetch(apiUrl, payload);
}

function saveToSpreadsheet(userData, text) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(USERS_SPREAD_SHEET_NAME);
  spreadsheet.appendRow([userData.id, userData.first_name, userData.last_name, userData.username, text]);
}

function getAllSessionsForUser(userData) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(USERS_SPREAD_SHEET_NAME);
  var rows = spreadsheet.getDataRange().getValues();
  var sessions = [];
  for (var i = 0; i < rows.length; i++) {
    if (rows[i][0] === userData.id) {   // If user id matches
      sessions.push(rows[i][4]);        // Assuming answer to question 1 is in the 5th column
    }
  }
  return sessions;
}
```

## Deploy as Web App

- Click on the cloud icon in GAS to "Deploy" > "New Deployment".
- Choose type as "Web app".
- Set permissions and deploy.
- You will get a URL (This is what you'll use as WEB_APP_URL in the above code).

## Run setWebhook() Function

- This tells Telegram where your bot's web app is hosted.

## Bot Commands

After you've done the above, you can send /start to your bot, and it should respond with the options.

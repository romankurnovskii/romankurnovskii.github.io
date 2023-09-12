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

var COLUMN_STEP_1 = 'E'
var COLUMN_STEP_2 = 'F'
var COLUMN_DATE = 'A'

function setWebhook() {  // run after every deploy and updated WEBHOOK_URL
  var url = 'https://api.telegram.org/bot' + TOKEN + '/setWebhook?url=' + WEBHOOK_URL;
  UrlFetchApp.fetch(url);
}

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var message = data.message.text;
  var chatId = String(data.message.chat.id);
  var name = data.message.chat.first_name + " " + data.message.chat.last_name;
  const userData = data.message.from

  const propertiesService = PropertiesService.getScriptProperties()
  let chatDialogStatus = propertiesService.getProperty(chatId)
  let msg = ''
  const COMMANDS = '\n/start\n/about\n/stat\n/add\n/show\n/pause\n/request'
  try {
    if (message === '/start') {
      propertiesService.deleteProperty(chatId);
      saveRequestToSpreadsheet(userData, message)
      msg = 'Choose an action:' + COMMANDS
    } else if (message === '/add') {  // Will be in two steps (requests from user)
      propertiesService.setProperty(chatId, 'WAITING_FOR_ADD_STEP_1');
      updateChatText(userData, Date.now().toLocaleString(), COLUMN_DATE);
      msg = "Step 1. Send first value"
    } else if (chatDialogStatus == 'WAITING_FOR_ADD_STEP_1') {
      updateChatText(userData, message, COLUMN_STEP_1);  // Save to spreadsheet
      propertiesService.setProperty(chatId, 'WAITING_FOR_ADD_STEP_2');
      msg = 'Step 2. Send second value'
    } else if (chatDialogStatus === 'WAITING_FOR_ADD_STEP_2') {
      propertiesService.deleteProperty(chatId);
      updateChatText(userData, message, COLUMN_STEP_2);
      msg = 'Done. Two values saved in different columns'
    } else {
      propertiesService.deleteProperty(chatId);
      saveRequestToSpreadsheet(userData, message)
      msg = 'Hello ' + name + ' id: ' + chatId + '\nYour text:\n' + message
      msg += '\nPossible commands:' + COMMANDS
    }
  } catch (e) {
    msg += '\n Error: ' + e + '\nStatus: ' + chatDialogStatus
  }
  sendToTGM(chatId, msg);
}


function sendTelegramMessage(chatId, text) {
  var apiUrl = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage';
  var payload = {
    'method': 'post',
    'payload': {
      'chat_id': chatId,
      'text': String(text)
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

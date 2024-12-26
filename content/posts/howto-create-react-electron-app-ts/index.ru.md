---
title: Как создать приложение React-Electron с нуля
seoTitle: Как создать приложение React-Electron на TypeScript с нуля
description: Как создать приложение React-Electron на TypeScript с нуля в 2023 году
toc: true
tags: [typescript, react, electron]
series: []
categories: [JavaScript]
date: 2023-08-26
lastMod: 2023-08-26
featuredImage: https://github.com/romankurnovskii/electron-react-template/raw/main/assets/logo.png
authors: []
---

В этом пошаговом руководстве мы создадим простое приложение React-Electron с нуля. Electron — это фреймворк, который позволяет создавать кроссплатформенные настольные приложения с использованием веб-технологий, таких как HTML, CSS и JavaScript. React — популярная библиотека JavaScript для создания пользовательских интерфейсов.

Я использую этот чистый шаблон в качестве заготовки для своих проектов.

## Вкратце

1. Перейдите к репозиторию [electron-react-template](https://github.com/romankurnovskii/electron-react-template)
2. Нажмите **Use this template**, чтобы создать новый репозиторий и начать кодирование.

## Предварительные требования

Прежде чем начать этот урок, убедитесь, что следующие инструменты установлены на вашей системе:

1. Node.js (версия 12 или новее)
2. npm или yarn (npm включен в Node.js, а yarn можно установить отдельно)
3. Редактор кода (например, Visual Studio Code)

## Шаг 1: Настройка структуры проекта

Создайте новую директорию для вашего проекта и перейдите к ней в вашем терминале:

```sh
mkdir react-electron-app
cd react-electron-app
```

```sh
mkdir -p src electron public
touch src/App.tsx src/index.tsx electron/main.ts
touch public/index.html
```

Теперь ваш проект должен иметь следующую структуру:

```
react-electron-app
├── electron
│   └── main.ts
├── public
│   └── index.html
└── src
    ├── App.tsx
    └── index.tsx
```

## Шаг 2: Инициализация проекта

Выполните следующую команду в терминале, чтобы инициализировать проект с файлом `package.json`:

```sh
npm init -y
```

## Шаг 3: Установка зависимостей

Установите необходимые зависимости для проекта:

```sh
npm install --save react react-dom typescript electron
npm install --save-dev concurrently electron-builder electron-is-dev wait-on cross-env
```

## Шаг 4: Настройка TypeScript

Создайте файл `tsconfig.json` в корне проекта:

```sh
touch tsconfig.json
```

Добавьте следующее содержимое в файл `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2023",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

## Шаг 5: Настройка приложения React

Замените содержимое файла `src/App.tsx` следующим кодом:

```tsx
function App() {
  return (
    <div className='App'>
      <p>
        Привет, мир!
      </p>
    </div>
  );
}

export default App;
```

Замените содержимое файла `src/index.tsx` следующим кодом:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Замените содержимое файла `public/index.html` следующим кодом:

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Приложение React-Electron</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## Шаг 6: Настройка основного процесса Electron

Замените содержимое файла `electron/main.ts` следующим кодом:

```ts
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
```

## Шаг 7: Настройка скриптов в package.json

Откройте файл `package.json` и добавьте следующие скрипты в раздел "scripts":

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "eject": "react-scripts eject",
  "electron:dev": "concurrently \"cross-env BROWSER=none yarn start\" \"wait-on http://127.0.0.1:3000 && tsc -p electron -w\" \"wait-on http://127.0.0.1:3000 && tsc -p electron && electron .\"",
  "electron:build": "yarn build && tsc -p electron && electron-builder",
  "electron:dist": "yarn build && tsc -p electron && electron-builder --mac --dir"
}
```

## Шаг 8: Запуск приложения

Теперь вы можете запустить свое приложение React-Electron, выполнив следующую команду:

```sh
npm run electron:dev
```

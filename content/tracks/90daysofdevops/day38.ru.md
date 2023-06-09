---
title: 38. Staging и Изменения
description: Git Staging и Изменение файлов
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-05-28"
lastmod: "2022-05-28"
featuredImage:
draft: false
id: 1049042
weight: 38
---

## Working directory

Git - это система трёх основных стадий: working directory, staging area и repository.
![day38_git01](../images/day38_git01.ru.png)

Пройдем поэтапно каждую стадию.

Создадим пустую папку.
```bash
mkdir my_fodler
cd my_folder
```
Сделаем инициализацию git проекта.
```bash
git init
```
![](../images/Day38_Git1.ru.png)(../images/Day38_Git1.ru.png)
После инициализации git репозитория создается скрытая папка `.git`
![](./images/Day38_Git2.ru.png?v1)
Здесь хранятся сведения о репозитории git, а также информация о наших ветках и коммитах.
### Staging/Stage

Сейчас у нас пустая папка. Создадим пустой файл `README.md` и выполним команду
```bash
git status
```
Git знает о новом файле, но этот файл еще не зафиксирован в *staging*. Текущее расположение файла - *Working directory*, директория, где проиниализирован .git проект.

*staging* - это хранилище для файлов с изменениями, информация о которых попадет в единый коммит

![](../images/Day38_Git3.ru.png?v1)

Чтобы файл перешел в *staging*, необходимо его добавить. Для этого выполним команду
```bash
git add README.md
```
После добавления файла в *staging area*, цвет поменялся на зеленый

![](../images/Day38_Git4.ru.png?v1)

Можно добавить все измененные файлы с помощью команды
```bash
git add .
```
Знак `.` означает, что мы хотим добавить все обновленные файлы и папки.

Далее необходимо зафиксировать изменения в репозитории. Для этого выполним команду
```bash
git commit -m "Add README.md (или другой значимый комментарий)"
```
![](../images/Day38_Git5.ru.png?v1)
### Коммит изменений
В процессе работы мы добавляем много различных файлов. Если мы захотим добавить более длинный и осмысленный коммит, то можно запусть команду без комментария

```bash
git commit
```
Откроется стандартный редактор текста. Записываем комментарий и сохраняем.
![](../images/Day38_Git7.ru.png?v1)

Проверим результат
```bash
git status
```

### Требования к именам коммитов

У каждой компании/проекта есть свои требования к именам коммитов. В компании может быть несколько проектов, каждый из которых должен иметь свои требования к именам коммитов. В проекте может быть несколько веток, каждая из которых должна иметь свои требования к именам коммитов. 

Существует [гайдлайн](https://www.conventionalcommits.org/ru/v1.0.0/), на который можно ориентироваться. Такой подход точно будет понятен для всех новых проектов. Некоторые проекты, соблюдабщие данную конвенцию: [angular](https://github.com/angular/angular/commits/main), [electron](https://github.com/electron/electron/commits/)

Коммит:
* Должен использоваться present tense ("add feature" not "added feature")
* Должен использоваться imperative mood ("move cursor to..." not "moves cursor to...")

#### Примеры имен коммитов
`init:` - используется для начала проекта/таска. Примеры:
```
init: start youtube-task
init: start mentor-dashboard task
```
`feat:` - это реализованная новая функциональность из технического задания (добавил поддержку зумирования, добавил footer, добавил карточку продукта). Примеры:
```
feat: add basic page layout
feat: implement search box 
feat: implement request to youtube API
feat: implement swipe for horizontal list
feat: add additional navigation button
feat: add banner
feat: add social links
feat: add physical security section
feat: add real social icons
```
`fix:` - исправил ошибку в ранее реализованной функциональности. Примеры:
```
fix: implement correct loading data from youtube
fix: change layout for video items to fix bugs
fix: relayout header for firefox
fix: adjust social links for mobile
```
`refactor:` - новой функциональности не добавлял / поведения не менял. Файлы в другие места положил, удалил, добавил. Изменил форматирование кода (white-space, formatting, missing semi-colons, etc). Улучшил алгоритм, без изменения функциональности. Примеры:
```
refactor: изменение структуры проекта
refactor: переименование переменных для лучшей читабельности
refactor: применить eslint
refactor: применить prettier
```
`docs:` - используется при работе с документацией/readme проекта. Примеры:
```
docs: обновить readme с дополнительной информацией
docs: обновить описание метода run()
```

### Пропуск Staging Area

Можно сразу добавить коммит, добавив параметр `-a` в `git commit`:

![](../images/Day38_Git8.ru.png?v1)

### Удаление файлов
Фиксация удаления как и добавления файлов происхоит через комит

Создадим файл -> Добавим в stage -> Удалим файл

```bash
touch old_file.txt
git add old_file.txt
git commit -m "add old_file to be removed"
```

Удаляем файл
    
```bash
git rm old_file.txt
git status
```

![](../images/Day38_Git9.ru.png?v1)

### Переименование/Перемещение файлов

Мы можем переименовывать или перемещать файлы в проекте средствами операционной системы. Таке это можно делать командами git. 

Пример:

```bash
git mv old_file.txt new_file.txt
```

### Пропуск/игнорирование файлов

В Git это можно сделать рзличными способами:
- Игнорировать изменения в неотслеченных файлах с помощью `.gitignore` файла
- Игнорировать изменения в неотслеченных файлах с помощью `exclude` файла
- Остановка отслеживания файла и пропуск изменений с помощью `git update-index`
- Остановка отслеживания файла и пропуск изменений с помощью `git rm`

#### .gitignore

Достаточно в файл `.gitignore` добавить путь до файлов или папок, которые необходимо игнорировать

![](../images/Day38_Git13.ru.png?v1)

После обновления файл переходит в категорию **Untracked files**

![](../images/Day38_Git14.ru.png?v1)

Если файлы уже добавлены в stage, но нужно убрать файл, то можно использовать команду `git rm --cached`

### Status сокращенно

```bash
git status -s
```
![](../images/Day38_Git16.ru.png?v1)
## Ресурсы 

- [What is Version Control?](https://www.youtube.com/watch?v=Yc8sCSeMhi4)
- [Types of Version Control System](https://www.youtube.com/watch?v=kr62e_n6QuQ)
- [Git Tutorial for Beginners](https://www.youtube.com/watch?v=8JJ101D3knE&t=52s) 
- [Git for Professionals Tutorial](https://www.youtube.com/watch?v=Uszj_k0DGsg) 
- [Git and GitHub for Beginners - Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk&t=8s) 
- [Complete Git and GitHub Tutorial](https://www.youtube.com/watch?v=apGV9Kg7ics)

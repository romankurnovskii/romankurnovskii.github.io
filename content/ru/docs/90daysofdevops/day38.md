---
title: 38 - Staging и Изменение
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
TODO: translate
---

## Staging

Git - это система трёх основных стадий: working directory, staging area и repository.
[![](../images/day38_git01.png)](../images/day38_git01.png)

Возьмем папку проекта, созданную нами в начале [курса статей по git](../day35), и пройдемся по некоторым простым шагам, которые мы можем выполнить с помощью git. Мы создали папку на нашей локальной машине и инициализировали ее с помощью команды `git init`.

[![](../images/Day38_Git1.png)](../images/Day38_Git1.png)

После инициализации папки создается скрытая папка `.git`

![](../images/Day38_Git2.png?v1)

Здесь хранятся сведения о репозитории git, а также информация о наших ветках и коммитах.

### Staging

Сейчас у нас пустая папка. Создадим пустой файл `README.md`. Выполним команду
```
git status
```
Git знает о новом файле, но этот файл еще не зафиксирован в *staging*. Текущее расположение файла - *Working directory*, директория, где проиниализирован .git проект.

![](../images/Day38_Git3.png?v1)

Чтобы файл перешел в *staging*, необходимо его добавить. Для этого выполним команду
```
git add README.md
```
После добавления файла в *staging area*, цвет поменялся на зеленый

![](../images/Day38_Git4.png?v1)

Можно добавить все измененные файлы с помощью команды
```
git add .
```
Знак `.` означает, что мы хотим добавить всё.

Далее необходимо зафиксировать изменения в репозитории. Для этого выполним команду
```
git commit -m "Add README.md (или другой значимый комментарий)"
```
![](../images/Day38_Git5.png?v1)

### Коммит изменений

В процессе работы мы добавляем много различных файлов. Если мы захотим добавить более длинный и осмысленный коммит, то можно запусть команду без комментария
```
git commit
```
![](../images/Day38_Git6.png?v1)
Откроется стандартный редактор текста. Записываем комментарий и сохраняем.
![](../images/Day38_Git7.png?v1)

Проверим результат
```
git status
```

### Требования к именам коммитов

У каждой компании/проекта есть свои требования к именам коммитов. В компании может быть несколько проектов, каждый из которых должен иметь свои требования к именам коммитов. В проекте может быть несколько веток, каждая из которых должна иметь свои требования к именам коммитов. 

Существует [гайдлайн](https://www.conventionalcommits.org/en/v1.0.0/), на который можно ориентироваться. Такой подход точно будет понятен для всех новых проектов.

Коммит:
- Должен использоваться present tense ("add feature" not "added feature")
- Должен использоваться imperative mood ("move cursor to..." not "moves cursor to...")

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
refactor: change structure of the project
refactor: rename vars for better readability
refactor: apply eslint
refactor: apply prettier
```
`docs:` - используется при работе с документацией/readme проекта. Примеры:
```
docs: update readme with additional information
docs: update description of run() method
```

### Пропуск Staging Area

Можно сразу добавить коммит, добавим параметр `-a` в `git commit`:

![](../images/Day38_Git8.png?v1)

### Удаление файлов

Как насчет удаления файлов из нашего проекта, возможно, у нас есть другой файл в нашем каталоге, который мы зафиксировали, но теперь проект больше не нуждается или не использует его, в качестве наилучшей практики мы должны удалить его.

Просто потому, что мы удаляем файл из каталога, git все еще знает об этом файле, и нам также нужно удалить его из репозитория. Вы можете увидеть рабочий процесс для этого ниже.

![](../images/Day38_Git9.png?v1)


Это может быть немного сложно запомнить или иметь дело с большим проектом, в котором много перемещаемых файлов и папок. Мы можем сделать это с помощью одной команды
```
git rm oldcode.ps1
```
![](../images/Day38_Git10.png?v1)

### Переименование/Перемещение файлов

Within our operating system, we can rename and move our files. We will no doubt need to do this from time to time with our projects. Similar to removing though there is a two-step process, we change our files on our OS and then we have to modify and make sure that the staging area or that the files are added correctly. Steps as follows: 

![](../images/Day38_Git11.png?v1)

However, like removing files from the operating system and then the git repository we can perform this rename using a git command too. 

![](../images/Day38_Git12.png?v1)

### Ignoring Files

We may have the requirement to ignore files or folders within our project that we might be using locally or that will be just wasted space if we were to share with the overall project, a good example of this could be logs. I also think using this for secrets that you do not want to be shared out in public or across teams. 

We can ignore files by adding folders or files to the `.gitignore` file in our project directory. 

![](../images/Day38_Git13.png?v1)

You can then open the `.gitignore` file and see that we have the logs/ directory present. But we could also add additional files and folders here to ignore. 

![](../images/Day38_Git14.png?v1)

We can then see `git status` and then see what has happened. 

![](../images/Day38_Git15.png?v1)

There are also ways in which you might need to go back and ignore files and folders, maybe you did want to share the logs folder but then later realised that you didn't want to. You will have to use `git rm --cached ` to remove files and folders from the staging area if you have a previously tracked folder that you now want to ignore. 

### Short Status

We have been using `git status` a lot to understand what we have in our staging area and what we do not, it's a very comprehensive command with lots of detail. Most of the time you will just want to know what has been modified or what is new? We can use `git status -s` for a short status of this detail. I would usually set an alias on my system to just use `git status -s` vs the more detailed command. 

![](../images/Day38_Git16.png?v1)

In the post tomorrow we will continue to look through these short examples of these common git commands. 

## Ресурсы 

- [What is Version Control?](https://www.youtube.com/watch?v=Yc8sCSeMhi4)
- [Types of Version Control System](https://www.youtube.com/watch?v=kr62e_n6QuQ)
- [Git Tutorial for Beginners](https://www.youtube.com/watch?v=8JJ101D3knE&t=52s) 
- [Git for Professionals Tutorial](https://www.youtube.com/watch?v=Uszj_k0DGsg) 
- [Git and GitHub for Beginners - Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk&t=8s) 
- [Complete Git and GitHub Tutorial](https://www.youtube.com/watch?v=apGV9Kg7ics)
- [Git cheatsheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)


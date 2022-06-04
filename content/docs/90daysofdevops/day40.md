---
title: 40 - Social Network for code
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-05-30"
lastmod: "2022-05-30"
featuredImage:
draft: false
id: 1049044
---
## Социальная сеть для кода
Изучение GitHub | GitLab | BitBucket 

Сегодня я хочу рассказать о некоторых сервисах на основе git, о которых мы, вероятно, все слышали и ожидаем, что будем использовать их ежедневно.

Затем мы воспользуемся некоторыми знаниями из предыдущего сеанса, чтобы переместить копии наших данных в каждую из основных служб.

Я назвал этот раздел «Социальная сеть для кода», поясню почему?

### GitHub

Наиболее распространенным, по крайней мере для меня, является GitHub, GitHub — это веб-хостинг для git. Чаще всего он используется разработчиками программного обеспечения для хранения своего кода. Управление исходным кодом с функциями контроля версий git, а также множеством дополнительных функций. Это позволяет командам или открытым участникам легко общаться и обеспечивает социальный аспект кодирования. (отсюда и название социальной сети) С 2018 года GitHub является частью Microsoft.

GitHub существует уже довольно давно и был основан в 2007-2008 годах. Сегодня на платформе более 40 миллионов пользователей.

Основные возможности GitHub

- Code Repository 
- Pull Requests 
- Project Management toolset - Issues 
- CI / CD Pipeline - GitHub Actions 

С точки зрения ценообразования GitHub предлагает различные уровни ценообразования для своих пользователей. Дополнительную информацию можно найти на странице [Цены](https://github.com/pricing).

Для этого мы рассмотрим бесплатный уровень.

Я собираюсь использовать свою уже созданную учетную запись GitHub во время этого пошагового руководства, если у вас нет учетной записи, то на открывающейся странице GitHub есть вариант регистрации и несколько простых шагов для настройки.

### GitHub opening page

Когда вы впервые входите в свою учетную запись GitHub, вы получаете страницу, содержащую множество виджетов, дающих вам варианты того, где и что вы хотели бы увидеть или сделать. Во-первых, у нас есть «All Activity», это даст вам представление о том, что происходит с вашими репозиториями или действиями в целом, связанными с вашей организацией или учетной записью.

![](../images/Day40_Git1.png?v1)

Затем у нас есть наши репозитории кода, либо наши собственные, либо репозитории, с которыми мы недавно взаимодействовали. Мы также можем быстро создавать новые репозитории или репозитории поиска.

![](../images/Day40_Git2.png?v1)

Затем у нас есть наша недавняя активность, для меня это проблемы и  pull requests, которые я недавно создал или в которых участвовал.

![](../images/Day40_Git3.png?v1)

Over on the right side of the page we have some referrals for repositories that we might be interested in, most likely based on your recent activity or own projects. 

![](../images/Day40_Git4.png?v1)

To be honest I am very rarely on my home page that we just saw and described, although I now see that the feed could be really useful to help interacting with the community a little better on certain projects. 

Next up if we want to head into our GitHub Profile we can navigate to the top right corner and on your image there is a drop down which allows you to navigate through your account. From here to access your Profile select "Your Profile" 

![](../images/Day40_Git5.png?v1)

Next, your profile page will appear, by default unless you change your configuration you are not going to see what I have, I have added some functionality that shows my recent blog posts over on [vZilla](https://vzilla.co.uk) and then also my latest videos on my [YouTube](https://m.youtube.com/c/MichaelCade1) Channel. 

Personally you are not going to be spending much time looking at your own profile, but this is a good profile page to share around your network so they can see the cool projects you are working on. 

![](../images/Day40_Git6.png?v1)

We can then drill down into the building block of GitHub, the repositories. Here you are going to see your own repositories and if you have private repositories they are also going to be shown in this long list. 

![](../images/Day40_Git7.png?v1)

Поскольку этот репозиторий так важен для GitHub, позвольте мне выбрать довольно загруженный в последнее время и просмотреть некоторые основные функции, которые мы можем использовать здесь, в дополнение ко всему, что я уже использую, когда дело доходит до редактирования нашего кода в git. моя локальная система.

Прежде всего, в предыдущем окне я выбрал репозиторий 90DaysOfDevOps, и мы видим это представление. Вы можете видеть из этого представления, что у нас есть много информации, у нас есть наша основная структура кода в середине, показывающая наши файлы и папки, которые хранятся в нашем репозитории. Наш файл readme.md отображается внизу. Справа от страницы у нас есть раздел о репозитории, где у репозитория есть описание и назначение. Затем у нас есть много информации под этим, показывающей, сколько людей отметили проект, разветвились и смотрят.

![](../images/Day40_Git8.png?v1)

If we scroll down a little further you will also see that we have Releases, these are from the golang part of the challenge. We do not have any packages in our project, we have our contributers listed here. (Thank you community for assisting in my spelling and fact checking) We then have languages used again these are from different sections in the challenge.  

![](../images/Day40_Git9.png?v1)

В верхней части страницы вы увидите список вкладок. Они могут различаться, и их можно изменить, чтобы отображались только те, которые вам нужны. Вы увидите здесь, что я не использую все это, и я должен удалить их, чтобы убедиться, что весь мой репозиторий в порядке.

Во-первых, у нас была вкладка кода, которую мы только что обсуждали, но эти вкладки всегда доступны при навигации по репозиторию, что очень полезно, так что мы можем быстро и легко переходить между разделами. Далее у нас есть вкладка вопросов.

Проблемы позволяют отслеживать вашу работу на GitHub, где происходит разработка. В этом конкретном репозитории вы можете увидеть, что у меня есть некоторые проблемы, связанные с добавлением диаграмм или опечаток, но также у нас есть проблема, указывающая на необходимость или требование для китайской версии репозитория.

Если это был репозиторий кода, то это отличное место, чтобы сообщить о проблемах или проблемах с сопровождающими, но помните, будьте внимательны и подробны в отношении того, о чем вы сообщаете, давайте как можно больше подробностей.

![](../images/Day40_Git10.png?v1)

Следующая вкладка — Pull Requests. Pull Requests позволяют вам сообщать другим об изменениях, которые вы отправили в ветку в репозитории. Здесь кто-то мог разветвить ваш репозиторий, внести изменения, такие как исправления ошибок или улучшения функций, или просто опечататься во многих случаях в этом репозитории.

Мы рассмотрим разветвление позже.

![](../images/Day40_Git11.png?v1)

Я считаю, что следующая вкладка совершенно новая? Но я подумал, что для такого проекта, как #90DaysOfDevOps, это может действительно помочь направить контент, а также помочь сообществу, когда они проходят свой собственный путь обучения. Я создал несколько дискуссионных групп для каждого раздела задачи, чтобы люди могли присоединиться и обсудить.

![](../images/Day40_Git12.png?v1)

Вкладка "Actions" позволит вам создавать, тестировать и развертывать код и многое другое прямо из GitHub. GitHub Actions будет чем-то, что мы рассмотрим в разделе задачи, посвященном CI/CD, но именно здесь мы можем установить некоторую конфигурацию, чтобы автоматизировать шаги для нас.

В моем основном профиле GitHub я использую GitHub Actions для получения последних сообщений в блогах и видео на YouTube, чтобы обновлять информацию на этом домашнем экране.

![](../images/Day40_Git13.png?v1)

I mentioned above about how GitHub is not just a source code repository but it is also a project management tool, The Project tab enables us to build out project tables kanban type boards so that we can link issues and PRs to better collaborate on the project and have a visibility of those tasks. 

![](../images/Day40_Git14.png?v1)

I know that issues to me seems like a good place to log feature requests and they are but the wiki page allows for a comprehensive roadmap for the project to be outlined with the current status and in general better document your project be it troubleshooting or how-to type content. 

![](../images/Day40_Git15.png?v1)

Not so applicable to this project but the Security tab is really there to make sure that contributers know how to deal with certain tasks, we can define a policy here but also code scanning add-ons to make sure your code for example does not contain secret environment variables. 

![](../images/Day40_Git16.png?v1)

For me the insights tab is great, it provides so much information about the repository from how much activity has been going on down to commits and issues, but it also reports on traffic to the repository. You can see a list on the left side that allows you to go into great detail about metrics on the repository. 

![](../images/Day40_Git17.png?v1)

Finally we have the Settings tab, this is where we can get into the details of how we run our repository, I am currently the only maintainer of the repository but we could share this responsibility here. We can define integrations and other such tasks here. 

![](../images/Day40_Git18.png?v1)

This was a super quick overview of GitHub, I think there are some other areas that I might have mentioned that need explaining in a little more detail. As mentioned GitHub houses millions of repositories mostly these are holding source code and these can be public or privately accessible. 

### Forking 

Я собираюсь больше рассказать об Open-Source на завтрашней сессии, но большая часть любого репозитория кода — это возможность сотрудничать с сообществом. Давайте подумаем о сценарии: мне нужна копия репозитория, потому что я хочу внести в него некоторые изменения, может быть, я хочу исправить ошибку или, может быть, я хочу что-то изменить, чтобы использовать его для моего варианта использования, который, возможно, не был предполагаемый вариант использования для первоначального сопровождающего кода. Это то, что мы бы назвали разветвлением репозитория. Форк — это копия репозитория. Разветвление репозитория позволяет вам свободно экспериментировать с изменениями, не затрагивая исходный проект.

Позвольте мне вернуться на начальную страницу после входа в систему и увидеть один из предложенных репозиториев.

![](../images/Day40_Git19.png?v1)

Если мы нажмем на этот репозиторий, мы получим тот же вид, что и репозиторий 90DaysOfDevOps.

![](../images/Day40_Git20.png?v1)

If we notice below we have 3 options, we have watch, fork and star. 

- Watch - Updates when things happen to the repository.  
- Fork - copy of a repository.
- Star - "I think your project is cool"

![](../images/Day40_Git21.png?v1)

Given our scenario of wanting a copy of this repository to work on we are going to hit the fork option. If you are a member of multiple organisations then you will have to choose where the fork will take place, I am going to choose my profile. 

![](../images/Day40_Git22.png?v1)

Now we have our own copy of the repository that we can freely work on and change as we see fit. This would be the start of the pull request process that we mentioned briefly before but we will cover in more detail tomorrow. 

![](../images/Day40_Git23.png?v1)

Хорошо, я слышу, как вы говорите, но как мне внести изменения в этот репозиторий и код, если он находится на веб-сайте, ну, вы можете просматривать и редактировать на веб-сайте, но это не будет таким же, как использование вашей любимой IDE в вашей локальной системе. с вашей любимой цветовой темой. Чтобы получить копию этого репозитория на нашем локальном компьютере, мы выполним клонирование репозитория. Это позволит нам работать над вещами локально, а затем отправлять наши изменения обратно в нашу разветвленную копию репозитория.

У нас есть несколько вариантов получения копии этого кода, как вы можете видеть ниже.

Доступна локальная версия GitHub Desktop, которая дает вам визуальное настольное приложение для отслеживания изменений и отправки и получения изменений между локальным и github.

Для этой небольшой демонстрации я буду использовать URL-адрес HTTPS, который мы видим там.

![](../images/Day40_Git24.png?v1)

Now on our local machine, I am going to navigate to a directory I am happy to download this repository to and then run `git clone url` 

![](../images/Day40_Git25.png?v1)

Now we could take to VScode to really make some changes to this. 

![](../images/Day40_Git26.png?v1)

Let's now make some changes, I want to make a change to all those links and replace that with something else. 

![](../images/Day40_Git27.png?v1)

Now if we check back on GitHub and we find our readme.mdin that repository, you should be able to see a few changes that I made to the file. 

![](../images/Day40_Git28.png?v1)

На данном этапе это может быть завершено, и мы можем быть довольны нашим изменением, поскольку мы единственные люди, которые будут использовать наше новое изменение, но, возможно, это было изменение ошибки, и если это так, то мы захотим внести свой вклад через Pull Request  чтобы уведомить сопровождающих исходного репозитория о наших изменениях и посмотреть, примут ли они наши изменения.

Мы можем сделать это, используя кнопку вклада, выделенную ниже. Я расскажу об этом подробнее завтра, когда мы рассмотрим рабочие процессы с открытым исходным кодом.

![](../images/Day40_Git29.png?v1)

Я долго просматривал GitHub и слышал, как некоторые из вас плачут, но как насчет других вариантов!

Ну, есть, и я собираюсь найти некоторые ресурсы, которые охватывают основы для некоторых из них. В своих путешествиях вы столкнетесь с GitLab и BitBucket, и хотя они основаны на git, у них есть свои отличия.

Вы также столкнетесь с размещенными вариантами. Чаще всего здесь я видел GitLab как размещенную версию по сравнению с GitHub Enterprise (не верите, что есть бесплатный размещенный GitHub?)

## Ресурсы 

- [Learn GitLab in 3 Hours | GitLab Complete Tutorial For Beginners](https://www.youtube.com/watch?v=8aV5AxJrHDg)
- [BitBucket Tutorials Playlist](https://www.youtube.com/watch?v=OMLh-5O6Ub8&list=PLaD4FvsFdarSyyGl3ooAm-ZyAllgw_AM5)
- [What is Version Control?](https://www.youtube.com/watch?v=Yc8sCSeMhi4)
- [Types of Version Control System](https://www.youtube.com/watch?v=kr62e_n6QuQ)
- [Git Tutorial for Beginners](https://www.youtube.com/watch?v=8JJ101D3knE&t=52s) 
- [Git for Professionals Tutorial](https://www.youtube.com/watch?v=Uszj_k0DGsg) 
- [Git and GitHub for Beginners - Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk&t=8s) 
- [Complete Git and GitHub Tutorial](https://www.youtube.com/watch?v=apGV9Kg7ics)
- [Git cheatsheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)


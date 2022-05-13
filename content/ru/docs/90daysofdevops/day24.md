---
title: 24 - Network Automation
description: Network Automation
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-05-14"
lastmod: "2022-05-14"
featuredImage:
draft: false
id: 1048805
---
## Network Automation 

### Основы сетевой автоматизации

Основные задачи для сетевой автоматизации
- Достичь ловкости
- Снизить стоимость
- Устранить ошибки
- Гарантируйте соблюдение
- Централизованное управление

Процесс внедрения автоматизации специфичен для каждого бизнеса. Когда дело доходит до развертывания автоматизации, не существует универсального решения. Способность определить и использовать подход, который лучше всего подходит для вашей организации, имеет решающее значение для продвижения к поддержке и созданию более гибкой среды для пользователей. (Мы обсуждали что-то подобное в самом начале в отношении всего DevOps, изменения культуры и автоматизированного процесса, который это приносит)

Чтобы разобраться во всем, вам нужно будет определить, как задача или процесс, которые вы пытаетесь автоматизировать, будут улучшать опыт конечного пользователя или ценность для бизнеса, следуя пошаговому систематическому подходу.

«Если не знаешь, куда идешь, любая дорога приведет тебя туда».

Имея структуру или структуру проекта, которую вы пытаетесь достичь, зная, какова ваша конечная цель, а затем шаг за шагом работая над достижением этой цели, измеряйте успех автоматизации на различных этапах на основе бизнес-результатов.

Создавайте концепции, моделируя существующие приложения. Нет необходимости разрабатывать концепции автоматизации в пузыре, потому что их нужно применять к вашему приложению, вашему сервису, вашей инфраструктуре, поэтому начните создавать концепции и моделировать их вокруг вашей существующей инфраструктуры, вы повторно существующие приложения.

### Подход к автоматизации сети

Мы должны определить задачи и выполнить обнаружение запросов на изменение сети, чтобы у вас были наиболее распространенные проблемы и проблемы, решение которых нужно автоматизировать.

- Составьте список всех запросов на изменение и рабочих процессов, которые в настоящее время обрабатываются вручную.
- Определить наиболее распространенные, трудоемкие и подверженные ошибкам действия.
- Приоритизируйте запросы, используя бизнес-ориентированный подход.
- Это основа построения процесса автоматизации, что нужно автоматизировать, а что нет.

Затем мы должны разделить задачи и проанализировать, как разные сетевые функции работают и взаимодействуют друг с другом.

- Команда инфраструктуры/сети получает заявки на изменения на нескольких уровнях для развертывания приложений.
- На основе сетевых сервисов разделить их на разные области и понять, как они взаимодействуют друг с другом.
    - Оптимизация приложений
    - ADC (контроллер доставки приложений)
    - Межсетевой экран
    - DDI (DNS, DHCP, IPAM и т. д.)
    - Маршрутизация
    - Другие
- Определите различные зависимости, чтобы устранить деловые и культурные различия и обеспечить сотрудничество между командами.

Повторно используемые политики, определение и упрощение повторно используемых сервисных задач, процессов и ввода/вывода.

- Определить предложения для различных услуг, процессов и ввода/вывода.
- Упрощение процесса развертывания сократит время выхода на рынок как новых, так и существующих рабочих нагрузок.
- Когда у вас есть стандартный процесс, его можно упорядочить и согласовать с отдельными запросами для многопоточного подхода и доставки.

Объедините политики со специфическими для бизнеса действиями. Как внедрение этой политики помогает бизнесу? Экономит время? Экономит деньги? Обеспечивает лучший бизнес-результат?

- Убедитесь, что сервисные задачи совместимы.
- Свяжите добавочные сервисные задачи, чтобы они соответствовали созданию бизнес-сервисов.
- Обеспечьте гибкость связывания и повторного связывания сервисных задач по запросу.
- Разверните возможности самообслуживания и проложите путь к повышению операционной эффективности.
- Разрешить несколько наборов технологических навыков продолжать вносить свой вклад в надзор и соответствие.

**Управляйте** политиками и процессами, добавляя и улучшая их, сохраняя при этом доступность и обслуживание.

- Начните с малого, автоматизировав существующие задачи.
- Ознакомьтесь с процессом автоматизации, чтобы вы могли определить другие области, которые могут выиграть от автоматизации.
- повторяйте свои инициативы по автоматизации, постепенно добавляя гибкость при сохранении требуемой доступности.
- Использование поэтапного подхода прокладывает путь к успеху!

Оркестрируйте сетевой сервис!

- Для быстрой доставки приложений требуется автоматизация процесса развертывания.
- Создание гибкой сервисной среды требует управления различными элементами в рамках набора технологических навыков.
- Подготовьтесь к комплексной оркестровке, обеспечивающей контроль над автоматизацией и порядком развертывания.
## Network Automation Tools 

The good news here is that for the most part, the tools we use here for Network automation are generally the same that we will use for other areas of automation or what we have already covered so far or what we will cover in future sessions. 

Operating System - As I have throughout this challenge, I am focusing on doing most of my learning with a Linux OS, those reasons were given in the Linux section but almost all of the tooling that we will touch albeit cross-OS platform maybe today they all started as Linux based applications or tools, to begin with. 

Integrated Development Environment (IDE) - Again not much to say here other than throughout I would suggest Visual Studio Code as your IDE, based on the extensive plugins that are available for so many different languages. 

Configuration Management - We have not got to the Configuration management section yet, but it is very clear that Ansible is a favourite in this area for managing and automating configurations. Ansible is written in Python but you do not need to know Python. 
    
- Agentless 
- Only requires SSH
- Large Support Community 
- Lots of Network Modules
- Push only model 
- Configured with YAML 
- Open Source!  

[Link to Ansible Network Modules](https://docs.ansible.com/ansible/2.9/modules/list_of_network_modules.html)

We will also touch on **Ansible Tower** in the configuration management section, see this as the GUI front end for Ansible. 

CI/CD - Again we will cover more about the concepts and tooling around this but it's important to at least mention here as this spans not only networking but all provisioning of service and platform. 

In particular, Jenkins provides or seems to be a popular tool for Network Automation.

- Monitors git repository for changes and then initiates them. 

Version Control - Again something we will dive deeper into later on. 

- Git provides version control of your code on your local device - Cross-Platform
- GitHub, GitLab, BitBucket etc are online websites where you define your repositories and upload your code. 

Language | Scripting - Something we have not covered here is Python as a language, I decided to dive into Go instead as the programming language based on my circumstances, I would say that it was a close call between Golang and Python and Python it seems to be the winner for Network Automation. 

- Nornir is something to mention here, an automation framework written in Python. This seems to take the role of Ansible but specifically around Network Automation. [Nornir documentation](https://nornir.readthedocs.io/en/latest/) 

Analyse APIs - Postman is a great tool for analysing RESTful APIs. Helps to build, test and modify APIs.

- POST >>> To create resources objects.
- GET  >>> To retrieve a resources.
- PUT  >>> To create or replace the resources.
- PATCH >>> To create or update the resources object.
- Delete >>> To delete a resources

[Postman tool Download](https://www.postman.com/downloads/)

### Other tools to mention

[Cisco NSO (Network Services Orchestrator)](https://www.cisco.com/c/en/us/products/cloud-systems-management/network-services-orchestrator/index.html)

[NetYCE - Simplify Network Automation](https://netyce.com/)

[Network Test Automation](https://pubhub.devnetcloud.com/media/genie-feature-browser/docs/#/)

Over the next 3 days, I am planning to get more hands-on around some of the things we have covered and put some work in around Python and Network automation. 

We have nowhere near covered all of the networking topics so far but wanted to make this broad enough to follow along and still keep learning from the resources I am adding below. 

## Ресурсы 

- [3 Necessary Skills for Network Automation](https://www.youtube.com/watch?v=KhiJ7Fu9kKA&list=WL&index=122&t=89s)
- [Computer Networking full course](https://www.youtube.com/watch?v=IPvYjXCsTg8)
- [Practical Networking](http://www.practicalnetworking.net/)
- [Python Network Automation](https://www.youtube.com/watch?v=xKPzLplPECU&list=WL&index=126)

See you on [Day 25](day25.md)

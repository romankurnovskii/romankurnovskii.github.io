---
title: 62. Terraform - Тестирование, инструменты и альтернативы
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-21"
lastMod: "2022-06-21"
featuredImage:
draft: false
id: 1049053
weight: 62
---
## Тестирование, инструменты и альтернативы

Завершая этот раздел об инфраструктуре как коде, мы должны упомянуть о тестировании нашего кода, различных доступных инструментах, а также о некоторых альтернативах Terraform для достижения этой цели. Как я уже говорил в начале раздела, я остановился на Terraform, поскольку он, во-первых, бесплатный и с открытым исходным кодом, во-вторых, он кроссплатформенный и не зависит от окружения. Но есть и альтернативы, которые следует рассмотреть, но общая цель состоит в том, чтобы донести до людей, что это способ развертывания инфраструктуры.

### Code Rot

Первая область, которую я хочу затронуть в этой сессии, - это гниение кода. В отличие от кода приложений, инфраструктура как код может использоваться, а затем не использоваться в течение очень долгого времени. Возьмем пример: мы собираемся использовать Terraform для развертывания нашей среды VM в AWS, все идеально, все работает с первого раза, и у нас есть наша среда, но эта среда не меняется слишком часто, поэтому код остается в состоянии, возможно, или, надеюсь, хранится в центральном месте, но код не меняется.

А что если что-то изменится в инфраструктуре? Но это делается вне диапазона, или другие вещи меняются в нашей среде.

- Внеполосные изменения (Out of band changes)
- Неприкрепленные версии (Unpinned versions)
- Утратившие актуальность зависимости (Deprecated dependancies)
- Неприменимые изменения (Unapplied changes)

### Тестирование

Еще одна огромная область, которая следует за гниением кода и в целом, это возможность протестировать ваш IaC и убедиться, что все области работают так, как должны.

Прежде всего, есть несколько встроенных команд тестирования, на которые мы можем взглянуть:

| Command              | Description                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------ |
| `terraform fmt`      | Rewrite Terraform configuration files to a canonical format and style.                     |
| `terraform validate` | Validates the configuration files in a directory, referring only to the configuration      |
| `terraform plan`     | Creates an execution plan, which lets you preview the changes that Terraform plans to make |
| Custom validation    | Validation of your input variables to ensure they match what you would expect them to be   |

У нас также есть некоторые инструменты тестирования, доступные вне Terraform:

- [tflint](https://github.com/terraform-linters/tflint)

  - Найти возможные ошибки (Find possible errors)
  - Предупреждать об устаревшем синтаксисе, неиспользуемых объявлениях. (Warn about deprecated syntax, unused declarations.)
  - Применять лучшие практики, соглашения об именовании. (Enforce best practices, naming conventions.)

Инструменты сканирования

- [checkov](https://www.checkov.io/) - сканирование конфигураций облачной инфраструктуры для поиска неправильных конфигураций до их развертывания.
- [tfsec](https://aquasecurity.github.io/tfsec/v1.4.2/) - сканер безопасности статического анализа для кода Terraform.
- [terrascan](https://github.com/accurics/terrascan) - статический анализатор кода для Infrastructure as Code.
- [terraform-compliance](https://terraform-compliance.com/) - легковесный тестовый фреймворк, ориентированный на безопасность и соответствие требованиям, для terraform, позволяющий проводить негативное тестирование вашей инфраструктуры как кода.
- [snyk](https://docs.snyk.io/products/snyk-infrastructure-as-code/scan-terraform-files/scan-and-fix-security-issues-in-terraform-files) - сканирует код Terraform на предмет неправильной конфигурации и проблем безопасности.

Управляемое облачное предложение

- [Terraform Sentinel](https://www.terraform.io/cloud-docs/sentinel) - встроенный фреймворк политики как кода, интегрированный с продуктами HashiCorp Enterprise. Она позволяет принимать решения о политике на основе логики и может быть расширена для использования информации из внешних источников.

Автоматизированное тестирование

- [Terratest](https://terratest.gruntwork.io/) - Terratest - это библиотека Go, которая предоставляет шаблоны и вспомогательные функции для инфраструктуры тестирования.

Стоит упомянуть

- [Terraform Cloud](https://cloud.hashicorp.com/products/terraform) - Terraform Cloud - это управляемый сервис компании HashiCorp. Оно устраняет необходимость в ненужных инструментах и документации для практиков, команд и организаций для использования Terraform в производстве.

- [Terragrunt](https://terragrunt.gruntwork.io/) - Terragrunt - это тонкая обертка, которая предоставляет дополнительные инструменты для сохранения DRY конфигураций, работы с несколькими модулями Terraform и управления удаленным состоянием.

- [Atlantis](https://www.runatlantis.io/) - Terraform Pull Request Automation.

### Альтернативы

В день 57, когда мы начали этот раздел, мы упоминали, что есть некоторые альтернативы, и я очень планирую изучить их после завершения этой задачи.

| Cloud Specific                  | Cloud Agnostic |
| ------------------------------- | -------------- |
| AWS CloudFormation              | Terraform      |
| Azure Resource Manager          | Pulumi         |
| Google Cloud Deployment Manager |                |

Я использовал AWS CloudFormation, вероятно, больше всего из вышеперечисленного списка, он является родным для AWS, но я не использовал другие, кроме Terraform. Как вы можете себе представить, версии для конкретных облаков очень хороши для конкретного облака, но если у вас несколько облачных сред, то вам будет сложно перенести эти конфигурации или у вас будет несколько плоскостей управления для ваших усилий IaC.

Я думаю, что следующим интересным шагом для меня будет уделить некоторое время и узнать больше о [Pulumi](https://www.pulumi.com/).

Из сравнения Pulumi на их сайте

*"И Terraform, и Pulumi предлагают модель инфраструктуры желаемого состояния как кода, где код представляет желаемое состояние инфраструктуры, а механизм развертывания сравнивает это желаемое состояние с текущим состоянием стека и определяет, какие ресурсы должны быть созданы, обновлены или удалены".*

Самое большое отличие, которое я вижу, заключается в том, что в отличие от HashiCorp Configuration Language (HCL) Pulumi позволяет использовать языки общего назначения, такие как Python, TypeScript, JavaScript, Go и .NET.

Краткий обзор [Introduction to Pulumi: Modern Infrastructure as Code](https://www.youtube.com/watch?v=QfJTJs24-JM) Мне нравится простота и возможность выбора, которую вам предлагают, и я хочу разобраться в этом немного подробнее.

На этом мы завершаем раздел "Инфраструктура как код" и переходим к тому, что немного пересекается с управлением конфигурацией, и, в частности, по мере того, как мы переходим к общей картине управления конфигурацией, мы будем использовать Ansible для некоторых из этих задач и демонстраций.

## Ресурсы

- [What is Infrastructure as Code? Difference of Infrastructure as Code Tools](https://www.youtube.com/watch?v=POPP2WTJ8es)
- [Terraform Tutorial | Terraform Course Overview 2021](https://www.youtube.com/watch?v=m3cKkYXl-8o)
- [Terraform explained in 15 mins | Terraform Tutorial for Beginners](https://www.youtube.com/watch?v=l5k1ai_GBDE)
- [Terraform Course - From BEGINNER to PRO!](https://www.youtube.com/watch?v=7xngnjfIlK4&list=WL&index=141&t=16s)
- [HashiCorp Terraform Associate Certification Course](https://www.youtube.com/watch?v=V4waklkBC38&list=WL&index=55&t=111s)
- [Terraform Full Course for Beginners](https://www.youtube.com/watch?v=EJ3N-hhiWv0&list=WL&index=39&t=27s)
- [KodeKloud -  Terraform for DevOps Beginners + Labs: Complete Step by Step Guide!](https://www.youtube.com/watch?v=YcJ9IeukJL8&list=WL&index=16&t=11s)
- [Terraform Simple Projects](https://terraform.joshuajebaraj.com/)
- [Terraform Tutorial - The Best Project Ideas](https://www.youtube.com/watch?v=oA-pPa0vfks)
- [Awesome Terraform](https://github.com/shuaibiyy/awesome-terraform)
- [Pulumi - IaC in your favorite programming language!](https://www.youtube.com/watch?v=vIjeiDcsR3Q&t=51s)

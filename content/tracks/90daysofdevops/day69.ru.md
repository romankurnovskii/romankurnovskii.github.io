---
title: 69. Ansible - контроллер автоматизации (Tower), AWX, Vault
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-28"
lastmod: "2022-06-28"
featuredImage:
draft: false
id: 1048714
weight: 69
---

Завершая раздел об управлении конфигурацией, я хотел бы рассмотреть другие области, с которыми вы можете столкнуться при работе с Ansible.  

Существует множество продуктов, составляющих платформу Ansible Automation.

Red Hat Ansible Automation Platform - это основа для создания и эксплуатации автоматизации в организации. Платформа включает в себя все инструменты, необходимые для внедрения автоматизации в масштабах предприятия.

![](../images/Day69_config1.ru.png?v1)

Я постараюсь осветить некоторые из них в этом посте. Но для получения более подробной информации на официальном сайте Red Hat Ansible есть много другой информации. [Ansible.com](https://www.ansible.com/?hsLang=en-us)

### Ansible Automation Controller | AWX

Я объединил эти два продукта вместе, потому что Automation Controller и AWX очень похожи в том, что они предлагают.

Проект AWX или сокращенно AWX - это проект сообщества с открытым исходным кодом, спонсируемый Red Hat, который позволяет вам лучше контролировать ваши проекты Ansible в ваших средах. AWX - это основной проект, из которого взят компонент контроллера автоматизации.

Если вы ищете корпоративное решение, то вам нужен контроллер автоматизации, или вы могли слышать его как Ansible Tower. Контроллер автоматизации Ansible - это плоскость управления для платформы автоматизации Ansible.

И AWX, и контроллер автоматизации обладают следующими характеристиками, превосходящими все, что мы рассмотрели в этом разделе до сих пор.

- Пользовательский интерфейс
- Управление доступом на основе ролей
- Рабочие процессы
- Интеграция CI/CD

Automation Controller - это корпоративное предложение, в котором вы платите за поддержку.

Мы рассмотрим развертывание AWX в нашей среде minikube Kubernetes.

### Развертывание Ansible AWX

AWX не нужно развертывать в кластере Kubernetes, [github](https://github.com/ansible/awx) для AWX от ansible даст вам эту подробную информацию. Однако, начиная с версии 18.0, AWX Operator является предпочтительным способом установки AWX.

Прежде всего, нам нужен кластер minikube. Мы можем сделать это, если вы следили за разделом Kubernetes, создав новый кластер minikube с помощью команды `minikube start --cpus=4 --memory=6g --addons=ingress`.

![](../images/Day69_config2.ru.png?v1)

Официальный [Ansible AWX Operator](https://github.com/ansible/awx-operator) можно найти здесь. Как указано в инструкции по установке, вы должны клонировать этот репозиторий, а затем выполнить развертывание.

Я сделал форк вышеуказанного репозитория, а затем выполнил команду `git clone https://github.com/MichaelCade/awx-operator.git`. Я советую вам сделать то же самое и не использовать мой репозиторий, так как я могу что-то изменить или его там может не быть.

В клонированном репозитории вы найдете файл awx-demo.yml, в котором нам нужно изменить `NodePort` на `ClusterIP`, как показано ниже:

```
---
apiVersion: awx.ansible.com/v1beta1
kind: AWX
metadata:
  name: awx-demo
spec:
  service_type: ClusterIP
```

Следующим шагом будет определение нашего пространства имен, в котором мы будем развертывать оператор awx, используя команду `export NAMESPACE=awx`, а затем команду `make deploy`, мы начнем развертывание.

![](../images/Day69_config3.ru.png?v1)

При проверке у нас есть наше новое пространство имен, и у нас есть наш awx-operator-controller pod, запущенный в нашем пространстве имен. `kubectl get pods -n awx`.

![](../images/Day69_config4.ru.png?v1)

В клонированном репозитории вы найдете файл awx-demo.yml. Теперь мы хотим развернуть его в нашем кластере Kubernetes и нашем пространстве имен awx. `kubectl create -f awx-demo.yml -n awx`.

![](../images/Day69_config5.ru.png?v1)

Вы можете следить за прогрессом с помощью `kubectl get pods -n awx -w`, который будет визуально следить за происходящим.

У вас должно получиться что-то похожее на изображение, которое вы видите ниже, когда все работает.

![](../images/Day69_config6.ru.png?v1)

Теперь мы должны иметь доступ к нашей awx установке после запуска в новом терминале `minikube service awx-demo-service --url -n $NAMESPACE`, чтобы открыть ее через minikube ingress.

![](../images/Day69_config7.ru.png?v1)

Если мы откроем браузер по этому адресу [], вы увидите, что нам будет предложено ввести имя пользователя и пароль.

![](../images/Day69_config8.ru.png?v1)

По умолчанию имя пользователя - admin, чтобы получить пароль, мы можем выполнить следующую команду `kubectl get secret awx-demo-admin-password -o jsonpath="{.data.password}" -n awx| base64 --decode`.

![](../images/Day69_config9.ru.png?v1)
Очевидно, что это дает вам пользовательский интерфейс для централизованного управления плейбуком и задачами управления конфигурацией, а также позволяет вам работать вместе, в отличие от того, что мы делали до сих пор, когда мы работали с одной станции управления ansible.

Это еще одна из тех областей, где вы, вероятно, могли бы провести еще много времени, изучая возможности этого инструмента.

Я приведу отличный ресурс от Джеффа Гирлинга, который более подробно рассказывает об использовании Ansible AWX. [Ansible 101 - Episode 10 - Ansible Tower and AWX](https://www.youtube.com/watch?v=iKmY4jEiy_A&t=752s)

В этом видео он также подробно рассказывает о различиях между Automation Controller (ранее Ansible Tower) и Ansible AWX (Free and Open Source).

### Ansible Vault

`ansible-vault` позволяет нам шифровать и расшифровывать файлы данных Ansible. На протяжении всего этого раздела мы пропустили и поместили часть нашей конфиденциальной информации в открытый текст.

Встроенный в двоичный файл Ansible `ansible-vault` позволяет нам скрыть эту конфиденциальную информацию.

![](../images/Day69_config10.ru.png?v1)

Управление секретами постепенно становится еще одной областью, которой следовало бы уделить больше времени наряду с такими инструментами, как HashiCorp Vault или AWS Key Management Service. Я отмечу эту область как ту, в которую следует погрузиться глубже.

Я собираюсь дать ссылку на отличный ресурс и демонстрационный пример от Jeff Geerling [Ansible 101 - Episode 6 - Ansible Vault and Roles](https://www.youtube.com/watch?v=JFweg2dUvqM)

### Ansible Galaxy (Docs)

Итак, мы уже использовали `ansible-galaxy` для создания некоторых ролей и файловой структуры для нашего демо-проекта. Но у нас также есть [документация по Ansible Galaxy](https://galaxy.ansible.com/docs/)

"Galaxy - это центр для поиска и обмена содержимым Ansible".

### Тестирование Ansible

- [Ansible Molecule](https://molecule.readthedocs.io/en/latest/) - проект Molecule предназначен для помощи в разработке и тестировании ролей Ansible.

- [Ansible Lint](https://ansible-lint.readthedocs.io/en/latest/) - CLI-инструмент для линтинга плейбуков, ролей и коллекций.

### Другой ресурс

- [Документация Ansible](https://docs.ansible.com/ansible/latest/index.html)

## Ресурсы

- [What is Ansible](https://www.youtube.com/watch?v=1id6ERvfozo)
- [Ansible 101 - Episode 1 - Introduction to Ansible](https://www.youtube.com/watch?v=goclfp6a2IQ)
- [NetworkChuck - You need to learn Ansible right now!](https://www.youtube.com/watch?v=5hycyr-8EKs&t=955s)
- [Your complete guide to Ansible](https://www.youtube.com/playlist?list=PLnFWJCugpwfzTlIJ-JtuATD2MBBD7_m3u)

Этот последний плейлист, приведенный выше, является тем местом, откуда было взято много кода и идей для этого раздела, отличным ресурсом и руководством в видеоформате.
В этом посте мы завершаем рассмотрение управления конфигурацией, далее мы перейдем к CI/CD Pipelines и некоторым инструментам и процессам, которые мы можем увидеть и использовать для достижения этого рабочего процесса при разработке и выпуске приложений.

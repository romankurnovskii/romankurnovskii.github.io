---
title: 73. Построение конвейера Jenkins 
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-07-01"
lastmod: "2022-07-01"
featuredImage:
draft: false
id: 1048829
weight: 73
---

В предыдущем разделе мы развернули Jenkins на нашем кластере Minikube и создали очень простой Jenkins Pipeline, который не делал ничего особенного, кроме как повторял этапы Pipeline.

Вы также могли заметить, что в процессе создания Jenkins Pipeline нам доступны некоторые примеры скриптов для запуска.

![](../images/Day73_CICD1.ru.png?v1)

Первый демонстрационный скрипт - "Declartive (Kubernetes)", и вы можете увидеть его этапы ниже.

```
// Uses Declarative syntax to run commands inside a container.
pipeline {
    agent {
        kubernetes {
            // Rather than inline YAML, in a multibranch Pipeline you could use: yamlFile 'jenkins-pod.yaml'
            // Or, to avoid YAML:
            // containerTemplate {
            //     name 'shell'
            //     image 'ubuntu'
            //     command 'sleep'
            //     args 'infinity'
            // }
            yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: shell
    image: ubuntu
    command:
    - sleep
    args:
    - infinity
'''
            // Can also wrap individual steps:
            // container('shell') {
            //     sh 'hostname'
            // }
            defaultContainer 'shell'
        }
    }
    stages {
        stage('Main') {
            steps {
                sh 'hostname'
            }
        }
    }
}
```

Ниже показан результат того, что происходит при выполнении этого конвейера.

![](../images/Day73_CICD2.ru.png?v1)

### Создание задания

**Цели**

- Создать простое приложение и сохранить его в публичном репозитории GitHub (<https://github.com/scriptcamp/kubernetes-kaniko.git>).

- С помощью Jenkins собрать образ нашего docker-контейнера и выложить в docker hub. (Для этого мы будем использовать частный репозиторий).

Чтобы добиться этого в нашем кластере Kubernetes, работающем в Minikube или с его помощью, нам нужно использовать нечто под названием [Kaniko](https://github.com/GoogleContainerTools/kaniko#running-kaniko-in-a-kubernetes-cluster) В общем, если вы используете Jenkins в реальном кластере Kubernetes или запускаете его на сервере, вы можете указать агента, который даст вам возможность выполнять команды сборки docker и загружать их в DockerHub.

Учитывая вышесказанное, мы также собираемся развернуть секрет в Kubernetes с нашими учетными данными GitHub.

```
kubectl create secret docker-registry dockercred \
    --docker-server=https://index.docker.io/v1/ \
    --docker-username=<dockerhub-username> \
    --docker-password=<dockerhub-password>\
    --docker-email=<dockerhub-email>
```

На самом деле я хочу поделиться еще одним замечательным ресурсом от [DevOpsCube.com](https://devopscube.com/build-docker-image-kubernetes-pod/), где рассматривается многое из того, о чем мы будем говорить здесь.

### Добавление учетных данных в Jenkins

Однако если вы используете систему Jenkins, в отличие от нашей, то вы, скорее всего, захотите определить свои учетные данные в Jenkins, а затем использовать их несколько раз в своих конвейерах и конфигурациях. Мы можем ссылаться на эти учетные данные в конвейерах, используя ID, который мы определили при создании. Я пошел дальше и создал учетные данные для DockerHub и GitHub.

Сначала выберите "Manage Jenkins", а затем "Manage Credentials".

![](../images/Day73_CICD3.ru.png?v1)

В центре страницы вы увидите магазины, предназначенные для Jenkins, нажмите на Jenkins здесь.

![](../images/Day73_CICD4.ru.png?v1)

Теперь выберите Global Credentials (Unrestricted).

![](../images/Day73_CICD5.ru.png?v1)

Затем в левом верхнем углу у вас есть Добавить учетные данные

![](../images/Day73_CICD6.ru.png?v1)

Заполните данные вашей учетной записи и затем выберите OK, помните, что ID - это то, на что вы будете ссылаться, когда захотите вызвать эту учетную запись. Мой совет здесь также заключается в том, что вы должны использовать специальные маркеры доступа, а не пароли.

![](../images/Day73_CICD7.ru.png?v1)

Для GitHub вы должны использовать [Personal Access Token](https://vzilla.co.uk/vzilla-blog/creating-updating-your-github-personal-access-token).

Лично мне процесс создания этих учетных записей показался не очень интуитивным, поэтому, хотя мы не используем их, я хотел поделиться процессом, так как он не совсем понятен из пользовательского интерфейса.

### Построение конвейера

У нас есть учетные данные DockerHub, развернутые как секрет в нашем кластере Kubernetes, к которым мы будем обращаться на этапе docker deploy to DockerHub в нашем конвейере.

Сценарий конвейера - это то, что вы видите ниже, это, в свою очередь, может стать нашим Jenkinsfile, расположенным в нашем репозитории GitHub, который, как вы можете видеть, также указан на этапе Get the project в конвейере.

```
podTemplate(yaml: '''
    apiVersion: v1
    kind: Pod
    spec:
      containers:
      - name: maven
        image: maven:3.8.1-jdk-8
        command:
        - sleep
        args:
        - 99d
      - name: kaniko
        image: gcr.io/kaniko-project/executor:debug
        command:
        - sleep
        args:
        - 9999999
        volumeMounts:
        - name: kaniko-secret
          mountPath: /kaniko/.docker
      restartPolicy: Never
      volumes:
      - name: kaniko-secret
        secret:
            secretName: dockercred
            items:
            - key: .dockerconfigjson
              path: config.json
''') {
  node(POD_LABEL) {
    stage('Get the project') {
      git url: 'https://github.com/scriptcamp/kubernetes-kaniko.git', branch: 'main'
      container('maven') {
        stage('Test the project') {
          sh '''
          echo pwd
          '''
        }
      }
    }

    stage('Build & Test the Docker Image') {
      container('kaniko') {
        stage('Deploy to DockerHub') {
          sh '''
            /kaniko/executor --context `pwd` --destination michaelcade1/helloworld:latest
          '''
        }
      }
    }

  }
}
```

Чтобы начать работу на приборной панели Jenkins, нам нужно выбрать "Новый элемент"

![](../images/Day73_CICD8.ru.png?v1)

Затем мы дадим нашему элементу имя, выберем Pipeline и нажмем OK.

![](../images/Day73_CICD9.ru.png?v1)

Мы не будем выбирать общие триггеры или триггеры сборки, но поиграйте с ними, так как здесь есть несколько интересных расписаний и других конфигураций, которые могут быть полезны.

![](../images/Day73_CICD10.ru.png?v1)

Нас интересует только вкладка Pipeline в конце.

![](../images/Day73_CICD11.ru.png?v1)

В определении пайплайн мы скопируем и вставим скрипт пайплайна, который мы описали выше, в раздел Script и нажмем кнопку save.

![](../images/Day73_CICD12.ru.png?v1)

Далее мы выберем опцию "Build Now" в левой части страницы.

![](../images/Day73_CICD13.ru.png?v1)

Теперь вам нужно подождать некоторое время, меньше минуты, и вы должны увидеть в статусе этапы, которые мы определили выше в нашем скрипте.

![](../images/Day73_CICD14.ru.png?v1)

Что еще более важно, если мы теперь перейдем на наш DockerHub и проверим, что у нас есть новая сборка.

![](../images/Day73_CICD15.ru.png?v1)

В целом это заняло некоторое время, но я хотел придерживаться этого, чтобы получить практический опыт и проработать скрипт, который может выполнить каждый, используя minikube и доступ к github и dockerhub.

Репозиторий DockerHub, который я использовал для этого демо, был частным. Но в следующем разделе я хочу продвинуть некоторые из этих этапов и заставить их действительно что-то делать, а не просто выводить `pwd`, и действительно запустить некоторые тесты и этапы сборки.

## Ресурсы

- [Jenkins is the way to build, test, deploy](https://youtu.be/_MXtbjwsz3A)
- [Jenkins.io](https://www.jenkins.io/)
- [ArgoCD](https://argo-cd.readthedocs.io/en/stable/)
- [ArgoCD Tutorial for Beginners](https://www.youtube.com/watch?v=MeU5_k9ssrs)
- [What is Jenkins?](https://www.youtube.com/watch?v=LFDrDnKPOTg)
- [Complete Jenkins Tutorial](https://www.youtube.com/watch?v=nCKxl7Q_20I&t=3s)
- [GitHub Actions](https://www.youtube.com/watch?v=R8_veQiYBjI)
- [GitHub Actions CI/CD](https://www.youtube.com/watch?v=mFFXuXjVgkU)

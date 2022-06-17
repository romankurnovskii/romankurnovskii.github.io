---
title: 58. Язык конфигурации HashiCorp (HCL)
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-17"
lastmod: "2022-06-17"
featuredImage:
draft: false
id: 1048741
---

## Язык конфигурации HashiCorp (HCL)

Прежде чем мы начнем создавать вещи с помощью Terraform, мы должны немного погрузиться в язык HashiCorp Configuration Language (HCL). До сих пор в ходе нашей задачи мы рассмотрели несколько различных языков скриптов и программирования, и вот еще один. Мы затронули [язык программирования Go](.../day07), затем [скрипты bash](../day19), мы даже немного затронули python, когда дело дошло до [автоматизации сети](../day27).

Теперь мы должны рассмотреть язык конфигурации HashiCorp (HCL), если вы впервые видите этот язык, он может показаться немного пугающим, но он довольно прост и очень мощный.

По мере продвижения по этому разделу мы будем использовать примеры, которые мы можем запустить локально на нашей системе, независимо от того, какую ОС вы используете, мы будем использовать virtualbox, хотя и не инфраструктурную платформу, которую вы обычно используете с Terraform. Тем не менее, запуск этого локально, он бесплатный и позволит нам достичь того, что мы ищем в этой заметке. Мы также можем расширить концепцию этого поста на docker или Kubernetes. 

В целом, вы будете или должны использовать Terraform для развертывания инфраструктуры в публичном облаке (AWS, Google, Microsoft Azure), а также в средах виртуализации, таких как (VMware, Microsoft Hyper-V, Nutanix AHV). В публичном облаке Terraform позволяет нам делать гораздо больше, чем просто автоматическое развертывание виртуальных машин, мы можем создавать всю необходимую инфраструктуру, такую как рабочие нагрузки PaaS, и все необходимые сетевые ресурсы, такие как VPC и группы безопасности. 

В Terraform есть два важных аспекта: код, который мы рассмотрим в этой статье, и состояние. Оба этих аспекта вместе можно назвать ядром Terraform. Затем у нас есть среда, в которую мы хотим обратиться и развернуть, которая выполняется с помощью провайдеров Terraform, кратко упомянутых на прошлом занятии, но у нас есть провайдеры AWS, есть провайдеры Azure и т.д. Их сотни. Их сотни. 

### Базовое использование Terraform

Давайте посмотрим на файл Terraform `.tf`, чтобы увидеть, как они создаются. Первый пример, который мы рассмотрим, будет кодом для развертывания ресурсов на AWS, для этого также потребуется установить AWS CLI на вашей системе и настроить его для вашей учетной записи. 


### Провайдеры

В верхней части нашей файловой структуры `.tf`, обычно называемой `main.tf`, по крайней мере до тех пор, пока мы не сделаем все более сложным. Здесь мы определим провайдеров, о которых мы упоминали ранее. Наш источник провайдера aws, как вы видите, `hashicorp/aws`, это означает, что провайдер поддерживается или был опубликован самой компанией hashicorp. По умолчанию вы будете ссылаться на провайдеров, доступных в [Terraform Registry](https://registry.terraform.io/), у вас также есть возможность написать свои собственные провайдеры и использовать их локально или самостоятельно опубликовать в Terraform Registry.

```
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
```

Здесь мы также можем добавить регион, чтобы определить, какой регион AWS мы хотим предоставить, мы можем сделать это, добавив следующее:

```
provider "aws" {
  region = "ap-southeast-1" //region where resources need to be deployed
}
```
### Ресурсы 

- Другой важный компонент конфигурационного файла terraform, который описывает один или несколько объектов инфраструктуры, таких как EC2, Load Balancer, VPC и т.д.

- Блок ресурсов объявляет ресурс заданного типа ("aws_instance") с заданным локальным именем ("90daysofdevops"). 

- Тип ресурса и имя вместе служат идентификатором для данного ресурса.

```
resource "aws_instance" "90daysofdevops" {
  ami               = data.aws_ami.instance_id.id
  instance_type     = "t2.micro"
  availability_zone = "us-west-2a"
  security_groups   = [aws_security_group.allow_web.name]
  user_data         = <<-EOF
                #! /bin/bash
                sudo yum update
                sudo yum install -y httpd
                sudo systemctl start httpd
                sudo systemctl enable httpd
                echo "
<h1>Deployed via Terraform</h1>

" | sudo tee /var/www/html/index.html
        EOF
  tags = {
    Name = "Created by Terraform"
  }
}
```

Из вышеприведенного видно, что мы также запускаем обновление `yum` и устанавливаем `httpd` в наш экземпляр ec2. 

Если мы теперь посмотрим на полный файл main.tf, он может выглядеть примерно так.

```
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

resource "aws_instance" "90daysofdevops" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"
  availability_zone = "us-west-2a"
    user_data         = <<-EOF
                #! /bin/bash
                sudo yum update
                sudo yum install -y httpd
                sudo systemctl start httpd
                sudo systemctl enable httpd
                echo "
<h1>Deployed via Terraform</h1>

" | sudo tee /var/www/html/index.html
        EOF
  tags = {
    Name = "Created by Terraform"


  tags = {
    Name = "ExampleAppServerInstance"
  }
}
```

Приведенный выше код позволит развернуть очень простой веб-сервер в качестве экземпляра ec2 в AWS. Самое замечательное в этой и любой другой подобной конфигурации то, что мы можем повторить ее и каждый раз получать один и тот же результат. Кроме вероятности того, что я испортил код, нет никакого взаимодействия с человеком. 

Мы можем рассмотреть суперпростой пример, который вы, скорее всего, никогда не будете использовать, но давайте все равно пошутим. Как и во всех хороших скриптах и языках программирования, мы должны начать со скрипта приветствия мира.

```
terraform {
  # This module is now only being tested with Terraform 0.13.x. However, to make upgrading easier, we are setting
  # 0.12.26 as the minimum version, as that version added support for required_providers with source URLs, making it
  # forwards compatible with 0.13.x code.
  required_version = ">= 0.12.26"
}

# website::tag::1:: The simplest possible Terraform module: it just outputs "Hello, World!"
output "hello_world" {
  value = "Hello, 90DaysOfDevOps from Terraform"
}
```
Вы найдете этот файл в папке IAC в разделе hello-world, но из коробки он не будет просто работать, есть несколько команд, которые необходимо выполнить, чтобы использовать наш код терраформы. 

В терминале перейдите в папку, где был создан файл main.tf, он может быть из этого репозитория или вы можете создать новый, используя код выше. 

Находясь в этой папке, выполните команду `terraform init`. 

Мы должны выполнить эту команду в любой директории, где у нас есть или перед запуском любого кода terraform. Инициализация каталога конфигурации загружает и устанавливает провайдеров, определенных в конфигурации, в данном случае у нас нет провайдеров, но в примере выше это загрузит провайдера aws для этой конфигурации.  

![](../images/Day58_IAC1.png?v1)

Следующей командой будет `terraform plan`. 

Команда `terraform plan` создает план выполнения, который позволяет вам предварительно просмотреть изменения, которые Terraform планирует внести в вашу инфраструктуру.

Вы можете видеть ниже, что на нашем примере hello-world мы увидим результат, если бы это был экземпляр AWS ec2, мы бы увидели все шаги, которые мы будем создавать. 

![](../images/Day58_IAC2.png?v1)

На данном этапе мы инициализировали наш репозиторий, загрузили провайдеров, где это необходимо, запустили тестовый проход, чтобы убедиться, что это то, что мы хотим видеть, теперь мы можем запустить и развернуть наш код. 

Команда `terraform apply` позволяет нам это сделать, в нее встроена мера безопасности, и это снова даст вам представление о том, что произойдет, что требует от вас ответа "да", чтобы продолжить. 

![](../images/Day58_IAC3.png?v1)

Когда мы вводим "да", чтобы ввести значение, наш код развертывается. Очевидно, это не так интересно, но вы можете видеть, что у нас есть вывод, который мы определили в нашем коде. 

![](../images/Day58_IAC4.png?v1)

Теперь мы ничего не развернули, мы ничего не добавили, не изменили и не уничтожили, но если бы мы это сделали, то мы бы увидели, что это также указано выше. Однако если мы что-то развернули и хотим избавиться от всего, что развернули, мы можем использовать команду `terraform destroy`. Опять же, это имеет ту безопасность, когда вы должны ввести "да", хотя вы можете использовать `--auto-approve` в конце ваших команд `apply` и `destroy`, чтобы обойти это ручное вмешательство. Но я бы посоветовал использовать это сокращение только в процессе обучения и тестирования, так как все будет исчезать иногда быстрее, чем было создано. 

Таким образом, мы рассмотрели всего 4 команды из Terraform CLI.

- `terraform init` = get your project folder ready with providers 
- `terraform plan` = show what is going to be created, changed during the next command based on our code. 
- `terraform apply` = will go and deploy the resources defined in our code. 
- `terraform destroy` = will destroy the resources we have created in our project

Мы также рассмотрели два важных аспекта наших кодовых файлов. 

- providers = how does terraform speak to the end platform via APIs 
- resources = what it is we want to deploy with code

Еще одна вещь, которую следует отметить, когда мы запускаем `terraform init`, посмотрите на дерево в папке до и после, чтобы увидеть, что происходит и где мы храним провайдеры и модули. 

### Terraform state 

Нам также необходимо знать о файле состояния, который создается также внутри нашей директории, и для этого примера hello world наш файл состояния прост. Это JSON-файл, который является представлением мира в соответствии с Terraform. Состояние будет радостно демонстрировать ваши конфиденциальные данные, поэтому будьте осторожны и в качестве лучшей практики помещайте файлы `.tfstate` в папку `.gitignore` перед загрузкой на GitHub. 

По умолчанию файл состояния, как вы видите, находится в том же каталоге, что и код вашего проекта, но его можно хранить и удаленно. В производственной среде это, скорее всего, будет общее место, например, ведро S3. 

Другим вариантом может быть Terraform Cloud, это платная управляемая услуга. (Бесплатно до 5 пользователей)

Плюсы хранения состояния в удаленном месте заключаются в том, что мы получаем: 

```
{
  "version": 4,
  "terraform_version": "1.1.6",
  "serial": 1,
  "lineage": "a74296e7-670d-0cbb-a048-f332696ca850",
  "outputs": {
    "hello_world": {
      "value": "Hello, 90DaysOfDevOps from Terraform",
      "type": "string"
    }
  },
  "resources": []
}
```
## Ресурсы 
Я перечислил множество ресурсов ниже, и я думаю, что эта тема уже много раз освещалась, если у вас есть дополнительные ресурсы, обязательно напишите PR с вашими ресурсами, и я буду рад рассмотреть и добавить их в список.


- [What is Infrastructure as Code? Difference of Infrastructure as Code Tools ](https://www.youtube.com/watch?v=POPP2WTJ8es)
- [Terraform Tutorial | Terraform Course Overview 2021](https://www.youtube.com/watch?v=m3cKkYXl-8o)
- [Terraform explained in 15 mins | Terraform Tutorial for Beginners ](https://www.youtube.com/watch?v=l5k1ai_GBDE)
- [Terraform Course - From BEGINNER to PRO!](https://www.youtube.com/watch?v=7xngnjfIlK4&list=WL&index=141&t=16s)
- [HashiCorp Terraform Associate Certification Course](https://www.youtube.com/watch?v=V4waklkBC38&list=WL&index=55&t=111s)
- [Terraform Full Course for Beginners](https://www.youtube.com/watch?v=EJ3N-hhiWv0&list=WL&index=39&t=27s)
- [KodeKloud -  Terraform for DevOps Beginners + Labs: Complete Step by Step Guide!](https://www.youtube.com/watch?v=YcJ9IeukJL8&list=WL&index=16&t=11s)
- [Terraform Simple Projects](https://terraform.joshuajebaraj.com/)
- [Terraform Tutorial - The Best Project Ideas](https://www.youtube.com/watch?v=oA-pPa0vfks)
- [Awesome Terraform](https://github.com/shuaibiyy/awesome-terraform)

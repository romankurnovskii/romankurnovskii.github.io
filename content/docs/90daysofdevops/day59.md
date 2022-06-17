---
title: 59. Создание виртуальной машины с помощью Terraform
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-18"
lastmod: "2022-06-18"
featuredImage:
draft: false
id: 1049051
---
## Создание виртуальной машины с помощью Terraform и переменных

В этой сессии мы будем создавать виртуальную машину или две виртуальные машины с помощью Terraform внутри VirtualBox. Это не совсем обычно, VirtualBox - это вариант виртуализации рабочих станций, и на самом деле это не было бы вариантом использования Terraform, но я сейчас нахожусь на высоте 36 000 футов в воздухе, и как бы я ни развертывал ресурсы публичного облака так высоко в облаках, гораздо быстрее сделать это локально на моем ноутбуке. 

Чисто демонстрационная цель, но концепция та же, мы собираемся иметь наш желаемый код конфигурации состояния, а затем мы собираемся запустить его против провайдера virtualbox. В прошлом мы использовали здесь vagrant, и я рассказал о различиях между vagrant и terraform в начале раздела. 

### Создание виртуальной машины в VirtualBox 

Первое, что мы сделаем, это создадим новую папку под названием virtualbox, затем мы можем создать файл virtualbox.tf, в котором мы определим наши ресурсы. Приведенный ниже код, который можно найти в папке VirtualBox под названием virtualbox.tf, создаст 2 виртуальные машины в Virtualbox. 

Вы можете узнать больше о сообществе провайдера Virtualbox [здесь](https://registry.terraform.io/providers/terra-farm/virtualbox/latest/docs/resources/vm)

```
terraform {
  required_providers {
    virtualbox = {
      source = "terra-farm/virtualbox"
      version = "0.2.2-alpha.1"
    }
  }
}

# В настоящее время нет никаких опций конфигурации для самого провайдера.
resource "virtualbox_vm" "node" {
  count     = 2
  name      = format("node-%02d", count.index + 1)
  image     = "https://app.vagrantup.com/ubuntu/boxes/bionic64/versions/20180903.0.0/providers/virtualbox.box"
  cpus      = 2
  memory    = "512 mib"

  network_adapter {
    type           = "hostonly"
    host_interface = "vboxnet1"
  }
}

output "IPAddr" {
  value = element(virtualbox_vm.node.*.network_adapter.0.ipv4_address, 1)
}

output "IPAddr_2" {
  value = element(virtualbox_vm.node.*.network_adapter.0.ipv4_address, 2)
}
```

Теперь, когда мы определили наш код, мы можем выполнить `terraform init` для нашей папки, чтобы загрузить провайдер для virtualbox. 

![](../images/Day59_IAC1.png?v1)


Очевидно, что в вашей системе также должен быть установлен virtualbox. Затем мы можем запустить `terraform plan`, чтобы посмотреть, что наш код создаст для нас. Затем следует `terraform apply`. На рисунке ниже показан завершенный процесс.

![](../images/Day59_IAC2.png?v1)

Теперь в Virtualbox вы увидите две виртуальные машины. 

![](../images/Day59_IAC3.png?v1)

### Изменение конфигурации 

Давайте добавим еще один узел в наше развертывание. Мы можем просто изменить строку count, чтобы показать новое желаемое количество узлов. Когда мы запустим нашу `terraform apply`, она будет выглядеть примерно так, как показано ниже. 

![](../images/Day59_IAC4.png?v1)

После завершения работы в virtualbox вы можете увидеть, что у нас теперь есть 3 узла. 

![](../images/Day59_IAC5.png?v1)

Когда мы закончим, мы можем очистить все это с помощью команды `terraform destroy`, и наши машины будут удалены. 

![](../images/Day59_IAC6.png?v1)

### Переменные и выходные данные 

Мы упоминали о выводах, когда выполняли пример hello-world на прошлом занятии. Но здесь мы можем остановиться на этом более подробно. 

Но есть много других переменных, которые мы можем использовать здесь, также есть несколько различных способов, которыми мы можем определить переменные. 

- Мы можем вручную ввести наши переменные с помощью команды `terraform plan` или `terraform apply`.

- Мы можем определить их в .tf-файле внутри блока 

- Мы можем использовать переменные окружения в нашей системе, используя `TF_VAR_NAME` в качестве формата. 

- Я предпочитаю использовать файл terraform.tfvars в папке нашего проекта. 

- Существует опция *auto.tfvars файла 

- или мы можем определить, когда запускаем `terraform plan` или `terraform apply` с помощью `var` или `var-file`. 

Порядок определения переменных будет начинаться снизу вверх. 

Мы также упоминали, что файл состояния будет содержать конфиденциальную информацию. Мы можем определить нашу чувствительную информацию как переменную и определить ее как чувствительную. 

```
variable "some resource"  {
    description = "something important"
    type: string
    sensitive = true

}
```

## Ресурсы 

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

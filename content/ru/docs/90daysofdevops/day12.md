---
title: День 12 - Getting user input with Pointers and a finished program
description: Получение пользовательского ввода с помощью указателей и готовой программы
toc: true
authors:
tags: [devops, golang]
categories:
series: 
date: "2022-05-02"
lastmod: "2022-05-02"
featuredImage:
draft: false
id: 1048864
---

## Получение данных с клавиуатуры

Вчера ([Днем 11-м](../day11)) мы создали нашу первую программу Go, и данные, которые мы хотели получить от пользователя, были созданы как переменные в нашем коде. Теперь мы хотим спросить пользователя данные для ввода, чтобы дать переменной значение для конечного сообщения.

## Получение пользовательских данных

Прежде чем мы это сделаем, давайте еще раз взглянем на наше приложение и пройдемся по переменным, которые нам нужны в качестве теста, прежде чем получить этот пользовательский ввод.

Давайте теперь добавим новую переменную с именем `TwitterName`, вы можете найти этот новый код ниже, и если мы запустим этот код, это будет наш вывод.
```
package main

import "fmt"

func main() {
	
	challenge := "#90DaysOfDevOps"
	const daystotal = 90

	fmt.Printf("Welcome to %v\n", challenge)
	fmt.Printf("This is a %v challenge\n", daystotal)

	var TwitterName string
	var DaysComplete int
	// ask user for their twitter handle

	TwitterName = "@MichaelCade1"
	DaysComplete = 12
	fmt.Printf("%v has completed %v days of the challenge\n", TwitterName, DaysComplete)
	fmt.Println("Great work")
}
```
Прежде чем мы это сделаем, давайте еще раз взглянем на наше приложение и пройдемся по переменным, которые нам нужны в качестве теста, прежде чем получить этот пользовательский ввод.

Вчера мы закончили с нашим кодом, выглядящим так:
```
package main

import "fmt"

func main() {
	var challenge = "#90DaysOfDevOps"
	const daystotal = 90
	var dayscomplete = 11

	fmt.Printf("Welcome to %v\n", challenge)
	fmt.Printf("This is a %v challenge and you have completed %v days\n", daystotal, dayscomplete)
	fmt.Println("Great work")
}
```
Мы вручную определили в коде наши переменные и константы `challenge, daystotal, dayscomplete`.

Давайте теперь добавим новую переменную с именем `TwitterName`

![](../images/Day12_Go1.png)

У нас 12-й день, и нам нужно было бы менять `dayscomplete` каждый день и компилировать наш код каждый день, если бы он был жестко запрограммирован, что звучит не так уж здорово.

Получая пользовательский ввод, мы хотим получить значение, возможно, имя и количество завершенных дней. Для этого мы можем использовать другую функцию из пакета `fmt`.

Кратко о пакете `fmt`, различные функции для: форматированного ввода и вывода (I/O) (input and output)

- Печать сообщений
- Собирать пользовательский ввод
- Записать в файл

Это вместо того, чтобы присваивать значение переменной, мы хотим попросить пользователя ввести его.


```
fmt.Scan(&TwitterName)
```

Обратите внимание, что мы также используем `&` перед переменной. Этот символ известен как указатель, который мы рассмотрим в следующем разделе.

В нашем коде вы можете видеть, что мы просим пользователя ввести две переменные, `TwitterName` и `DaysCompleted`
```
package main

import "fmt"

func main() {

	const DaysTotal int = 90
	challenge := "#90DaysOfDevOps"

	fmt.Printf("Welcome to the %v challenge.\nThis challenge consists of %v days\n", challenge, DaysTotal)

	var TwitterName string
	var DaysCompleted uint

	// asking for user input
	fmt.Println("Enter Your Twitter Handle: ")
	fmt.Scanln(&TwitterName)

	fmt.Println("How many days have you completed?: ")
	fmt.Scanln(&DaysCompleted)

	fmt.Printf("Thank you %v for taking part and completing %v days.\n", TwitterName, DaysCompleted)
	fmt.Println("Good luck")
}
```
Давайте теперь запустим нашу программу, и вы увидите, что у нас есть входные данные для обоих вышеперечисленных.

![](../images/Day12_Go2.png)

Хорошо, мы получили некоторый пользовательский ввод и напечатали сообщение, но как насчет того, чтобы заставить нашу программу сообщать нам, сколько дней у нас осталось в нашей задаче.

Для этого мы создали переменную с именем `remainingDays`, и мы жестко оценили ее в нашем коде как `90`. Затем нам нужно изменить значение этого значения, чтобы распечатать оставшиеся дни, когда мы получим пользовательский ввод `DaysCompleted` мы можем сделать это с помощью этого простого изменения переменной.

```
оставшиеся дни = оставшиеся дни - дни завершены
```

Наша программа теперь выглядит вот так:
```
package main

import "fmt"

func main() {

	const DaysTotal int = 90
	var remainingDays uint = 90
	challenge := "#90DaysOfDevOps"

	fmt.Printf("Welcome to the %v challenge.\nThis challenge consists of %v days\n", challenge, DaysTotal)

	var TwitterName string
	var DaysCompleted uint

	// asking for user input
	fmt.Println("Enter Your Twitter Handle: ")
	fmt.Scanln(&TwitterName)

	fmt.Println("How many days have you completed?: ")
	fmt.Scanln(&DaysCompleted)

	// calculate remaining days
	remainingDays = remainingDays - DaysCompleted

	fmt.Printf("Thank you %v for taking part and completing %v days.\n", TwitterName, DaysCompleted)
	fmt.Printf("You have %v days remaining for the %v challenge\n", remainingDays, challenge)
	fmt.Println("Good luck")
}

```
Если мы теперь запустим эту программу, вы увидите, что простой расчет выполняется на основе пользовательского ввода и значения `remainingDays`

![](../images/Day12_Go3.png)

## Что такое указатель? (Специальные переменные)

Указатель — это (специальная) переменная, которая указывает на адрес памяти другой переменной.

Отличное объяснение этого можно найти здесь [geeksforgeeks] (https://www.geeksforgeeks.org/pointers-in-golang/)

```
package main

import "fmt"

func main() {
	var challenge = "#90DaysOfDevOps"

	fmt.Println(challenge)
	fmt.Println(&challenge)

}
```
Ниже выполняется этот код.

![](../images/Day12_Go4.png)

## Ресурсы
- [Введение в Golang](http://golang-book.ru/)
- [StackOverflow 2021 Developer Survey](https://insights.stackoverflow.com/survey/2021)
- [Why we are choosing Golang to learn](https://www.youtube.com/watch?v=7pLqIIAqZD4&t=9s)
- [Jake Wright - Learn Go in 12 minutes](https://www.youtube.com/watch?v=C8LgvuEBraI&t=312s) 
- [Techworld with Nana - Golang full course - 3 hours 24 mins](https://www.youtube.com/watch?v=yyUHQIec83I) 
- [**NOT FREE** Nigel Poulton Pluralsight - Go Fundamentals - 3 hours 26 mins](https://www.pluralsight.com/courses/go-fundamentals) 
- [FreeCodeCamp -  Learn Go Programming - Golang Tutorial for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=1025s) 
- [Hitesh Choudhary - Complete playlist](https://www.youtube.com/playlist?list=PLRAV69dS1uWSR89FRQGZ6q9BR2b44Tr9N) 

Увидимся [завтра](../day13).



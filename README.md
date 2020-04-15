# Project
Проект, это серверное REST api для онлайн кинотеатра
### Запуск приложения
Запустить приложения можно зайдя в директорию `./app` и запустив команду `docker-compose up`, затем необхожимо импортировать базу данных `./docs/database.sql` в СУБД mariadb, по адресу http://localhost:3030 запустится phpMyAdmin.
Права доступа к mariadb:
* login: root
* password: 1234
### Описания API
#### API users
* Добавить пользователя: метод **post** `/users`
* Получить всех пользователей: метод **get** `/users`
* Получить одного пользователя: метод **get** `/users/:id`
* Обновить пользователя: метод **put** `/users/:id`
* Удалить пользователя: метод **delete** `/users/:id`
#### API movies
* Добавить фильм: метод **post** `/movies`
* Получить все фильмы: метод **get** `/movies`
* Получить один фильм: метод **get** `/movies/:id`
* Обновит фильм: метод **put** `/movies/:id`
* Удалить фильм: метод **delete** `/movies:id`
#### API likes
* Добавить лайк: метод **post** `/likes`
* Получит все лайки: метод **get** `/likes`
* Получить один лайк: метод **get** `/likes/:id`
* Удалить лайк: метод **delete** `/likes:/id`
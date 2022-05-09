# Clone spotify

Идея проекта самая простая - это клон сайта open.spotify. Пока используется 4 разных методов API-spotify для главной странице. 

На главной странице отрисовывется:

* Список треков
* Список подкастов
* Список популярных альбомов

Весь контент отрисовывается всегда в случайном порядке. Из общего списка осуществляется выборка треков, и они появляются на странице

## Installation

These examples run on Node.js. On [its website](http://www.nodejs.org/download/) you can find instructions on how to install it. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

Установите зависимости:

    $ npm install

Проверьте, что вы находитесь в ветке ni.sharkunov/template-for-spotify, и после этого:

    $ cd implicit_grant
    $ node app.js

Откройте в любом браузере `http://localhost:8888`.

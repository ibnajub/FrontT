        https://api.jquery.com/
        https://jsonplaceholder.typicode.com/
        список постов
        для каждого поста есть 2 кнопки
        1 кнопка переводит в режим редактирование и на ней во время режима редактирования появляеться текст сохранить ,
        после нажатия на нее повторно мы отправляем данные на сервер и обновляем поле и выходим из режима редактирования
        2 кнопка должно удалять пост и на клиенте и на сервере

        вверху у вас должна быть 2 инпута титл и боди с кнопкой сохранить для создания новых постов

        посты на страницы должны быть отсортерованы сначала новые

у поста должен быть никнейм автора
снизу с права

коменты под постами
возможность оставлять коммент
и у коментов тоже автор

        $.ajax({
        url: ,
        dataType: 'json',
        type: 'POST',
        data: {
        },
        success: function(data) {
        console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error: " + textStatus + " " + errorThrown);
        }
        })

https://jsonplaceholder.typicode.com/
https://html5css.ru/jsref/dom_obj_text.php

https://learn.javascript.ru/promise#promise-all-iterable

https://developer.mozilla.org/ru/docs/Web/API/Node/insertBefore

https://developer.mozilla.org/en-US/docs/web/CSS/background-color

https://learn.javascript.ru/promise#promise-all-iterable

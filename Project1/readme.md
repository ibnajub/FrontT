Литература

Урок 1
https://html5book.ru/osnovy-css/
https://github.com/alex-sefer-98226/fe_for_be-course/blob/main/homework/lesson_1.md
https://developer.mozilla.org/ru/docs/Web/CSS/@font-face
https://developer.mozilla.org/ru/docs/Web/CSS/font-family

https://fonts.google.com/specimen/Playfair+Display?query=Playfair+Display

http://127.0.0.1:5500/Project1/lesson%201.2.html

<https://guruweba.com/html/teg-li-html-element-spiska/>

<https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Selectors>

<https://html5book.ru/gorizontalnoe-menu/>

Урок 2
<https://www.w3schools.com/css/tryit.asp?filename=trycss_float_boxes>
<https://www.w3schools.com/css/tryit.asp?filename=trycss_float_images_side>
<https://www.w3schools.com/css/css_positioning.asp>
<https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_custom_properties>
Шрифты -- <https://www.fontsquirrel.com/tools/webfont-generator>

Урок 3
<https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow>


<https://developer.mozilla.org/en-US/docs/Web/CSS/transition>

Урок 4
<https://www.w3schools.com/jsref/event_onchange.asp>
<https://www.w3schools.com/jsref/event_oninput.asp>

Урок 5
<https://stackoverflow.com/questions/34676752/can-i-use-an-html-input-type-date-to-collect-only-a-year>
<https://doka.guide/js/descriptors/>

<https://djinni.co/>
<https://djinni.co/my/dashboard/>

Урок 6
<http://doc.a-level.com.ua/five-async-architecture-promises#h2-21>
<https://jsonplaceholder.typicode.com/>
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>

<http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7>!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


const todo = {

        title,
        body,
        completed: true || false,
    };


async function showAvatar() {

  // запрашиваем JSON с данными пользователя
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // запрашиваем информацию об этом пользователе из github
  let githubResponse = await fetch(<https://api.github.com/users/${user.name}>);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 3 секунды и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();

//Определение кнопки отправки
const button = document.querySelector("button");

//Получение имени пользователя
const username = document.querySelector("#username").value;
console.log(username);

//Приведение к верному регистру имени пользователя
const rightName = (name) => {
    const checkedName = name.toLowerCase();
    result = checkedName[0].toUpperCase() + checkedName.substring(1);
    return result;
};

nameInfo = rightName(username);
console.log(nameInfo);

//Получение введенной ссылки аватара
const img = document.querySelector("#link").value;
console.log(img);

//Получение комментария
const textarea = document.querySelector("#textarea").value;
console.log(textarea);

//Функция, которая создает элементы чата
const showInfo = () => {
    const parent = document.querySelector('#container__chat');

    let p = document.createElement('p');
    p.textContent = nameInfo;
    parent.appendChild(p);

    const image = document.createElement('img');
    image.src = img;
    image.className = 'img';
};

//Определение функции по нажатию кнопки
button.onclick = showInfo;
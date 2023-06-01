//Определение кнопки отправки
const button = document.querySelector("button");
const form = document.querySelector("form");

//Определение события по нажатию кнопки
function showChat(event) {

    //Получение имени пользователя
    const username = document.querySelector("#username").value;

    //Функция приведение к верному регистру имени пользователя
    const rightName = (name) => {
        const checkedName = name.toLowerCase();
        result = checkedName[0].toUpperCase() + checkedName.substring(1);
        return result;
    };

    //Присвоение правильного значения имени
    nameInfo = rightName(username);

    //Получение введенной ссылки аватара
    const img = document.querySelector("#link").value;

    //Получение комментария
    const textarea = document.querySelector("#textarea").value;

    //Очищение комментария от стоп-слов
    const clearComment = (text) => {
        text = text.replace(/viagra/i, '***');
        text = text.replace(/xxx/i, '***');
        return text;
    };

    //Присвоение правильного значения комментарию
    const checkedComment = clearComment(textarea);

    //Переменная-родитель для создания дива
    const parent = document.querySelector('.container__user__info');

    //Добавление даты и времени
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const date = `${now.getDate()}`.padStart(2, 0);
    const hours = `${now.getHours()}`.padStart(2, 0);
    const minutes = `${now.getMinutes()}`.padStart(2, 0);
    const seconds = `${now.getSeconds()}`.padStart(2, 0);
    const showDate = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    //Создание дива-родителя для аватара, имени и времени
    const div = document.createElement('div');
    div.className = 'container__chat__div';
    parent.appendChild(div);

    //Создание тега img с ссылкой на аватар
    const avatar = new Image();
    avatar.src = img;
    avatar.className = 'container__chat__image';

    //Создание тега имени со значением имени 
    const name = document.createElement('p');
    name.textContent = nameInfo;
    name.className = 'container__chat__name';

    //Создание тега даты со значением даты публикации
    const datep = document.createElement('p');
    datep.textContent = showDate;
    datep.className = 'container__date';

    //Добавление элементов аватара, имени и даты в родительский див
    div.append(avatar, name, datep);

    //Создание элемента комментария
    let comment = document.createElement('p');
    comment.textContent = checkedComment;
    comment.className = 'container__chat__comment';
    parent.appendChild(comment);

    //Удаление введенной информации из формы
    form.reset();
}

button.addEventListener('click', showChat);
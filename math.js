//Определение кнопки отправки
const button = document.querySelector("button");

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

    //Функция, которая создает элементы чата
    const parent = document.querySelector('#container__chat');

    //Создание элемента имени
    let name = document.createElement('p');
    name.textContent = nameInfo;
    name.className = 'container__chat__name';
    parent.appendChild(name);

    //Создание элемента аватара
    const avatar = new Image();
    avatar.src = img;
    avatar.className = 'container__chat__image';
    parent.appendChild(avatar);

    //Создание элемента комментария
    let comment = document.createElement('p');
    comment.textContent = checkedComment;
    comment.className = 'container__chat__comment';
    parent.appendChild(comment);
}

button.addEventListener('click', showChat);
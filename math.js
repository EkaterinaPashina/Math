//Определение кнопки отправки
const button = document.querySelector("button");

//Получение имени пользователя
let username = document.querySelector("#username");

//Приведение к верному регистру имени пользователя
username.addEventListener("input", () => {
    let fullName = [];
    let newName = username.value.toLowerCase().split(" ");
    newName.forEach((names) => {
        names = names.charAt(0).toUpperCase() + names.slice(1);
        fullName.push(names);
        username.value = fullName.join(" ");
    });
});

//Определение зоны для ввода имени пользователя 
const printName = document.querySelector(".show__name");

//Определение введенной ссылки аватара
const img = document.querySelector("#link");

//Получение комментария
const textarea = document.querySelector("#textarea");

//Определение комментария без цензуры
const dirtyText = textarea.value;

//Создание функции для применения цензуры
const cleanUp = () => {
    const words = dirtyText.trim().split(' ');
    const cenzoredText = [];
    for (let word of words) {
        if (word.toLowerCase === 'viagra') {
            cenzoredText.push('***');
        } else if (word.toLowerCase === 'xxx') {
            cenzoredText.push('***')
        } else {
            cenzoredText.push(word);
        }
    }
    const censoredText = cenzoredText.join(' ');
    return censoredText;
};

//Функция для отображения аватара, имени пользователя, комментария с цензурой
const showInfo = () => {
    avatar.setAttribute("src", img.value);
    printName.textContent = username.value;
    //textarea.textContent = censoredText.value;
};

//Определение функции по нажатию кнопки
button.onclick = showInfo;
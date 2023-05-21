const button = document.querySelector('button');

let username = document.querySelector("#username");
username.addEventListener("input", () => {
    let fullName = [];
    let newName = username.value.toLowerCase().split(" ");
    newName.forEach((names) => {
        names = names.charAt(0).toUpperCase() + names.slice(1);
        fullName.push(names);
        username.value = fullName.join(" ");
    });
});


const avatar = document.querySelector('.avatar');
const image = avatar.value;

const printName = document.querySelector('.show__name');

const textarea = document.querySelector("#textarea");
const dirtyText = textarea.value;

const cleanUp = () => {
    const words = dirtyText.trim().split(' ');
    const cenzoredText = [];
    for (let word of words) {
        word = word.toLowerCase;
        if (word === 'viagra') {
            cenzoredText.push('***');
        } else if (word === 'xxx') {
            cenzoredText.push('***')
        } else {
            cenzoredText.push(word);
        }
    }
    const censoredText = cenzoredText.join(' ');
    return censoredText;
};

const censoredText = cleanUp();

const click = () => {
    avatar.setAttribute('src', image);
    printName.textContent = username.value;
    textarea.textContent = censoredText.value;
};

button.onclick = click;
import flags from './model/flags.js';

function flagCard(flags) {
    return `<div class="flag col-2 my-2 text-center">
        <img src="./imgs/flags/${flags.id}.png" alt="${flags.name}">
        <p>${flags.name}</p>
        </div>`;
}

const stringFlag = flags.map((flags) => flagCard(flags)).join('');

const main = document.querySelector('main');

main.innerHTML = stringFlag;

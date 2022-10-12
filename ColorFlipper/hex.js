const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

window.onload = function(){
    const btn = document.getElementById('main-button').addEventListener('click', changeColor);
    const color = document.querySelector(".color");
};

function changeColor(){
    let string_color = '#';
    for(let i =0; i<6; i++){
        string_color += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = string_color;
    color.textContent = string_color;
};

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
};

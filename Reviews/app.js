const reviews = [
    {
        id: 0,
        name: "John Paul",
        job: "web developer",
        img: "./images/person1.jpg",
        text: "Nec ultrices dolor nunc in est. Suspendisse potenti. Consectetur adipiscing elit. Donec a pretium lorem. Maecenas et tortor a augue semper mattis et vitae diam. Sed rhoncus a velit ac dictum. Cras vel risus tincidunt, cursus ligula et, eleifend dolor. Quisque mollis egestas purus, at sodales mauris cursus eu. Proin aliquet nisi sit amet pretium rhoncus. Aenean nec ipsum id urna scelerisque aliquet sed id libero. Donec condimentum fermentum ultrices. Phasellus odio justo, porttitor et elit ut, semper imperdiet nibh. Sed ut quam gravida ante lobortis imperdiet. Pellentesque eu imperdiet nisi.",
    },
    {
        id: 1,
        name: "Nick Frey",
        job: "ux designer",
        img: "./images/person2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iusto animi unde deserunt omnis aliquid, maiores fugiat excepturi vel sed!",
    },
    {
        id: 2,
        name: "Daniel Wrath",
        job: "project manager",
        img: "./images/person3.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse potenti. Lorem ipsum dolor sit amet",
    },
    {
        id: 3,
        name: "Sarah Jones",
        job: "back-end developer",
        img: "./images/person4.jpg",
        text: "Quaerat iusto animi unde deserunt omnis aliquid, maiores fugiat excepturi vel sed!",
    },
    {
        id: 4,
        name: "Teresa Novak",
        job: "front-end developer",
        img: "./images/person5.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
]


let current = undefined;
let image = undefined;
let author = undefined;
let job = undefined;
let info = undefined;

window.onload = function(){
    document.getElementById('btn-prev').addEventListener('click', prev);
    document.getElementById('btn-next').addEventListener('click', next);
    document.getElementById('btn-suprise').addEventListener('click', suprise);

    current = 0;

    image = document.getElementById('person-img');
    author = document.getElementById('author');
    job = document.getElementById('job');
    info = document.getElementById('info');

    showItem();
};



function prev(){
    if(current == 0)
        current = reviews.length-1;
    else
        current --;
    showItem();
};

function next(){
    if(current == reviews.length-1)
        current = 0;
    else
        current ++;

    showItem();
};

function suprise(){
    let random = Math.floor(Math.random() * reviews.length);
    while(random == current){random = Math.floor(Math.random() * reviews.length);}
    current = random;
    showItem();
};

function showItem(){
    const item = reviews[current];
    author.textContent = item.name;
    job.textContent = item.job;
    info.innerHTML = item.text;
    image.src = item.img;
};
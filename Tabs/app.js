const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(element => { 
                element.classList.remove('active');
        });
        
        articles.forEach(element => {
            element.classList.remove('active');
        });

        e.target.classList.add('active');
        document.getElementById(id).classList.add('active');
    }
});
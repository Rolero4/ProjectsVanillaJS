window.onload = function(){
    counter.init();
};


let counter ={
    btns: undefined,
    value: undefined,
    count: 0,

    init: function(){
        this.btns = document.querySelectorAll('.btn');
        this.value = document.querySelector('#value');

        for(let i = 0; i<this.btns.length; i++){
            let el = this.btns[i];
            el.addEventListener("click", this.buttonClick);
        }
    },

    buttonClick: function(e){
        let divHtmlText = e.target.textContent;
        switch(divHtmlText){
            case "INCREASE":
                counter.count = counter.count + 1;
                if(counter.count >0){
                    counter.value.style.color = 'green';
                }
                else if(counter.count == 0){
                    counter.value.style.color = 'black';
                }
            break;
            case "DECREASE":
                counter.count = counter.count -1;
                if(counter.count < 0){
                    counter.value.style.color = 'red';
                }
                else if(counter.count == 0){
                    counter.value.style.color = 'black';
                }
            break;
            case "RESET":
                counter.count = 0;
                counter.value.style.color = 'black';
            break;
        }
        counter.value.textContent = counter.count;
    },



}


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');



//!!!!!!!!!! Data z przyszłości !!!!!!!!!!!

let futureDate = new Date(2023, 3, 24, 14, 5, 0); // 24.04.2023, 11:30

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// zwraca liczbe miesiąca
month = months[futureDate.getMonth()]

const date = futureDate.getDate();

const weekDay = weekdays[futureDate.getDay()]


giveaway.textContent = `Starts on ${weekDay}, ${date} ${month} ${year}  ${hours} : ${format(minutes)}.`;

//liczymy w milisekundach
const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t =  futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t%oneDay)/oneHour);
    let minutes = Math.floor((t%oneHour)/oneMinute);
    let seconds = Math.floor((t%oneMinute)/1000);

    const values = [days,hours,minutes,seconds];
    items.forEach((item, index) => item.innerHTML = format(values[index]));


    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, that trip has expired! <br> Try our Next one!</h4>`;
      }
};


function format(item){
    if(item<10){
        return item = `0${item}`;
    }
    return item;
};


let countdown = setInterval(getRemainingTime,  1000);
getRemainingTime();

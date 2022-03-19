function onInput() {
    let input = document.querySelector(".input-number");
    let cont = document.querySelector(".card__content");
    if (cont != null && input != null)
        cont.innerHTML = input.value.substr(0,16).split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " " ).split('').reverse().join('');
        cont.classList.add("visible")
}

function onInputName() {
    let input = document.querySelector(".input-name");
    let name = document.querySelector(".card__name");
    if (name != null && input != null)
        name.innerHTML = input.value.substr(0,24);
        name.classList.add("visible")
}

function onInputMonth() {
    let input = document.querySelector(".month");
    let month = document.querySelector(".card__month");
    if (month != null && input != null)
        month.innerHTML = input.value;
        month.classList.add("visible")
}

function onInputYear() {
    let input = document.querySelector(".year");
    let year = document.querySelector(".card__year");
    if (year != null && input != null)
        year.innerHTML = input.value;
        year.classList.add("visible")
}

function onInputCvv() {
    let input = document.querySelector(".input-cvv");
    let cvv = document.querySelector(".card__cvv");
    if (cvv != null && input != null)
        cvv.innerHTML = input.value;
        cvv.classList.add("visible")
}

function addBorder() {
    var num = document.querySelector(".card__number");
    num.classList.add("border")
    num.classList.add("border_big")
}

function addBorderName() {
    var name = document.querySelector(".card__name");
    var num = document.querySelector(".card__number");
    name.classList.add("border")
    num.classList.remove("border")
}

function addBorderDate() {
    var date = document.querySelector(".card__date");  
    var name = document.querySelector(".card__name");
    date.classList.add("border")
    name.classList.remove("border")
}

function turnOver() {
    var front = document.querySelector(".card__front");
    var card = document.querySelector(".card__back");
    front.classList.add("trans-front");
    card.classList.add("trans-back");
}

function reverse() {
    var front = document.querySelector(".card__front");
    var card = document.querySelector(".card__back");
    front.classList.remove("trans-front");
    card.classList.remove("trans-back");
}

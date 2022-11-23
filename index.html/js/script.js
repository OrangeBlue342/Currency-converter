let formElement = document.querySelector(".js-form");

let kwotaElement = document.querySelector(".js-Numbertoconverse");

let rateElement = document.querySelector(".js-rate");

let buttonElement = document.querySelector(".calcule");

let resultElement = document.querySelector(".js-result")

let selectElement = document.querySelector(".js-value")



let eur = 4.7067;
let gbd = 5.4075;
let usd = 4.5337;
let chf = 4.7675;



formElement.addEventListener("submit", (event) => {
    event.preventDefault(); 
let cours = +kwotaElement.value;
let value = selectElement.value;
let result;

switch (value) {
    case "eur":
        result = cours * eur;
        break;

    case "gbd":
        result = cours * gbd;
        break;

    case "usd":
        result = cours * usd;
        break;

    case "chf":
        result = cours * chf;
        break;
}

resultElement.innerHTML = result.toFixed(2); {value}

});
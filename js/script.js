{
const calculateResult = (cours, value) => {
    const eur = 4.7067;
    const gbd = 5.4075;
    const usd = 4.5337;
    const chf = 4.7675;

    
    switch (value) {
        case "eur":
            return cours * eur;
    
        case "gbd":
            return cours * gbd;
    
        case "usd":
            return cours * usd;
    
        case "chf":
            return cours * chf;
    }
    const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const kwotaElement = document.querySelector(".js-Numbertoconverse");

const resultElement = document.querySelector(".js-result")

const selectElement = document.querySelector(".js-value")

const cours = +kwotaElement.value;
const value = selectElement.value;

const result = calculateResult(cours, value);
result();

resultElement.innerHTML = result.toFixed(2); {value}

})};

function init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault(); 
    
        const kwotaElement = document.querySelector(".js-Numbertoconverse");
    
    const resultElement = document.querySelector(".js-result")
    
    const selectElement = document.querySelector(".js-value")
    
    const cours = +kwotaElement.value;
    const value = selectElement.value;
    
    const result = calculateResult(cours, value);
    
    resultElement.innerHTML = result.toFixed(2); {value}
    
    })};
    
}
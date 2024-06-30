const nameContainer = document.querySelectorAll("#contacts .sendMessage form .container")[0];
const emailContainer = document.querySelectorAll("#contacts .sendMessage form .container")[1];
const messageContainer = document.querySelectorAll("#contacts .sendMessage form .container")[2];

const nameInput = nameContainer.querySelector("input");
const emailInput = emailContainer.querySelector("input");
const messageInput = messageContainer.querySelector("input");

const nameMessage = nameContainer.querySelector("span");
const emailMessage = emailContainer.querySelector("span");
const messageMessage = messageContainer.querySelector("span");

const form = document.querySelector("#contacts .sendMessage form");

let passed1 = false;
let passed2 = false;
let passed3 = false;
let attempt = 0;

nameInput.addEventListener('blur', () => {
    const input = emailInput.value;
    nameMessage.innerHTML = "VALID &#x2713;";
    passed1 = true; 
})

emailInput.addEventListener('blur', () => {
    const input = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(input)) {
        emailMessage.innerHTML = "VALID &#x2713;";
        passed2 = true;
    }
    else {
        emailMessage.innerHTML = "INVALID";
        passed2 = false;
        attempt++;
        if(attempt>0){
            for(let i=0; i<attempt; i++){
         emailMessage.innerHTML += "&#x2717;";

            }
        }
    }
})

messageInput.addEventListener('blur', () => {
    messageMessage.innerHTML = "VALID &#x2713;";
    passed3 = true;
})

form.addEventListener('submit', function (event) {
    if (passed1 && passed2 && passed3) {
        alert(`Thank you po sa message ${nameInput.value}. babasahin ko po mamaya`)
    } else
        event.preventDefault();
});
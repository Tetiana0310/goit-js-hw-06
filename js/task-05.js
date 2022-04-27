const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

function onInputChange(event) {
    if (event.currentTarget.value === "") {
        name.textContent = "Anonymous";
    } else {
        name.textContent = event.currentTarget.value;
    }
}

input.addEventListener('input', onInputChange)
const input = document.querySelector('#name-input');
const spanEL = document.querySelector('#name-output')

input.addEventListener("input", inputChange)

function inputChange(e) {
    const inputTxt = e.target.value.trim();

    if (inputTxt === "") {
        spanEL.textContent = "Anonymous";
    } else {
        spanEL.textContent = inputTxt;
    }
}

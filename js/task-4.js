const form = document.querySelector('.login-form');

form.addEventListener("submit", formSubmit);



function formSubmit(event) {
    event.preventDefault()
    const elements = event.target.elements;
    const emailValue = elements.email.value.trim();
    const passwordValue = elements.password.value.trim();

    const emailAlert = document.querySelector('.alert-email');
    const passwordAlert = document.querySelector('.alert-password');
    

    elements.email.addEventListener('input', () => {
        emailAlert.textContent = "";
    });
    elements.password.addEventListener('input', () => {
        passwordAlert.textContent = "";
    });

    if (emailValue === "") {
        emailAlert.textContent = "Введите корректный email"
        return
         
    } else if(passwordValue === "" || passwordValue.length < 8){
        passwordAlert.textContent = "обязательно минимум 8 символов"
        return
    }
    else {
        emailAlert.textContent = "";
        passwordAlert.textContent = "";
    }
 

    const info = {
        email: emailValue,
        password: passwordValue
    };
    console.log(info);
    event.target.reset();
    
    
}
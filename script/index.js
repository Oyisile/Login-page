
function matchPassword(event) {
    let createPassword = document.getElementById("create-password-input");
    let confirmPassword = document.getElementById("confirm-password-input");
    let createPasswordValue = createPassword.value;
    let confirmPasswordValue = confirmPassword.value;

    if (confirmPasswordValue !== createPasswordValue) {
  
    alert("Passwords do not match! Please try again.");
    } 

}

let signUpForm = document.querySelector("#sign-up-form");
signUpForm.addEventListener("submit", matchPassword);

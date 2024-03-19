const pwd = document.querySelector("#password");
const confirmPwd = document.querySelector("#password-confirm");
const message = document.querySelector("#pwd-validation-message");

function validatePwd() {
    if(pwd.value != confirmPwd.value) {
        pwd.style.borderColor = "red";
        confirmPwd.style.borderColor = "red";
        message.textContent = "* Passwords do not match";
    } else {
        pwd.style.border = "1px solid rgb(124, 119, 119, 0.2)";
        confirmPwd.style.border = "1px solid rgb(124, 119, 119, 0.2)";
        message.textContent = "";
    };
}

pwd.onchange = validatePwd;
confirmPwd.onkeyup = validatePwd;
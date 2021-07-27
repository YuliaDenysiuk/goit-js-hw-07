const validationInputRef = document.querySelector("#validation-input");

function onInputValidation() {
    if (validationInputRef.value.length >= validationInputRef.dataset.length) {
        validationInputRef.classList = "valid";
    } else {
        validationInputRef.classList = "invalid";
    }
}

validationInputRef.addEventListener("blur", onInputValidation);
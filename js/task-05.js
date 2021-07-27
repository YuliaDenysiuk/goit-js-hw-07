const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

function onNameChange() {
    nameOutputRef.textContent = nameInputRef.value;
}

function onInputBlur() {
    if (nameInputRef.value === "") {
        nameOutputRef.textContent = "незнакомец";
    }
}

nameInputRef.addEventListener("input", onNameChange);
nameInputRef.addEventListener("blur", onInputBlur);
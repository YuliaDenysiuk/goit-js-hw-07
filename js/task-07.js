const fontSizeControlInputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${Number(fontSizeControlInputRef.value)}px`;

function onChangeFontSize() {
    textRef.style.fontSize = `${Number(fontSizeControlInputRef.value)}px`;
}

fontSizeControlInputRef.addEventListener("input", onChangeFontSize);

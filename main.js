let textArea = document.getElementById("textarea");
let text = document.getElementById("textarea").value;
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const properCase = document.getElementById("proper-case");
const sentenceCase = document.getElementById("sentence-case");
const myArray = text.split(".");

upperCase.addEventListener('click', () => {
    textArea.style.textTransform = "uppercase";
});
lowerCase.addEventListener('click', () => {
    textArea.style.textTransform = "lowercase";
});
properCase.addEventListener('click', () => {
    textArea.style.textTransform = "capitalize";
});

sentenceCase.addEventListener("click", function update() {
    textArea.style.textTransform = "unset";
    text = text.toLowerCase().replace(/^\w|(\.|!|\?)( *)\w/g,function(a){return a.toUpperCase()});
    textArea.value = text;
});
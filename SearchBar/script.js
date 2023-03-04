const search = document.getElementById('search');
const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    input.classList.remove("d-none");
    input.classList.add("d-block");
    input.focus();
});

input.addEventListener("blur", (e) => {
    e.preventDefault();
    if(input.value === ""){
        input.classList.remove("d-block");
        input.classList.add("d-none");
    }
});
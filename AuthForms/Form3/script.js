let coverData = {
    current: "login",
    login: {
        heading: "Welcome Back!",
        description: "If you don't have an account please create one. It's very easy.",
        button: "Register"
    },
    register: {
        heading: "Hi There!",
        description: "If you already have an account please login.",
        button: "Login"
    }
};

const cover = document.getElementById('cover');
const heading = document.getElementById('heading');
const description = document.getElementById('description');
const toggle = document.getElementById('toggle');

toggle.addEventListener("click", () => {
    if(coverData.current === "login"){
        cover.classList.remove('right');
        cover.classList.add('left');
        cover.style.backgroundImage = "linear-gradient(to right, #1e90ff, #eeeeee)";
        coverData.current = "register";
    }else{
        cover.classList.remove('left');
        cover.classList.add('right');
        cover.style.backgroundImage = "linear-gradient(to left, #1e90ff, #eeeeee)";
        coverData.current = "login";
    }
    heading.innerText = coverData[coverData.current].heading;
    description.innerText = coverData[coverData.current].description;
    toggle.innerText = coverData[coverData.current].button;
});
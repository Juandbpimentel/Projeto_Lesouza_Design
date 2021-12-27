import home from "./home/home.js"
import form from "./form/form.js"

const main = document.querySelector('#root');

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash) {
            case " ":
                main.appendChild(home());
                break;
            case "#form":
                main.appendChild(form());
                break;
            default:
                main.appendChild(home());                             
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})


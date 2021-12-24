import home from "./home/home.js"
import form from "./form/form.js"

const main = document.querySelector('#root');

const init = () => {
    console.log("entrei nessa merda");
    window.addEventListener("hashchange", () => {
        console.log("escutei alteração")
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
    console.log("carreguei the page")
    main.appendChild(home());
    init();
})


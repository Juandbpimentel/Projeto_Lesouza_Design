let radio = document.getElementsByTagName('input');
let card;

function mark() {
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].type === 'radio' && radio[i].checked) {
            try {
                card.removeAttribute("style");
            } catch (error) {}
        
            card = radio[i].parentNode;
            card.style.cssText = 'border-color: #D65391;';
        }
    }
}
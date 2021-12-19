let radio = document.getElementsByTagName('input');
let card;

function mark() {
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].type === 'radio' && radio[i].checked) {
            try {
                card.removeAttribute("style");
            } catch (error) {
            }
            
            let label = radio[i].parentNode;
            card = label.parentNode;
            card.style.cssText = 'border: 3px solid #D65391;';
        }
    }
}
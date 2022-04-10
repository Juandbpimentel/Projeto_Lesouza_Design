let pkg;
function getPackage() {
    try {
        pkg = document.querySelector('input[name="package"]:checked').value;
        window.location.hash = '#form';
    } catch(error) {
        console.error(error);
        window.alert('Por favor, selecione um dos pacotes!')
        window.location.hash = '';
    }
}

function mapObject() {
    const person = {
        firstname: document.querySelector('#nome').value,
        lastname: document.querySelector('#sobrenome').value,
        email: document.querySelector('#email').value,
        cpf: document.querySelector('#cpf').value,
        phone: document.querySelector('#number').value,
        package: pkg
    }
    return person;
}

async function submit(e) {
    let obj = mapObject();
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    //e.preventDefault();
    const response = await fetch('http://localhost:5000/send-email', options);
}
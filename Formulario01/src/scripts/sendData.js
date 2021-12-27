function mapObject() {
    const person = {
        firstname: document.querySelector('#nome').value,
        lastname: document.querySelector('#sobrenome').value,
        email: document.querySelector('#email').value,
        cpf: document.querySelector('#cpf').value,
        phone: document.querySelector('#number').value
    }
    return person;
}

async function submit(e) {
    console.log(mapObject());
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
    //console.log(options.body);
}
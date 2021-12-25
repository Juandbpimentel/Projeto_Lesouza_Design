module.exports = {
    set: function setTemplate(e) {
        return `
        <html>
        <body>
            <h1>Dados do Cliente</h1>
            <ul>
                <li><b>Nome:</b> ${e.firstname} ${e.lastname}</li>
                <li><b>E-mail:</b> ${e.email}</li>
                <li><b>CPF/CNPJ:</b> ${e.cpf}</li>
                <li><b>Celular:</b> ${e.phone}</li>
            </ul>
        </body>
        </html>
        `;
    }
};
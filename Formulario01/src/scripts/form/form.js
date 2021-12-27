export default () => {
    const container = document.createElement('div');
    container.classList.add("container");

    const template = `
        <div class="loader">
            <div class="circle first"></div>
            <div class="circle second" style="background-color:#D65391;"></div>
            <div class="circle third"></div>
            <div class="completed" style="width: 47%;"></div>
        </div>  
        
        <h1><a href="/Formulario01/src/pages/index.html#"><img src="../assets/back.svg" alt=""></a>Formulário</h1>
    
        <form action="/pagina-processa-dados-do-form" method="post">
            <div class="formContainer">
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" alt="Nome" required/>
                </div>
                <div>
                    <label for="sobrenome">Sobrenome:</label>
                    <input type="text" id="sobrenome" alt="Sobrenome" required>
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" placeholder="exemplo@exemplo.com" required/>
                </div>
                <div>
                    <label for="cpf">CPF/CNPJ:</label>
                    <input type="text" id="cpf" onkeypress="return onlyNumberKeyCpf(event)" maxlength="18" required>
                </div>
                <div>
                    <label for="number">Whatsapp:</label>
                    <input type="tel" name="number" id="number" placeholder="(xx)xxxxx-xxxx" onkeypress="return onlyNumberKeyTel(event)" maxlength="15" required>
                </div>
            </div>
        </form>
    
      <a id="sendEmail" class="continue" onclick="submit()">Continuar</a>
    `;

    container.innerHTML = template;

    return container;
}
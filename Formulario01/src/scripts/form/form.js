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

    <h1><a href="/Formulario01/src/pages/index.html#"><img src="../assets/back.svg" alt="" id="back"></a>Formulário</h1>

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

    <button class="continueButton" onclick="popOpen()">Continuar</button>

    <div class="modal-container" id="modal_container">
        <div class="modal">
            <h1 id="formText">Termos e garantia</h1> 
            <button id="close" onclick="popClose()"><img src="../assets/close.svg" alt="" id="close"></button>
            <div class="contentModal">
                <h3>POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS</h3>              
                <p>Em cumprimento à Lei Geral de Proteção de Dados Pessoais - LGPD (redação dada pela Lei nº 13.853 / 2019), a CONTRATADA se obriga a confidencialidade do (a) CONTRATANTE, compromete-se a proteger e manter em sigilo todos os dados pessoais fornecido pelo mesmo em função do presente contrato, salvo os casos em que seja obrigada, por autoridades públicas, a revelar tais informações a terceiros. Nos termos dos arts. 7º, I, da LGPD, a CONTRATADA está autorizada a realizar o tratamento de dados pessoais do (a) CONTRATANTE (“mediante o fornecimento de autorização pelo titular”); e, não inclui art. 11, eu sou LGPD. Tal operação de tratamento de dados é e sempre realizada unicamente em apoio e promoção às atividades técnicas e intelectuais desenvolvidos internamente pela CONTRATADA,</p>

                <h3>PROCESSO DE CRIAÇÃO</h3>   
                <p>E de RESPONSABILIDADE DA EMPRESA analisar o perfil do contratante é indicar  o melhor pacote baseado na necessidade do mesmo, enviar um briefing com perguntas sobre o que o (a) contratante espera ter na sua identidade visual, com base no briefing enviado pelo contratante enviar duas prévias baseadas no que foi solicitado, sendo uma diferente da outra, sem esquivar-se do que foi solicitado no briefing.</p>
                <p>Baseado nas prévias de escolha, o contratante poderá fazer até cinco pedidos de alteração, onde poderá escolher uma das prévias e alterá-la. Poderá ainda, unir detalhes das prévias apresentadas, ou solicitar alteração de acordo com o desejado.</p>
                <p>Fica disposta a solicitação de novas prévias caso o contratante não se identifique visualmente com o resultado apresentado Com obtiver como objetivo atingir um logotipo principal.</p>
                <p>Poderão ser realizadas quantas mudanças forem necessárias a cada pedido de alteração, ratificando o máximo de 5 pedidos de alteração gratuitos.</p>
                <p> Na apresentação do pacote de Identidade Visual, o contratante pode solicitar até três pedidos de alteração, desde que não altere em nenhuma hipótese a logotipo principal já finalizada. Caso o cliente queira realizar alteração na logo principal, será cobrado o valor de R$ 39,90.</p>
                <p> Fica vedado ao contratante usar mudanças do logotipo caso não utilize as 5 disponíveis para alterar o pacote de identidade visual.</p>
                <p> Caso exceda o limite de mudanças, será cobrada ao contratante uma taxa de R$29,90 a cada pedido de mudança.</p>
                <p> O mockup apresentado ao cliente não pode ser alterado após a apresentação do pacote, qualquer alteração feita será realizada após o fechamento final do arquivo.</p>
            </div>
            <a href="/src/pages/index.html#form" class="continue continueForm">Continuar</a>
        </div>
    </div>
    `;

    container.innerHTML = template;

    return container;
}
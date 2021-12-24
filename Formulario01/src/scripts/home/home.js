export default () => {
    const container = document.createElement('div');
    container.classList.add("container");

    const template = `
    <div class="loader">
        <div class="circle first"></div>
        <div class="circle second"></div>
        <div class="circle third"></div>
        <div class="completed"></div>
    </div>  
    
    <h1>Seleção de pacotes</h1>

    <div class="cards">
        <div class="card">
            <input type="radio" name="package" id="teste" onclick="mark()">
            <label class="customRadio" for="teste">
                <div class="head">
                    <p>Simples</p>
                    <p>189,00 R$</p>
                </div>
                <div class="circle">
                    <div class="point"></div>
                </div>
            </label>

            <div class="line"></div>
            
            <div class="contentBody">
                <ul class="content"> 
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Logotipo</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Icone</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Marca D'água</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Tipografia</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Paleta de Cores</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card">
            <input type="radio" name="package" id="teste1" onclick="mark()">
            <label class="customRadio" for="teste1">
                <div class="head">
                    <p>Completo</p>
                    <p>250,00 R$</p>
                </div>
                <div class="circle">
                    <div class="point"></div>
                </div>
            </label>

            <div class="line"></div>

            <div class="contentBody">
                <ul class="content"> 
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Logotipo</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Logotipo alternativa</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Icone</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Submarca</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Pattern</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Variação de cor</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Marca D'água</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Tipografia</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Paleta de Cores</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Mockups</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Destaques para Instagram</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card">
            <input type="radio" name="package" id="teste2" onclick="mark()">
            <label class="customRadio" for="teste2">
                <div class="head">
                    <p>Instagram</p>
                    <p>299,99 R$</p>
                </div>
                <div class="circle">
                    <div class="point"></div>
                </div>
            </label>

            <div class="line"></div>

            <div class="contentBody">
                <ul class="content"> 
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Logotipo</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Logotipo alternativa</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Icone</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Submarca</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Pattern</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Variação de cor</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Marca D'água</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Tipografia</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Paleta de Cores</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Destaques para Instagram</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Templates para Instagram</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Cartão digital interativo</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card">
            <input type="radio" name="package" id="teste3" onclick="mark()">
            <label class="customRadio" for="teste3">
                <div class="head">
                    <p>Empreendedor</p>
                    <p>349,99 R$</p>
                </div>
                <div class="circle">
                    <div class="point"></div>
                </div>
            </label>

            <div class="line"></div>

            <div class="contentBody">
                <ul class="content"> 
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Logotipo</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Logotipo alternativa</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Icone</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Submarca</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Pattern</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Variação de cor</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Marca D'água</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Tipografia</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Paleta de Cores</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Arte para cartão de visita</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Arte para receituário ou papel timbrado</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Arte para adesivo ou TAG</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Cartão digital interativo</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card">
            <input type="radio" name="package" id="teste4" onclick="mark()">
            <label class="customRadio" for="teste4">
                <div class="head">
                    <p>Master</p>
                    <p>499,99 R$</p>
                </div>
                <div class="circle">
                    <div class="point"></div>
                </div>
            </label>

            <div class="line"></div>

            <div class="contentBody">
                <ul class="content"> 
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Logotipo</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Logotipo alternativa</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Icone</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Submarca</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Pattern</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Variação de cor</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Marca D'água</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Tipografia</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Paleta de Cores</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Arte para cartão de visita</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Arte para receituário ou papel timbrado</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Arte para adesivo ou TAG</p>
                    </li>
                    <li class="contentItem">
                        <img src="../assets/doneIcon.svg" alt="">
                        <p>Cartão digital interativo</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <a href="/Formulario01/src/pages/index.html#form" class="continue">Continuar</a>
    `;

    container.innerHTML = template;

    return container;
}

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
            <input type="radio" name="package" id="teste" value="Simples" onclick="mark()">
            <label class="customRadio" for="teste">
                <div class="head">
                    <p>Simples</p>
                    <p>R$ 189,00</p>
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
            <input type="radio" name="package" id="teste1" value="Completo" onclick="mark()">
            <label class="customRadio" for="teste1">
                <div class="head">
                    <p>Completo</p>
                    <p>R$ 250,00</p>
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
            <input type="radio" name="package" id="teste2" value="Instagram" onclick="mark()">
            <label class="customRadio" for="teste2">
                <div class="head">
                    <p>Instagram</p>
                    <p>R$ 299,99</p>
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
            <input type="radio" name="package" id="teste3" value="Empreendedor" onclick="mark()">
            <label class="customRadio" for="teste3">
                <div class="head">
                    <p>Empreendedor</p>
                    <p>R$ 349,99</p>
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
            <input type="radio" name="package" id="teste4" value="Master" onclick="mark()">
            <label class="customRadio" for="teste4">
                <div class="head">
                    <p>Master</p>
                    <p>R$ 499,99</p>
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

    <a class="continue" onclick="getPackage()">Continuar</a>
    `;

    container.innerHTML = template;

    return container;
}

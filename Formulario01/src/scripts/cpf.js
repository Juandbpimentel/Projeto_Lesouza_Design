function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    let inputLength = cpf.value.length;

    if (inputLength === 3 || inputLength === 7) {
        cpf.value += '.';
    } else if(inputLength === 11) {
        cpf.value += '-';
    }else if(inputLength === 14) {
        cpf.value = cpf.value.replaceAll(".", "");
        cpf.value = cpf.value.replace("-", "");
        cpf.value = [cpf.value.slice(0, 2), ".", cpf.value.slice(2, 5), ".", cpf.value.slice(5, 8), "/", cpf.value.slice(8, 11)].join('');
    } else if (inputLength === 15) {
        cpf.value += '-';
    }

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function verificarFormulario() {
    var inputCPF = document.getElementById("");
    TestaCPF(inputCPF.value);
}

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function checaMinhaPica(bool) {
    if (bool) {
        console.log("Tá dura");
    } else console.log("Tá mole");
}
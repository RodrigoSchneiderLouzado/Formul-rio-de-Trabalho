const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verificar se o nome está vazio
    if (nameInput.value === "" ) {
        alert("Por Favor, preencha o seu nome");
        return;
    }


        //Se todos os campos estiverem corretamente preenchidos, envie o form 
        form.submit();

        

        //Verifica se o e-mail está preenchido e se é válido 
    if(emailInput.value === ""|| !isEmailVald(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail");
        return;

    }

    //Verificar se a senha está preenchida
    if (!validPassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no minimo 8 digitos");
        return;
    }

    // verificar se a situação foi selecionada
    if(jobSelect.value === "") {
        alert("Por favor, selecione a sua situação");
        return;
    }

    // verrificar se a mensagem está preenchida
    if(messageTextarea.value === "") {
        alert("Por favor, preencha ou escreva sua mensagem");
        return;
    }

    //Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();

});

// Função que valida e-mail
function isEmailVald(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email))
        return true
    
    return false
}

// Função que valida a senha

function validPassword(passwor, minDigits) {
    if(passwordInput.length >= minDigits){
        return true
    }

    //Senha inválida
    return false
}
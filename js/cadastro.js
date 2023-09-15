const name = document.getElementById("name")
const email = document.getElementById("email")
const emailConfirm = document.getElementById("emailConfirm")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("passwordConfirm")
const button = document.getElementById("button")
const img = document.getElementById("imgPassword")


button.addEventListener("click", (ev) => {
    ev.preventDefault

    if (password.value !== passawordConfirm.value && email.value !== emailConfirm.value) {
        alert("As Senhas e os Emails não conferem.")
    } else if(password.value !== passawordConfirm.value) {
        alert("As Senhas não conferem.")
    } else if (email.value !== emailConfirm.value) {
        alert("Os Emails não conferem.")
    } else {
        const option = confirm(`Deseja mesmo cadastrar esse usúario? 
        Nome: ${name.value}
        Email: ${email.value}`);
        return option
    }
})



// sistema para visualizar a senha
img.addEventListener('mouseenter', () => {
    password.type = 'text'
    passwordConfirm.type = 'text'
    console.log('entrou')
})

img.addEventListener('mouseout', () => {
    password.type = 'password'
    passwordConfirm.type = 'password'
    console.log('saiu')
})



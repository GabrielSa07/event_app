const name = document.getElementById("name")
const email = document.getElementById("email")
const emailConfirm = document.getElementById("emailConfirm")
const password = document.getElementById("password")
const passawordConfirm = document.getElementById("passwordConfirm")
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
    }
})





img.addEventListener('mouseenter', () => {
    console.log('entrou')
})

img.addEventListener('mouseout', () => {
    console.log('saiu')
})



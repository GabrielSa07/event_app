const email = document.querySelector('#email')
const password = document.querySelector('#password')
const button = document.querySelector('#buttonLogin')

button.addEventListener('click', (ev) => {
    ev.preventDefault

    if(email.value !== user.useremail) {
        alert('O email não tem cadastro ou esta incorreto')
    }else if(password.value !== user.password) {
        alert('A senha digitada está incorreta')
    }else {
        alert('login realizado com sucess!!!')
    }

})

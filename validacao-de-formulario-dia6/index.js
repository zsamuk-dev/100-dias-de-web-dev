const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
}
  
const isValidCPF = (cpf) => {
const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
return regex.test(String(cpf).toLowerCase())
}

const form = document.querySelector('form')
const input = document.querySelector('input[name="name"]')

const validateInput = () => {
    if(!input.value){
        input.classList.add('invalid')
        input.nextElementSibling.classList.remove('error-hidden')
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInput()
    if(input.value === '') {
        console.log('Vazio')
    } else {
        console.log('Passou')
    }
    
})

input.addEventListener('input', () => {
    input.classList.add('invalid')
    input.nextElementSibling.classList.remove('error-hidden')
})
const larstName = document.getElementById('First Name:')
const lastName = document.getElementById('Last Name:')
const email = document.getElementById('Email:')
const password = document.getElementById('Password:')
const repeatPassword = document.getElementById('Repeat Password:') 
const terms = document.getElementById('Accept terms and conditions')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push('Name is required')
    }
if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
}
})
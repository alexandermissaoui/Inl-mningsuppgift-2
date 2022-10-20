const form = document.querySelector('#validationForm');
const errorMessage = document.querySelector('#errorMessage');

const validateText = (id) => {
  const input = document.querySelector(id) 
  const regText = /^[a-öA-Ö\s\-]*$/;   

  if(input.value.trim() === '') {
    console.log('Fyll i för- och efternamn!')
    return setError(input)                   
  } 
  else if (input.value.length < 2) {
    return setError(input)
  }
  else if (!regText.test(input.value)) {
    return setError(input);
  }
  else {
    return setSuccess(input)
  }
}
const validateEmail = (id) => {
  const email = document.querySelector(id)

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

  if(email.value.trim() === '') {
    console.log('Fyll i email!')
    return setError(email)
  }
  else if(!regEx.test(email.value)) {
    return setError(email)
  }
  else {
    return setSuccess(email)
  }
}
const validatePassword = (id) => {
  const input = document.querySelector(id)
  
  if(input.value.trim() === ''){
    console.log('Fyll i lösenord!')
    return setError(input)
  }
else if (input.value.length < 6){
  return setError(input)
}
else{
  return setSuccess(input)
}
}
const validateRepeatPassword = (id) => {
  const input = document.querySelector(id)
  
  if(!input.value.trim() === ''){
    return setError(input)
  }
else if (password.value === input.value){
  return setSuccess(input)
}
else{
  console.log('Upprepa lösenordet!')
  return setError(input)
}
}
const validateCheck = (id) => {
  const checkbox = document.querySelector(id)

  if(!checkbox.checked) {
    console.log('Fyll i checkbox!')
    return setError(checkbox)
  }
  else {
    return setSuccess(checkbox)
  }
}
const setSuccess = (input) => {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  return true;
}
const setError = (input) => {        
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  input.focus();
  return false;
}
form.addEventListener('submit', e => {  
  e.preventDefault()                    

  const errors = [];  
  for(let i = 0; i < form.length; i++) {
   
    const inputId = '#' + form[i].id  

    if(form[i].type === 'text') {     
      errors[i] = validateText(inputId) 
    } 
    else if(form[i].type === 'email') {     
      errors[i] = validateEmail(inputId)
    }
    else if(form[i].type === 'password' && inputId === '#repeatPassword'){
      errors[i] = validateRepeatPassword(inputId)
    }
    else if(form[i].type === 'password'){
      errors[i] = validatePassword(inputId)
    }
    else if(form[i].type === 'checkbox') {     
      errors[i] = validateCheck(inputId)
    }
  }
  console.log(errors)

  if(errors.includes(false)) {        
    console.log('Något gick fel :(')
    errorMessage.classList.remove('d-none')
  }
  else {
    console.log('Vi har tagit emot dina uppgifter :)')
    errorMessage.classList.add('d-none')
    const user = {      
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    }
    console.log(user) 
  }    
})


 


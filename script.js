const form = document.querySelector('#validationForm');
const btn = document.querySelector('#btn');

const validateText = (id) => {
  const input = document.querySelector(id)    

  if(input.value.trim() === '') {
    return setError(input)                   
  } 
  else if (input.value.length < 2) {
    return setError(input)
  }
  else {
    return setSuccess(input)
  }
}
const validateEmail = (id) => {
  const email = document.querySelector(id)

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

  if(email.value.trim() === '') {
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
  console.log('error')
  return setError(input)
}
}
const validateCheck = (id) => {
  const checkbox = document.querySelector(id)

  if(!checkbox.checked) {
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
  }
  else {
    console.log('Vi har tagit emot dina uppgifter :)')
  }

})
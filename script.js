form.addEventListener('submit', e => {
    e.preventDefault()
  
    if(firstName.value.trim() === '' || 
    lastName.value.trim() === '' || 
    email.value.trim() === '' ||
    password.value.trim() === '' ||
    repeatPassword.value.trim() === '' ){
      console.log('du måste fylla i alla fält')
      return
    }
  
  
    const user = new User(firstName.value, lastName.value, email.value, password.value, repeatPassword.value)
  
    users.push(user)
    console.log(users)
    form.reset()

    })

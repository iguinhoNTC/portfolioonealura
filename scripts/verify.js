let button = document.getElementById('button_submit');
button.disabled = true;
let nameField = document.getElementById('name');
let emailField = document.getElementById('email');
let subjectField = document.getElementById('subject');
let messagesField = document.getElementById('messages');

const formFields = [nameField, emailField, subjectField, messagesField]

function checkFormFields() {
    let fieldsFilled = true;
  
    formFields.forEach((field) => {
      if (field.value === '') {
        fieldsFilled = false;
      }
    });
  
    if (fieldsFilled) {
      button.removeAttribute('disabled');
      button.style.opacity = 1;
      button.style.cursor = "pointer";
    } else {
      button.disabled = true;
    }
}

formFields.forEach((field) => {
    field.addEventListener('input', checkFormFields);
});

function verify(){

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let messages = document.getElementById('messages');

    //NAME
    if(name.value == '' || name.value == null){
        alert('Preencha o nome!')
    }else {
        if(name.value.length > 50){
            alert('Diminuia o número de caracteres no Nome até ficar abaixo de 50!')
        }
    }

    //EMAIL
    if(email.value == '' || email.value == null){
        alert('Preencha o email!')
    }else {
        let boolean = verifyEmail(email.value)
        if(!boolean){
            alert('Informe um Email válido!')
        }
    }

    //SUBJECT

    if(subject.value == '' || subject.value == null){
        alert('Preencha o assunto!')
    }else {
        if(subject.value.length > 50){
            alert('Diminuia o número de caracteres no Assunto até ficar abaixo de 50!')
        }
    }


    //MESSAGES
    if(messages.value == '' || messages.value == null){
        alert('Preencha o campo de mensagem!')
    }else {
        if(messages.value.length > 300){
            alert('Diminuia o número de caracteres no Campo de Mensagem até ficar abaixo de 300!')
        }
    }
    
}

function verifyEmail (email) {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(email);
}

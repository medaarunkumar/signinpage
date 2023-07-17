const buttonElement=document.querySelector(".btn");
const emInputElement=document.querySelector("#form1Example13");
const emailError=document.querySelector('.hidden');
const pwdInputElement=document.querySelector("#form1Example23");
const pwdError=document.querySelector('.hidden-1');

buttonElement.addEventListener('click',function (e){
    e.preventDefault();
    console.log(emInputElement.value);
    console.log(pwdInputElement.value);
    const inputValue= emInputElement.value;
    const inputValue2=pwdInputElement.value;
    if(inputValue== "" && inputValue2 == ""){
        emailError.classList.remove('hidden'); 
        pwdError.classList.remove('hidden-1');
    }else{
        emailError.classList.add('hidden'); 
        pwdError.classList.add("hidden-1");
    }
})
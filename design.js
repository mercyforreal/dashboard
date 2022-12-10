let form=document.getElementById("form")
let validatename = document.getElementById('validatename')
let validatephone = document.getElementById('validatephone')
form.addEventListener('submit',submitData)
function submitData(event){
    event.preventDefault();
    let fullname = form['fullname'].value
    let phone = form['phone'].value
    let email = form['email'].value
    let matric =form['matric'].value
    let level =form['level'].value
    let session =form['session'].value
 
  if(fullname.trim()== ""){
    error = "Your fullname is required"
  }  
else if(fullname.length <10){
    error = "invalid name"   
}else{
    validatename.innerHTML = fullname
    error = ""
}
document.getElementById('nameError')= error


if (phone == "")
error = "Your phone number is required"
else if(!(phone.startswith(080)|| phone.startswith(090)||phone.startswith(070)|| phone.startswith(081))){
    error ="invalid phone number"
    validate =""
     
}else{
    validatephone.innerHTML= phone
    error = ""

} 
document.getElementById('phoneError').innerHTML=error;


if(email == ""){
    error= "Your email is required"  
}
else if(email.includes('@')==false || email.includes('.')==false){
    error= "invalid email"
}else{
    validategmail.innerHTML = email
}
document.getElementById('emailError').innerHTML=error;

if(matric.trim()== ""){
error = "Your mtric number is required"

}else{
    validatematric.innerHTML = matric
    error = ""
}
document.getElementById('matricError').innerHTML =error


if(level.trim() == ""){
    error= "Your level is required"
} 
else{
    validatelevel.innerHTML = level

}
document.getElementById('levelError').innerHTML =error


if(session.trim()== ""){
    error = ""
}
else{
    validatesession.innerHTML = session

}
document.getElementById('sessionError').innerHTML = error


}




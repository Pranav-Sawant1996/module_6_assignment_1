let globalisSubmit=false
function reset(){
  let firstName= document.getElementById('first-name').value=''
     lastName= document.getElementById('last-name').value=''
     email= document.getElementById('email').value=''
     city= document.getElementById('city').value=''
     state= document.getElementById('state').value=''
     zipCode= document.getElementById('zip-code').value=''
     check= document.getElementById('t-and-c').checked=false

    document.getElementById('first-name-valid').style.display='none'
    document.getElementById('last-name-valid').style.display='none'
    document.getElementById('email-valid').style.display='none'
    document.getElementById('city-valid').style.display='none'
    document.getElementById('state-valid').style.display='none'
    document.getElementById('zip-code-valid').style.display='none'
    document.getElementById('tnc').style.display='none'
}
function validate(isSubmit){
  if(isSubmit){
    globalisSubmit=true
  } let error=false
    let firstName= document.getElementById('first-name').value
    let lastName= document.getElementById('last-name').value
    let email= document.getElementById('email').value
    let city= document.getElementById('city').value
    let state= document.getElementById('state').value
    let zipCode= document.getElementById('zip-code').value
    let check= document.getElementById('t-and-c').checked
    // console.log(firstName, lastName, email, city, zipCode, check)
    
      if(globalisSubmit){
    if(firstName.length >= 2){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
        
    }   
    else{
      error=true
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
    }
  


     if(lastName.length >= 2){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
        
    }
    else{
      error=true
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
    }

    if(email.includes('@') && email.includes('.')   && email.indexOf('@')!=0 && email.substr(email.lastIndexOf('.')+1).length>=2){
        document.getElementById('email-valid').style.display='block'
        document.getElementById('email-invalid').style.display='none'
        
    }   
    else{
      error=true
        document.getElementById('email-invalid').style.display='block'
        document.getElementById('email-valid').style.display='none'
    }

  	if (city.length >= 3) {
    document.getElementById("city-valid").style.display = "block";
    document.getElementById("city-invalid").style.display = "none";
  
  } 
  else {
    error=true
    document.getElementById("city-invalid").style.display = "block";
    document.getElementById("city-valid").style.display = "none";
  }

  if (state !='None') {
    document.getElementById("state-valid").style.display = "block";
    document.getElementById("state-invalid").style.display = "none";
  }
   else {
    error=true
    document.getElementById("state-invalid").style.display = "block";
    document.getElementById("state-valid").style.display = "none";
  }

  let zipNumber=parseInt(zipCode)
  if(!isNaN(zipNumber) && zipNumber>=100000 && zipNumber <= 999999){ /*is NaN will check if zipCode is NaN if zipCode is NaN it will return true else return false  */
    document.getElementById('zip-code-valid').style.display='block'
    document.getElementById('zip-code-invalid').style.display='none'
    
}
else{
  error=true
    document.getElementById('zip-code-invalid').style.display='block'
    document.getElementById('zip-code-valid').style.display='none'
}
if(check){
  document.getElementById('tnc').style.display='none'
}
else{
  error=true
  document.getElementById('tnc').style.display='block'
  
}
if(!error){
  alert('You have successfully submitted form')
  reset()
 }

      }
     
   
  
}
// console.log(checkValidate)

 

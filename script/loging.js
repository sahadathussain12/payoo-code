document.getElementById('loging')
.addEventListener('click',function(){
    const numberInput = document.getElementById('inpurNumber')
    const constactNumber = numberInput.value 
    console.log(constactNumber)

    const inputPin = document.getElementById('input-pin')
    const pin = inputPin.value 
    console.log(pin)

    if(constactNumber == '01328654064'&& pin == '1122'){
        alert('loging success')
         window.location.assign("home.html")
    }
   
    else{
        alert('loging faled')
    }
})
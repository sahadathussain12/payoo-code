console.log('machinee');


function getValueFromId(id){
    const input = document.getElementById(id)
    const value = input.value
    console.log(id,value)
    return value;
}

function getBalance(){
    const balanceElement = document.getElementById('balance');
    const input = balanceElement.innerText
    console.log(Number(input))
    return Number(input);
}

function setBalance(value){
     const balanceElement = document.getElementById('balance');
     balanceElement.innerText = value
}
document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromId("cashout-number");

  const cashAmount = getValueFromId("cashout-Amount");

  const currentBalce = getBalance();

  const newBlance = currentBalce - parseInt(cashAmount);
  console.log(newBlance);

  if (newBlance < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getValueFromId("cashout-pin");
  if (pin === "1122") {
   
    alert("cashout succesful");
     setBalance(newBlance);

    
  }
  else{
    alert('Invalid pin')
  }
});

// document.getElementById('cashout-btn').addEventListener('click', function(){
//    const cashoutNumberInput = document.getElementById('cashout-number')
//    const cashoutNumber = cashoutNumberInput.value
//    console.log(cashoutNumber)
//    if(cashoutNumber.length != 11){
//     alert('Invalid agent number')
//     return;
//    }

//    const cashAmountInput = document.getElementById('cashout-Amount')
//    const cashAmount = cashAmountInput.value
//    console.log(cashAmount);

//    const balanceElement = document.getElementById('balance')
//    const balance = balanceElement.innerText
//    console.log(balance);

//    const newBlance = parseInt(balance) - parseInt(cashAmount)

//     if(newBlance <0){
//         alert('Invalid Amount')
//         return;
//     }

//    console.log('newBlance :', newBlance);
//    balanceElement.innerText = newBlance

//    const cashoutInput = document.getElementById('cashout-pin')
//    const pin = cashoutInput.value
//    if(pin === '1122'){
//      alert('cashout successful')
//    }
//    else{
//     alert('Invalid pin')
//    }
// })

const convertButton= document.querySelector(".convert-button")
const selectFrom = document.querySelector("#Convert-from")
const selectTo = document.querySelector("#Convert-to")



    function convert(){
       const inputValue = document.querySelector(".valor").value
       const currencyValueConvert = document.querySelector(".currency-value-convert")
       const currencyValue =document.querySelector(".currency-value")
   
    console.log(selectFrom.value)
     const exchangeRates = {
       BRL: 1,    // Real brasileiro
       USD: 5.3,  // Dólar americano
       EUR: 6.2,  // Euro
       BTC: 220.00001  // Bitcoin
   }
  //const dolarToday = 5.2

    // const convertValue = inputValue / dolarToday
    // if(selectFrom.value == "BRL"){
    //   currencyValue.innerHTML = new Intl.NumberFormat("en",{
    //     style:"currency",
    //     currency:"usd"
    //   }).format(inputValue / dolarToday)
    // }
    if(selectFrom.value == "BRL"){
      currencyValue.innerHTML = new Intl.NumberFormat("en",{
        style:"currency",
        currency:"usd"
      }).format(inputValue / exchangeRates.USD)
    }
  

        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br",{
          style:"currency",
          currency:"BRL"
        }).format(inputValue)

        // currencyValue.innerHTML = new Intl.NumberFormat("en",{
        //   style:"currency",
        //   currency:"usd"
        // }).format(inputValue / dolarToday)
      
    }
 

convertButton.addEventListener("click", convert)
    
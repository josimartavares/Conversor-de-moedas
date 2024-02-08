const currecyButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select1")
const currencySelectTo = document.querySelector(".select2")

function conversorMoedas() {
  // const inputValor = parseFloat(document.querySelector("#valor")).value
  const inputValor = document.querySelector("#valor").value
  const selectFrom = document.querySelector("#Convert-from").value
  const selectTo = document.querySelector("#Convert-to").value

  const taxaCambio = {
    BRL: 1,
    USD: 4.97,
    EUR: 5.36,
    BTC: 221.888
  }

  const resultadoDe = inputValor * taxaCambio[selectFrom]
  const resultadoPara = resultadoDe / taxaCambio[selectTo]

  document.querySelector("#recebe").innerHTML = inputValor
  document.querySelector("#converte").innerHTML = resultadoPara.toFixed(2)

  console.log(selectFrom)
  console.log(selectTo)
  console.log(inputValor)
  console.log(resultadoPara)
}

function changeCurrency() { //botao primeiro select 
  const mudaNome = document.querySelector(".currency-name")
  const figura = document.querySelector("#fig1")

  if (currencySelect.value == "USD") {
    mudaNome.innerHTML = "Dolar (s)"
    figura.src = "../Assets/usa.png"

  }
  if (currencySelect.value == "BRL") {
    mudaNome.innerHTML = "Real (s)"
    figura.src = "../Assets/brasil 2.png"

  }
  if (currencySelect.value == "EUR") {
    mudaNome.innerHTML = "Euro (s)"
    figura.src = "../Assets/Euro.png"

  }
  if (currencySelect.value == "BTC") {
    mudaNome.innerHTML = "Bitcoin (s)"
    figura.src = "../Assets/bit.png"

  }

  conversorMoedas()
}

function changeTo() { // funcao segundo select
  const namecurrency = document.querySelector("#name")
  const fig = document.querySelector("#fig2")

  if (currencySelectTo.value == "BRL") {
    namecurrency.innerHTML = "Real (s)"
    fig.src = "../Assets/brasil 2.png"
  }
  if (currencySelectTo.value == "USD") {
    namecurrency.innerHTML = "Dolar (s)"
    fig.src = "../Assets/usa.png"
  }
  if (currencySelectTo.value == "BTC") {
    namecurrency.innerHTML = "Bitcoin (s)"
    fig.src = "../Assets/bit.png"
  }
  if (currencySelectTo.value == "EUR") {
    namecurrency.innerHTML = "Euro (s)"
    fig.src = "../Assets/Euro.png"
  }

  conversorMoedas()
}

currencySelectTo.addEventListener("change", changeTo)
currencySelect.addEventListener("change", changeCurrency)

currecyButton.addEventListener("click", conversorMoedas)
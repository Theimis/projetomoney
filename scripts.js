const covertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToconvert = document.querySelector(".currency-value-to-convert") // valor em real
   const currencyValueConvertd = document.querySelector(".currency-value") // outras moedas

   console.log(currencySelect.value)
   const dolarToday = 5.2
   const euroToday = 6.2


   if (currencySelect.value == "dolar") {
      // se o selct estiver selecionado o valor de dolar, entre aqui
      currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolarToday)

   }
   if (currencySelect.value == "euro") {
      // se o selct estiver selecionado o valor de euro, entre aqui
      currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToday)

   }



   currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"

   }).format(inputCurrencyValue)


}

function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")

   if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dolar Americano"
      currencyImage.src = "./assests/dolar.png"
   }

   if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assests/euro.png"
   }

   convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
covertButton.addEventListener("click", convertValues)
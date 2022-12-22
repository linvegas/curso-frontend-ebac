const inputA = document.querySelector("#input-number-a")
const inputB = document.querySelector("#input-number-b")
const formNumber = document.querySelector("#form-number")
const messageAlert = document.querySelector(".p-message")

formNumber.addEventListener("submit", function(e) {

  e.preventDefault()

  let inputNumberA = Number(inputA.value)
  let inputNumberB = Number(inputB.value)

  if ( inputNumberA < inputNumberB ) {
    messageAlert.innerHTML = "O primeiro número é menor que o segundo! 😉"
    messageAlert.style.backgroundColor = "#98c379"
    messageAlert.style.display = "block"
  } else {
    messageAlert.innerHTML = "O primeiro número precisa ser menor que o segundo!"
    messageAlert.style.backgroundColor = "#d65e56"
    messageAlert.style.display = "block"
  }

})

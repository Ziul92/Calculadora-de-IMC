const calcular = document.querySelector("#calcular");
const nome = document.querySelector("#nome");


function imc(){
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value;
  const resultado = document.querySelector("#resultado");
  var imc = Math.round(peso / (altura * altura))


  if (nome.value !== "" && peso !== "" && altura !== ""){
    if (imc <= 18.5) {
      resultado.textContent = "Olá " + nome.value + " seu IMC é: " + imc + " e está abaixo do esperado."
    }
    if (imc >= 18.6 && imc <= 24.9) {
      resultado.textContent = "Olá " + nome.value + " seu IMC é: " + imc + " e está excelente."
    }
    if (imc >= 25 && imc <= 29.9) {
      resultado.textContent = "Olá " + nome.value + " seu IMC é: " + imc + " e você está com sobrepeso"
    }

    if (imc >= 30 && imc <= 34.9) {
      resultado.textContent = "Olá " + nome.value + " seu IMC é: " + imc + " e está acima do esperado, você está com classe 1 de obesidade."
    }

    if (imc >= 35 && imc <= 39.9) {
      resultado.textContent = "Olá " + nome.value + " seu IMC é: " + imc + " e está acima do esperado, você está com classe 2 de obesidade."
    }

    if (imc >= 40){
      resultado.textContent = "Olá " + nome.value + " seu IMC é: " + imc + " e está acima do esperado, você está com classe 3 de obesidade."
    }
    
  } else {
    resultado.textContent = "Por favor, digite os dados conforme solicitado"
  }
  
}

calcular.addEventListener("click", imc)
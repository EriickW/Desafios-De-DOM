const body = document.querySelector("body")
const form = body.querySelector("form")
const firstNumber = form.querySelector("#num1")
const secondNumber = form.querySelector("#num2")
const calcular = body.querySelector("#calcular")
const apagar = body.querySelector("#apagar")
const tabuada = body.querySelector("#tabuada")



calcular.addEventListener("click", multiplicar)
apagar.addEventListener("click",apagarTabuada)


function multiplicar(){
    let num1 = firstNumber.value;
    let num2 = secondNumber.value;
    let linha;
    for(let i = 0; i<= num2;i++){
        linha = document.createElement("li")
        linha.innerText = `${num1} X ${i} = ${num1 * i}`
        tabuada.append(linha)
 
    }
}
function apagarTabuada(){
    tabuada.innerText = "";
}


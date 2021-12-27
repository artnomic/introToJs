var idade = prompt("Qual a sua idade?"); //nesse momento idade recebe o que o usuário informar, supondo que seja 18. Vai ser o mesmo que escrever : var idade = 18;
if (idade >= 18) {
    alert("maior de idade")
}else if (idade < 18 & idade >= 16) {
    alert("falta pouco")
}else{
    alert("menor de idade")
}
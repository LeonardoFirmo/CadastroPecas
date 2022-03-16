let pesoPeca = 100
// let numeroPecas = 10
let listaPecas = ["Disco de Freio","Motor","Pastilha de Freio","pneu","volante","chassi","Disco de Freio","Motor","Pastilha de Freio","pneu","volante","chassi"]
let nomePeca = "Pá"

//verificação peso da peça
if(pesoPeca >= 100){
console.log("Peso adequado, podemos cadastrar")
}else{
    console.log("Peso menor que 100g, não podemos cadastrar")
}



//Verificação Tamanho da lista de peças
if(listaPecas.length >= 10 ){
    console.log("capacidade máxima atingida")
}else{
    console.log("Ainda há espaço para cadastro")

}

//verificação do nome da peça

if(nomePeca.length < 3) {
    console.log("Nome inválido,Nome precisa de três caracteres ou mais!")
}else{
    console.log("Nome adequado")
}
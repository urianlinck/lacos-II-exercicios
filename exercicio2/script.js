let numero = Number(prompt("Digite um número para saber a tabuada de 1 até 10"))
const valores = [1,2,3,4,5,6,7,8,9,10]

for(let i in valores){
    let tabuada = valores[i] * numero
   
    
    console.log(`${numero} x ${valores[i]} = ${tabuada}`)
}

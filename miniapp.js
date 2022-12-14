let accs = prompt("Digite a data de partida(formata DD/MM/YYYY")

let dragon = moment(accs, "DD/MM/YYYY")

let today = moment()

let datedif = today - dragon

let chosen = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosen == "1") {
    let seconds0 = Math.round(datedif / 1000)
    alert("Tempo de voo" + seconds0 + " segundos")
} else if(chosen == "2"){
    let minutes0 = Math.round(datedif / 1000 / 60)
    alert("Tempo de voo: " + minutes0 + " minutos")
} else if(chosen == "3"){
    let houras0 = Math.round(datedif / 1000 / 3600)
    alert("Tempo de voo: " + houras0 + " horas")
} else if(chosen == "4"){
    let dias0 = Math.round(datedif / 1000 / 3600 / 24)
    alert("Tempo de voo: " + dias0 + " dias")
} else {
    alert("Opção Invalida")
}
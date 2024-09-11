var estudantes = []
var comando = prompt("Digite um nome para adicionar na lista de estudantes. Caso queria parar, digite \"PARE\"")

while (comando !== "PARE") {
    estudantes.push(comando)
    comando = prompt("Digite mais nomes para adicionar na lista de estudantes. Caso queria parar, digite \"PARE\"")
}

document.write(estudantes.join(", "))

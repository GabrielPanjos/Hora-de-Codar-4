var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"]
var user = prompt("Digite um planeta e veremos se ele está na lista: ")

if ((planetas.includes(user)) == true) {
    document.write("O planeta " + user + " que você digitou está na lista!")
} else {
    document.write("O planeta que você digitou não está na lista...")
}
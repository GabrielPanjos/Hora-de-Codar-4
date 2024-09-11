var lista_de_compras = ["Banana", "Maçã", "Melão", "Melancia", "Manga", "Laranja", "Maracujá", "Limão"]
var mensagem = document.getElementById("mensagem")
var comprar = document.getElementById("comprar")
var form = document.getElementById("form")

mensagem.innerHTML = "Aqui temos uma lista de compras: <br>" + lista_de_compras.join(", ")

form.addEventListener("submit", function (event) {
    event.preventDefault()


    if (lista_de_compras.includes(comprar.value)) {
        removeA(lista_de_compras, comprar.value);

        mensagem.innerHTML = "Aqui temos uma lista de compras: <br>" + lista_de_compras.join(", ")
    } else {
        alert("Esta fruta não está na lista.")
    }

    if (lista_de_compras.length === 0) {
        mensagem.innerHTML = "Lista de compras finalizada.";
    }
})

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L]; while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
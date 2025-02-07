let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nomeDoAmigo = input.value.trim();

    if (nomeDoAmigo) {
        amigos.push(nomeDoAmigo);
        const listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";
        amigos.forEach(function(amigo) {
            const novoAmigo = document.createElement("li");
            novoAmigo.textContent = amigo;
            listaAmigos.appendChild(novoAmigo);
        });
        input.value = "";
    } 
    else {
        alert("Por favor, insira um nome.")
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
       alert("Não há nome para sortear, favor escrever um nome primeiro");
       return;
    }
    const listaAmigos = document.getElementById("listaAmigos");
    const nome = listaAmigos.getElementsByTagName("li");
    const indiceAleatorio = Math.floor(Math.random() * nome.length);
    const amigoSorteado = nome[indiceAleatorio].textContent;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <li>${amigoSorteado}`;
}
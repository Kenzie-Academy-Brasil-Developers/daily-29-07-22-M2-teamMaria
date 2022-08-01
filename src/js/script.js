const ul = document.querySelector(".containerFilmes")

// criar card filme
function criarCard(elemento) {
    const li = document.createElement("li")
    const h3 = document.createElement("h3")
    const span = document.createElement("span")

    h3.innerText = elemento.nome
    span.innerText = elemento.categoria

    li.append(h3, span)

    return li
}

const mostrarCards = (array) => {
    ul.innerHTML = ""
    array.forEach((elemento) => {
        const cardElemento = criarCard(elemento)
        ul.appendChild(cardElemento)
    })
}

mostrarCards(filmes)

const filterSciFi = () => {
    const filtrados = filmes.filter((filme) => filme.categoria === "Sci-Fi")

    mostrarCards(filtrados)

}

const buttonSciFi = document.getElementsByClassName("filterSciFi")[0]

buttonSciFi.addEventListener("click", filterSciFi)


const filterInput = (event) => {
    event.preventDefault()
    
    const inputValor = document.querySelector("#inputValue").value

    const filtrados = filmes.filter((filme) => {
        return filme.categoria.toLowerCase() === inputValor.toLowerCase() || filme.nome.toLowerCase() === inputValor.toLowerCase()
    })
    mostrarCards(filtrados)
    
}

const btn = document.querySelector("#btnSearch")
btn.addEventListener("click", filterInput)

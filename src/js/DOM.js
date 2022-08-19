export class DOM {
    static mostrarClientes(array) {
        const ul = document.querySelector("ul")

        array.forEach((cliente) => {
            const li = document.createElement("li")
            li.innerText = cliente.nome

            ul.appendChild(li)
        })
    }
}
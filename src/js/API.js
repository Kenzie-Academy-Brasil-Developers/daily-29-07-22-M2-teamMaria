export class API {
    static baseURL = "https://atividade-api-clientes.herokuapp.com/clientes"

    static async getClientes() {
        const response = await fetch(this.baseURL)
        const data = await response.json()

        return data
    }

    static async postCliente(data) {
        const response = await fetch(this.baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res)
        .then(res => res.json())

        return response
    }

    static deleteCliente(id) {
        const response = fetch(`${this.baseURL}/${id}`, {
            method: "DELETE",
        })
        .then(res => res)
        .then(res => res.json())

        return response
    }
}
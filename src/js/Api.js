class Api {

    static async createUser(data) {
        const response = await fetch("https://m2-api-token.herokuapp.com/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .catch(err => console.log(err))

        return response
    }

    static async login(data) {
        const response = await fetch("https://m2-api-token.herokuapp.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .catch(err => console.log(err))

        let obj = {
            token: response,
            id: 593
        }

        localStorage.setItem("@aula-login", JSON.stringify(obj))

        return response
    }
}

export {Api}
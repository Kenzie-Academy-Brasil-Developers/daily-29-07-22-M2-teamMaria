import { Api } from "./Api.js"

class Render {
    static register(e) {
        e.preventDefault()

        const formElements = document.querySelector("#formRegister").elements

        const arrElements = [...formElements]
        const data = {}

        arrElements.forEach(elem => {
            if(elem.tagName === "INPUT") {
                data[elem.name] = elem.value
            }
        })

        Api.createUser(data)

    }

    static signIn(e) {
        e.preventDefault()

        const formElements = document.querySelector("#formLogin").elements

        const arrElements = [...formElements]
        const data = {}

        arrElements.forEach(elem => {
            if(elem.tagName === "INPUT") {
                data[elem.name] = elem.value
            }
        })

        Api.login(data)
    }

    static pegarId() {
        console.log(JSON.parse(localStorage.getItem("@aula-login")))
    }
}

export {Render}
import { Api } from "./Api.js";
import { Render } from "./Render.js";

const formRegister = document.querySelector("#formRegister")

formRegister.addEventListener("submit", Render.register)

const formLogin = document.querySelector("#formLogin")
formLogin.addEventListener("submit", Render.signIn)

Render.pegarId()
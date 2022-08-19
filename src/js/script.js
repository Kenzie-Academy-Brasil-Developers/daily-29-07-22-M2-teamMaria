import { API } from "./API.js";
import { DOM } from "./DOM.js";

const clientes = await API.getClientes()

const novoCliente = {
    nome: "Maria",
    idade: 29,
    cpf: "46469467342",
    data_nasc: "19/02/1993",
    sexo: "Feminino",
    email: "maria@mail.com.br",
    endereco: {
      cep: "38055292",
      rua: "Rua Dois",
      numero: 698,
      bairro: "Residencial Veneza",
      cidade: "Uberaba",
      estado: "MG"
    },
    telefone_fixo: "3425232094"
  }

// await API.postCliente(novoCliente)
API.deleteCliente(11)
console.log(clientes)
DOM.mostrarClientes(clientes)


// for (let i =0; i< filmes.length; i++) {
//     console.log(filmes[i])
// }

// filmes.forEach((filme) => {
//     filme.arr.forEach((nota) => {
//         console.log(filme.nome + nota)
//     })
// })

const arrayMap = filmes.map((filme) => {
     filme.nota = 10
     return filme
})

// console.log(arrayMap)
// console.log(filmes)

//Filter
const filmesFantasia = filmes.find((filme)=> {
    return filme.categoria === "Fantasia"
})

console.log(filmesFantasia)
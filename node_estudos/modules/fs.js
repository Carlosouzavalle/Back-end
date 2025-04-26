const { error } = require('console')
const fs = require('fs')
const path = require('path')
const { text } = require('stream/consumers')

//criar uma pasta
// fs.mkdir(path.join(__dirname, '/teste'), (error) => {
//     if(error) {
//         console.log('Houve um error', error)
//     }
 
//     console.log('pasta criada com sucesso!')
// })


//criar um arquivo
//writFile é assicrono
fs.writeFile(path.join(__dirname, '/teste', 'test.txt'), 'Hello node', (error) => {
    if(error) {
        return console.log('houve um erro')
    }

    console.log('dados criados com sucesso')

    //modifica um arquivo
    fs.appendFile(path.join(__dirname, '/teste', 'text.txt'), 'hello world!', (error) => {
        if(error) {
            console.log(error)
        }
        console.log('arquivo modificado')
    })

    // ler um arquivo
    fs.readFile(path.join(__dirname, '/teste', 'text.txt'), 'utf8', (error,data) => {
        if(error) {
            return console.log(error)
        }

    console.log(data)
    })

})

//modifica um arquivo
// fs.appendFile(path.join(__dirname, '/teste', 'text.txt'), 'hello world!', (error) => {
//     if(error) {
//         console.log(error)
//     }
//     console.log('arquivo modificado')
// })


// ler um arquivo
// fs.readFile(path.join(__dirname, '/teste', 'text.txt'), 'utf8', (error,data) => {
//     if(error) {
//         return console.log(error)
//     }

//     console.log(data)
// })
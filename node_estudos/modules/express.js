const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send("<h1>Hello World!!</h1>")
}),


app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Dudu',
            email: 'dudu@tralala'
        },
        {
            name: 'Dudu2',
            email: 'dudu2@tralala'
        }
    ]

    res.status(200).json(users)
})

const port = 8080

app.listen(port, () => console.log(`rodnado na porta ${port}`))
const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
    if(req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Home Page</h1>')
    } 
    if(req.url === '/users') {
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

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    }
})

server.listen(port, () => console.log('Servidor em funcionamento'))
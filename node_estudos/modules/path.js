const path = require('path')

// Apenas o nome do arquivo atual
console.log(path.basename(__filename))

//apenas o nome do diretorio
console.log(path.dirname(__filename))

//extensao do arquivo
console.log(path.extname(__filename))

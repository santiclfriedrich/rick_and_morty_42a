const server = require('./src/app');
const {conn} = require('./src/DB_connection')

const PORT = 3001;

server.listen(PORT, () => {
    conn.sync({force: true})
    console.log("Server raised in port " + PORT);
})

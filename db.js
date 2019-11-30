const mysql = require('mysql')

function connect()
{
    const connection = mysql.createConnection({
        host:"172.18.5.73",
        user:"root",
        password:"manager",
        database:"mean",
        port:"8888"
    })

    connection.connect;
    return connection;
}

module.exports = {
    connect:connect
}
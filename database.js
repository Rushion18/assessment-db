const sql = require('mssql');
const config = {
    user: 'name',
    password: 'P@ssw0rd',
    server: 'localhost',
    database: 'testdb'
    };

const pool = new sql.ConnectionPool(config);
pool.connect().then(() => {
    console.log("Connected to the database.");
    }).catch((err) => {
        console.error("An error occurred while connecting to the database.", err);
        });

module.exports = {
    sql,
    pool, 
    poolConnect,
}


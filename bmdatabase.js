const mysql = require("mysql2");
// Read the environment variables
require('dotenv').config();

const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.MYSQL_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    multipleStatements: true,
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log(err);
        console.log("Connection Failed");
    }
});

module.exports = mysqlConnection;
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "connection",
    password: "ISU_may2024",
    database: "cycourse"
});

module.exports = db;
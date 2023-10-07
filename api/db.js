import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "January18Th*",
    database: "crudfullstack",
})
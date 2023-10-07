// Importando o banco de dados que configuramos
import { db } from '../db.js'

export const getUsers = (_, res) => {
    // Criando uma query para capturar todos os usuários do banco
    const query = "SELECT * FROM usuarios"

    db.query(query, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}
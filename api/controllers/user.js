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

export const addUser = (req, res) => {
    const query = "INSERT INTO usuarios (nome, email, fone, data_nascimento) VALUES (?)"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento
    ]

    db.query(query, [values], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário criado com sucesso")
    })
}

export const updateUser = (req, res) => {
    const query = "UPDATE usuarios SET nome = ?, email = ?, fone = ?, data_nascimento =? WHERE id = ?"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento
    ]

    db.query(query, [...values, req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário atualizado com sucesso")
    })
}

export const deleteUser = (req, res) => {
    const query = "DELETE FROM usuarios WHERE id = ?"

    db.query(query, [req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário deletado com sucesso")
    })
}
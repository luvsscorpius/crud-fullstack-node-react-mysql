import express from "express"
import userRoutes from './routes/users.js'
import cors from 'cors'

const app = express()

app.use(express.json())
// cors para evitar conflitos rodando localmente
app.use(cors())

app.use("/", userRoutes)

app.listen(8800)
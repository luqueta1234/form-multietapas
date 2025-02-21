import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import session from 'express-session'
//importando o index.ts
import mainRoutes from './routes/index'

dotenv.config()
const server = express()
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))


// Middleware para JSON
server.use(express.json());

// Criação da sessão
server.use(session({
    secret: "luke123987", // Troque por uma chave segura
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Defina como `true` se estiver usando HTTPS
}));

//habilitar o POST (via body)
server.use(express.urlencoded({extended:true}))
server.use(express.json());

server.use(mainRoutes)
server.listen(process.env.PORT)

server.use((req,res) =>{
    res.send("Página não encontrada")
})
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const KnexSessionStore = require("connect-session-knex")

// const config = {
//     name:"sessionId",
//     secret: "keep it secret, keep it safe",
//     cookie:{
//       maxAge: 1000 * 60 * 60,
//       secure:false,
//       httpOnly: true
//     },
//     resave:false,
//     saveUnitialized:false,
  
//     store: new KnexSessionStore({
//       knex:require("../database/connection.js"),
//       tablename:"sessions",
//       sidfieldname:"sid",
//       createTable:true,
//       clearInterval:1000 * 60 * 60
//     })
//   }

const server = express()

// server.use(session(config))
server.use(express.json())
server.use(cors())

server.get("/", (req, res)=>{
    res.json({api: "up"})
})

module.exports = server
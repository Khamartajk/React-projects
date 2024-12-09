require('dotenv').config()
const express = require('express')
const app = express()
// const port = 4000 

app.get('/',(req,res)=>{
  res.send('My first express server application')
})

app.get('/twitter',(req,res)=>{
   res.send('<h2>Khamartajdotcom</h2>')
})

app.get('/login',(req,res)=>{
   res.send('<h1>This is login page</h1>')
})

app.listen(process.env.PORT,()=>{
  console.log(`Congrats! your server is created successfully on port `)
})
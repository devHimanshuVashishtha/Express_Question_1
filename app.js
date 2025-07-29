const express = require('express')
const mongoose = require('mongoose')
const app = express()
const mongoURI = "mongodb+srv://himanshuvashishtha001hp:K3EGwGLdCQaz7Aqe@express1.kvkgela.mongodb.net/?retryWrites=true&w=majority&appName=Express1"
const PORT = 3000
// K3EGwGLdCQaz7Aqe

mongoose.connect(mongoURI).then(console.log('MongoDB Connected'))

app.listen(PORT,()=>{
    console.log(`server Started at http://localhost:${PORT}`)
})
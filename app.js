const express = require('express')
const mongoose = require('mongoose')
const app = express()
const mongoURI = "mongodb+srv://himanshuvashishtha001hp:K3EGwGLdCQaz7Aqe@express1.kvkgela.mongodb.net/expressdb1?retryWrites=true&w=majority&appName=Express1"
const PORT = 3000
const userRoute = require('./routers/User')
// K3EGwGLdCQaz7Aqe

app.use(express.json())

app.use('/user',userRoute)

mongoose.connect(mongoURI).then(console.log('MongoDB Connected'))

app.listen(PORT,()=>{
    console.log(`server Started at http://localhost:${PORT}`)
})
const express =  require('express')

const app = express()
app.use(express.json())

app.get("/test", (req, res) =>{
    res.send("hello there  welcome")
})

app.listen(4001, () =>{
    console.log(7+5)
}) 
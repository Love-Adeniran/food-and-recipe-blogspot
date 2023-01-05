const express = require("express")
const app = express()
app.set("view engine","ejs")
const path = require("path")

// app.use('/images', express.static(__dirname + 'views/images'))

app.use(express.static(path.join(__dirname,"public")))

let allPost =[]
let eachPost = {
    
}

app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/signup',(req,res)=>{
    res.render('signUp')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/home',(req,res)=>{
    res.render('home')
})
 
// app.get('/',(req,res)=>{
//     res.send('Hello Love')
// })

app.listen(5000, ()=>{
    console.log('e don happen');
})
const express = require("express")
const app = express()
// const ejs = require("ejs")
app.set("view engine","ejs")
const path = require("path")

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

let allUser =[]
let allPost = []

app.get('/',(req,res)=>{
    res.render("index")
})

//for signUp page
app.get('/signup',(req,res)=>{
    res.render('signUp')
})
app.post('/signUp',(req,res)=>{
    allUser.push(req.body)
    console.log(allUser)
    res.redirect("/login")
})

//for login page
app.get('/login',(req,res)=>{
    res.render('login',{allUser})
})

app.post('/login',(req,res)=>{
    for ( i = 0; i < allUser.length; i++) {
        let newLogin = req.body
        if (newLogin.email === allUser[i].email && newLogin.password === allUser[i].password) {
           res.redirect("/home") 
        }
        else{
            alert('Opppsssss! Invalid Email or Password!')
        }
    }
})

// for the blogspot posts
app.get('/home/:id',(req,res)=>{
    console.log('o wole')
    let id = req.params.id
    let post = allPost[id]
    console.log(allPost[id])
    res.render('more', {post})
})

app.get('/home',(req,res)=>{ 
    res.render('home',{allPost})
})
app.post('/home',(req,res)=>{
    allPost.push(req.body)
    console.log(allPost)
    res.redirect('home')
})


app.listen(5000, ()=>{
    // console.log('e don happen');
})
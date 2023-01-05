require("express")
// to make use of express
const express = require("express")
// to trigger and save the express function for usability
const app = express()
app.set("view engine","ejs")
app.get('/',(req,res)=>{
     console.log('request made successfully ');
     res.send('Congratulations! Dev Love '); 
})
app.get("/about", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get("/ejs",(req,res)=>{
    res.render("about")
})
app.listen(5000,()=>{
    console.log('E don start');
});

// console.log('Hey Love')
// console.log(__dirname)
// console.log(__filename)

// // setTimeout(function(){
// //     console.log('3 seconds have passed')
// // },3000)
// time = 0
//  let timer = setInterval(function(){
//     time+= 2
//     console.log( time +' seconds have passed')
//     if(time>7){
//         clearInterval(timer)
//     }
// },2000)

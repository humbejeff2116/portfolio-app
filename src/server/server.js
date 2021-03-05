
const http = require('http');
const port = 8080;


function app(req,res){
    switch(req.url){

        case "/" : console.log("index url")
        break;
        case "/about": console.log("about page")
        break;
        case "/services": console.log("services page")
        break;
        default: console.log("page not found")

    }
    
}
http.createServer(app).listen(port,()=>{
    console.log(`server started on port ${port}`)
})
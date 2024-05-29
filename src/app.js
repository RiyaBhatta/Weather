const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

const staticpath = path.join(__dirname, "../public")
app.set("view engine", "hbs");
app.use(express.static(staticpath));


app.get('/' , (req, res) => {
    res.render("index")
})

app.get('/weather' , (req, res) => {
    res.render("weather")
})

app.get('*' , (req, res) => {
    res.render("404error", {
        errorMsg : 'Oops!! Page not found'
    })
})

app.listen(port, ()=>{
    console.log(`Listening on port number ${port}`);
})
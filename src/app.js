const express = require('express');
const app = express();
const hbs=require('hbs');
const path = require('path');

templates_path=path.join(__dirname,'../templates/views');
partials_path=path.join(__dirname,'../templates/partials');

app.use(express.static(path.join(__dirname,'../public')));


app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app.get('/',(req,res) => {
    res.render('index');
});

app.get('/about',(req,res) => {
    res.render("about");
});

app.get('/weather',(req,res) => {
    res.render("weather");
    
});

app.get('*',(req,res) => {
    res.render("404error",{
        errorMsg : 'Opps! Page Not Found'
    });
    
});

app.listen(3000,()=>{
    console.log('listen the port at 3000.');
});


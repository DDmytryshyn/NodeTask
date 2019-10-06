const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const app = express();

const users = [];
const usersId = [];
    app.listen(5000,()=>{
        console.log('Listen5000');
    });

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(express.static(path.join(__dirname,'static')));

    app.engine('.hbs',expHbs({
    extname:'.hbs'
    }));


     app.set('view engine','.hbs');
     app.set('views',path.join(__dirname,'static'));



    app.get('/log',(req,res)=>{
    res.render('main',{title:'hello'})
    });

    app.post('/register',(req,res)=>{
        let body = req.body;
        users.push(body);
        console.log(body);
        res.render('login')
});

    app.get('/users',(req,res)=>{
        res.json(users);
    });

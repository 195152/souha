let express = require ('express');


let app = express();

//body au début est un texte brute dons il faut traiter ce body 
app.use(express.urlencoded({extended : true}));

let session = require('express-session');
app.use(session({
    secret : 'my secret',
    resave: false,
    saveUninitialized: true
    })
);

//1
let router = require ('./routes');
app.use('/',router)


//launch app to listen to specified port
app.use(express.static('public'));

app.listen(80,function(){
    console.log('server is runnig on port 80')
});

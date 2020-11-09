var express = require('express');

var bodyParser = require ("body-parser");

var fetch = require('node-fetch');

var app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static("Public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    fetch('https://xkcd.com/info.0.json',)
    .then(res => res.json())
    .then(data => {
        res.render('index', {data:data});
    });
})

app.get('/xkcd', function(req, res){ 
    function numGenerator(){
    let numRandom = Math.random() * (2000 +1) + 1;
    return Math.floor(numRandom);
};
    let num = numGenerator();
    fetch('https://xkcd.com/' +num + '/info.0.json',)
    .then(res => res.json())
    .then(data => {
        res.render('xkcd', {data:data});
    });
})


app.listen(port,function(){
    console.log('listening on ' + port)
});
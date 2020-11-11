var express = require('express');

var bodyParser = require ("body-parser");

var app = express();

var fetch = require('node-fetch');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static("public"));

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
    let numRandom = Math.random() * (100 +1) + 1;
    return Math.floor(numRandom);
};
    let number = numGenerator();
    fetch('https://xkcd.com/' +number + '/info.0.json',)
    .then(res => res.json())
    .then(data => {
        res.render('xkcd', {data:data});
    });
})


app.listen(port, function(){
    console.log('listening on ' + port)
});
const express = require('express');
const nunjucks = require('nunjucks');
const admin = require('./routes/admin');
const logger = require("morgan");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

nunjucks.configure('templates', {
    autoescape : true,
    express : app
});

// 미들웨어 셋팅
app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended : false }) );
app.use( '/uploads', express.static('uploads') ); // url, folder name

app.use( (req, res, next) => {
    app.locals.isLogin = True; // Global View Variable
    next();
});

app.get('/', (req, res) => {
    res.send('hello express');
});

function appMiddleware(req, res, next){
    console.log('최우선 미들웨어');
    next();
}

app.use('/admin', appMiddleware, admin);

app.listen(port, () => {
    console.log('Express Listening on port', port);
})

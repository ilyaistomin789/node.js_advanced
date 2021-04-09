require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const AuthRouter = require('./routes/authRouter');
const MainRouter = require('./routes/mainRouter');
const expressHandlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');


const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ limit: '10mb'}));

const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'FormsJwt/views');

app.use(MainRouter);
app.use(AuthRouter);

app.listen(3000);

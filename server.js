// sets up all external requirements
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// sets up sequelize
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

// sets port
const PORT = process.env.PORT || 3001;

// set up handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// creates cookie session
const sess = {
    secret: 'Temporary secret',
    cookie: {
        maxAge: 1000*60*60*24,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// tells express to use our cookie we created
app.use(session(sess));

// Informs express.js which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// gives express some default behaviors
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// tells express to use the routes we have created
//app.use(routes);

// we start a squelize database and then we have our app start 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});


// connect public files to backend
const path = require('path');



// basic set up for dependencies
const express = require('express');
const routes = require('./controllers'); // once routes folder rename to controller, update
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); //built-in Express.js middleware function that can take all of the contents of a folder and serve them as static assets. 

// turn on routes
app.use(routes);

// set up Handlebars.js as app template engine (installed by running install express-handlebars)
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var recettesRouter = require('./routes/recetteRoutes'); // <-- ici
const { sequelize } = require('./models'); //

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recettes', recettesRouter); // <-- ici aussi


// Test de connexion
sequelize.sync({ alter: true })  // ou .sync({ force: true }) si tu veux tout recréer (⚠️ ça supprime les données)
  .then(() => {
    console.log('✅ Base de données synchronisée.');
  })
  .catch((err) => {
    console.error('❌ Erreur de synchronisation :', err);
  });


module.exports = app;

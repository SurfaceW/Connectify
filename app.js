/**
 * App Entry
 */

const koa = require('koa');
const mongoose = require('mongoose');
const route = require('koa-route');
const Jade = require('koa-jade');
const CONF = require('./config');
const app = koa();
const jade = new Jade({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
  basedir: './views/includes',
  helperPath: [],
  app: app
});
jade.locals.name = 'connectify';

/**
 * Server configuration
 */
app.use(route.get('/', require('./routes/index')));
app.use(route.post('/entity', require('./routes/createEntity')));
app.use(route.get('/entity/:entityId', require('./routes/getEntity')));
app.use(route.put('/entity/:entityId', require('./routes/updateEntity')));
app.use(route.del('/entity/:entityId', require('./routes/deleteEntity')));
app.use(require('./routes/404'));

app.listen(CONF.PORT);
console.log('app is listening to port ' + CONF.PORT);

/**
 * DataBase configuration
 */
const db = mongoose.connection;
mongoose.connect(CONF.DB_ADDRESS + CONF.DB_NAME);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', console.log.bind(console, 'connect to mongodb ' + CONF.DB_NAME));

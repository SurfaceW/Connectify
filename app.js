const koa = require('koa');
const route = require('koa-route');
const Jade = require('koa-jade');
const handleSearch = require('./routes/index');
const handleEntity = require('./routes/entity');
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

app.use(route.get('/', handleSearch));
app.use(route.get('/entity/:entityId', handleEntity));
app.listen(CONF.PORT);

console.log('app is listening to port ' + CONF.PORT);

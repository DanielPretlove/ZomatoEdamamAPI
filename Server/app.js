require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();


const GoogleMapsRouter = require('./routes/GoogleMaps');
const ZomatosRouter = require('./routes/zomato');

app.use('/', GoogleMapsRouter);
app.use('/', ZomatosRouter);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: [
    'http://localhost:3001/',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))


app.get('/', (req, res) => {
  res.send('Hello world');
})


// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
  console.log('Server listening on port: ', 3000);
})
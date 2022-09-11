
import express from 'express'
import { main } from './routes/main.js';

var app = express();

// Set up Template Engine
app.set('view engine', 'ejs');
// static files
app.use(express.static('./public'));
// Middlewares
app.use(express.json())
app.use(express.urlencoded( {extended : false } ));

main(app);

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
import express from 'express'
import { main } from './routes/main.js';

const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded( {extended : true } ));
app.use(express.static('../dist'));

main(app);

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
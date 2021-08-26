const Express = require('express');
const app = Express();

const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./Src/Routes/Router')
require('./Database/index');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(Express.json())
app.use(cors());

app.listen(3300, ()=>{
  console.log("Server is now listen at port 3300")
})

app.use(routes);
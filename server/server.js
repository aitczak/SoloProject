const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//define all routes here and send back to client side on res . locals 
//error handlers

app.get('/', (req,res)=>{
    
})



app.use((err, req, res, next) => {
  const defaultErr = {
    log: "error caught",
    status: 500,
    message: { err: "occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});




app.listen(port);


module.exports = app;
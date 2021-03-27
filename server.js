const express = require("express");
const app = express();
const logger = (req, res, next) => {
  const d = new Date();
  const day = d.getDay();
  const h = d.getHours();
  console.log(d);
  console.log(day);
  console.log(h);
  if(day>=1 && day<=5 && h>=9 && h<= 17){
    next();
  }
  else (res.send("close"));

};
app.use(logger);
app.use(express.static("public"));

const port = 5000;

app.listen(port, (err) => {
  err
    ? console.error(err)
    : console.log(`the server is running on port ${port}`);
});

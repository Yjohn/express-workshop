const express = require('express');
const app = express();
app.use(express.static("public"));

app.get("/",  (req, res) => {
    res.send("Hello World!");
});

app.get("/student",  (req, res) => {
    res.send("Hello students!");
});
app.get("/aboutMe",  (req, res) => {
    res.send("This is a page for Yohannes!");
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

app.get("/girls", (req, res) =>{
  res.send("Yay Node Girls!");
});

app.get("/node", (req, res) => {
  res.send("this is Node Page!");
});



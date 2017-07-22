const express = require('express');
const app = express();
const fs = require('fs')
app.use(express.static("public"));

const formidable = require('express-formidable');
app.use(formidable());

app.post('/create-post', function (req, res) {
    /*
    //console.log('the post ');
    //console.log(req.fields);
    const filepath = __dirname + '/data/posts.json';
    const postsContent = fs.readFileSync(filepath);
    const posts = JSON.parse(postsContent);
    posts[Date.now()] = req.fields.blogpost;
    fs.writeFileSync(filepath, JSON.stringify(posts));
    //we write file with the req.fields contents
    //fs.writefile(filepath, Json.stringify(req.fields), function(){
    //callback - we return 200 to client })
    res.send(200, posts);
    */

    const filepath = __dirname + '/data/posts.json';
    fs.readFile(filepath, function(err, data){
        const postsContent = JSON.parse(data);
        const timeStamp = Date.now();
        postsContent[timeStamp] = req.fields.blogpost;
        fs.writeFile(filepath, JSON.stringify(postsContent, null, 2), function(){
            res.send(JSON.stringify(postsContent, null, 2))
        });
    });
});

app.get("/get-posts", function (req, res) {
  res.sendFile(__dirname + '/data/posts.json');
});

/*
const filepath = __dirname + '/data/posts.json';
fs.readFile(filepath, function(err, data){
    const postsContent = JSON.parse(data);
    const timeStamp = Date.now();
    postsContent[timeStamp] = req.fields.blogpost;
    fs.writeFile(filepath, JSON.stringify(postsContent, null, 2), function(){
        res.sendStatus(JSON.stringify(postsContent, null, 2))
    });
});
*/
// app.get("/",  (req, res) => {
//     res.send("Hello World!");
// });

// app.get("/student",  (req, res) => {
//     res.send("Hello students!");
// });
// app.get("/aboutMe",  (req, res) => {
//     res.send("This is a page for Yohannes!");
// });

app.listen(3000, () => {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});

// app.get("/girls", (req, res) =>{
//   res.send("Yay Node Girls!");
// });

// app.get("/node", (req, res) => {
//   res.send("this is Node Page!");
// });




// read the file > string 
// change in to object - JSON.parse
// append to the object 
// my object [Date.now()] =  req.fields.blogpost
//we write to file JSON.stringify (myObject)
// fs.writeFilesync and fs.readFilesync
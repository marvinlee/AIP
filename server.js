var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var fs = require('fs');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get('/recom', function(req, res){
    //res.sendFile(path.join(__dirname, '/index.html'));
    res.sendFile(path.normalize(__dirname + '/movie.json'))  
    console.log("sent file");
    
});

app.post('/', function (req, res) {
    //var file_name = req.body.ogrNo;
    console.log("inside post " + req.body.title);
    var movie =  {
			        "title": req.body.title,
			        "release": req.body.release,
			        "duration": req.body.duration,
			        "genre": req.body.genre,
			        "synopsis": req.body.synopsis
			      };
    //file_content = file_content.replace(/\n/g, "\r\n");
	console.log("movie json " + movie.title);
    fs.writeFileSync('movie.json', JSON.stringify(movie), 'utf-8');
    console.log("successfully write file");
    res.redirect('back');
});

app.listen(3000);
console.log("Server running on port 3000");
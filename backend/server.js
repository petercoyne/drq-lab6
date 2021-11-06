const express = require('express')
const app = express()
const port = 4000
const cors = require('cors') // require cross origin resource sharing npm package

app.use(cors()); // get express to use cors

app.use(function (req, res, next) { // headers to allow cross origin stuff 
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

const bodyParser = require('body-parser') // require body parser middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api/movies', (req, res) => { // route for GET on /api/movies
	const myMovies = [{	// movies array of objects 
		"Title": "Avengers: Infinity War",
		"Year": "2018",
		"imdbID": "tt4154756",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
	},
	{
		"Title": "Captain America: Civil War",
		"Year": "2016",
		"imdbID": "tt3498820",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
	},
	{
		"Title": "World War Z",
		"Year": "2013",
		"imdbID": "tt0816711",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
	},
	{
		"Title": "War of the Worlds",
		"Year": "2005",
		"imdbID": "tt0407304",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
	}];

	res.status(200).json({ // send a status 200 header in the response
		message: "everything is ok", // can send multiple items in response
		movies: myMovies // movies array created above
	});
})

app.post('/api/movies', (req, res) => { // route for POST on /api/movies
	console.log("Movie Received!"); // message to confirm POST request
	console.log(req.body.Title); // log the various name/value pairs to console
	console.log(req.body.Year);
	console.log(req.body.Poster);
})

app.listen(port, () => { // default listen function
	console.log(`Example app listening at http://localhost:${port}`)
})
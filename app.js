var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/books or /api/genres');
});

//GET all genres
app.get('/api/genres', function(req,res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	})
});

//ADD genre
app.post('/api/genres', function(req,res){
	var genre = req.body;
	Genre.addGenres(genre, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})
});

//UPDATE genre
app.put('/api/genres/:_id', function(req,res){
	var id = req.params._id;
	genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})
});

//DELTE genre
app.delete('/api/genres/:_id', function(req,res){
	var id = req.params._id;
	genre = req.body;
	Genre.deleteGenre(id, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})
});


//GET all books
app.get('/api/books', function(req,res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	})
});

//GET a book by id
app.get('/api/books/:_id', function(req,res){
	Book.getBookById(req.params._id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	})
});

//ADD book
app.post('/api/books', function(req,res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	})
});

//UPDATE book
app.put('/api/books/:_id', function(req,res){
	var id = req.params._id;
	book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	})
});

//DELETE book
app.delete('/api/books/:_id', function(req,res){
	var id = req.params._id;
	book = req.body;
	Book.deleteBook(id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	})
});


app.listen(3000);
console.log("Listening on port 3000 .....");
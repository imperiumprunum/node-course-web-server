const express = require('express');
const hbs = require('hbs');


var app = express();


//partials
hbs.registerPartials(__dirname + '/views/partials');
// engine 
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//using func in html
hbs.registerHelper('screamIt', (text)=>{
	return text.toUpperCase();
});

//under maintance
app.use((req,res,next) => {
	res.render('maintance.hbs');
});

app.get('/', (req,res) => {
	res.render('home.hbs',{
		pageTitle: 'Some title page',
		sampleText: 'Welcome to my first hbs-template page'
	})
});

app.get('/about', (req,res) => {
	res.render('about.hbs',{
		sampleText: 'Some sample text'
	});
});


/*app.get('/bad', (req,res) => {
	res.send({
		errMsg: 'Unable to fetch index'
	});
})
*/
app.listen(3000);
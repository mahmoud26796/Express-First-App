const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const pathDir = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../Template1/views');
const partialDir = path.join(__dirname, '../Template1/partials');
console.log(partialDir);
app.use(express.static(pathDir));

app.set('views', viewsDir);
app.set('view engine', 'hbs');

hbs.registerPartials(partialDir);
app.use(express.static("images"));

app.get('/', (req, res) => {
    res.render('index', {
        title: "Main",
        desc: 'From main index page',
    });
});


app.get('/', (req, res) => {
    res.send('Home page on fire!');
});


app.get('/services', (req, res) => {
    res.render('services', {
        title: "Services",
        desc: 'From Services page',
        imgSrc: '/images/trainer-1.jpg'
    });
});


app.get('/team', (req, res) => {
    res.render('team', {
        title: "Team",
        desc: 'From Team page',
        imgSrc: '/images/trainer-3.jpg'
    });
});

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log('server is on 3000 local fire!!!');
});



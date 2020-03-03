const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/index.html' || '/index', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
})

app.get('/art.html' || '/art', (req, res) => {
    res.sendFile(path.resolve('public/art.html'));
})

app.get('/bio.html' || '/bio', (req, res) => {
    res.sendFile(path.resolve('public/bio.html'));
})

app.get('/blog.html' || '/blog', (req, res) => {
    res.sendFile(path.resolve('public/blog.html'));
})

app.get('/web.html' || '/web', (req, res) => {
    res.sendFile(path.resolve('public/web.html'));
})


app.get('/single-post/:id', (req, res) => {
    res.sendFile(path.resolve(`public/single-post.html`));
})

app.listen(port, ()=> console.log(`Example app listening on port: ${port}`))
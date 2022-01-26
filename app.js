const express = require('express');
const app = express();
const env = require('dotenv').config();
const path = require('path')
const port = process.env.PORT || 3010;


app.use(express.static(path.join(__dirname + '/public')))

app.set('view engine', 'ejs');
app.set('views', 'views')


app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/about', (req, res)=>{
    res.render('about')
})
app.get('/contact', (req, res)=>{
    res.render('contact')
})
app.get('/photo-detail', (req, res)=>{
    res.render('photo-detail')
})
app.get('/video-detail', (req, res)=>{
    res.render('video-detail')
})
app.get('/videos', (req, res)=>{
    res.render('videos')
})

app.listen(port, ()=>{
    console.log(`app is listening to port: ${port}`)
})
const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/courseCategory.json');

const course = require('./data/course.json');

app.get('/', (req, res) =>{
    res.send('Course API Running');
});

app.get('/categories', (req, res) =>{
    res.send(categories);
})

app.get('/course', (req, res) =>{
    res.send(course);
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const single_course = course.find(course => course.course_id === id);
    res.send(single_course);
})

app.get('/category/:id',(req, res) =>{
    const id = req.params.id;
    if(id == 0){
        res.send(course);
    }else{
        const course_category = course.filter(course => course.category_id === id);
        res.send(course_category);
    }
})

app.get('/course-details/:id',(req, res) =>{
    const id = req.params.id;
    const course_details = course.filter(course => course.category_id === id);
    res.send(course_details);
})

app.listen(port, ()=>{
    console.log('Hero Learning Server Running on Port:', port);
})
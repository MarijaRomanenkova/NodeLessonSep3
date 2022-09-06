const express = require('express');
const path = require('path');
const port = 5000;
const app = express();


app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {  
        res.sendFile(path.resolve(__dirname, './navbar/index.html'))
});
app.post('/',(req, res) => {
        const solution = require('./solve')
        const a = req.body.a;
        const b = req.body.b;
        const c = req.body.c;
		const calculate = solution(a, b, c);
        res.send(`The answer is ${calculate}`)
});



app.get('/about', (req, res) => {  
    res.json([{ name: 'Super Calculus'}, { name: 'Simple Calculus'}])
  });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});





// console.log(result);
// console.log('my name is')





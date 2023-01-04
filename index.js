const express = require('express');
const path = require('path');

const app = express();

//ejs configs//
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {

  res.render('index',{nome:'Artur', idade: 33});

})

app.listen(3000, ()=> {
  console.log('server is running on port 3000')
})

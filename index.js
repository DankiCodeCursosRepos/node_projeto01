const express = require('express');
var bodyParser = require('body-parser');

const path = require('path');

const app = express();


//body parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//ejs configs//
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));


var tarefas = ['Arrumar o quarto', 'Fazer compras no Supermercado']



app.get('/', (req, res) => {
  res.render('index',{tarefasList : tarefas});
})

app.post('/', (req, res) => {
  // console.log(req.body.tarefa)
  tarefas.push(req.body.tarefa)

  // res.render('index',{tarefasList : tarefas});
})

app.get('/deletar/:id', (req,res) => {

  tarefas = tarefas.filter((value , index) => {
    if (index != req.params.id) {
      return value
    }
  })

  res.render('index',{tarefasList : tarefas});
})

app.listen(3000, ()=> {
  console.log('server is running on port 3000')
})

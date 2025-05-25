require('dotenv').config();
const express = require('express');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');
const methodOverride= require('method-override')
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
  res.redirect('/todos');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});
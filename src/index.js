const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

require('./controllers/filmeController')(app);

app.listen(4000);

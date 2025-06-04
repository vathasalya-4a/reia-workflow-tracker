// api/server.js
const express = require('express');
const path = require('path');
const reiaStagesRoutes = require('./reia-stages');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/reia-stages', reiaStagesRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
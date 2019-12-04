const express = require('express');
const bodyParser = require('body-parser');
const { TeamMember } = require('./model');

const app = express();
app.use(bodyParser.json());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/teamMember', async (req, res, next) => {
  const { body } = req;
  const teamMember = await TeamMember.create(body);
  return res.json(teamMember);
});

module.exports = app;

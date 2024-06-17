const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let issues = [];

app.post('/issues', (req, res) => {
  const issue = req.body;
  issues.push(issue);
  console.log('Issue created:', issue);
  res.status(201).send(issue);
});

app.get('/issues', (req, res) => {
  res.send(issues);
});

app.put('/issues/:id', (req, res) => {
  const { id } = req.params;
  const updatedIssue = req.body;
  issues = issues.map((issue) => (issue.id === id ? updatedIssue : issue));
  console.log('Issue updated:', updatedIssue);
  res.send(updatedIssue);
});

app.delete('/issues/:id', (req, res) => {
  const { id } = req.params;
  issues = issues.filter((issue) => issue.id !== id);
  console.log('Issue deleted:', id);
  res.status(204).send();
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

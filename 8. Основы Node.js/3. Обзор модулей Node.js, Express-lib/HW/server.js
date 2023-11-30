const express = require('express');
const path = require('path');
const fs = require('fs/promises');

const app = express();
const PORT = 3000;

let counters = {};

const loadCounters = async () => {
  try {
    const data = await fs.readFile('counters.json', 'utf-8');
    counters = JSON.parse(data);
  } catch (error) {
    console.error('Error loading counters:', error.message);
  }
};

const saveCounters = async () => {
  try {
    await fs.writeFile('counters.json', JSON.stringify(counters, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving counters:', error.message);
  }
};

const readHtmlFile = async (filename) => {
  try {
    const htmlContent = await fs.readFile(filename, 'utf-8');
    return htmlContent;
  } catch (error) {
    console.error(`Error reading HTML file ${filename}:`, error.message);
    return null;
  }
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  counters['/'] = (counters['/'] || 0) + 1;
  await saveCounters();

  const filename = path.join(__dirname, 'index.html');
  const htmlContent = await readHtmlFile(filename);

  if (htmlContent) {
    const updatedHtml = htmlContent.replace('{{views}}', counters['/']);
    res.status(200).type('text/html; charset=utf-8').send(updatedHtml);
  } else {
    res.status(500).send('Internal Server Error');
  }
});

app.get('/about', async (req, res) => {
  counters['/about'] = (counters['/about'] || 0) + 1;
  await saveCounters();

  const filename = path.join(__dirname, 'about.html');
  const htmlContent = await readHtmlFile(filename);

  if (htmlContent) {
    const updatedHtml = htmlContent.replace('{{views}}', counters['/about']);
    res.status(200).type('text/html; charset=utf-8').send(updatedHtml);
  } else {
    res.status(500).send('Internal Server Error');
  }
});

const startServer = async () => {
  await loadCounters();
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

startServer();
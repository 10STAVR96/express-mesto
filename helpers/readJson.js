const fs = require('fs').promises;

const getFile = (file) => fs.readFile(file, { encoding: 'utf8' });

module.exports = getFile;

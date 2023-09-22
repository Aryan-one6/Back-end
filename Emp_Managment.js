const fs = require('fs');
console.log('File Reading from file.txt ...');
fs.readFile('file.txt', 'utf8', readingFile);
function readingFile(error, data) {
 if (error) {
 console.log(error);
 } else {
 console.log(data);
 fs.writeFile('paste.txt', data, 'utf8', writeFile);
 }
}
function writeFile(error) {
 if (error) {
 console.log(error)
 } else {
 console.log('Content has been pasted to paste.txt file');
 }
}
fs.unlink('file.txt', (err) => {
 if (err) {
 console.error(`Error deleting file: ${err}`);
 } else {
 console.log(`Data has been cleared.`);
 }
});

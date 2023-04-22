const fs = require('fs');     //'fs' = file system  - creates a filesystem object named 'fs'

const userName = 'Max';

fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => { //writeFile has 3 arguments: a path, the data to write, and a callback function 
  if (err) {                                                  //writeFile runs asynchronously, the callback gets an error object which returns null
    console.log(err);                                         //if there is no error
    return;
  }
  console.log('WROTE FILE');
});

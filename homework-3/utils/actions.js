const fs = require('fs');
const csvjson = require('csvjson');
const path = require('path');

const readStream = filePath => fs.createReadStream(filePath);

const reverseAction = () => {
  process.stdin.on('data', (data) => {
    process.stdout.write(data.toString().split('').reverse().join(''));
  });
};

const transformAction = () => {
  process.stdin.on('data', (data) => {
    process.stdout.write(data.toString().toUpperCase());
  });
};

const outputFileAction = (filePath) => {
  if (!filePath) {
    throw new Error('File should be defined')
  }

  readStream(filePath)
    .on('error', error => console.error(error))
    .pipe(process.stdout);
};

const convertFromFileAction = (filePath) => {
  if (!filePath) {
    throw new Error('File should be defined')
  }

  const toObject = csvjson.stream.toObject();
  const stringify = csvjson.stream.stringify()
  readStream(filePath)
    .on('error', error => console.error(error))
    .pipe(toObject)
    .pipe(stringify)
    .pipe(process.stdout);
};

const convertToFileAction = (filePath) => {
  if (!filePath) {
    throw new Error('File path should be defined')
  }

  const toObject = csvjson.stream.toObject();
  const stringify = csvjson.stream.stringify();
  const writeStream = fs.createWriteStream(filePath.replace(/\.[^\.]+$/, '.json'));

  readStream(filePath)
    .on('error', error => console.error(error))
    .pipe(toObject)
    .pipe(stringify)
    .pipe(writeStream);
};

const cssBundlerAction = (directoryPath) => {
  if (!directoryPath) {
    throw new Error('Directory path should be defined')
  }

  const writeStream = fs.createWriteStream(`${directoryPath}/bundle.css`);

  fs.readdir(directoryPath, (error, files) => {
    if (error) {
      console.error(error);
    }

    files.forEach((file) => {
      if (path.extname(file) === '.css') {
        fs.createReadStream(`${directoryPath}/${file}`)
          .on('data', (data) => {
            writeStream.write(`\n${data.toString()}`);
            writeStream.write(`
              .ngmp18 {
                background-color: #fff;
                overflow: hidden;
                width: 100% ;
                height: 100% ;
                position: relative;
              }

              .ngmp18__hw3 {
                color: #333;
              }
              
              .ngmp18__hw3--t7 {
                font-weight: bold;
              }
            `)
          });
      }
    });

  });
}

module.exports = {
  reverseAction,
  transformAction,
  outputFileAction,
  convertFromFileAction,
  convertToFileAction,
  cssBundlerAction
};


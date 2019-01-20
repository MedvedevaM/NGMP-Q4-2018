const { printActionsTypes } = require('./helpMessages');
const {
  reverseAction,
  transformAction,
  outputFileAction,
  convertFromFileAction,
  convertToFileAction,
  cssBundlerAction,
} = require('./actions');

const actionsController = (action, filePath, arrayOfStrings, directoryPath) => {
  switch (action) {
    case 'reverse':
      reverseAction(arrayOfStrings);
      break;
    case 'transform':
      transformAction(arrayOfStrings);
      break;
    case 'outputFile':
      outputFileAction(filePath);
      break;
    case 'convertFromFile':
      convertFromFileAction(filePath);
      break;
    case 'convertToFile':
      convertToFileAction(filePath);
      break;
    case 'cssBundler':
      cssBundlerAction(directoryPath);
      break;
    default:
      console.log('    Incorrect action name!');
      printActionsTypes();
  }
};

module.exports = {
  actionsController,
};

const minimist = require('minimist');
const { minimistConfig } = require('../config/minimistConfig');
const { helpMessage } = require('./helpMessages');
const { actionsController } = require('./actionsController');


const parseArgs = minimist(process.argv.slice(2), minimistConfig);

const commandsController = (args = {}) => {
  const actionName = args.action;
  const filePath = args.file;
  const arrayOfStrings = args._;
  const isHelpCommand = args.help;
  const directoryPath = args.path;
  
  if (isHelpCommand) {
    helpMessage();
  } else if (!actionName) {
    console.log('    You need to use --action command!');
    helpMessage();
  } else {
    actionsController(actionName, filePath, arrayOfStrings, directoryPath);
  }
};

commandsController(parseArgs);

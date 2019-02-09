const helpMessage = () => {
  console.log(`
    Usage:
    -a, --action:    Action name
      Actions:
        * reverse:            reverse string data from process.stdin to process.stdout
        * transform:          convert data from process.stdin to upper-cased data on process.stdout
        * outputFile:         pipe the given file provided by --file option to process.stdout
        * convertFromFile:    convert file provided by --file option from csv to json and output data to process.stdout
        * convertToFile:      convert file provided by --file option from csv to json and output data to a result file with the same name but json extension
    -f, --file:    File path
    -h, --help:    Print Help Message
    -p, --path:    Path to files for cssBundler action
  `);
};

const printActionsTypes = () => {
  console.log(`
    Actions:
      * reverse:            reverse string data from process.stdin to process.stdout
      * transform:          convert data from process.stdin to upper-cased data on process.stdout
      * outputFile:         pipe the given file provided by --file option to process.stdout
      * convertFromFile:    convert file provided by --file option from csv to json and output data to process.stdout
      * convertToFile:      convert file provided by --file option from csv to json and output data to a result file with the same name but json extension
  `);
};

module.exports = {
  helpMessage,
  printActionsTypes,
};

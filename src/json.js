const fs = require('fs');
const path =  require('path');
const chalk = require('chalk');
const parser = require('xlsx');
const utils = require('./utils');
const process = require('process');

const json = (filepath) => {
  if(!utils.isExcel(filepath)) {
    console.log(chalk.green('please select a file with \'xlsx\' or \'xls\' extname! '))
    process.exit(1);
  }

  const workbook = parser.readFile(filepath);
  const data = [];
  workbook.SheetNames.forEach(function (sheetName) {
    const workSheet = workbook.Sheets[sheetName];
    data.push(parser.utils.sheet_to_json(workSheet));
  });

  const en = data.map(function(item, index) {
    if (item.length <= 1) {
      return null;
    }
    const dataKeys = Object.keys(item[0]);
    const content = {
      filepath: dataKeys[1],
      en: {}
    };
    item.forEach(function(unit, index) {
      if (index !== 0) {
          content.en[unit[dataKeys[0]]] = unit[dataKeys[2]] || '';
      }
    });
    console.log(content.en);

    return content;
  }).filter(function (item) {
    return item;
  });

  function write(desPath, desData) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(desPath, utils.processData(desData), function(err) {
        if (err) {
          reject('Error when writing the Js file!');
          return;
        }
        resolve(desPath);
      });
    });
  }

  const writeData = en.map(function(item) {
    return write(path.resolve(item.filepath, './en.js'), item.en);
  });
  Promise.all(writeData)
    .then(function(content) {
      content.forEach(function(item) {
        console.log('The i18n files(' + chalk.red('en.js') + ') is created successfully');
        console.log('   in ' + chalk.red(item));
      });
    }).catch(function(err) {
      console.log(chalk.red(err));
    });
}

module.exports = json;

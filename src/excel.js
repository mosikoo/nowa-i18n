const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const parser = require('xlsx');
const process = require('process');
const utils = require('./utils');

const excel = (filepath) => {
  const workbook = {
    SheetNames: [],
    Sheets: {},
    filesPath: [],
  };

  utils.isExist(filepath);
  const header = ['key', 'Chinese', 'English'];
  // 异步遍历
  utils.work(filepath, (files, i18nPath) => {
    if (files.some(file => file === 'zh-cn.js')) {
        const json = require(path.resolve(i18nPath, 'zh-cn.js'));
        const index = workbook.SheetNames.length + 1;
        workbook.SheetNames.push('sheet' + index);
        workbook.Sheets['sheet' + index] = utils.formatWb(header, json, i18nPath);
    } else {
      console.log(chalk.red('Warn: i18n文件下需存在zh-cn.js文件，否则无法转换~'));
      console.log(chalk.red('     at ' + i18nPath));
    }
  }, () => {
    parser.writeFile(workbook, 'i18n.xlsx');
    console.log(path.resolve(process.cwd(), 'i18n.xlsx') + ': ');
    console.log('     i18n.xlsx翻译文档在当前路径下已成功生成!');
  });
}

module.exports = excel;

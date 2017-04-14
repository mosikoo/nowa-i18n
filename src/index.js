/*
* @Author: mosikoo
* @Date:   2017-04-11 17:34:00
* @Last Modified by:   mosikoo
*/

'use strict';

const pkg = require('../package.json');
const path = require('path');
const process = require('process');
const excel = require('./excel');
const json = require('./json');

// plugin defination
module.exports = {

  command: 'i18n <type> <file>',

  description: pkg.description + '\n'
    + '\n\n'
    + '  nowa i18n excel filepath: 如nowa i18n excel ./'
    + '\n'
    + '    遍历执行目录下的i18n文件夹，整理其目录下的zh-cn.js内容生成i18n.xlsx'
    + '\n\n'
    + '  nowa i18n json xxx.xlsx: 如nowa i18n json i18n.xlsx'
    + '\n'
    + '    根据翻译文档自动在相应的路径下自动生成「en.js」文件',

  options: [
    // [ '    --type <type> <file>', 'shortcut of template option' ],
    // [ '-p, --port [port]', 'which port to use', 80 ],
    // [ '-s, --slient', 'slient?', false ]
  ],

  action: function(type, _path) {
    const filepath = path.resolve(process.cwd(), _path);
    // console.log(options.mode, options.slient)
    if (type === 'json') {
      json(filepath);
    } else if (type === 'excel') {
      excel(filepath);
    } else {
      console.log('请输入正确的type类型：json或excel');
    }
  }
};

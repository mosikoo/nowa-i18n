/*
* @Author: mosikoo
* @Date:   2016-04-21 17:34:00
* @Last Modified by:   mosikoo
* @Last Modified time: 2016-04-21 20:23:36
*/

'use strict';

var pkg = require('../package.json');

// plugin defination
module.exports = {

  description: pkg.description,

  options: [
    // [ '-p, --port [port]', 'which port to use', 80 ],
    // [ '-s, --slient', 'slient?', false ]
  ],

  action: function(options) {
    // console.log(options.mode, options.slient)
    console.log('It works.')
  }
};

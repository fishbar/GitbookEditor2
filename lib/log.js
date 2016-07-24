/*!
 * GitbookEditor2: lib/log.js
 * Authors  : fish <zhengxinlin@gmail.com> (https://github.com/fishbar)
 * Create   : 2016-07-24 11:52:58
 * CopyRight 2016 (c) Fish And Other Contributors
 */
'use strict';
const config = require('../config');
const Log = require('litelog');
const log = Log.create(config.logs);
log.colorful(config.debug);

module.exports = log;
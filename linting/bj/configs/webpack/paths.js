'use strict';

const { resolve, dirname } = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const resolveApp = resolve(fs.realpathSync(process.cwd()), 'src');
const appRoot = dirname(dirname(__dirname));

// config after eject: we're in ./config/
module.exports = {
  appSrc: resolveApp,
  appRoot,
};

const path = require("path");

exports.getFileName = function () {
  return path.join(path.dirname(require.main.filename));
};

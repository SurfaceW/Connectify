/**
 * Search Route
 */

const searchEntity = function *(next) {
  this.body = 'this is search entity process!';
};

module.exports = searchEntity;

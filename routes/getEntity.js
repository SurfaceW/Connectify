/**
 * EntityPage Route
 */

const handleGetEntity = function *(next) {
  this.body = 'this is get entity process!';
};

module.exports = handleGetEntity;

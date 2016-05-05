/**
 * EntityPage Route
 */

const handleUpdateEntity = function *(next) {
  this.body = 'this is update entity process!';
};

module.exports = handleUpdateEntity;

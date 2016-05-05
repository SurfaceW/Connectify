/**
 * EntityPage Route
 */

const handleCreateEntity = function *(next) {
  this.body = 'this is create entity process!';
};

module.exports = handleCreateEntity;

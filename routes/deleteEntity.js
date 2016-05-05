/**
 * EntityPage Route
 */

const handleDeleteEntity = function *(next) {
  this.body = 'this is delete entity process!';
};

module.exports = handleDeleteEntity;

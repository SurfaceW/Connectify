/**
 * EntityPage Route
 */

const handleEntity = function *(next) {
  this.body = 'this is entity page!';
};

module.exports = handleEntity;

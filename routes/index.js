/**
 * Index Route
 */

const handleSearch = function *(next) {
  this.render('index', {}, true);
};

module.exports = handleSearch;

/**
 * response.js
 *
 * default response obj
 */

module.exports = function Response() {
  this.status = 200;
  this.message = 'success';
  this.data = [];
};


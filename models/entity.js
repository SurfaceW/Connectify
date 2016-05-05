/**
 * Entity Model
 */

const mongoose = require('mongoose');

const Entity = mongoose.Schema({
  name: String,
  define: String,
  props: []
  // relations: [],
  // actions: []
});

module.exports = mongoose.model('EM', Entity);

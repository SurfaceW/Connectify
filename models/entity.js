/**
 * Entity Model
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Entity = new Schema({
  name: String,
  define: String,
  props: [{
    name: String,
    value: Schema.Types.Mixed
  }]
  // relations: [],
  // actions: []
});

module.exports = mongoose.model('EntityModel', Entity);

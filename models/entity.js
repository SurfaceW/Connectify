/**
 * Entity Model
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Entity = new Schema({
  name: String,
  detail: String,
  define: String,
  props: [{
    name: String,
    value: Schema.Types.Mixed
  }],
  relations: [{
    name: String,
    relatedEntities: [{
      '_id': String,
      name: String
    }]
  }],
  actions: []
});

module.exports = mongoose.model('EntityModel', Entity);

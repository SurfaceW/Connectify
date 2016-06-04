/**
 * EntityPage Route
 */

const Entity = require('../models/entity');
const Response = require('../core/response');
const _ = require('ramda');

let res = new Response();

const handleGetEntity = function *(id) {
  yield getEntity(id);
  this.body = JSON.stringify(res);
};

const getEntity = (id) => {
  return new Promise((resolve, reject) => {
    Entity.findById(id, (err, entity) => {
      if (err || _.isNil(entity)) {
        res = _.merge(new Response(), {
          message: 'no data in the database'
        });
      } else {
        res = new Response();
        res.data.push(entity);
      }
      resolve();
    });
  });
};

module.exports = handleGetEntity;

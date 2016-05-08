/**
 * EntityPage Route
 */

const Entity = require('../models/entity');
const Response = require('../core/response');
const _ = require('ramda');

let res = new Response();

const handleSearchEntity = function *(name) {
  yield searchEntity(name);
  this.body = JSON.stringify(res);
};

const searchEntity = (name) => {
  return new Promise((resolve, reject) => {
    Entity.find({ name: new RegExp(name, 'i') }, null, { limit: 10 }, (err, entityList) => {
      if (err) {
        res = _.merge(new Response(), {
          'status': 500,
          'message': 'database error'
        });
        reject();
      }
      res = new Response();
      res.message = _.length(entityList) === 0
        ? 'empty result'
        : 'find result';
      res.data = entityList;
      resolve();
    });
  });
};

module.exports = handleSearchEntity;

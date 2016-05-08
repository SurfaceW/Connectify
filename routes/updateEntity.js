/**
 * EntityPage Route
 */

const Entity = require('../models/entity');
const Response = require('../core/response');
const _ = require('ramda');

let res = new Response();

const handleUpdateEntity = function *(id) {
  yield updateEntity(id, this.request.body);
  this.body = JSON.stringify(res);
};

const updateEntity = (id, data) => {
  return new Promise((resolve, reject) => {
    if (_.isNil(data)) {
      res = _.merge(new Response(), {
        'status': 400,
        'message': 'illegal request parameters'
      });
      reject();
    }
    Entity.findOneAndUpdate({
      _id: id
    }, data, {}, (err, entity) => {
      if (err) {
        res = _.merge(new Response(), {
          'status': 500,
          'message': 'database process error'
        });
        resolve();
      }
      res.message = 'successfully update entity';
      resolve();
    });
  });
};

module.exports = handleUpdateEntity;

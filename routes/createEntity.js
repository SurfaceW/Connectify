/**
 * EntityPage Route
 */

const Entity = require('../models/entity');
const Response = require('../core/response');
const _ = require('ramda');

let res = new Response();

const handleCreateEntity = function *(next) {
  yield createEntity(this.request.body);
  this.body = JSON.stringify(res);
};

const createEntity = (data) => {
  return new Promise((resolve, reject) => {
    if (_.isNil(data.name)) {
      res = _.merge(res, {
        'status': 400,
        'message': 'illegal request parameters'
      });
      reject();
    }
    Entity.create({
      name: data.name,
      detail: data.detail || '',
      define: data.define || '',
      props: data.props || [],
      relations: data.relations || []
    }, (err, entityInstance) => {
      if (err) {
        res = _.merge(res, {
          'status': 500,
          'message': 'database save error'
        });
        reject();
      } else {
        res.message = 'successfully create entity';
        res.data.push({
          'id': entityInstance['_id']
        });
        resolve();
      }
    });
  });
};

module.exports = handleCreateEntity;

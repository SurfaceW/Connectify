/**
 * EntityPage Route
 */

const Entity = require('../models/entity');
const Response = require('../core/response');
const _ = require('ramda');
const CONST = require('../core/const');

let res = new Response();

const handleDeleteEntity = function *(data) {
  let delType = this.request.query.delType;
  yield delType === CONST.DELETE_BY_NAME
    ? removeEntityByName(data)
    : removeEntityById(data);
  this.body = JSON.stringify(res);
};

const removeEntityById = (id) => {
  return new Promise((resolve, reject) => {
    Entity.remove({ _id: id }, (err, entity) => {
      if (err || _.isNil(entity)) {
        res = _.merge(new Response(), {
          message: 'remove fail due to: ' + JSON.stringify(err)
        });
      }
      resolve();
    });
  });
};

const removeEntityByName = (name) => {
  return new Promise((resolve, reject) => {
    Entity.remove({ name: name }, (err, entity) => {
      if (err || _.isNil(entity)) {
        res = _.merge(new Response(), {
          message: 'remove fail due to: ' + JSON.stringify(err)
        });
      }
      res.message = 'remove all items named: ' + name;
      resolve();
    });
  });
};

module.exports = handleDeleteEntity;

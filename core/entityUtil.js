/**
 * entityUtil.js
 *
 * process entity data
 */

const _ = require('ramda');

const fn = {};

fn.removeIds = (entityList) => {
  return _.forEach(fn.omitId, entityList);
}

fn.omitId = (obj) => {
  return _.omit(['_id', obj]);
}

moudle.exports = fn;

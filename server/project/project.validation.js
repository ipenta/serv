const Joi = require('joi');
/**
 * 检测项目 信息
 */
module.exports = {
  project: {
    body: {
      name: Joi.string().required(),
      entities: Joi.array().required()
    }
  }
};

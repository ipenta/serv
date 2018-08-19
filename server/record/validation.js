const Joi = require('joi');
/**
 * 单位信息(type:施工，监理，建设，监察)
 */

module.exports = {
  model: {
    body: {
      uid: Joi.string().required(),
      title: Joi.string().required(),
      project: Joi.object().keys({
        _id: Joi.string(),
        name: Joi.string(),
        owner: Joi.object().keys({
          _id: Joi.string(),
          name: Joi.string()
        }),
        builder: Joi.object().keys({
          _id: Joi.string(),
          name: Joi.string()
        }),
        designer: Joi.object().keys({
          _id: Joi.string(),
          name: Joi.string()
        }),
        supervisor: Joi.object().keys({
          _id: Joi.string(),
          name: Joi.string()
        })
      }),
      entity: Joi.object().keys({
        _id: Joi.string(),
        name: Joi.string()
      }),
      principal: Joi.object().keys({
        _id: Joi.string(),
        name: Joi.string(),
        phonenum: Joi.string()
      })
    }
  }
};

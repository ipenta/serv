const Joi = require('joi');
/**
 * 单位信息(type:施工，监理，建设，监察)
 */

module.exports = {
  model: {
    body: {
      recordId: Joi.string().required(),
      number: Joi.number().required(),
      manufacturer: Joi.string().required(),
      inspection: Joi.object().keys({
        text: Joi.string().required(),
        type: Joi.string().required(),
        price: Joi.string().required(),
        methods: Joi.array().items(Joi.string())
      })
    }
  }
};

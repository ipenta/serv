const Joi = require('joi');
const cert = require('fs').readFileSync(require('path').join(__dirname,'./sercet/private.key'));
require('dotenv').config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: Joi.number().default(9527),
  API_PREFIX: Joi.string().default('/v1/api')
}).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwtSecret: cert,
  apiPrefix: envVars.API_PREFIX,
  root: process.cwd()
};

module.exports = config;

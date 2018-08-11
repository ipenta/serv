const Joi = require('joi');
const cert = require('fs').readFileSync(require('path').join(__dirname,'./sercet/private.key'));
require('dotenv').config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: Joi.number().default(9527),
  API_PREFIX: Joi.string().default('/api'),
  MONGO_HOST: Joi.string().required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number()
    .default(27017)
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
  root: process.cwd(),
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT
  }
};

module.exports = config;

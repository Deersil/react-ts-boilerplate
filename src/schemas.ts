import authSchemas from './containers/Auth/api/schemas';
import * as Ajv from 'ajv';
import * as _ from 'lodash';

const ajv = new Ajv({ removeAdditional: true });

const allSchemas = {
  ...authSchemas,
};
const compiledSchemas = _.mapValues(allSchemas, value => ajv.compile(value));

export default compiledSchemas;

import { API, METHODS, SCHEMAS } from '@constants';

export const commonLoginSchema = {
  type: 'object',
  required: ['token'],
  properties: {
    token: { type: 'string' },
  },
  additionalProperties: false,
};

export default {
  [`${API.LOGIN}${SCHEMAS.REQUEST}${METHODS.POST}`]: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
    additionalProperties: false,
  },
  [`${API.LOGIN}${SCHEMAS.RESPONSE}${METHODS.POST}`]: commonLoginSchema,
  [`${API.REGISTRATION}${SCHEMAS.REQUEST}${METHODS.POST}`]: {
    type: 'object',
    required: ['email', 'password', 'firstName', 'lastName'],
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
      firstName: { type: 'string' },
      lastName: { type: 'string' },
    },
    additionalProperties: false,
  },
  [`${API.REGISTRATION}${SCHEMAS.RESPONSE}${METHODS.POST}`]: commonLoginSchema,
};

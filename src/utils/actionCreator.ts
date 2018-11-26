import { createAction } from 'redux-act';
/**
 * Creates action object
 *
 * @param  {string} moduleName A name of the module
 *
 * @return {function} A function that receives action name as a string and returns actions
 */

interface IActions {
  cancel: any,
  failure: any,
  request: any,
  success: any,
}

export const createAsyncAction = (type: string, payloadCreators?:IActions, metaCreators?: IActions): IActions => ({
  // cancel: createAction(type + '::CANCEL', payloadCreators.cancel, metaCreators.cancel),
  // failure: createAction(type + '::FAILURE', payloadCreators.failure, metaCreators.failure),
  // request: createAction(type + '::REQUEST', payloadCreators.request, metaCreators.request),
  // success: createAction(type + '::SUCCESS', payloadCreators.success, metaCreators.success),
  cancel: createAction(type + '::CANCEL'),
  failure: createAction(type + '::FAILURE'),
  request: createAction(type + '::REQUEST'),
  success: createAction(type + '::SUCCESS'),
});

export default (prefix: string) => (type: string, ...args: any) => createAsyncAction(`${prefix}:${type}`, ...args);

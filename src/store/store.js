import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import freeze from 'redux-freeze';
import createSagaMiddleware from 'redux-saga';
import appSagas from './saga';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
let middleware;
let composer;

if (process.env.NODE_ENV === 'development') {
  middleware = [freeze, sagaMiddleware];
  composer = composeWithDevTools;
} else {
  middleware = [sagaMiddleware];
  composer = compose;
}
export default function configureStore() {
  const store = createStore(rootReducer, undefined, composer(applyMiddleware(...middleware)));

  sagaMiddleware.run(appSagas);

  if (module.hot) {
    module.hot.accept(() => store.replaceReducer(rootReducer));
  }

  return { store };
}

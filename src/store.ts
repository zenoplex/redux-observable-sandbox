import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './rootEpic';
import { reducer as form } from 'redux-form';
import { FormActions } from './modules/form/actions';
import * as env from './env';

export type ReduxAction = FormActions;
export type ReduxState = {
  form: any,
}

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
const epicMiddleware = createEpicMiddleware(rootEpic);
const defaultState = {};
const store = createStore(
  combineReducers({ form }),
  defaultState,
  compose(
    applyMiddleware(epicMiddleware),
    env.nodeEnv === 'development' && __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
  ,)
);
export default store;
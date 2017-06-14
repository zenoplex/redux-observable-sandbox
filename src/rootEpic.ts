import { combineEpics } from 'redux-observable';
import * as form from './modules/form/epics';

export const rootEpic = combineEpics(
  form.epics,
);


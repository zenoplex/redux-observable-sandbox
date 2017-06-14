import 'rxjs'
import { combineEpics, Epic } from 'redux-observable';
import { startSubmit, stopSubmit } from 'redux-form';
import { SUBMIT, SET_FORM, setFormAction, SubmitAction, SetFormAction } from './actions';
import { ReduxState } from '../../store';

const submitEpic: Epic<SubmitAction | SetFormAction, ReduxState>
= action$ => action$
  .ofType(SUBMIT)
  .delay(5000)
  .do(console.log)
  .map(action => setFormAction(action.data))

const startEpic: Epic<SubmitAction, ReduxState>
= action$ => action$
  .ofType(SUBMIT)
  .mapTo(startSubmit('name'));

const setFormEpic: Epic<SetFormAction, ReduxState>
= action$ => action$
  .ofType(SET_FORM)
  .do(console.log)
  .mapTo(stopSubmit('name'));

export const epics = combineEpics(
  submitEpic,
  startEpic,
  setFormEpic,
);
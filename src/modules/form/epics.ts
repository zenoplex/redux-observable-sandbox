import 'rxjs'
import { combineEpics, Epic } from 'redux-observable';
import { SUBMIT, SubmitAction } from './actions';
import { ReduxState } from '../../store';

const submitEpic: Epic<SubmitAction, ReduxState>
= action$ => action$
  .ofType(SUBMIT)
  .do(console.log)
  .mapTo({ type: 'TEST' })


export const epics = combineEpics(
  submitEpic,
);
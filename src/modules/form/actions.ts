import { Action } from 'redux';

export const SUBMIT = 'form/SUBMIT';

export interface SubmitAction extends Action {
  type: typeof SUBMIT;
}

export type FormActions = SubmitAction;

export const submit: () => SubmitAction
= () => ({ type: SUBMIT });
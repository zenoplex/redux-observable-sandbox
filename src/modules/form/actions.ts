import { Action } from 'redux';

export const SUBMIT = 'form/SUBMIT';
export const SET_FORM = 'form/SET_FORM';

export interface FormData {
  lastName: string,
  firstName: string,
}

export interface SubmitAction extends Action {
  type: typeof SUBMIT;
  data: FormData;
}

export interface SetFormAction extends Action {
  type: typeof SET_FORM;
  data: FormData;
}

export type FormActions = SubmitAction | SetFormAction;

export const submit: (_: FormData) => SubmitAction
= (data) => ({ type: SUBMIT, data });

export const setFormAction: (_: FormData) => SetFormAction
= (data) => ({ type: SET_FORM, data });
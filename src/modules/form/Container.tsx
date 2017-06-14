import { compose, withHandlers } from 'recompose';
import { connect, Dispatch } from 'react-redux';
import * as ReduxForm from 'redux-form';
import { Form } from './Form';
import { submit, FormData, SubmitAction } from './actions';
import { ReduxAction } from '../../store';

export const Container = compose(
  ReduxForm.reduxForm({
    form: 'name',
    fields: [
      'firstName',
      'lastName',
    ],
  }),
  connect(),
  withHandlers({
    onSubmit: ({ dispatch, handleSubmit }) => (e: Event) => {
      const fn: (_: FormData) => Dispatch<SubmitAction>
      = (data) => dispatch(submit(data));

      return handleSubmit(fn)(e);
    },
  }),
)(Form);
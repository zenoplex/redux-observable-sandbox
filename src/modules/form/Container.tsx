import { compose, withHandlers } from 'recompose';
import { connect, Dispatch } from 'react-redux';
import * as ReduxForm from 'redux-form';
import { Form } from './Form';
import { submit } from './actions';
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
    onClick: ({ dispatch }) => (e: Event) => dispatch(submit()),
  }),
)(Form);
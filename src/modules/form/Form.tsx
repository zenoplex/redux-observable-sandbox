import * as React from 'react';
import * as ReduxForm from 'redux-form';

interface Props extends ReduxForm.ReduxFormProps<any> {
  fields: {
    firstName: ReduxForm.FieldProp<string>,
    lastName: ReduxForm.FieldProp<string>,
  },
  onSubmit: () => void, 
}

export const Form: React.SFC<Props> 
= ({ fields, onSubmit, submitting }) =>
    <form onSubmit={onSubmit}>
      <fieldset disabled={submitting}>
        <input type="text" {...fields.firstName} />
        <input type="text" {...fields.lastName} />
        <button type="submit">submit</button>
      </fieldset>
    </form>;
  
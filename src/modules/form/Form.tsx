import * as React from 'react';
import * as ReduxForm from 'redux-form';

interface Props extends ReduxForm.ReduxFormProps<any> {
  fields: {
    firstName: ReduxForm.FieldProp<string>,
    lastName: ReduxForm.FieldProp<string>,
  },
  onClick: () => void, 
}

export const Form: React.SFC<Props> 
= ({ fields, onClick }) =>
    <form>
      <input type="text" {...fields.firstName} />
      <input type="text" {...fields.lastName} />
      <button type="button" onClick={onClick}>submit</button>
    </form>;
  
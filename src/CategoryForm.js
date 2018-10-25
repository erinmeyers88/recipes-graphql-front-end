import React from 'react';
import {Form, Button, Modal} from 'semantic-ui-react';

const CategoryForm = ({form, closeForm, updateForm, categories, saveCategory, clearCategory, title}) => {
  return <Modal open>
    <Modal.Header>{title} Category</Modal.Header>
    <Modal.Content>
      <Form style={{height: '100%'}}>
        <Form.Input name="name" value={form.name} label="Category Name" onChange={(e, data) => updateForm(data)}/>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => {closeForm(); clearCategory();}}>Cancel</Button>
      <Button onClick={saveCategory({
        variables: {name: form.name, id: form.id ? form.id : null}
      })}>Submit</Button>
    </Modal.Actions>
  </Modal>
};

export default CategoryForm;
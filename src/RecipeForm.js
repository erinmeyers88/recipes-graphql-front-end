import React from 'react';
import {Form, Button, Modal} from 'semantic-ui-react';

const RecipeForm = ({form, closeForm, updateForm, categories, addRecipe}) => {

  const options = [];

  categories.map(cat => options.push({text: cat.name, value: cat.id, key: cat.id}));

  return <Modal open>
    <Modal.Header>Recipe</Modal.Header>
    <Modal.Content>
      <Form style={{height: '100%'}}>
        <Form.Input name="title" value={form.title} label="Title" onChange={(e, data) => updateForm(data)}/>
        <Form.Input name="ingredients" value={form.ingredients} label="Ingredients"
                    onChange={(e, data) => updateForm(data)}/>
        <Form.Input name="instructions" value={form.instructions} label="Instructions"
                    onChange={(e, data) => updateForm(data)}/>
        <Form.Select name="categoryId" value={form.categoryId} options={options} label="Category"
                     onChange={(e, data) => updateForm(data)}/>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={closeForm}>Cancel</Button>
      <Button onClick={() => addRecipe({
        variables: {...form}
      })}>Submit</Button>
    </Modal.Actions>
  </Modal>

};

export default RecipeForm;

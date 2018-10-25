import React from 'react';
import {Card, Button} from 'semantic-ui-react';

const Recipe = ({recipe, openDelete, hideDelete, selectRecipe, hideEdit, openEdit}) => {

  return <Card fluid>
    <Card.Content>
      <Card.Header>{recipe.title}</Card.Header>
      <Card.Meta>{recipe.category}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Card.Header textAlign="left">Ingredients</Card.Header>
      {recipe.ingredients}
    </Card.Content>
    <Card.Content extra>
      <Card.Header textAlign="left"> Instructions</Card.Header>
      {recipe.instructions}
    </Card.Content>
    <Card.Content extra>
      {!hideDelete && <Button icon="trash" onClick={() => {selectRecipe(recipe
      ); openDelete(); }}/>}
      {!hideEdit && <Button icon="pencil" onClick={() => {selectRecipe(recipe
      ); openEdit(); }}/>}
    </Card.Content>
  </Card>
};

export default Recipe;

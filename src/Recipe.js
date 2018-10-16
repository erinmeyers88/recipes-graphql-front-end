import React from 'react';
import {Card} from 'semantic-ui-react';

const Recipe = ({title, ingredients, instructions, category}) =>  {

  return <Card fluid>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{category}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Card.Header textAlign="left">Ingredients</Card.Header>
      {ingredients}
    </Card.Content>
    <Card.Content extra>
      <Card.Header textAlign="left"> Instructions</Card.Header>
      {instructions}
    </Card.Content>
</Card>};

export default Recipe;

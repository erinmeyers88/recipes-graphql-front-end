import React from 'react';
import {Card, Tab} from 'semantic-ui-react';

const Recipe = ({title, ingredients, instructions, category}) =>  {
  console.log('ingred', ingredients);

  const panes = [
    { menuItem: 'Photo', render: () => <Tab.Pane key={1}>Picture</Tab.Pane> },
    { menuItem: 'Ingredients', render: () => <Tab.Pane key={2}>{ingredients}</Tab.Pane> },
    { menuItem: 'Instructions', render: () => <Tab.Pane key={3}>{instructions}</Tab.Pane> },
  ];

  return <Card header={title}>
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

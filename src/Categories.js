import React, {Component} from 'react'
import {Tab} from 'semantic-ui-react';
import Recipes from './Recipes';

class Categories extends Component {

  render() {

    const panes = [];

    this.props.categories.map(category => panes.push({
      menuItem: category.name,
      render: () => <Tab.Pane style={{height: 400, overflowY: 'auto'}}>
        <Recipes
          openDeleteRecipeModal={this.props.openDeleteRecipeModal}
          selectRecipe={this.props.selectRecipe}
          recipes={category.recipes}
          openEditRecipeModal={this.props.openEditRecipeModal}
        />
      </Tab.Pane>
    }));

    return <Tab panes={panes} style={{width: 700}}/>;
  }
}


export default Categories;


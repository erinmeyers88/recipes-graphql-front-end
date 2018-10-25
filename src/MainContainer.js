import React, {Component} from 'react'
import {Query} from 'react-apollo';
import {Loader, Dimmer, Button, Icon, Header, Sidebar} from 'semantic-ui-react';
import Categories from "./Categories";
import AddRecipe from './AddRecipe';
import {CATEGORIES_QUERY} from "./queries";
import DeleteRecipe from "./DeleteRecipe";
import EditRecipe from './EditRecipe';

const emptyRecipe = {
  title: '',
  ingredients: '',
  instructions: '',
  categoryId: null
};

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: emptyRecipe
    };
  }

  updateForm({name, value}) {
    this.setState({
      recipe: {
        ...this.state.recipe,
        [name]: value
      }
    });
  }

  clearRecipe() {
    this.setState({
      recipe: emptyRecipe
    })
  }

  selectRecipe(recipe) {
    this.setState({
      recipe: recipe
    });
  }

  render() {
    return <Query query={CATEGORIES_QUERY}>
      {({loading, error, data}) => {
        if (!loading && data) {

          return   <Sidebar.Pusher>
            <Button onClick={this.props.openSidebar} icon="bars"/>
            <Header as='h2' icon textAlign='center'>
              <Icon name='folder'/>
              Recipes
              <Header.Subheader>Save different categories of recipes.</Header.Subheader>
            </Header>
            <div style={{display: 'flex', justifyContent: 'center', padding: 50}}>
              <Categories
                categories={data.Categories}
                openDeleteRecipeModal={this.props.openDeleteRecipeModal}
                selectRecipe={this.selectRecipe.bind(this)}
                openEditRecipeModal={this.props.openEditRecipeModal}
              />
            </div>
            {this.props.addRecipeModalShown && <AddRecipe
              categories={data.Categories}
              close={this.props.closeAddRecipeModal}
              form={this.state.recipe}
              updateForm={this.updateForm.bind(this)}
              clearRecipe={this.clearRecipe.bind(this)}
            />}
            {this.props.editRecipeModalShown && <EditRecipe
              categories={data.Categories}
              close={this.props.closeEditRecipeModal}
              form={this.state.recipe}
              updateForm={this.updateForm.bind(this)}
              clearRecipe={this.clearRecipe.bind(this)}
            />}
            {this.props.deleteRecipeModalShown && <DeleteRecipe
              close={this.props.closeDeleteRecipeModal}
              recipe={this.state.recipe}
              clearRecipe={this.clearRecipe.bind(this)}
            />}

          </Sidebar.Pusher>
        } else {
          return <Dimmer active inverted><Loader/></Dimmer>
        }
      }}
    </Query>;
  }
}


export default MainContainer;

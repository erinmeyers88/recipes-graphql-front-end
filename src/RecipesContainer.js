import React, {Component} from 'react'
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Loader, Dimmer, Button, Icon, Header, Sidebar} from 'semantic-ui-react';
import Categories from "./Categories";
import RecipeForm from "./RecipeForm";

const CATEGORIES_QUERY = gql`
    {
        Categories {
            name
            id
            recipes {
                title
                ingredients
                instructions
            }
        }
    }
`;

class RecipesContainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        title: '',
        ingredients: '',
        instructions: '',
        categoryId: null
      }
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

  render() {
    return <Query query={CATEGORIES_QUERY}>
      {({loading, error, data}) => {
        if (!loading && data) {

          return   <Sidebar.Pusher>
            <Button onClick={this.props.showSidebar} icon="bars"/>
            <Header as='h2' icon textAlign='center'>
              <Icon name='folder'/>
              Recipes
              <Header.Subheader>Save different categories of recipes.</Header.Subheader>
            </Header>
            <div style={{display: 'flex', justifyContent: 'center', padding: 50}}>
              <Categories categories={data.Categories}/>
            </div>
            {this.props.formShown && <RecipeForm categories={data.Categories} closeForm={this.props.hideForm} open={this.props.formShown} form={this.state.recipe} updateForm={this.updateForm.bind(this)}/>}
          </Sidebar.Pusher>


        } else {
          return <Dimmer active inverted><Loader/></Dimmer>
        }
      }}
    </Query>;
  }
}


export default RecipesContainer;

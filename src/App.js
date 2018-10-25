import React, {Component} from 'react';
import {Icon, Sidebar, Menu} from "semantic-ui-react";
import MainContainer from './MainContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addRecipeModalShown: false,
      sidebarShown: false,
      deleteRecipeModalShown: false,
      editRecipeModalShown: false
    };
  }

  openAddRecipeModal() {
    this.setState({addRecipeModalShown: true});
  }

  closeAddRecipeModal() {
    this.setState({addRecipeModalShown: false});
  }

  openSidebar() {
    this.setState({sidebarShown: true});
  }

  closeSidebar() {
    this.setState({sidebarShown: false});
  }

  openDeleteRecipeModal() {
    this.setState({deleteRecipeModalShown: true});
  }

  closeDeleteRecipeModal() {
    this.setState({deleteRecipeModalShown: false});
  }

  openEditRecipeModal() {
    this.setState({editRecipeModalShown: true});
  }

  closeEditRecipeModal() {
    this.setState({editRecipeModalShown: false});
  }

  render() {
    console.log('render app');
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.closeSidebar.bind(this)}
          vertical
          visible={this.state.sidebarShown}
          width='thin'
        >
          <Menu.Item onClick={this.openAddRecipeModal.bind(this)}>
            <Icon name='plus'/>
            Add Recipe
          </Menu.Item>
        </Sidebar>
        <MainContainer
          openSidebar={this.openSidebar.bind(this)}
          openAddRecipeModal={this.openAddRecipeModal.bind(this)}
          closeAddRecipeModal={this.closeAddRecipeModal.bind(this)}
          addRecipeModalShown={this.state.addRecipeModalShown}
          openDeleteRecipeModal={this.openDeleteRecipeModal.bind(this)}
          closeDeleteRecipeModal={this.closeDeleteRecipeModal.bind(this)}
          deleteRecipeModalShown={this.state.deleteRecipeModalShown}
          openEditRecipeModal={this.openEditRecipeModal.bind(this)}
          closeEditRecipeModal={this.closeEditRecipeModal.bind(this)}
          editRecipeModalShown={this.state.editRecipeModalShown}
        />
      </Sidebar.Pushable>
    );
  }
}

export default App;

import React, { Component } from 'react';
import LinkedInput from './components/LinkedInput.jsx';
import './App.css';

class App extends Component {
  

  state = {
    selectedModel: 1,
    childModelSelected: false
  };

  loadData() {
    var data = require('./data.json');
    Object.assign(this.state, data);
  }

  componentWillMount() {
    this.loadData();
  }

  onLinkedInputChange = (linkedState) => {
    this.setState({
      selectedModel: linkedState.selectedID,
      childModelSelected: typeof linkedState.selectedChild === 'number'
    });
  }

  render() {
    let model = this.state.models.find((model) => {
      return model.id === this.state.selectedModel
    });

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World!!!</h1>
        <LinkedInput 
          name="models"
          models={this.state.models}
          onChange={this.onLinkedInputChange} 
        />
        <p>{model ? 'You have selected ' + model.name : 'Nothing selected'}</p>
      </div>
      
    );
  }
}

export default App;

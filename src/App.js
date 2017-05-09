import React, { Component } from 'react';
import LinkedInput from './components/LinkedInput.jsx';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './App.css';

class App extends Component {
  

  state = {
    selectedModel: 1,
    childModelSelected: false,
    selectedLength: false
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

  onLengthChange = (e) => {
    let value = e.value;
    this.setState({
      selectedLength: value
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
          parentPlaceholder={"Select Make ..."}
          childPlaceholder={"Select Model ..."}
        />
        <p>{model ? 'You have selected ' + model.name : 'Nothing selected'}</p>
        <Select
          name="lengths"
          value={this.state.childModelSelected ? false : this.state.selectedLength}
          options={this.state.lengths}
          onChange={this.onLengthChange}
          disabled={this.state.childModelSelected}
          placeholder="Select Lengths ..."
        />
      </div>
      
    );
  }
}

export default App;

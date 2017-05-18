import React, { Component } from 'react';
import LinkedInput from './components/LinkedInput.jsx';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './App.css';

class App extends Component {
  

  state = {
    selectedModel: false,
    childModelSelected: false,
    selectedLength: false,
    selectedPrice: false,
    formQuery: {
      model: false,
      length: false,
      price: false
    }
  };

  loadData() {
    let data = require('./data.json');
    Object.assign(this.state, data);
  }

  componentWillMount() {
    this.loadData();
  }

  getSlug(id) {
    let model = this.state.models.find(function(model){
      return model.id === id;
    });
    return model ? model.slug : false;
    
  }

  onLinkedInputChange = (linkedState) => {
    let childSelected = typeof linkedState.selectedChild === 'number';
    this.setState({
      selectedModel: linkedState.selectedID,
      childModelSelected: childSelected,
      selectedLength: childSelected ? false : this.state.selectedLength,
      formQuery: {
        ...this.state.formQuery,
        model: this.getSlug(linkedState.selectedID)
      }
    });
  }

  onLengthChange = (e) => {
    let value = e.value;
    this.setState({
      selectedLength: value,
      formQuery: {
        ...this.state.formQuery,
        length: value
      }
    });
  }

  onPriceChange = (e) => {
    let value = e.value;
    this.setState({
      selectedPrice: value,
      formQuery: {
        ...this.state.formQuery,
        price: value
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let queryString = '';
    let formQuery = this.state.formQuery;
    let firstRun = true;
    for (var key in formQuery) {
      if(formQuery[key]) {
        let mod = firstRun ? '?' : '&';
        queryString += `${mod}${key}=${formQuery[key]}`;
        firstRun = false;
      }
    }
    window.location = `http://www.sunseekerbrokerage.com/search/${queryString}`;
  }

  render() {
    let model = this.state.models.find((model) => {
      return model.id === this.state.selectedModel
    });

    return (
      <form onSubmit={this.onSubmit} action="" style={{textAlign: 'center'}}>
        <h1>Hello World!!!</h1>
        <LinkedInput 
          name="models"
          models={this.state.models}
          onChange={this.onLinkedInputChange}
          parentPlaceholder={"Select Make ..."}
          childPlaceholder={"Select Model ..."}
        />
        <Select
          name="lengths"
          value={this.state.childModelSelected ? false : this.state.selectedLength}
          options={this.state.lengths}
          onChange={this.onLengthChange}
          disabled={this.state.childModelSelected}
          placeholder="Select Length ..."
        />
        <Select 
          name="prices"
          value={this.state.selectedPrice}
          options={this.state.prices}
          onChange={this.onPriceChange}
          placeholder="Select Price ..."
        />
        <input type="hidden" value={this.state.formQuery} />
        <button type="submit">Search</button>
        <p>{model ? 'You have selected ' + model.name : 'Nothing selected'}</p>
      </form>
      
    );
  }
}

export default App;

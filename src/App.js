import React, { Component } from 'react';
import LinkedInput from './components/LinkedInput.jsx';
import './App.css';

class App extends Component {
  state = {
    selectedModel: 1,
    models: [
      {
        "id": 1,
        "slug": "est",
				"name": "Est",
        "parent": 0
      },
      {
        "id": 2,
        "slug": "commodo",
				"name": "Commodo",
        "parent": 1
      },
      {
        "id": 3,
        "slug": "esse",
				"name": "Esse",
        "parent": 1
      },
      {
        "id": 4,
        "slug": "occaecat",
				"name": "Occaecat",
        "parent": 1
      },
      {
        "id": 5,
        "slug": "aliquip",
				"name": "Aliquip",
        "parent": 0
      },
      {
        "id": 6,
        "slug": "eiusmod",
				"name": "Eiusmod",
        "parent": 5
      },
      {
        "id": 7,
        "slug": "fugiat",
				"name": "Fugiat",
        "parent": 5
      },
      {
        "id": 8,
        "slug": "consequat",
				"name": "Consequat",
        "parent": 0
      },
      {
        "id": 9,
        "slug": "reprehenderit",
				"name": "Reprehenderit",
        "parent": 8
      },
      {
        "id": 10,
        "slug": "id",
				"name": "Id",
        "parent": 8
      },
      {
        "id": 11,
        "slug": "cupidatat",
				"name": "Cupidatat",
        "parent": 8
      },
      {
        "id": 12,
        "slug": "sit",
				"name": "Sit",
        "parent": 8
      },
      {
        "id": 13,
        "slug": "do",
				"name": "Do",
        "parent": 0
      },
      {
        "id": 14,
        "slug": "minim",
				"name": "Minim",
        "parent": 13
      },
      {
        "id": 15,
        "slug": "dolor",
				"name": "Dolor",
        "parent": 13
      },
      {
        "id": 16,
        "slug": "consequat",
				"name": "Consequat",
        "parent": 13
      },
      {
        "id": 17,
        "slug": "irure",
				"name": "Irure",
        "parent": 13
      },
      {
        "id": 18,
        "slug": "esse",
				"name": "Esse",
        "parent": 0
      },
      {
        "id": 19,
        "slug": "enim",
				"name": "Enim",
        "parent": 18
      },
      {
        "id": 20,
        "slug": "mollit",
				"name": "Mollit",
        "parent": 18
      }
    ]
  };

  onLinkedInputChange = (selectedID) => {
    this.setState({
      selectedModel: selectedID
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

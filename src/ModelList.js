import React, { Component } from "react";
import axios from "axios";
/*Todo: get model list on load*/

export default class ModelList extends Component {
  constructor(){
    super();
    this.getModelList();
    this.state = {
      modelList : ["mode1", "mode2"]
    };
  }
  
  componentWillMount() {
    this.getModelList();
  }

  async getModelList(){
    //todo get correct address
    //const url = "https://web.postman.co/workspace/My-Workspace~076459d7-21a1-40e1-8d17-361d875d27c3/mock/8b3f52ef-6c19-40ab-8c35-74485711f436";
    const url = "https://sim-new-test.eastus.azurecontainer.io/C3mSim/Model"
    axios.get(url)
      .then(response => this.setState({
        //modelList : response
      }));
  }

  handleRadioChange(event){
    alert(event.target.value);
  }

  render() {
    return (
        <div 
          class = 'bordered-content'
          onChange={this.handleRadioChange} 
        >
            {this.state.modelList.map(model => (
              <React.Fragment>
              <input
                type="radio"
                name="model-list-item"
                value={model}
               />
                <label>{model}</label>
                <br/>
                </React.Fragment>
            ))}
        </div>
    );
  }
}
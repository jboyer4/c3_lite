import React, { Component } from "react";
import axios from "axios";
/*Todo: get model list on load*/

export default class ModelList extends Component {
  constructor(props){
    super(props);
    this.getModelList();
    this.state = {
      modelList : ["model1", "model2", "model3"]
    };
  }
  
  componentWillMount() {
    this.getModelList();
  }

  async getModelList(){
    axios.get(`http://c3m-sim-service.eastus.azurecontainer.io/C3mSim/Model/`)
      .then(response => {
        console.log(response);
        //this.setState({
        //modelList : response
        //}); 
     })
  };

  handleRadioChange = (event) => {
    this.props.radioChange(event.target.value);
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
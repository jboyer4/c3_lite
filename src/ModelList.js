import React, { Component } from "react";

/*Todo: get model list on load*/

export default class ModelList extends Component {
  state = {
    modelList : ['model1', 'model2', 'model3']
  };

  render() {
    return (
        <div class = 'bordered-content'>
          {this.state.modelList.map(model => (
            <li className="model-list-item">
              {model}
            </li>
          ))}
        </div>
    );
  }
}
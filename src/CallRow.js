import React from 'react';
import axios from "axios";

import './App.css';
import CallFileUploader from './FileUploader';
//Checks https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/

export let fullAudit = false;
//const baseURL = "https://web.postman.co/workspace/My-Workspace~076459d7-21a1-40e1-8d17-361d875d27c3/mock/8b3f52ef-6c19-40ab-8c35-74485711f436";


export default function CallRow({model}){
    const baseURL = "https://sim-new-test.eastus.azurecontainer.io/"
    let callFile = '';
    
    const runSimulation = () => {
        alert("Model: " + model + "\nCall: " + callFile)
        if(!model){
            alert('Please select a model to use');
            return;
        }
        if(!callFile){
            alert('Please upload a call file to use');
            return;
        }
        //todo: correct params
        const headers = {
            'file-name': callFile,
            'model-name': model
        }
        const url = baseURL+"C3mSim/Simulations";
        axios.get(url, {headers: headers});
    }
    const setCallFile = (file) => {
        callFile = file;
    }

    return(
        <div class='content_row'>
            <button class='run' onClick={runSimulation}>Run</button>
            <CallFileUploader passCallFile = {setCallFile}/>
        </div>
    );
}
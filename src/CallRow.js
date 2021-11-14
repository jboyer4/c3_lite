import React from 'react';
import axios from "axios";

import './App.css';
import CallFileUploader from './FileUploader';
//Checks https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/

export let fullAudit = false;
const baseURL = "https://web.postman.co/workspace/My-Workspace~076459d7-21a1-40e1-8d17-361d875d27c3/mock/8b3f52ef-6c19-40ab-8c35-74485711f436";

function runSimulation(){
    const params = {
        'Calls-Path': 'C:\\_coelo\\Code3Sim\\config\\CallFiles\\C3oTestCalls.txt',
        'Model-Path': 'C:\\_coelo\\Code3Sim\\config\\Sims\\SAF_20012-B\\SimConfig.xml'
    }
    const url = baseURL+"\\results";
    axios.get(url, {params});

}

export default function CallRow(){
    return(
        <div class='content_row'>
            <button class='run' onClick={runSimulation}>Run</button>
            <CallFileUploader />
        </div>
    );
}
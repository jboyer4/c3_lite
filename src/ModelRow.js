import React from 'react';
import c3Image from './images/c3.gif'
import help from './images/help.svg'
import ModelList from './ModelList';
import './App.css';

export default function ModelRow(){
    return(
        <div class='content_row'>
            <img src={c3Image} class='left-vertical'alt="code3" />
            <div class = 'models'>
                <div class = 'title'>
                    <div>Models</div>
                    <img src={help} class = 'help-icon' alt='help'/>
                </div>
                <ModelList/>
            </div>
        </div>
    );
} 
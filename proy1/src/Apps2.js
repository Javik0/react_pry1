import React from 'react';
import './App.css';
import practi1 from './datos/practic1.json';
import Elementos from './componentes/elementos';

class App2 extends React.Component{

    state = {
        practic1:practi1
    }
    render (){
        return<div>
            <Elementos practic1={this.state.practic1}/>
            </div>
    }
}
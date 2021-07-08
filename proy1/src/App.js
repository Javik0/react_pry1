import React from 'react';
import './App.css';
import primer from './imgs/react1.jpg';
import segundo from './imgs/react2.png';
import tercero from './imgs/react3.jpg';
//import practic1 from '.datos/prectic1.json';

class CambiarImagenUno extends React.Component {

  state={
    bandera : true
  }
  imagenUno = ()=>{
    this.setState({bandera:!this.state.bandera});
  }

  imagenDos = ()=>{
    this.setState({bandera:!this.state.bandera});
  }
  render(){
    if(this.state.bandera){
      return (<div>
        <button onClick={this.imagenUno} >Imagen Uno</button></div>
      )
    }else{
      return <div><h1><img src={primer}></img></h1><button onClick={this.imagenUno} >Imagen Uno</button></div>
    }
  }
}


class CambiarImagenDos extends React.Component {

  state={
    bandera : true
  }
  imagenDos = ()=>{
    this.setState({bandera:!this.state.bandera});
  }
  render(){
    if(this.state.bandera){
      return (<div>
        <button onClick={this.imagenDos} >Imagen Dos</button></div>
      )
    }else{
      return <div><h1><img src={segundo}></img></h1><button onClick={this.imagenDos} >Imagen Dos</button></div>
    }
  }
}

class CambiarImagenTres extends React.Component {

  state={
    bandera : true
  }
  imagenTres = ()=>{
    this.setState({bandera:!this.state.bandera});
  }
  render(){
    if(this.state.bandera){
      return (<div>
        <button onClick={this.imagenTres} >Imagen Tres</button></div>
      )
    }else{
      return <div><h1><img src={tercero}></img></h1><button onClick={this.imagenTres} >Imagen Tres</button></div>
    }
  }
}


function App() {
  return (
  <div id="principal">
    <h1 id="imagenUno" > 
      <CambiarImagenUno/>
      <CambiarImagenDos/>
      <CambiarImagenTres/>
      
    </h1>
   
  </div>);
}


export default App;
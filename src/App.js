import React from 'react';
import './App.css';
import Box from './box/box.js'


class App extends React.Component {
  state ={
    data: [],
  } 
    
  
  _add = () => {
    
    let  data  = this.state.data;
    let newData = [...data, 0]
    console.log(newData)
    this.setState({ 
      data : newData,

     });
  }
  sumar = (index) =>  {
    const newList = this.state.data.map((item, i) => {
      if ( index === i){
        return item + 1
      }
      return item 
    })
    this.setState({
      data : newList
    })
  }
  restar = (index) =>  {
    const newList = this.state.data.map((item, i) => {
      if ( index === i){
        return item - 1
      }
      return item 
    })
    this.setState({
      data : newList
    })
  } 
  removeBox = (index) => {
    const newList = this.state.data.filter((item, i) => {
      return index !== i
    })
    this.setState({
      data: newList
    })
  }
  
  render(){
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1>Alumno</h1>
            <h4>Franco Ottaviani</h4>
            <button className="btn" onClick={this._add}>
              Agregar Contador
            </button>
          </div>
          <div>
            <h2>Contadores</h2>
            {this.state.data.map ((item, index) => { 

              return (<Box  key={index}
                            index={index}
                            number={item} 
                            removeBox={this.removeBox} 
                            sumar = {this.sumar} 
                            restar = {this.restar}
                      />)})}
          </div>
            
        </header>
      </div>
    )

  }
}

export default App;

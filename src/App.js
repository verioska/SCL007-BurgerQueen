import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';
import {menu} from './menu.json';



class App extends Component {
  constructor(){
    super();
    this.state={
      menu:menu,
      items: '',
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState({
      items: newItem,
      text: ''
    });
  }

  render() {
    const arr=[]
    for(let i in this.state.menu){
      arr.push(this.state.menu[i])
  }

  const info=arr[0].map((e)=>{
    return(
      <div >
        <button>
          {e.tipo}
          {e.precio}
        </button>
      </div>
    )
  })

    return (
      <div className="App">
        <div className="Screen1"> 
          <h1>Garzon</h1>
            <Name
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            items={this.state.items}
            text={this.state.text}/>
          <div className="button" >
            {info}
          </div>
        </div>
    
          <div className="Screen2">
            <h1>Cocina</h1>
            <p>{this.state.items.text}</p>
          </div>
      </div>
    );
  }
}

export default App; 

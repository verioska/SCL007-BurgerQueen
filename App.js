import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';
import Breakfast from './components/Breakfast';
import ButtonDay from './components/ButtonDay';
import {menu} from './Json/menu.json';
import {menuDay} from './Json/menuDay.json';

            

class App extends Component {
  constructor(){
    super();
    this.state={
      menu:menu,
      menuDay:menuDay,
      items: '',
      text: '',
      buttonBreakfast:false,
      buttonDay:false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.breakfastfunction=this.breakfastfunction.bind(this);
    this.menuDayfunction=this.menuDayfunction.bind(this);
  }
  
  breakfastfunction(){
    this.setState({
      ...this.state,
      buttonBreakfast:true,
      buttonDay:false,
    })
  }

  menuDayfunction(){
    this.setState({
      ...this.state,
      buttonDay:true,
      buttonBreakfast:false,
    })
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
  //Para imprimir el menu del desayuno
    const arr=[]
    for(let i in this.state.menu){
      arr.push(this.state.menu[i])
    }
    
    const info=arr[0].map((e)=>{
      return(
        <div >
          <button>
            {e.tipo + " "}
            {e.precio + " "}
          </button>
        </div>
      )
    })
 
  //Para imprimir el menu del dia
  const arrDay=[]
  for(let i in this.state.menuDay){
    arrDay.push(this.state.menuDay[i])
  }

  const infoDay=arrDay[0].map((e)=>{
    return(
      <div >
        <button>
        {e.name + " "} 
        { e.tipo + " "}
          {e.precio + " "}
        </button>
      </div>
    )
  })

    return (
      <div className="App">

      <nav class="navbar">Burguer Queen</nav>
        <div className="Screen1"> 
          <h1 className="waiters">Garzon</h1>
            <Name
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            items={this.state.items}
            text={this.state.text}/>
            <Breakfast onClick={this.breakfastfunction}/>
            <ButtonDay onClickDay={this.menuDayfunction}/>
        
          <div className="button" >
            {this.state.buttonBreakfast && info}
            {this.state.buttonDay && infoDay}
          </div>
        </div>
    
        <div className="Screen2">
          <h1 className="kitchen">Cocina</h1>
          <p>{this.state.items.text}</p>
        </div>
      </div>
    );
  }
}

export default App; 

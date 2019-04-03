import React, { Component } from 'react';
import './App.css';
import Name from './components/Name/Name';
import Breakfast from './components/Breakfast/Breakfast';
import MenuDelDia from './components/MenuDelDia/MenuDelDia';
import Orders from './components/Pedidos/Orders';
import {menu} from './Json/menu.json';
import {menuDay} from './Json/menuDay.json';
import {database} from './provider';
import Kitchen from './components/Kitchen/Kitchen';


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
      arrOrders:[],
      total:0,
      btnKitchen:false,
    
   }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.breakfastfunction=this.breakfastfunction.bind(this);
    this.menuDayfunction=this.menuDayfunction.bind(this);
    this.funtionbtn=this.funtionbtn.bind(this);
    this.delete=this.delete.bind(this);
    this.handleFirebase=this.handleFirebase.bind(this);
    this.toshowfirebase=this.toshowfirebase.bind(this)
    this.functionKitchen=this.functionKitchen.bind(this)
  }
 
functionKitchen() {
  this.setState({
    ...this.state,
    btnKitchen:true,
    
  })
  
}
funtionbtn(item){
  const orden=this.state.arrOrders;
 const newTotal=this.state.total+item.price;
  orden.push(item)
  this.setState({
    ...this.state,
     arrOrders:orden,
     total: newTotal,
    
  })
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

  delete(a){
    const deleteTotal=this.state.total-a.price;
    const sinItem = this.state.arrOrders.filter((b) =>{
      return b !== a
    });
    const itemss = this.state.arrOrders.filter((b) =>{
      return b === a
    })
    if(itemss.length === 1){
    this.setState({
     ...this.state,
     total:deleteTotal,
     arrOrders: this.state.arrOrders.filter((b) =>{
       return b !== a
     })
    })
  } else {
    itemss.pop()
    const filtered = sinItem.concat(itemss)
    this.setState({
      ...this.state,
      total:deleteTotal,
      arrOrders: filtered,
    })
  }
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
  handleFirebase(){
    const order = {
     name: this.state.text,
     order: this.state.arrOrders
    };
   
    let newPostKey = database.ref('Cocina').push().key;
   
    let updates = {};
    updates['Cocina/'+ newPostKey] = order;
   
   
    return database.ref().update(updates);
   }

   toshowfirebase(){

    database.ref('Cocina').on('value',(snap)=>{
      const imprimir=snap.val();
      console.log(snap.val())
     
      return imprimir
    })
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
          <button onClick={()=>this.funtionbtn(e)}  className="btn btn-secondary btn-lg" id="bBreakfast">
            {e.type + " "}<br/>
            {e.price + " "}
          </button>
        </div>
      )
    })
 
  //Para imprimir el menu del dia
  const arrDay=[]
  for(let i in this.state.menuDay){
    arrDay.push(this.state.menuDay[i])
  }

  const infoDay=arrDay[0].map((e,i)=>{
    return(
      <div key={i}>
        <button onClick={()=>this.funtionbtn(e)}  className="btn btn-secondary btn-lg" id="bDay">
        {e.name + " "} <br/>
        { e.type + " "}<br/>
          {e.price + " "}
        </button>
      </div>
    )
  })

    return (
      <div className="App">

      <nav className="navbar">
        <h1 >Burger Queen</h1>
       </nav>
      {!this.state.btnKitchen && <div className ="container">
       <div className="col-md-12">

         <div className="Screen1"> 
          <h2 className="waiters">Garzon</h2>
            <Name
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            items={this.state.items}
            text={this.state.text}/>
            <Breakfast onClick={this.breakfastfunction}/>
            <MenuDelDia onClickDay={this.menuDayfunction}/>
        
            {this.state.buttonBreakfast && info}
            {this.state.buttonDay && infoDay}
          
  

        </div>

    
        <div className="Screen2">
          <h2 className="kitchen">Pedido</h2>
          <p>{this.state.items.text}</p>
          <Orders items={this.state.arrOrders}
          total={this.state.total}
          deleteOrders={this.delete}
          firebase={this.handleFirebase}
          onClick={this.toshowfirebase}
          kitchen={this.functionKitchen}
          />
        
          {this.state.funtionbtn}
        </div>
      </div>
       <div>

          <p>{this.mostrarFirebase}</p>
          </div>
       </div>
      }

      {this.state.btnKitchen &&
          <Kitchen/>


      }
    </div>

      );
  }
}

export default App; 

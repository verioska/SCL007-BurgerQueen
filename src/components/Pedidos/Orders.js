import React,{Component} from 'react';

class Orders extends React.Component{
    constructor(props){
        super(props);
        this.props = {...props}
        this.state={
            itemsSeleccionados:[],
            total:0,
        }
    }

    componentDidUpdate(props){
        
        if (props.items.length !== this.state.itemsSeleccionados.length) {
          
            this.setState((state, props) => {
                return {itemsSeleccionados: props.items}
            });
            
        } 
    }
    render(){
        let newTota=0;
        for(let i=0;i<this.state.itemsSeleccionados.length; i++){
            newTota+=this.state.itemsSeleccionados[i].price
           
        }
        if(newTota!=this.state.total){
            this.setState({total:newTota})
        }
        let items = this.state.itemsSeleccionados.map((e) => {
            return (
                <React.Fragment>
                    <div>Nombre: {e.name}</div>
                    <div>Tipo: {e.type}</div>
                    <div>Precio: {e.price}</div>
                    <button>Eliminar</button>
                </React.Fragment>
            )
        });
        return (
            <React.Fragment>
                <div className="listado">
                    {items}
                </div>
                <h2>Total: {this.state.total}</h2>
            </React.Fragment>
        );
    }
}

export default Orders;
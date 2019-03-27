import React,{Component} from 'react';

class OrdersDay extends React.Component{
    constructor(props){
        super(props);
        this.props = {...props}
        this.state={
            itemsDay:[],
            totalDay:0,
        }
    }

    componentDidUpdate(props){
        //this.props = {...this.props, props};
        if (props.items.length !== this.state.itemsDay.length) {
           
            this.setState((state, props) => {
                return {itemsDay: props.items}
            });
            
        } 
    }
    render(){
        let newTota=0;
        for(let i=0;i<this.state.itemsDay.length; i++){
            newTota+=this.state.itemsDay[i].price
           
        }
        if(newTota!=this.state.total){
            this.setState({total:newTota})
        }
        let items = this.state.itemsDay.map((e) => {
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

export default OrdersDay;
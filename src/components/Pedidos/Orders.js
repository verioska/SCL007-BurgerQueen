import React,{Component} from 'react';


class Orders extends React.Component{
    constructor(props){
        super(props);
        this.state={
            itemsSeleccionados:[],
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
  
        let items = this.props.items.map((e, i) => {
            return (
                <React.Fragment key={i}>
                    <tr key= {i} >
                        <td key={e.name}>{e.name}</td>
                        <td key={e.type}>{e.type}</td>
                        <td key={e.price}> {e.price}</td>
                        <button   onClick={()=>this.props.deleteOrders(e)}>x</button>
                    </tr>
                </React.Fragment>
            )
        });
        return (
            <React.Fragment>
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                        <h2>Total: {this.props.total} </h2>
                        <button onClick={this.props.firebase}>Enviar a cocina</button>
                        <button onClick={this.props.onClick}>cocina</button>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
export default Orders;
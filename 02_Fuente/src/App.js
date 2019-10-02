import React, { Component } from 'react';
import db from './FirestoreConfig'
import Header from './com/Header'
import ListarCV from './com/ListarCV'

export default class App extends Component {
  constructor(){
    super();
    this.state={
        micv: []
      }
  }
  componentDidMount(){
    db.collection('DatosPersonales').orderBy('Codigo','desc').onSnapshot((snapShots)=>{
        this.setState({
            micv:snapShots.docs.map(doc=>{
              return{id:doc.id,data:doc.data()}
            })
        })
    })
}
  render(){
    return (
      <div className="container">
          <Header/>
          <ListarCV micv={this.state.micv}/>
      </div>
    );
  }
}

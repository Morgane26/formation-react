import React, { Component } from 'react';
import './App.css';

import Membre from './components/Membre'
import Button from './components/Button'

const team = {
  membre1 : {
    nom : 'Nico',
    age: 33
  },
  membre2 : {
    nom : 'Leilouche',
    age: 30
  },
  membre3 : {
    nom : 'Alex',
    age: 29
  },
  membre4 : {
    nom : 'Morgane',
    age: 31
  }
}

class App extends Component {
  state = {
    team,
    isShow: false
  }

  handleClick = () => {
    const team = {  ...this.state.team }
    team.membre1.age +=1
    this.setState({ team })
  }
  handleChange = (event, id) => {
    const team = {  ...this.state.team }
    const nom = event.target.value
    team[id].nom = nom
    this.setState({ team })
  }
  cacherNom = id => {
    const team = {  ...this.state.team }
    team[id].nom ='X'
    this.setState({ team })
  }
  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render () {
    const { titre } = this.props
    const { team, isShow } = this.state

    let description = null

    if ( isShow ) {
      description =  (
      <strong> Je suis une baby dev </strong>
      )
    }

    const liste = Object.keys( team )
      .map( membre => (
        <Membre
        key={membre}
        handleChange={event => this.handleChange(event, membre)}
        cacherNom={() => this.cacherNom(membre)}
        nom={team[membre].nom}
        age={team[membre].age} />
      
      )
      )

    return (
      <div className='App'>
        <h1> {titre} </h1>
        { liste }
      {/*<Membre 
        nom={team.membre4.nom}
        age={team.membre4.age}>     
      { description }
    <button onClick={this.handleShowDescription}>
      {
        isShow ? 'Cacher' : 'Montrer'
      }       
      </button>
    </Membre>
      <Button 
        vieillir={this.handleClick}/>*/}
      </div>
    )
  }
}


export default App;

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
  handleChange = event => {
    const team = {  ...this.state.team }
    const nom = event.target.value
    team.membre1.nom = nom
    this.setState({ team })
  }
  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render () {
    const { titre } = this.props
    const { team, isShow } = this.state
    return (
      <div className='App'>
        <h1> {titre} </h1>
        <input value={team.membre1.nom} onChange = {this.handleChange} 
        type='text'/>
      <Membre 
        nom={team.membre1.nom}
        age={team.membre1.age} />
      <Membre 
        nom={team.membre2.nom}
        age={team.membre2.age}/>
      <Membre 
        nom={team.membre3.nom}
        age={team.membre3.age}/>
      <Membre 
        nom={team.membre4.nom}
        age={team.membre4.age}>
      
      { 
        isShow ? <strong> Je suis une baby dev </strong> : null
      }
    <button onClick={this.handleShowDescription}>
      {
        isShow ? 'Cacher' : 'Montrer'
      } 
      
      </button>
      </Membre>
      <Button 
        vieillir={this.handleClick}/>
      </div>
    )
  }
}


export default App;

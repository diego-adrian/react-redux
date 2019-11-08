import React from 'react';
import logo from './logo.svg';

import { connect } from 'react-redux';

import './App.css';

const App = props => {
  return (
    <div className="App">
      {props.informacion}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    informacion: state.cantidad
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    aumentar: () => { dispatch({type: 'NUM'})},
    disminuir: () => { dispatch({type: 'DIS'})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

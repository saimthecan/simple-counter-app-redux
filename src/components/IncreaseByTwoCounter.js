import React, { Component } from 'react'
import { increaseByCounter } from '../redux/actions/counterActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div> <button onClick={e => {
        this.props.dispatch(increaseByCounter());
      }}> increase by 2 </button></div>
    )
  }
}

function mapDispatchToprops(dispatch){
  return {actions: bindActionCreators(increaseByCounter,dispatch)}
}

export default connect(mapDispatchToprops)(IncreaseByTwoCounter);
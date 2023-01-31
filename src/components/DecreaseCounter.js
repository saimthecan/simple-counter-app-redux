import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { decreaseCounter} from '../redux/actions/counterActions'
import { connect } from 'react-redux'

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e => {
          this.props.dispatch(decreaseCounter());
        }}> decrease by 1</button>
      </div>
    )
  }
}

function mapDispatchToprops(dispatch){
  return {actions: bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToprops)(DecreaseCounter);
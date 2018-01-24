import React from 'react'
import {getKittens} from './store'
import {connect} from 'react-redux'

class Local extends React.Component {
  constructor () {
    super()
    this.state = {
      errorMessage: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    // catch and handle the error with local state instead of using the store
    this.props.getKittens()
      .catch(err => {
        this.setState({
          errorMessage: err.message
        })
      })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>Make another error</button>
        {
          this.state.errorMessage && <p>{this.state.errorMessage}</p>
        }
      </div>
    )
  }
}

const ConnectedLocal = connect(
  null,
  {getKittens}
)(Local)

export default ConnectedLocal

import '../stylesheets/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import store, {getPuppies, getKittens} from './store'
import {Provider, connect} from 'react-redux'

class Local extends React.Component {
  constructor () {
    super()
    this.state = {
      errorMessage: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
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

const FromStore = connect(

  // mapStateToProps
  (state) => ({
    errorMessage: state.errorMessage
  }),
  // mapDispatchToProps
  (dispatch) => ({
    handleClick () {
      dispatch(getPuppies())
    }
  })
)((props) => (
  <div>
    <button onClick={props.handleClick}>Make an error</button>
    {
      props.errorMessage && <p>{props.errorMessage}</p>
    }
  </div>
))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedLocal />
      <FromStore />
    </div>
  </Provider>,
  document.getElementById('app')
)

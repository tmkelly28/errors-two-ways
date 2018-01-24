import React from 'react'
import {getPuppies} from './store'
import {connect} from 'react-redux'

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

export default FromStore

import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  puppies: [],
  kittens: [],
  errorMessage: ''
}

const GOT_ERROR = 'GOT_ERROR'

const gotError = errorMessage => ({
  type: GOT_ERROR,
  errorMessage
})

export const getPuppies = () => dispatch => axios.get('/api/puppies')
  .then(res => res.data)
  .catch(err => dispatch(gotError(err.message)))

export const getKittens = () => dispatch => axios.get('/api/kittens')
  .then(res => res.data)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage
      })
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware))

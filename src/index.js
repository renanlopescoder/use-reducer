import React, {useReducer, useCallback} from 'react'
import ReactDOM from 'react-dom'
import CounterButton from './components/CounterButton'

const initialState = {
  count: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const decrement = useCallback(() => {
    dispatch({type: 'decrement'})
  }, [dispatch])

  const increment = useCallback(() => {
    dispatch({type: 'increment'})
  }, [dispatch])

  return (
    <>
      <CounterButton buttonText="Reduce" onClick={decrement} />
      {state.count}
      <CounterButton buttonText="Add" onClick={increment} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

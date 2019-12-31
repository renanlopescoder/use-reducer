import React from 'react'

const CounterButton = React.memo(({onClick, buttonText}) => {
  console.log('render')
  return (
    <>
      <button style={{margin: '10px', padding: '10px'}} onClick={onClick}>
        {buttonText}
      </button>
    </>
  )
})

export default CounterButton

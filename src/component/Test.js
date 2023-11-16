import React from 'react'

function Test(props) {
    console.log('props',props);
  return (
    <div>
    Test : {props.data}
    </div>
  )
}

export default React.memo(Test);
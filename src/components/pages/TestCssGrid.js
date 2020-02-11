import * as React from 'react';

const style={
  backgroundColor:'red'
}

const children_style={
  backgroundColor:'gold'
}

export default class TestCssGridContent extends React.Component{
  render(){
    return(
      <>
        <div style={style}>
          <div style={children_style}>
            TestCssGridContent
          </div>
        </div>
      </>
    )
  }
}
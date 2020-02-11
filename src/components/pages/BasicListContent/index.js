import * as React from 'react'

const style={
  backgroundColor:'red',
  minHeight: '100vh'
}

export default class BasicListContent extends React.Component{
  render(){
    return(
      <div>
        <div style={style}>
          basic list content
        </div>
      </div>
    )
  }
}
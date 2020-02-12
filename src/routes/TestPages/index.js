import * as React from 'react'

import TestDropDownMenu from '../../components/tests/TestDropDownMenu'

function createMarkup() {
  return {__html: '<a href="https://www.google.com">google.com</a>'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}


export default class TestPage extends React.Component{
  render(){
    return(
      <>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </>
    )
  }
}
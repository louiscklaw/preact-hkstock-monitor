import * as React from "react";

export default class NavButton extends React.Component{
  render(){
    return(
      <>
        <Button text={INDEX_SIGN_UP} href={'href'} />
        <Button text={INDEX_LOGIN} href={'href'} />
      </>
    )
  }
}
import {Component } from 'preact';

export default class NavButton extends Component{
  render(){
    return(
      <>
        <Button text={INDEX_SIGN_UP} href={'href'} />
        <Button text={INDEX_LOGIN} href={'href'} />
      </>
    )
  }
}
import {Component } from 'preact';

import {StyledNavigationItem} from "baseui/header-navigation";
import { Button } from "baseui/button";

export default class NavButtonItem extends Component{
  render({text}){
    return(
      <>
        <StyledNavigationItem>
          <Button>
            {text}
          </Button>
        </StyledNavigationItem>
      </>
    )
  }
}
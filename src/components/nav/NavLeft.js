import {Component } from 'preact';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";

import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";
import SubMenu from './SubMenu';
import TestButtonMenu from './ButtonMenu';

export default class NavLeft extends Component{
  render(){
    return(
      <>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>monitor</StyledNavigationItem>
        </StyledNavigationList>
      </>
    )
  }
}
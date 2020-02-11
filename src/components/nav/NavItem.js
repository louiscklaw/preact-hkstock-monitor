import * as React from "react";

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

import NavLink from './NavLink';

export default class NavItem extends React.Component{
  render({text, href}){
    return(
      <StyledNavigationItem>
        <NavLink text={text} href={href} />
      </StyledNavigationItem>
    )
  }
}
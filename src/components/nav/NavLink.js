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

import lang from '../lang/zh_tw'

export default class NavLink extends Component{
  render({text, href}){
    return(
      <StyledLink href={href}>
        {text}
      </StyledLink>
    )
  }
}
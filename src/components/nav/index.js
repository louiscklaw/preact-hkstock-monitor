import {Component } from 'preact';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";

import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";
import TestMenu from './SubMenu';
import TestButtonMenu from './ButtonMenu';

import NavLeft from './NavLeft';
import NavCenter from './NavCenter';
import NavRight from './NavRight';

export default () => {
  return (
    <HeaderNavigation>
      <NavLeft></NavLeft>
      <NavCenter></NavCenter>
      <NavRight></NavRight>
    </HeaderNavigation>
  );
}
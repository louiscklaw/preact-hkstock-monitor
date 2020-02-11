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

import NavItem from './NavItem'
import lang from '../lang/zh_tw';
import MenuList from './MenuList';
import NavButtonItem from "./NavButtonItem";

export default class NavRight extends React.Component{

  getLoginMenu(){
    return(
      <NavButtonItem text={lang.INDEX_LOGIN} />
    )
  }

	render(){
		return(
			<>
        <StyledNavigationList $align={ALIGN.right}>
          {this.getLoginMenu()}
        </StyledNavigationList>
			</>
		)
	}
}
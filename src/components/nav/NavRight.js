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

  getMenu(){
    console.log('navitem', MenuList.map(x=>{
      return x
    }))
    return MenuList.map(x=>{
      return ( <NavItem text={x.text} href={x.href} /> )
    })
  }

  getLoginMenu(){
    return(
      <NavButtonItem text="Login" />
    )
  }

	render(){
		return(
			<>
        <StyledNavigationList $align={ALIGN.right}>
          {this.getMenu()}

        </StyledNavigationList>

        <StyledNavigationList $align={ALIGN.right}>
          {this.getLoginMenu()}
        </StyledNavigationList>
			</>
		)
	}
}
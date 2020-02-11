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
import ButtonMenu from './ButtonMenu';
import MenuList from './MenuList';
import NavItem from './NavItem';

import lang from '../lang/zh_tw';

let list_menu_content = [
  { label: lang.LIST_BASIC_LIST, href:'/basic_list' },
  { label: lang.LIST_BUY_SELL_LIST, href:'/buy_sell_list' },
]

export default class NavRight extends Component{

  getMenu(){
    return MenuList.map(x=>{
      return ( <NavItem text={x.text} href={x.href} /> )
    })
  }

  render(){
    return(
      <>
        <StyledNavigationList $align={ALIGN.center}>
          <ButtonMenu text="list" menu_content={list_menu_content}/>
          {this.getMenu()}
        </StyledNavigationList>
      </>
    )
  }
}
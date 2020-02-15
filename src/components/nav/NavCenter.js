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

// import {DJI_SINGLE_QUOTE_DASHBOARD_ROUTE} from '../../routes/config'
let DJI_SINGLE_QUOTE_DASHBOARD_ROUTE = 'dji_single_quote_dashboard'

let list_menu_content = [
  { label: lang.LIST_BASIC_LIST, href:'/basic_list' },
  { label: lang.LIST_BUY_SELL_LIST, href:'/buy_sell_list' },
]

export default class NavRight extends Component{

  getMenu(){
    console.log(MenuList)
    return MenuList.map(x=>{

      if (x.href.search(DJI_SINGLE_QUOTE_DASHBOARD_ROUTE) >= 0){
        console.log('href',`/${x.href}`);
        return ( <NavItem text={x.text} href={`/${x.href}`} /> )
      }else{
        return ( <NavItem text={x.text} href={`/aastock_dashboard/${x.href}`} /> )
      }
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
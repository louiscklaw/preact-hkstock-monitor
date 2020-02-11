import {Component } from 'preact';

import {Button} from 'baseui/button';
import ChevronDown from 'baseui/icon/chevron-down';
import {StatefulPopover, PLACEMENT} from 'baseui/popover';
import {StatefulMenu} from 'baseui/menu';
import {styled} from 'baseui';
import SubMenu from './SubMenu';



export default class ButtonMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      menu_state:false
    }
  }

  getMenu(menu_content){
    console.log(this.state);
    if (this.state.menu_state){
      return(
        <div>
          <SubMenu menu_content={menu_content}/>
        </div>
      )
    }else{
      <div>
      </div>
    }
  }

  render({text, menu_content}){
    return(
      <div>
        <StatefulPopover
          placement={PLACEMENT.bottomLeft}
          content={({close}) => (
            <StatefulMenu
              items={menu_content}
              onItemSelect={() => close()}
              overrides={{
                List: {style: {height: '150px', width: '138px'}},
              }}
            />
          )}
        >
          <Button endEnhancer={() => <ChevronDown size={24} />}>
            {text}
          </Button>
        </StatefulPopover>
      </div>
    )
  }
}
import * as React from "react";

import {StyledNavigationItem} from "baseui/header-navigation";
import { Button } from "baseui/button";

export default class NavButtonItem extends React.Component{
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
import {Component} from 'preact';

import {SingleQuote} from '../tradingview';
import DJI_symbol_list from './TvDJIDashboard'

let dashboard_style={
  display: 'grid',
  gridGap: '0px',
  gridTemplateColumns: 'repeat(auto-fit, calc(100vw / 7))',
  // backgroundColor: 'green',
  minHeight: '80vh'
}


let tv_configs = DJI_symbol_list.map( x => {
  return {
    "symbol": x,
    "width": 255,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en"
  }
})

let TvSingleQuotes = tv_configs.map(
  tv_config => {
    return(
      <>
        <SingleQuote config={tv_config}/>
      </>
    )
  }
)

export default class TvSingleQuoteDashboard extends Component{
  render(){
    return(
      <div style={dashboard_style}>
        {TvSingleQuotes}
      </div>
    )
  }
}
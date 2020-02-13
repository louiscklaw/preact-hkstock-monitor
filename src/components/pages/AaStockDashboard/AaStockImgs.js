import React from 'react';

import AastockImg from './AaStockImg'

let p_style = {
  marginTop:'5px',
  marginBottom: '5px'
}

let aastock_detail_link = (aastock_code) => {
  return `http://www.aastocks.com/tc/stocks/quote/quick-quote.aspx?symbol=${aastock_code.replace('.hk','')}`
}

let aastock_announcement_link = (aastock_code) => {
  return `http://www.aastocks.com/tc/stocks/analysis/stock-aafn/${aastock_code.replace('.hk','')}/0/result-announcement/1`
}

let getGoogleSearchLink=(search_term)=>{
  return `https://www.google.com.hk/search?q=${search_term}`
}

let getRelatedNews = (aastock_code) => {
  // 相關新聞
  return getGoogleSearchLink(aastock_code+"相關新聞")
}

let getCompanyAnnouncement = (aastock_code) => {
  // 公司公告
  return getGoogleSearchLink(aastock_code+"公司公告")
}

// https://hk.warrants.com/tc/stock/chart/code/9988
let getHkWarrantsLink = (aastock_code) => {
  var stock_code = aastock_code.replace('.hk','').replace(/^0+/,'')
  return `https://hk.warrants.com/tc/stock/chart/code/${stock_code}`
}

let getYahooGraphLink = (aastock_code) => {
  return `https://hk.finance.yahoo.com/chart/${aastock_code.slice(1,99).toUpperCase()}`
}

let getYahooNewsLink = (aastock_code) => {
  return `https://hk.finance.yahoo.com/quote/${aastock_code.slice(1,99).toUpperCase()}/news`
}

let getNewWindowLink = (href_in, text_in) =>{
  return (<a href={href_in} target="_blank">{text_in}</a>)
}


export default class AaStockImgs extends React.Component{
  render(){
    let {aastock_code} = this.props;
    return(
      <>
        <div>
          <p style={p_style}>
            {getNewWindowLink(aastock_detail_link(aastock_code), aastock_code)}
          </p>
          <p style={p_style}>
            {getNewWindowLink(aastock_announcement_link(aastock_code), "業績")}/
            {getNewWindowLink(getRelatedNews(aastock_code), "相關新聞")}/
            {getNewWindowLink(getCompanyAnnouncement(aastock_code), "公司公告")}/
            {getNewWindowLink(getYahooNewsLink(aastock_code), "Y新聞")}/
            {getNewWindowLink(getYahooGraphLink(aastock_code), "Y圖")}/
            {getNewWindowLink(getHkWarrantsLink(aastock_code),"法興")}
          </p>
          <div style={{display: 'inline-flex'}}>
            <div>
              <AastockImg aastock_code={aastock_code} duration="one_day" width="200px" height="206px"/>
            </div>
            <div >
              <AastockImg aastock_code={aastock_code} duration="five_day"  width="100px" height="100px"/>
              <AastockImg aastock_code={aastock_code} duration="ten_day"  width="100px" height="100px"/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
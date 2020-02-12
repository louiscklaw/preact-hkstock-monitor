import {Component} from 'react';
import AaStockDashboardPage from '../../components/pages/AaStockDashboard';

export default class AaStockDashboard extends Component{
  render({list_config}){
    return(
        <>
          <AaStockDashboardPage list={list_config}></AaStockDashboardPage>
        </>
    )
  }
}

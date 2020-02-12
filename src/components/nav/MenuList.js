import * as React from 'react';

import lang from '../lang/zh_tw';

let page_config = [
  {text: lang.HSI_COMPOSITE, href:'hsi_composite'},
  {text: lang.INDEX_MY_STOCK, href:'list_my_stock'},
  {text: lang.INDEX_HKSMEDIA, href:'list_hksmedia'},
  {text: lang.INDEX_BANK, href:'list_bank'},
  {text: lang.INDEX_FIVE_G, href:'list_five_g'},
  {text: lang.INDEX_TECHONOLOGY, href:'list_techonology'},
  {text: lang.INDEX_INSURANCE, href:'list_insurance'},
  {text: lang.INDEX_TEMPORARY, href:'list_temporary'},
  {text: lang.INDEX_GOLD, href:'list_gold'},
  {text: lang.INDEX_ALCOHOL, href:'list_alcohol'},
  {text: lang.INDEX_OIL, href:'list_oil'},
  {text: lang.INDEX_MILK, href:'list_milk'},
  {text: lang.INDEX_MEDICINE, href:'list_medicine'},
  {text: lang.INDEX_MAINLAND_LAND, href:'list_mainland_land'},
  {text: lang.INDEX_CAR_MANUFACTUR, href:'list_car_manufactur'},
  {text: lang.INDEX_MIND, href:'list_mind'},
  {text: lang.INDEX_AIRLINE, href:'list_airline'},
  {text: lang.INDEX_HKEX, href:'list_hkex'},
  {text: lang.INDEX_WATCH_LIST, href:'list_watch_list'},
  {text: lang.INDEX_INDICES, href:'list_indices'},
  {text: lang.INDEX_DJI, href:'dji_single_quote_dashboard'},
  {text: lang.INDEX_RMB, href:'list_rmb'},
  {text: 'test', href:'/test_pages'},
]

export default [
  ...page_config
]
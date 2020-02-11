import * as React from 'react';

import lang from '../lang/zh_tw';

console.log('lang',lang);
console.log('lang',lang['HSI_COMPOSITE']);


let page_config = [
  {text: lang.HSI_COMPOSITE, href:'hsi_composite'},
  {text: lang['INDEX_MY_STOCK'], href:'index_my_stock'},
  {text: lang['INDEX_HKSMEDIA'], href:'index_hksmedia'}
]

export default [
  ...page_config
]
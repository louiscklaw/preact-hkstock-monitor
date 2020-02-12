import React from 'react';

let period = {
  'one_day': 0,
  'five_day': 2,
  'ten_day': 3
}

let footer = {
  'no_footer': 0,
  'day_time_footer': 1
}

let random_num_string = (length=10) => {
  return Math.random().toString().substring(2,length+2)
}

export default class AaStockImg extends React.Component{
  componentDidMount() {
    let {duration} = this.props

    if (duration == 'one_day'){
      console.log('setting up refresh')
      this.interval = setInterval(() => this.setState(
        { time: Date.now() }),
        3000
        );
    }
  }

  componentWillUnmount() {
    let {duration} = this.props

    if (duration == 'one_day'){
      clearInterval(this.interval);
    }
  }

  render(){
    let {width, height} = this.props;
    let width_no_px = width.replace('px','')
    let height_no_px = height.replace('px','')

    let aastock_src_link = (aastock_num, graph_duration, img_width, img_height) => {
      return `http://charts.aastocks.com/servlet/Charts?com=50004&stockid=${aastock_num}&period=${period[graph_duration]}&footerStyle=1&lang=1&scheme=3&refLine=3&rAnnotationStyle=1&height=${img_height}&width=${img_width}&t=${random_num_string()}&r=u5o`
    }

    return(
      <>
        <div>
          <img src={aastock_src_link(this.props.aastock_code, this.props.duration, width_no_px, height_no_px)} />
        </div>
      </>
    )
  }
}
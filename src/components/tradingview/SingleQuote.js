import {Component, createRef} from 'preact';

export default class SingleQuote extends Component{
  constructor(props) {
    super(props);
    this._ref = createRef();
  }
  render() {
    console.log(this.props.config)
      return(
        <div className="tradingview-widget-container" ref={this._ref}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      );
  }
  componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
      script.async = true;
      script.innerHTML = JSON.stringify(this.props.config);
      this._ref.current.appendChild(script);
  }
}
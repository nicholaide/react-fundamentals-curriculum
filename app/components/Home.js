var React = require('react');
var Header = require('./Header');
var ZipCode = require('./ZipCode');

class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.history = this.props.history
  }
  
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='home-container'>
          <h1 className='header'>Enter a City and State</h1>    
          <ZipCode
            direction='column'
            zipcode={75039} />
        </div>
      </div>
    )
  }
}

module.exports = Home;

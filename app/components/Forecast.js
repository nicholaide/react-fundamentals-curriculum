var React = require('react');

class Forecast extends React.Component {
  constructor(props) {
    super(props); 
  }
    
  render() {
    return (
      <div 
        className='navbar'
        style={{flexDirection: this.props.direction}}>
        <h1 className='header-text'>Weather App</h1>
        <ZipCode
          direction='column'
          onSubmitZipcode={function(){}}
          zipcode={123}
        />
      </div>
    )     
  }
}

module.exports = Forecast;
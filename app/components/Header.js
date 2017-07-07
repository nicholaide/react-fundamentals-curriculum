var React = require('react');
var ZipCode = require('./ZipCode');
var PropTypes = require('prop-types');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '75039'
    }; 
  }
  
  render() {
    return (
      <div 
        className='navbar'
        style={{flexDirection: this.props.direction}}>
        <h1 className='header-text'>Weather App</h1>
        <ZipCode
          direction='column'
          zipcode={75039} />
      </div>
    )     
  }
}

Header.defaultProps = {
  
}

Header.propTypes = {
  direction: PropTypes.string, 
}

module.exports = Header;
var React = require('react');
var PropTypes = require('prop-types');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '75039'
    }; 
  }
  
  
  handleSubmitZipcode () {
    
  }
  
  handleUpdateZipcode() {
    
  }
  
  render() {
    return (
      <div 
        className='zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleUpdateZipcode}
          placeholder='Dallas, Texas'
          type='text'
          value={this.state.zipcode} 
        />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcode} >
            Get Weather
        </button>
      </div>
    )     
  }
}

ZipCode.defaultProps = {
  
}

ZipCode.propTypes = {
  direction: PropTypes.string, 
}

module.exports = ZipCode;
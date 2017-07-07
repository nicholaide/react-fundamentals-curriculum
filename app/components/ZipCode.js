var api = require('../utils/api');
var React = require('react');
var PropTypes = require('prop-types');
var ReactRouter = require('react-router-dom');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
    
    this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
    this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);   
  }
  
  
  handleSubmitZipcode (event) {
    this.props.onSubmitZipcode(this.state.zipcode)
    
    this.setState(function () {
      return {
        zipcode: '', 
      } 
    });
    
  }
  
  handleUpdateZipcode(event) {
    var value = event.target.value;
    this.setState(function () {
      return {
        zipcode: value
      }
    });
  }
  
  render() {
    console.log('PROPS', this.props)
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
  direction: 'column' 
}

ZipCode.propTypes = {
  direction: PropTypes.string, 
}

module.exports = ZipCode;
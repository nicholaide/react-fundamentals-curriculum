var React = require('react');
var Header = require('./Header');
var ZipCode = require('./ZipCode');

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='home-container'>
          <h1 className='header'>Enter a City and State</h1>    
          <ZipCode
            direction='column'
            onSubmitZipcode={this.handleSubmitZipcode}
            onUpdateZipcode={this.handleUpdateZipcode}
            zipcode={123}
          />
        </div>
      </div>
    )
  }
}

module.exports = Home;
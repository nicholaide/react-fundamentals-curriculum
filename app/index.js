var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Weather World!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

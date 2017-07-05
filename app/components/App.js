var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Weather World!
      </div>
    )
  }
}

module.exports = App;

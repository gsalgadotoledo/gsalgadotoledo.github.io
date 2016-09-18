import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchField from './components/SearchField';
import SearchRender from './components/SearchRender';
import SearchActions from './actions/SearchActions';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    SearchActions.retriveLinks(e.target.q.value);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <div className="container">
            <SearchField _handleSubmit={this._handleSubmit} />
            <SearchRender />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App
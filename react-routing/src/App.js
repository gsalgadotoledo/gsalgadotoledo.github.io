import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header location={this.props.location} />
        <div className="container ptb">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 section-bg-color people">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App
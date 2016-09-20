import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <PostList />
        <Footer />
      </div>
    )
  }
}
export default App
import React from 'react';
import ViewArticle from './components/ViewArticle';
import EditArticle from './components/EditArticle';

class App extends React.Component {
  
  render() {
    return (
      <section className="news">
	      <div className="container">
	        <div className="row">
	          <EditArticle />
	          <ViewArticle />
	        </div>
	      </div>
	    </section>
    )
  }
}
export default App
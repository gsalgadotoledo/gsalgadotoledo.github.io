import React from 'react';
import Reflux from 'reflux';
import SearchStore from '../stores/SearchStore';

var SearchRender = React.createClass({

  mixins: [Reflux.connect(SearchStore, 'results')],
  
  render: function() {
    if (!this.state.results) {
      return null;
    }
    if (this.state.results.searching) {
      return (<h3>Loading...</h3>);
    }
    if (this.state.results.links) {
      return (
        <div className="row mb">
          {
            this.state.results.links.map(function (data, index) {
              return <div key={index} className="col-md-12 mt">
                <a target="_blank" href={data.link}><h3 dangerouslySetInnerHTML={{__html: data.title}} /></a>
                <a target="_blank" href={data.link}><h4>{data.url}</h4></a>
                <p dangerouslySetInnerHTML={{__html: data.contentSnippet}} />
              </div>
            })
          }    
        </div>
      );
    }
  }
});

export default SearchRender;
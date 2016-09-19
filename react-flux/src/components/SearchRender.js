import React from 'react';
import Reflux from 'reflux';
import SearchStore from '../stores/SearchStore';

var SearchRender = React.createClass({

  mixins: [Reflux.connect(SearchStore, 'links')],
  
  render: function() {
    if (this.state.links) {
      return (
        <div className="row mb">
          {
            this.state.links.map(function (data, index) {
              return <div key={index} className="col-md-12 mt">
                <a target="_blank" href={data.link}><h3 dangerouslySetInnerHTML={{__html: data.title}} /></a>
                <a target="_blank" href={data.link}><h4>{data.url}</h4></a>
                <p dangerouslySetInnerHTML={{__html: data.contentSnippet}} />
              </div>
            })
          }    
        </div>
      );
    } else {
        return null;
    }
  }
});

export default SearchRender;
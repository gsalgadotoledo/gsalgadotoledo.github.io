window.App = {};
window.App.util = (function(){
  
  var _storage = {};

  function merge(originalValues, newValues) {
    for (var field in newValues) {
      originalValues[field] = newValues[field]
    }
    return originalValues;
  }

  function storage(key, value) {
    
    try {
      if(!value) {
        return JSON.parse(localStorage.getItem(key));
      }
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      if(!value) { 
        return _storage[key] ? _storage[key] : null;
      }
      _storage[key] = value;
    }
  }

  function render(template, data) {
    return template.replace(/{[^{}]+}/g, function(key){
        return data[key.replace(/[{}]+/g, '')] || '';
    });
  };

  return {
    merge: merge,
    storage: storage,
    render: render
  }
})();

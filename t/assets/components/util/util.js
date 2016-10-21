window.App = {};
window.App.util = (function(){
  
  function merge(originalValues, newValues) {
    for (var field in newValues) {
      originalValues[field] = newValues[field]
    }
    return originalValues;
  }

  function storage(key, value) {
    if(!value) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(value));
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

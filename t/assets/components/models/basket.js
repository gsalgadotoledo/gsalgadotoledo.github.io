window.App.Basket = (function() {

  var _somethigChanged = function () {};

  var settings = {
    syncUrl: 'data/basket.json',
    vatPercent: 10,
    currency: '$',
    defaultBasket: [
      {
        id: 0,
        product: 'Cotton T-Shirt, Medium',
        price: 1.99,
        quantity: 1
      },
      {
        id: 1,
        product: 'Baseball Cap, One Size',
        price: 2.99,
        quantity: 2
      },
      {
        id: 2,
        product: 'Swim Shorts, Medium',
        price: 3.99,
        quantity: 1
      }
    ]
  };
  
  function reset() {
    App.util.storage('basket', settings.defaultBasket)
    _somethigChanged(settings.defaultBasket);
  }
  
  function init(params) {
    
    settings = App.util.merge(settings, params || {});
    
    if(!App.util.storage('basket')) {
      App.util.storage('basket', settings.defaultBasket)
    }
  }

  function watch(cb) {
    _somethigChanged = cb;
  }

  function create(data) {
    var basket = App.util.storage('basket');
    data.id = basket.length;
    basket.push(data);
    App.util.storage('basket', basket);
    _somethigChanged(basket);
  }

  function update(id, quantity) {
    var basket = App.util.storage('basket');
    
    for (var data in basket) {
      if (basket[data].id == id) {
        basket[data].quantity = quantity;
      }
    }

    App.util.storage('basket', basket);
    _somethigChanged(basket);
  }

  function remove(id) {
    var basket = App.util.storage('basket');
    var newBasket = [];
    
    for (var data in basket) {
      if (basket[data].id != id) {
        newBasket.push(basket[data]);
      }
    }

    App.util.storage('basket', newBasket);
    _somethigChanged(newBasket);
  }

  function find() {
    var basket = App.util.storage('basket');
    
    for (var data in basket) {
      basket[data].id = basket[data].id + '';
      basket[data].total = round(basket[data].price * basket[data].quantity);
      basket[data].currency = currency();
    }

    return basket;
  }

  function total() {
    var basket = App.util.storage('basket');
    var total = 0;
    
    for (var data in basket) {
      total += basket[data].price * basket[data].quantity;
    }

    return round( total );
  }

  function totalVat() {
    return round( total() * settings.vatPercent / 100 );
  }

  function totalPlusVat() {
    return round( total() + totalVat() );
  }

  function round(value) {
    return +value.toFixed(2);
  }

  function vatPercent() {
    return settings.vatPercent;
  }

  function currency() {
    return settings.currency;
  }

  function sync(done) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', settings.syncUrl);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        if(done) done(JSON.parse(xhr.responseText))
      }
      else if (xhr.status !== 200) {
        alert('Something went wrong. ' + xhr.status);
      }
    };
    xhr.send(encodeURI('bascket=' + JSON.stringify(find())));
  }

  return {
    init: init,
    watch: watch,
    create: create,
    update: update,
    remove: remove,
    find: find,
    total: total,
    totalVat: totalVat,
    totalPlusVat: totalPlusVat,
    vatPercent: vatPercent,
    currency: currency,
    round: round,
    reset: reset,
    sync: sync
  }
})();

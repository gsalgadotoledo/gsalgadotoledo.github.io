window.App.Counter = (function() {

  var instances = [];
  var settings = {
    selector: '[data-target="counter"]',
    template: [
        '<input type="text" value="">',
        '<a role="button" class="{classPlus}">+</a>',
        '<a role="button" class="{classMinus}">-</a>'
      ].join(''),
    maxAllowed: 10,
    classPlus: 'plus',
    classMinus: 'minus',
    onChange: function() {}
  };

  function init(params) {
    settings = App.util.merge(settings, params || {});
    
    var $countersAtThePage = document.querySelectorAll(settings.selector);
    
    [].forEach.call($countersAtThePage, function($counterEl, id) {
      instances.push(new Counter($counterEl, id));
    });
  }

  function Counter($el) {
    this.$el = $el;
    this.render();
    this.cacheElements();
    this.handleEvents();
  }

  Counter.prototype.render = function () {
    this.$el.innerHTML = App.util.render(settings.template, {
      classPlus: settings.classPlus,
      classMinus: settings.classMinus
    });
  }

  Counter.prototype.cacheElements = function () {
    this.$field = this.$el.getElementsByTagName('input')[0];
    this.$minus = this.$el.getElementsByClassName(settings.classPlus)[0];
    this.$plus = this.$el.getElementsByClassName(settings.classMinus)[0];
  }

  Counter.prototype.handleEvents = function () {
    this.$minus.addEventListener('click', this.onPlusMinus.bind(this));
    this.$plus.addEventListener('click', this.onPlusMinus.bind(this));
    this.$field.addEventListener('keyup', function(e) {
      settings.onChange(e.target);
    });
  }

  Counter.prototype.onPlusMinus = function (e) {
    var fieldValue;
    e.preventDefault();

    fieldValue = parseInt(this.$field.value);
    
    if(e.target.className === settings.classPlus) {
      this.$field.value = (fieldValue < settings.maxAllowed) ? fieldValue + 1 : fieldValue;
      settings.onChange(this.$field)
    } else if (e.target.className === settings.classMinus) {
      this.$field.value = (fieldValue > 1) ? fieldValue - 1 : fieldValue;
      settings.onChange(this.$field)
    }
  }

  return {
    init: init,
    instances: instances
  }
})();

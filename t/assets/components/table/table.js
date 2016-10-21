window.App.Table = (function() {

  var instances = [];
  var Settings = {

    // Entities
    model: null,
    counter: null,

    // Selectors to use
    selector: '[data-target="table"]',
    selectorProductContainer: '[data-container="products"]',
    selectorGoToPay: '[data-action="go-to-pay"]',
    selectorDeleteProduct: '[data-action="delete"]',
    selectorDefaultValues: '.default-values',

    // Labels to use
    labelButton: 'Buy Now &raquo;',
    labelLoading: 'Loading...',
    labelProduct: 'Product',
    labelPrice: 'Price',
    labelQuantity: 'Qty',
    labelCost: 'Cost',
    labelDelete: 'Delete',
    labelTotalCost: 'Total Cost',
    labelVat: 'VAT @',
    labelSubTotal: 'Subtotal',

    // Templates
    productHtmlTemplate: [
        '<tr data-row="{id}">',
        '  <td>{product}</td>',
        '  <td class="hidden-mobile">{currency}{price}</td>',
        '  <td><div data-target="counter"></div></td>',
        '  <td>',
        '    {currency}{total}',
        '    <a data-action="delete" role="button" aria-label="{labelDelete} {product}">',
        '      <img ',
        '        aria-hidden="true" ',
        '        src="assets/img/trash-bin.png" ',
        '        alt="{labelDelete} {product}"',
        '        title="{labelDelete} {product}"',
        '      >',
        '    </a>',
        '  </td>',
        '</tr>'
      ].join(''),

    tableContentTemplate: [
        '<table>',
        '<thead>',
          '<tr>',
            '<th>{labelProduct}</th>',
            '<th class="hidden-mobile">{labelPrice}</th>',
            '<th>{labelQuantity}</th>',
            '<th>{labelCost}</th>',
          '</tr>',
        '</thead>',
        '<tbody data-container="products">',
        '</tbody>',
        '<tfoot>',
          '<tr>',
            '<td>{labelSubTotal}</td>',
            '<td class="hidden-mobile"></td>',
            '<td></td>',
            '<td>{currency}{subTotal}</td>',
          '</tr>',
          '<tr>',
            '<td>{labelVat} <span>{currency}{vatPercent}</span></td>',
            '<td class="hidden-mobile"></td>',
            '<td></td>',
            '<td>{currency}{vatPercentCalculated}</td>',
          '</tr>',
          '<tr>',
            '<td>{labelTotalCost}</td>',
            '<td class="hidden-mobile"></td>',
            '<td></td>',
            '<td>{currency}{totalCost}</td>',
          '</tr>',
        '</tfoot>',
        '</table>',
        '<button type="button" data-action="go-to-pay" data-target="button">',
        '  {labelButton}',
        '</button>'
      ].join('')
  };
  var Basket;
  var Counter;
  
  function init(params) {
    if(!params.model) {
      throw new Error('You have to provide a model as data source')
    }

    if(!params.counter) {
      throw new Error('You have to provide a counter component')
    }

    Settings = App.util.merge(Settings, params || {});
    Basket = Settings.model;
    Counter = Settings.counter;
    
    var $tablesAtThePage = document.querySelectorAll(Settings.selector);
    
    [].forEach.call($tablesAtThePage, function($tableEl, id) {
      instances.push(new Table($tableEl, id));
    });
  }

  /**
   * Table
   * This entity build,
   * manage, performance
   * and integrate all table 
   * task and features related
  */
  function Table($el) {
    this.$el = $el;

    // Initialize model tasks
    Basket.init();
    
    // Initial table build
    this.buildTable();

    // Binding for model changes
    Basket.watch(function() {
      this.buildTable();
    }.bind(this));
  }

  Table.prototype.buildTable = function() {
    this.render();
    this.cacheElements();
    this.renderProducts();
    this.handleEvents();
    this.disableButton();
  };

  Table.prototype.render = function() {
    this.$el.innerHTML = App.util.render(Settings.tableContentTemplate, {
      currency: Basket.currency(),
      subTotal: Basket.total(),
      vatPercent: Basket.vatPercent() + '%',
      vatPercentCalculated: Basket.totalVat(),
      totalCost: Basket.totalPlusVat(),
      labelButton: Settings.labelButton,
      labelProduct: Settings.labelProduct,
      labelPrice: Settings.labelPrice,
      labelQuantity: Settings.labelQuantity,
      labelCost: Settings.labelCost,
      labelDelete: Settings.labelDelete,
      labelTotalCost: Settings.labelTotalCost,
      labelVat: Settings.labelVat,
      labelSubTotal: Settings.labelSubTotal

    });
  };

  Table.prototype.renderProducts = function() {
    if(!Basket.find().length) {
      this.$productContainer.innerHTML = [
        '<tr><td rowspan="4">',
        '  <a role="button" class="default-values">Set default values</a>',
        '</td></tr>',
      ].join('')
      return;
    }
    Basket.find().forEach(function(product) {
      this.$productList.push(new Row(this, product));
    }.bind(this));

    Counter.init({
      onChange: function(field) {
        Basket.update(field.id, field.value);
      }
    });
  };

  Table.prototype.cacheElements = function() {
    this.$productList = [];
    this.$goToPayBtn = this.$el.querySelector(Settings.selectorGoToPay);
    this.$productContainer = this.$el.querySelector(Settings.selectorProductContainer);
    this.$productContainer.innerHTML = '';
  };
  
  Table.prototype.disableButton = function() {
    this.$goToPayBtn.disabled = !Basket.find().length;
  };
  
  
  Table.prototype.handleEvents = function() {
    var $defaultValues = this.$productContainer.querySelector(Settings.selectorDefaultValues);
    
    this.$productList.forEach(function(row) {
      var $el = this.$productContainer.querySelector('[data-row="' + row.product.id + '"]');
      var $field = $el.querySelector('input');
      var $deleteBtn = $el.querySelector(Settings.selectorDeleteProduct);
      
      if($field) {
        $field.value = row.product.quantity;
        $field.id = row.product.id;
      }

      $deleteBtn.addEventListener('click', function(){
        Basket.remove(row.product.id); 
      });

    }.bind(this));

    if($defaultValues) {
      $defaultValues.addEventListener('click', function() {
        Basket.reset();
      });
    }

    this.$goToPayBtn.addEventListener('click', function(e) {
      e.target.disabled = true;
      e.target.innerHTML = Settings.labelLoading;
      
      Basket.sync(function(response) {
        setTimeout(function() {
          e.target.innerHTML = Settings.labelButton;
          e.target.disabled = false;
          alert('Succesfully shop ;)')
        }.bind(this), 1000);
      }.bind(this));
    });
  };
  
  /**
   * Row entity
   * This entity render a product
   * row according data taked
   * from de model
  */
  function Row(table, product) {
    this.product = product;
    this.table = table;
    this.render();
  }

  Row.prototype.render = function() {
    var html = App.util.render(Settings.productHtmlTemplate, this.product);
    this.table.$productContainer.innerHTML += html;
  };

  return {
    init: init,
    instances: instances
  }
})();

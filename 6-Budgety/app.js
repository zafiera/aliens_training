var EXPENSES = 'exp';
var INCOME = 'inc';

// BUDGET CONTROLLER
var budgetController = (function() {
    
  var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = 0;
  };
  
  
  Expense.prototype.calcPercentage = function(totalIncome) {
      if (totalIncome > 0) {
          this.percentage = Math.round((this.value / totalIncome) * 100);
      } else {
          this.percentage = 0;
      }
  };
  
  
  Expense.prototype.getPercentage = function() {
      return this.percentage;
  };
  
  
  var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
  };
  
  
  var calculateTotal = function(type) {
      var sum = 0;
      data.allItems[type].forEach(function(cur) {
          sum += cur.value;
      });
      data.totals[type] = sum;
  };
  
  
  var data = {
      allItems: {
          exp: [],
          inc: [],
      },
      totals: {
          exp: 0,
          inc: 0,
      },
      budget: 0,
      percentage: 0,
  };
  
  
  return {
      addItem: function(type, des, val) {
          var newItem, id;

          var items = data.allItems[type];
          
          // Create new ID
          if (items.length > 0) {
              id = items[items.length - 1].id + 1;
          } else {
              id = 0;
          }
          
          if (type === EXPENSES) {
              newItem = new Expense(id, des, val);
          } else{
              newItem = new Income(id, des, val);
          }
          
          items.push(newItem);
          
          return newItem;
      },
      
      
      deleteItem: function(type, id) {
        var ids, index;
        var items = data.allItems[type];
        // ids = items.map(function(current) {
        // 	return current.id;
        // });
  
        // index = ids.indexOf(id);
  
        // if (index !== -1) {
        // 	items.splice(index, 1);
        // }
  
        // find index in one loop
        for (var i = 0; i < items.length; i++) {
          if (items[i].id === id) {
            items.splice(index, 1);
            break;
          }
        }
      },

    calculateBudget: function() {
        calculateTotal(EXPENSES);
        calculateTotal(INCOME);

        var incomeTotal = data.totals.inc;
        var expenseTotal = data.totals.exp;
        var percentage = data.percentage;

        data.budget = incomeTotal - expenseTotal;
  
        if (incomeTotal > 0) {
          percentage = Math.round(expenseTotal / incomeTotal * 100);
        } else {
          percentage = 0;
        }
      },
      
      calculatePercentages: function() {
          
          
          data.allItems.exp.forEach(function(cur) {
             cur.calcPercentage(data.totals.inc);
          });
      },
      
      
      getPercentages: function() {
          var allPerc = data.allItems.exp.map(function(cur) {
              return cur.getPercentage();
          });
          return allPerc;
      },
      
      
      getBudget: function() {
          return {
              budget: data.budget,
              totalInc: data.totals.inc,
              totalExp: data.totals.exp,
              percentage: data.percentage
          };
      },
      
      testing: function() {
          console.log(data);
      }
  };
  
})();




// UI CONTROLLER
var UIController = (function() {
  
  var DOMstrings = {
      inputType: '.add__type',
      inputDescription: '.add__description',
      inputValue: '.add__value',
      inputBtn: '.add__btn',
      incomeContainer: '.income__list',
      expensesContainer: '.expenses__list',
      budgetLabel: '.budget__value',
      incomeLabel: '.budget__income--value',
      expensesLabel: '.budget__expenses--value',
      percentageLabel: '.budget__expenses--percentage',
      container: '.container',
      expensesPercLabel: '.item__percentage',
      dateLabel: '.budget__title--month'
  };
  
  // Split number with thousands separator (,) and ensure 2 decimals e.g. 1000 -> 1,000
  var formatNumber = function(num, type) {
    var numSplit, integer, decimals, type;

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split(".");

    integer = numSplit[0];
    if (integer.length > 3) {
      integer =
        integer.substr(0, integer.length - 3) +
        "," +
        integer.substr(integer.length - 3, 3);
    }

    decimals = numSplit[1];

    return (type === EXPENSES ? "-" : "+") + " " + integer + "." + decimals;
  };  
  
  return {
      getInput: function() {
          return {
              type: document.querySelector(DOMstrings.inputType).value, 
              description: document.querySelector(DOMstrings.inputDescription).value,
              value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
          };
      },
      
      
      addListItem: function(obj, type) {
        var html, newHtml, element;
  
        if (type === INCOME) {
          element = DOMstrings.incomeContainer;
  
          html = `<div class="item clearfix" id="inc-%id%">
                          <div class="item__description">%description%</div>
                          <div class="right clearfix">
                              <div class="item__value">%value%</div>
                              <div class="item__delete">
                                  <button class="item__delete--btn">
                                      <i class="ion-ios-close-outline"></i>
                                  </button>
                              </div>
                          </div>
                      </div>`;
        } else {
          element = DOMstrings.expensesContainer;
  
          html = `<div class="item clearfix" id="exp-%id%">
                      <div class="item__description">%description%</div>
                          <div class="right clearfix">
                              <div class="item__value">%value%</div>
                              <div class="item__percentage">21%</div>
                              <div class="item__delete">
                              <button class="item__delete--btn">
                                  <i class="ion-ios-close-outline"></i>
                              </button>
                          </div>
                      </div>
                  </div>`;
        }
  
        newHtml = html
          .replace("%id%", obj.id)
          .replace("%description%", obj.description)
          .replace("%value%", formatNumber(obj.value, type));
  
        // Insert the HTML into the DOM
        document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
      },
      
      
      deleteListItem: function(selectorID) {
          
          var el = document.getElementById(selectorID);
          el.parentNode.removeChild(el);
          
      },
      
      
      clearFields: function() {
          var fields, fieldsArr;
          
          fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
          
          fieldsArr = Array.prototype.slice.call(fields);
          
          fieldsArr.forEach(function(current, index, array) {
              current.value = "";
          });
          
          fieldsArr[0].focus();
      },
      
      
      formatField: function(selector, budget, type) {
        this.updateField(selector, formatNumber(budget, type));
      },
      updateField: function(selector, value) {
        document.querySelector(selector).textContent = value;
      },
  
      displayBudget: function(obj) {
        var type = obj.budget > 0 ? INCOME : EXPENSES;
  
        this.formatField(DOMstrings.budgetLabel, obj.budget, type);
        this.formatField(DOMstrings.incomeLabel, obj.totalInc, INCOME);
        this.formatField(DOMstrings.expensesLabel, obj.totalExp, EXPENSES);
  
        if (obj.percentage > 0) {
          document.querySelector(DOMstrings.percentageLabel).textContent =
            obj.percentage + "%";
        } else {
          document.querySelector(DOMstrings.percentageLabel).textContent = "---";
        }
      },
      
      
      displayPercentages: function(percentages) {
          
          var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
          
          nodeListForEach(fields, function(current, index) {
              
              if (percentages[index] > 0) {
                  current.textContent = percentages[index] + '%';
              } else {
                  current.textContent = '---';
              }
          });
          
      },
      
      
      displayMonth: function() {
          var now, months, month, year;
          
          now = new Date();
          
          months = [
              'January', 
              'February', 
              'March', 
              'April', 
              'May', 
              'June', 
              'July', 
              'August', 
              'September', 
              'October', 
              'November', 
              'December'];
          month = now.getMonth();
          
          year = now.getFullYear();
          document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
      },
      
      
      changedType: function() {
          
          var fields = document.querySelectorAll(
              DOMstrings.inputType + ',' +
              DOMstrings.inputDescription + ',' +
              DOMstrings.inputValue);
          
          nodeListForEach(fields, function(cur) {
             cur.classList.toggle('red-focus'); 
          });
          
          document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
          
      },
      
      
      getDOMstrings: function() {
          return DOMstrings;
      }
  };
  
})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  
  var setupEventListeners = function() {
      var DOM = UICtrl.getDOMstrings();
      
      document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

      document.addEventListener('keypress', function(event) {
          if (event.keyCode === 13 || event.which === 13) {
              ctrlAddItem();
          }
      });
      
      document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
      
      document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);        
  };
  
  
  var updateBudget = function() {
      
      budgetCtrl.calculateBudget();
      
      var budget = budgetCtrl.getBudget();
      
      // 3. Display the budget on the UI
      UICtrl.displayBudget(budget);
  };
  
  
  var updatePercentages = function() {
      
      budgetCtrl.calculatePercentages();
      
      // 2. Read from budget controller
      var percentages = budgetCtrl.getPercentages();
      
      // 3. Update UI
      UICtrl.displayPercentages(percentages);
  };
  
  
  var ctrlAddItem = function() {
      var input, newItem;
      
      // 1. Get the field input data
      input = UICtrl.getInput();        
      
      if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
          // 2. Add to budget controller
          newItem = budgetCtrl.addItem(input.type, input.description, input.value);

          // 3. Add to UI
          UICtrl.addListItem(newItem, input.type);

          UICtrl.clearFields();

          updateBudget();
          
          updatePercentages();
      }
  };
  
  
  var ctrlDeleteItem = function(event) {
      var itemID, splitID, type, ID;
      
      itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
      
      if (itemID) {
          
          splitID = itemID.split('-');
          type = splitID[0];
          ID = parseInt(splitID[1]);
          
          // 1. delete from data structure
          budgetCtrl.deleteItem(type, ID);
          
          // 2. Delete from UI
          UICtrl.deleteListItem(itemID);
          
          updateBudget();
          
          updatePercentages();
      }
  };
  
  
  return {
      init: function() {
          console.log('Application has started.');
          UICtrl.displayMonth();
          UICtrl.displayBudget({
              budget: 0,
              totalInc: 0,
              totalExp: 0,
              percentage: -1
          });
          setupEventListeners();
      }
  };
  
})(budgetController, UIController);


controller.init();
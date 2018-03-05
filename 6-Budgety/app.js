var budgetController = (function() {
  //blueprint content received from user inputs
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type){
    var sum = 0;
    data.allItems[type].forEach(function(cur){
        sum =+cur.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget:0,
    percentage:-1
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      //create unqiue ID for each set of data thats saved
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //creates item based whether its an expense or income
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      //pushes data into data structure
      data.allItems[type].push(newItem);

      //returns new element
      return newItem;
    },

    deleteItem: function(type, id){
        var ids, index;

        ids = data.allItems[type].map(function(current){
            return current.id;
        });

        index = ids.indexOf(id);

        if(index !== -1){
            data.allItems[type].splice(index, 1);
        }

    },

    calculateBudget: function(){

        //calculate total income/expense
        calculateTotal('exp');
        calculateTotal('inc');

        //calculates budget
        data.budget = data.totals.inc - data.totals.exp;

        if(data.totals.inc>0){
            data.percentage = Math.round(data.totals.exp/data.totals.inc * 100);
        }else{
            data.percentage=-1;
        }
    },

    getBudget: function(){
        return{
            budget: data.budget,
            totalInc: data.totals.inc,
            totalExp: data.totals.exp,
            percentage: data.percentage
        }
    },

    testing: function() {
      console.log(data);
    }
  };
})();

var UIController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expenseContainer: ".expenses__list",
    budgetLable: '.budget__value',
    incomeLable: '.budget__income--value',
    expensesLable: '.budget__expenses--value',
    percentageLable: '.budget__expenses--percentage',
    container:'.container'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value:parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },

    addListItem: function(obj, type) {
      var html, newHTML, element;

      if (type === "inc") {
          element = DOMstrings.incomeContainer;
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if(type==="exp"){
        element = DOMstrings.expenseContainer;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%' , obj.description);
      newHTML = newHTML.replace('%value%', obj.value);

      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
    },

    deleteListItem: function(selectorID){
        var el;

        el = document.getElementById(selectorID);
        el.parentNode.removeChild(el);


    },

    clearFields: function(){
        var fields, fieldsArr;

        fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
    
        fieldsArr = Array.prototype.slice.call(fields);

        fieldsArr.forEach(function(current, index, array) {
            current.value = "";
        });
        
    },

    displayBudget: function(obj){

        document.querySelector(DOMstrings.budgetLable).textContent = obj.budget;
        document.querySelector(DOMstrings.incomeLable).textContent = obj.totalInc;
        document.querySelector(DOMstrings.expensesLable).textContent = obj.totalExp;

        if(obj.percentage>0){
            document.querySelector(DOMstrings.percentageLable).textContent = obj.percentage + "%";
        }else{

            document.querySelector(DOMstrings.percentageLable).textContent = "---";
        }
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

var controller = (function(budgetCtrl, UICtrl) {

  setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document
      .querySelector(DOM.inputBtn)
      .addEventListener("click", ctrlAddItems);
    document.addEventListener("keypress", function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItems();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    

  };

  var updateBudget = function(){

    budgetCtrl.calculateBudget();
    var budget = budgetCtrl.getBudget();
    UICtrl.displayBudget(budget);

  }

  var ctrlAddItems = function() {
    var input, newItem;

    //gets input from user
    input = UICtrl.getInput();

    if(input.description !== "" && !isNaN(input.value) && input.value>0){

    //adds data to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    //add list item to UI
    UICtrl.addListItem(newItem, input.type);

    UICtrl.clearFields();

    updateBudget();

    }
  };

  var ctrlDeleteItem = function(event){
    var itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
 
    if(itemID){

        splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);

        //delete item from data structure
        budgetCtrl.deleteItem(type, ID);

        //delete from UI
        UICtrl.deleteListItem(itemID);

        //update budget
        updateBudget();
    }
};

  return {
    init: function() {
      console.log("Application has started.");
      UICtrl.displayBudget({budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1});
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();

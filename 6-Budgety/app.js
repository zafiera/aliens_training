var budgetController = (function(){

    //blueprint content received from user inputs
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp:0,
            inc:0
        }
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;

            //create unqiue ID for each set of data thats saved
            if(data.allItems[type].length>0){

                ID = data.allItems[type][data.allItems[type].length-1].id +1;

            }else{
                ID = 0;
            }
            
            //creates item based whether its an expense or income
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if(type==='inc'){
                newItem = new Income(ID, des, val);

            }

            //pushes data into data structure
            data.allItems[type].push(newItem);

            //returns new element
            return newItem;
        },

        testing: function(){
            console.log(data);
        }
    };
    
})();

var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn:'.add__btn'
    };

    return{
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
    //
})();

var controller = (function(budgetCtrl, UICtrl){
    
    setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItems);
        document.addEventListener('keypress', function(e){
            if(e.keyCode===13 || e.which ===13){
                ctrlAddItems();
            }
        });

    };

    var ctrlAddItems = function(){

        var input, newItem;
        //gets input from user
        input = UICtrl.getInput();

        //adds data to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    };

    return{
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };
        
})(budgetController, UIController);

controller.init();
setupEventListeners();
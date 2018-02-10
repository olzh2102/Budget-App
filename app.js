// BUDGET CONTROLLER MODULE

var budgetController = (function() {

		var Expense = function(id, description, value) {
				this.id = id;
				this.description = description;
				this.value = value;;
		};

		var Income = function(id, description, value) {
				this.id = id;
				this.description = description;
				this.value = value;;
		};

})();

// UI CONTROLLER MODULE

var UIController = (function() {

		var DOMStrings = {
			inputType: '.add__type',
			inputDescription: '.add__description',
			inputValue: '.add__value',
			inputBtn: '.add__btn'
		}

		return {
				getInput: function() {
						return {
								type: document.querySelector(DOMStrings.inputType).value, // Gets inc or exp values
								description: document.querySelector(DOMStrings.inputDescription).value,
								value: document.querySelector(DOMStrings.inputValue).value
						};
				},

				getDOMStrings: function() {
					return DOMStrings;
				}
		};
})();

// GLOBAL APP CONTROLLER MODULE

var controller = (function(budgetCtrl, UICtrl) {

		var setupEventListeners = function() {

				var DOM = UICtrl.getDOMStrings();

				document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

				document.addEventListener('keypress', function(event) {
						if(event.keyCode === 13) {
								ctrlAddItem();
						}
				});
		};

		var ctrlAddItem = function() {

				// 1. Get the field input data
				var input = UICtrl.getInput();

				// 2. Add the item to the budget controller

				// 3. Add the item to the UI

				// 4. Calculate the budget

				// 5. Display the budget on the UI
		};

		return {
				init: function() {
						console.log('App starts');
						setupEventListeners();
				}
		};

})(budgetController, UIController);


controller.init();

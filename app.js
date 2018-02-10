// BUDGET CONTROLLER MODULE

var budgetController = (function() {
	return {
		publicTest: function() {

		}
	}
})();

// UI CONTROLLER MODULE

var UIController = (function() {
	return {
		getInput: function() {
			return {
				type: document.querySelector('.add__type').value, // Gets inc or exp values
				description: document.querySelector('.add__description').value,
				value: document.querySelector('.add__value').value
			};
		}
	};
})();

// GLOBAL APP CONTROLLER MODULE

var controller = (function(budgetCtrl, UICtrl) {
	var ctrlAddItem = function() {

		// 1. Get the field input data
		var input = UICtrl.getInput();

		// 2. Add the item to the budget controller

		// 3. Add the item to the UI

		// 4. Calculate the budget

		// 5. Display the budget on the UI
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {
		if(event.keyCode === 13) {
			ctrlAddItem();
		}
	});
})(budgetController, UIController);

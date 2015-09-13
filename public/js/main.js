var leftoverBudget;
var counter = 1;
	var cur = 2;

$(document).ready(function(){
	// console.log("ayo");


// $('#enter').click(function(){
// 	// console.log(counter);
// 	var currAdd = 1;
// 	// console.log(currAdd);

// 	var budget = parseInt($("#budget").val());
// 	while(currAdd <= counter){
// 		// console.log("here");
// 		var currID = String("#textbox"+currAdd);
// 		if(parseInt($(currID).val()) != NaN){
// 			console.log(budget - parseInt($(currID).val()));
// 		}
// 		++currAdd;
// 	}
// });

	


});

	$("#addButton").click(function(e){
		// e.stopPropagation();

		    console.log("hit");

		var newTextBoxDiv =  $(document.createElement('div')).attr("id", 'TextButtonDiv' + counter);

		newTextBoxDiv.after().html('<label>Item '+ cur + ' : </label>' +
		      '<input type="text" name="textbox' + cur + 
		      '" class = "boxes" id="textbox' + cur + '" value="" >');
	            

					
		 ++counter;
	     ++cur;

		newTextBoxDiv.appendTo("#TextBoxesGroup");
	     });
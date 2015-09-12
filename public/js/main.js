var leftoverBudget;
var counter = 1;
$(document).ready(function(){
	var cur = 2;
	$("#addButton").click(function(){
		
		var newTextBoxDiv =  $(document.createElement('div')).attr("id", 'TextButtonDiv' + counter);

		newTextBoxDiv.after().html('<label>Item '+ cur + ' : </label>' +
		      '<input type="text" name="textbox' + cur + 
		      '" class = "boxes" id="textbox' + cur + '" value="" >');
	            
		newTextBoxDiv.appendTo("#TextBoxesGroup");

					
		 ++counter;
	     ++cur;
	     });

$('#enter').click(function(){
	// console.log(counter);
	var currAdd = 1;
	// console.log(currAdd);

	var budget = parseInt($("#budget").val());
	while(currAdd <= counter){
		// console.log("here");
		var currID = String("#textbox"+currAdd);
		if(parseInt($(currID).val()) != NaN){
			console.log(budget - parseInt($(currID).val()));
		}
		++currAdd;
	}
});

	


});


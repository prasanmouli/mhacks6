var leftoverBudget;
var counter = 1;
	var cur = 1;

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
	var newTextBoxDiv =  $(document.createElement('div')).attr("id", 'TextButtonDiv' + counter);
	var curr = "ITEM: " +
	newTextBoxDiv.after().html('<input class="boxes" autocomplete="off" type="text" name="textbox' + cur + '" id="textbox' + cur + '" placeholder="Enter Item Here" ><input type="submit" value="+" class="enterButton" id="enter' + cur + 'name="enter' + cur + '>');
	++counter;
	++cur;
	newTextBoxDiv.appendTo("#leftcolumn");
});
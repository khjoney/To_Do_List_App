//To do list app
//Done by Kaiser Joney
//Date : 17th April 2020;
//check oof specific todos by clicking
$("ul").on("click", "li" , function(){
	$(this).toggleClass("completed");

	//bottom part does the same thing as the line above
	// //console.log($(this).css("color"));
	// //if li is gray
	// if($(this).css("color") ==="rgb(128, 128, 128)"){
	// 	//console.log("It is currently gray");
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration:"none"
	// 	});
	// }
	// else{
	// 	$(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// });
	// }
	
	// //$(this).css("color","gray");
	// //$(this).css("text-decoration","line-through");
	//event.stopPropagation();
});

//Click on x to delete todo:
// $("span").click(function(event){
// 	//$(this).parent().remove();
// 	$(this).parent().fadeOut(500,function(){
// 		$(this).remove();
// 	});
// 	//alert("Clicked on a span");
// 	event.stopPropagation();
// });

$("ul").on("click", "span" , function(event){
	//$(this).parent().remove();
	$(this).parent().fadeOut("slow",function(){
		$(this).remove();
	});
	//alert("Clicked on a span");
	event.stopPropagation();
});

//$("input[type='text']").keypress(function(event){

$("input[type='text']").keypress(function(event){
	//console.log("Key pressed");
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

	}
	

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})

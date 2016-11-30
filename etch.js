$(document).ready(function(){

	var size = 30;

	function makeGrid(){
		for(var i = 0; i < size; i++){
			for(var j = 0; j < size; j++){
				$("body").append("<div class='cell'></div>");
			}

		}

		$(".cell").wrapAll("<div class='wrapper'></div>");
		$(".cell").css({"vertical-align": "top"});

		var containerWidth = $(".wrapper").width();
		var squareBorder = 1;
		var squareWidth = containerWidth/size - 2*squareBorder;
		$(".cell").width(squareWidth);
		$(".cell").height(squareWidth);

		$(".cell").mouseenter(function(){
			$(this).addClass("highlight");
		});



	}//function makeGrid

		makeGrid();



		$("#size").click(function(){
			$(".cell").remove();
			$("#container").remove();
			size = prompt("How many squares would you like?");
			makeGrid();

		});

		$("#clear").click(function(){
			$(".cell").removeClass("highlight");

		})
		


	







});
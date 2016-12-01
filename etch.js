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

		//$(".cell").mouseenter(function(){
			//$(this).addClass("highlight");
		//});



	}//function makeGrid

		makeGrid();

		$(".styled-select").change(function(){
			var color = $(this).val();
			switch(color){

				case 'black': 

					$('.cell').mouseenter(function(){
						$(this).css("background-color", 'black');

				});
					break;

				case 'red':
					$('.cell').mouseenter(function(){
						$(this).css("background-color", 'red');
					});
					break;

				case 'blue':
					$('.cell').mouseenter(function(){
						$(this).css("background-color", 'blue');
					});
					break;
				case 'rainbow':
					$('.cell').mouseenter(function(){
							var multiplecolor = 'rgb(' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ')';
							$(this).css("background-color", multiplecolor);

					});
					break;




			}



		});



		$("#size").click(function(){
			$(".cell").remove();
			$("#container").remove();
			size = prompt("How many squares would you like?");
			makeGrid();

		});

		$("#clear").click(function(){
			$(".cell").css("background-color", 'white');

		})
		


	







});
$(document).ready(function(){

	var randNumber = Math.floor((Math.random() * 100) + 1);/* this is very cool!*/
	var uGuess; //remember the number
	var count=0;//counter variable,duhh

	console.log(randNumber);

	$("#guessButton").click(function(){
		uGuess = $('#userGuess').val();
		console.log(uGuess);
		console.log("hello?");
		evaluate(uGuess);
		$('#userGuess').val(' ');//zeroize
		return false;
		
	});

	function evaluate(){
		count++
		if (uGuess < randNumber){
			alert('Oops, too low try again');
		}
		else if (uGuess > randNumber){
			alert('Sorry too high');
		}
		else {
			alert("You're right in " + count +" guesses!");
			location.reload();
		}
		console.log("count: " + count);
		$("#count").text(count);
	}

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});



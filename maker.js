var numr,max,min,next2,next2Counter;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Recursive Funation that manip. Remained numbers to given array
function mainpArrayWith(rm, mn, mx, ar){

				
		if( Math.sign( rm ) == 1)
		{					

				for( ti=0; ti < ar.length; ti++ ){

					if( rm == 0 ) break;

						if( ar[ti] == mx ){
							continue;
						}
						// else if( ar[ti] == currentNum ){
									ar[ti]	+= 1;
									rm 		-= 1;
						// }
					}
		}
		else if( Math.sign( rm ) == -1 ){
		
			for( ti=0; ti < ar.length; ti++ ){

					if( rm == 0 ) break;
					
					if( ar[ti] == mn ){
						continue;
					}
						// else if( ar[ti] == currentNum ){
								ar[ti]	-= 1;
								rm 		+= 1;
						// }
				}

		}	


	if ( rm != 0  ){
		// currentNum += 1;
	
		// console.log("rm = "+ rm);
		// console.log("sum = "+ sumIt(ar));

		return mainpArrayWith( rm, mn, mx, ar );

	// }else if( rm < 0 ){
	// 	// currentNum -= 1;

		// return mainpArrayWith( rm, mn, mx, ar );

	}
	else
	{
			return ar;
	}

}



// function returns Random number from a given range
function r(mn,mx)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


// function  logs sum of arrray
function sumIt(ar){
	var sum =0;
	for(x=0;x<ar.length;x++){
		sum+= ar[x];
	}
	console.log(sum);
}

function getEqual( mm ){

	chks = mm;

	if( mm == undefined || chks.toString().trim() == "" || isNaN(mm) ){
		return;
	}
	
	if( mm < (min *40) ){
		str= " Total Must be > "+ (min*40) + ", becuase Minimum Posiibility is "+ min +" * 40 "; 
		console.error(str);
		alert(str);
		return "error";
	}

	// Initially Remained is equal to Maximum 
	var remained = mm;
	var tr = Array();

			for( i=0 ; i< 40 ; i++ ){
				tmp =  r(min,max);
				remained -= tmp;
				tr.push( tmp );
			}
	

		// sumIt(tr);
	
 		// var cn = min;
	 	// if( Math.sign( remained ) == -1 ){
	 	// 	cn = max;
	 	// }

	 	var arr = mainpArrayWith( remained,  min, max, tr );
		
		var arShuff = shuffle( arr );
		

		console.log(arShuff);
		sumIt(arShuff);

		return tr;

}



$(document).ready(function () {
	
	$("#apply").hide();

	$("#action").click(function(){
		numr = parseInt($("#numr").val());
		max = parseInt($("#max").val());
		min = parseInt($("#min").val());


		$("#tblcntainer").html("");
		$("#mrkstbl").html("");
		for( i = 0 ; i < numr ; i++ ){

			var htm = '<tr><td class=" rx" data-in="'+i+'" ><input type="text" class="ipx" placeholder="Marks '+(i+1)+'"></input></td></tr>';
			$("#tblcntainer").append(htm);
			$("#mrkstbl").append('<tr class="rxp" id="data'+i+'"></tr>');
		}

		$("#action").prop("disabled",true);
		$("#action").addClass("disabled");
		$("#apply").show();


	});



	$("#apply").click(function(){

			 // console.log (myVal);
			 // return;

			 $(".rx").each(function(){
			 		
			 		var	myVal = parseInt( $(this).find("input").val() );
			 		var dataArr = getEqual( myVal );

			 		ixx=  $(this).data("in");
			 		var self = $("#data"+ixx);
			 		
			 		console.log(dataArr);

			 		$.each( dataArr , function( index, value ) {					
			 			self.append("<td>"+ dataArr[index] +"</td>");

					});


			});	
	});
});
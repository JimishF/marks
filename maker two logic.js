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

function mainpArrayWith(rm, currentNum, mn, mx, ar){

				
		if( Math.sign( rm ) == 1)
		{					

				for( ti=0; ti < ar.length; ti++ ){

					if( rm == 0 ) break;

						if( ar[ti] == mx ){
							continue;
						}
						else if( ar[ti] == currentNum ){
									ar[ti]	+= 1;
									rm 		-= 1;
						}
					}
		}
		else if( Math.sign( rm ) == -1 ){
		
			for( ti=0; ti < ar.length; ti++ ){

					if( rm == 0 ) break;
					
					if( ar[ti] == mn ){
						continue;
					}
					else if( ar[ti] == currentNum ){
								ar[ti]	-= 1;
								rm 		+= 1;
						}
				}

		}


	if ( rm > 0  ){

		currentNum += 1;
		return mainpArrayWith( rm, currentNum, mn, mx, ar );

	}else if( rm < 0 ){
		currentNum -= 1;
		return mainpArrayWith( rm, currentNum, mn, mx, ar );

	}
	else{
			return ar;
		}
}

function r(mn,mx)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function sumIt(ar){
	var sum =0;
	for(x=0;x<ar.length;x++){
		sum+= ar[x];
	}
	console.log(sum);
}

function getEqual( mm ){

	// Initially Remained is equal to Maximum 
		
		var remained = mm;
		var avg = mm/40;
		var sum = 0;

	var tr = Array();
	for( i=0 ; i< 40 ; i++ ){



			if( remained / ((40-i)+1) > avg ){
				next2 = true;
				next2Counter = 0; 
			}
			if( next2Counter >= 2 ){
				next2 = false;
				next2Counter=0;
			}

			if( next2 == true ){
				next2Counter ++;

					tr.push( max );
					remained -= max;

			}
			else{

				tmp =  r(min,max);
				remained -= tmp;

				tr.push( tmp );
				
			}

	}

	sumIt(tr);
	
 	cn = min;
 	if( Math.sign( remained ) == -1 ){
 		cn = max;
 	}

	 	var arr = mainpArrayWith( remained, cn,  min, max, tr );
		sumIt(tr);

	var arShuff = shuffle( arr );

	console.log(arShuff);

}

$(document).ready(function () {
	

	$("#apply").hide();

	$("#action").click(function(){
		numr = $("#numr").val();
		max = $("#max").val();
		min = $("#min").val();

		$("#tblcntainer").html("");

		for( i = 0 ; i < numr ; i++ ){

			var htm = '<tr><td class="input-field rx col s2"><input type="text" placeholder="Marks of '+(i+1)+'"></input></td></tr>';
			$("#tblcntainer").append(htm);
		}
		$("#apply").show();

	});
});
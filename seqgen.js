inlets = 1;
outlets = 4;



function bang(){
	
	a1_seq = "";
	a2_seq = "";
	a3_seq = "";
	a4_seq = "";
	//generate vals for each alien
	
	//for a1 (additive-alien): need 10 initial midi values between 25 and 70
	for (i = 0; i < 10; i++){
		a1_seq += (Math.floor(Math.random()*45)+25).toString() + " ";
	}
	outlet(0, a1_seq);
	
	//for a2 (gloop-alien): need 8 initial frequencies between 70 and 500
	for (i = 0; i < 8; i++){
		a2_seq += (Math.floor(Math.random()*430)+70).toString() + " ";
	}
	outlet(1, a2_seq);
	
	//for a3 (granular-alien): need 8 initial durations between 0 and 200
	for (i = 0; i < 8; i++){
		a3_seq += (Math.floor(Math.random()*200)).toString() + " ";
	}
	outlet(2, a3_seq);
}
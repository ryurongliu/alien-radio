inlets = 1;
outlets = 10;

xdim = 0;
ydim = 0;

function dimensions(X, Y){
	xdim = X;
	ydim = Y;
	
}

function bang(){

	//generate 30-40 single pixel stars
	num_pixstars = Math.floor(Math.random()*10) + 70; 
	for (i = 0; i < num_pixstars; i++){
		xstar = Math.floor(Math.random() *xdim);
		ystar = Math.floor(Math.random() *ydim);
		outlet(0, xstar);
		outlet(1, ystar);
	}
	
	//locate alien music (4)
	for (j = 0; j < 4; j++){
		xalien = Math.floor(Math.random() *xdim);
		yalien = Math.floor(Math.random() *ydim);
		outlet(2*j+2, xalien);
		outlet(2*j+3, yalien);
	}
	
	
}
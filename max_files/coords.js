inlets = 1;
outlets = 2;

xcoord = 0;
ycoord = 0;

xdim = 0;
ydim = 0;

function dimensions(X, Y){
	xdim = X;
	ydim = Y;
	xcoord = xdim/2;
	ycoord = ydim/2;
	post("new dimensions:");
	post(xdim, ydim);
}

function coords(ud, lr){
	
	
	if (ud != 0){
		ycoord += ud;
	}
	if (lr != 0){
		xcoord += lr;
	}
	
	if (ycoord > ydim-1){
		ycoord = ydim-1;
	}
	if (ycoord < 0) {
		ycoord = 0;
	}
	if (xcoord > xdim-1){
		xcoord = xdim-1;
	}
	if (xcoord < 0){
		xcoord = 0;
	}
	outlet(0, xcoord);
	outlet(1, ycoord);
	
}

inlets = 1;
outlets = 4;

a_x = [0, 0, 0, 0];
a_y = [0, 0, 0, 0];

radius = 20;

function aliens(x1, y1, x2, y2, x3, y3, x4, y4){
	a_x[0] = x1;
	a_y[0] = y1;
	a_x[1] = x2;
	a_y[1] = y2;
	a_x[2] = x3;
	a_y[2] = y3;
	a_x[3] = x4;
	a_y[3] = y4;
	post(a_x);
	post(a_y);
}

function position(xpos, ypos){
	
	//calculate distance from each alien
	//if distance < certain radius 

	for(i = 0; i < 4; i++){
		distance = Math.sqrt((xpos-a_x[i])*(xpos-a_x[i]) + (ypos-a_y[i])*(ypos-a_y[i]));
		outlet(i, distance); 
			
	}
	
}
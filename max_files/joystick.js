inlets = 2;
outlets = 2;

function joystick(x, y){
	
	if (x > 2000){
		//post("down");
		outlet(0, 1);
		}
	else if (x < 1500){
		//post("up");
		outlet(0, -1);
		}
		
	else{
		outlet(0, 0);
		}
		
		
	if (y > 2000){
		//post("left");
		outlet(1, -1);
		}
	else if (y < 1500){
		//post("right");
		outlet(1, 1);
		}
		
	else{
		outlet(1, 0);
		}
	
	}
	

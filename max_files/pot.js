inlets = 1;
outlets = 4;


val = 0;

function pot(x){
	
	diff = x - val;
	if (diff < 0){
		diff = -diff;
	}
	
	if (diff > 5){
		val = x;
	}
	
	
	toRGB = parseInt(val * 255 / 4095);
	R = 255 - toRGB;
	
	filt = val*900/4095 + 100;
	
	outlet(0, toRGB);
	outlet(1, R);
	outlet(2, filt);
	outlet(3, val);
	
	
}

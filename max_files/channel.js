inlets = 1;
outlets = 6;

channels = [0, 0, 0, 0];


function bang(){
	
	//define each alien's radio channel between 100-1000 (same as filt values)
	for (i = 0; i < 4; i++){
		channels[i] = Math.floor(Math.random()*900) + 100; 
		
	}
	post("channels");
	post(channels);
	post("end channels");
	outlet(5, channels);
}

function filt(currfilt, dist1, dist2, dist3, dist4){
	
	dists = [dist1, dist2, dist3, dist4];
	
	noise_vols = [0,0,0,0];
	
	for (i = 0; i < 4; i++){
		
	    //volume depends on distance from alien and distance from channel
		channel_dist = Math.abs(currfilt - channels[i]); 
		channel_norm = Math.max(channels[i], 1000-channels[i]);

		
		//normalize disti to 20, normalize channel_dist to channel
		//1 - (dist)(channel_dist) gives 1 when closest and 0 when farthest
		//multiply by 120 to have max 150
		//add to 30 as baseline volume when in range
		
		if (dists[i] < 20){
			channeled_vol = 30 + 30*(1-(dists[i]/20)) + 80*(1-(channel_dist/channel_norm));
			noise_vols[i] = 70*channel_dist/channel_norm; 
		}
		else{
			channeled_vol = 0;
			noise_vols[i] = 70;
		}
		outlet(i, channeled_vol);
	}
	noise_vol = Math.max(noise_vols[0], noise_vols[1], noise_vols[2], noise_vols[3]);
	outlet(4, noise_vol);
	
	
	
	
	
}

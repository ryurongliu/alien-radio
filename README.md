# Alien Radio
An interactive mini music game made with ESP32 and MaxMSP. Travel the universe in search of alien radio channels playing alien sounds!

## [Video Demo](https://www.youtube.com/watch?v=H4B6xMbdaH4)
[![Alien Radio Video Demo](https://img.youtube.com/vi/H4B6xMbdaH4/maxresdefault.jpg)](https://www.youtube.com/watch?v=H4B6xMbdaH4)
  
## Concept
The hardware controller makes use of three inputs: a joystick, a potentiometer, and a momentary switch. 
1. Joystick (MOVE): use the joystick to pilot your spacecraft around.
2. Potentiometer (TUNE): twist the potentiometer to tune in to the alien channels' specific frequencies. Your spacecraft changes color according to the frequency you're currently listening to.
3. Switch (TELEPORT): when you've finished exploring this window of the universe, press the button to teleport to a new area.

The distance from each alien radio station is displayed along the bottom of the screen. Alien stations will appear on the map when you get within 20 units away. Their colors reflect their channel's specific frequency. The universe is populated with four types of alien radio stations.
1. ADDITIVE-ALIEN: these aliens enjoy additive synthesis, with random sequencing based on an initial set of note frequencies.
2. GLOOPY-ALIEN: these aliens play sine waves through lots of delays and panning, also randomized on initial frequencies.
3. GRANULAR-ALIEN: these aliens use granular synthesis on pre-existing (human) music, with randomized grain selection and playback based on initial durations. 
4. BACKWARD-ALIEN: these aliens like to play human music backwards, with LFO-swept panning.

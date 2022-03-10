#define BUTTON 26

#define POT 12

#define X 13

#define Y 25

#define JBUTTON 15



void setup() {
  // put your setup code here, to run once:
  pinMode(BUTTON, INPUT_PULLUP);
  pinMode(JBUTTON, INPUT_PULLUP);
  Serial.begin(9600);

}

void loop() {
  int buttonState = digitalRead(BUTTON);
  int potState = analogRead(POT);
  int xState = analogRead(X);
  int yState = analogRead(Y);
  int joyState = digitalRead(JBUTTON);
  Serial.print(buttonState);
  Serial.print(" ");
  Serial.print(potState);
  Serial.print(" ");
  Serial.print(xState);
  Serial.print(" ");
  Serial.print(yState);
  Serial.print(" ");
  Serial.println(joyState);
  
  // put your main code here, to run repeatedly:

}

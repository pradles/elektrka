
// the setup function runs once when you press reset or power the board

const int ACPin=A1;
#define ACTectionRange 20;
#define VREF 5.0


float readACCurrentvaIue() {
  float ACCurrtntValue = 0;
  float peakVoltage = 0;
  float voltageVirtualValue = 0;
  for (int i = 0; i < 5; i++) {
    peakVoltage += analogRead(ACPin) ;
    delay(1);
  }
  //Vrms
  peakVoltage = peakVoltage / 5;
  voltageVirtualValue = peakVoltage * 0.707;
  voltageVirtualValue = (voltageVirtualValue / 1024 * VREF ) / 2;
  ACCurrtntValue = voltageVirtualValue * ACTectionRange;

  // pretvorba

  float moc = ACCurrtntValue * 220;
  
  return moc;
}

void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  Serial.begin(115200);
  pinMode(13,OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  float ACCurrentValue = readACCurrentvaIue();
  Serial.println(ACCurrentValue);
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}

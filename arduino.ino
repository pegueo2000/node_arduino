
char a = 'n';
void setup() {
  
  Serial.begin( 9600 );
  pinMode(8,OUTPUT);
}

void loop() {
  
if(Serial.available())
  a = Serial.read();
if(a == '1'){
  digitalWrite(8,HIGH);
  a = 'n';
}
if(a == '0'){
  digitalWrite(8,LOW);
  a = 'n';
}
}

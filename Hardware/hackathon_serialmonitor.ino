#include <LiquidCrystal.h>



#include <DHT.h>
#include <DHT_U.h>

#include <Adafruit_Sensor.h>

#define DHTPIN 7     
#define DHTTYPE DHT11
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
DHT dht(DHTPIN, DHTTYPE);

int soilMoisturePin = A0;

void setup() {
  Serial.begin(9600);  
  dht.begin();  
lcd.begin(16, 2);

  lcd.print("hello, world!");
}

void loop() {

  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  int soilMoistureValue = analogRead(soilMoisturePin);
int moisturePercentage = map(soilMoistureValue, 1023, 0, 0, 100);
  Serial.println("Humidity: ");
  Serial.println(humidity);
  Serial.println("%");
  Serial.println("Temperature: ");
  Serial.println(temperature);
  Serial.println("°C");
  Serial.println("Moisture Level: ");
  Serial.println(moisturePercentage);
  Serial.println(" %");


  delay(2000); 
}

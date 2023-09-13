
var mqtt;
var reconnectTimeout = 2000;
var host="b3fe1e12e91a4f85a9f2e2c013188600.s1.eu.hivemq.cloud";
var port=8884;


 function onConnect() {
// Once a connection has been made, make a subscription and send a message.

console.log("Connected ");
//mqtt.subscribe("sensor1");
document.querySelector(".A").addEventListener("click", function(){
  message = new Paho.MQTT.Message("on");
message.destinationName = "fan";
mqtt.send(message);})
document.querySelector(".B").addEventListener("click", function(){
  message = new Paho.MQTT.Message("off");
message.destinationName = "fan";
mqtt.send(message);})
}
function MQTTconnect() {
console.log("connecting to "+ host +" "+ port);
  var x=Math.floor(Math.random() * 10000); 
var cname="orderform-"+x;
mqtt = new Paho.MQTT.Client(host,port,cname);
//document.write("connecting to "+ host);
var options = {

  timeout: 3,
  password: "pcgtx260A",
  userName: "hammad2480",
  useSSL: true,
  onSuccess: onConnect,
  
 };
 
mqtt.connect(options); //connect
}
	MQTTconnect();


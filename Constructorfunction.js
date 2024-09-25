function iPhone3(ASIN, display, color, camera, bluetooth) {
   (this.ASIN = ASIN),
    (this.display = display),
    (this.color = color),
    (this.camera = camera),
    (this.bluetooth = bluetooth);

  this.dial = function () {
    return "tring...tring...";
  };
  this.sendMessage = function () {
    return "Sending Message";
  };
  this.cameraClick = function () {
    return "camera clicked";
  };
  this.connectBluetooth = function () {
    return "Bluetooth connected successfully";
  };
}
let i3 = {};
iPhone3.call(i3, 1, "B09X67JBQV", 7.8, "2.0 MP", "Bluetooth 5.1");

console.log(i3.ASIN); // 1
console.log(i3.color); // B09X67JBQV
console.log(i3.display); // 7.8
console.log(i3.camera); // IOS
console.log(i3.bluetooth); // 128mb

console.log(i3.dial());
console.log(i3.sendMessage());
console.log(i3.cameraClick());
console.log(i3.connectBluetooth());

let i31 = {};
iPhone3.apply(i3, [1, "B09X67JBQV", 7.8, "2.0 MP", "Bluetooth 5.1"]);

console.log(i31.dial());
console.log(i31.sendMessage());
console.log(i31.cameraClick());
console.log(i31.connectBluetooth());

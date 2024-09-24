class Iphone4 {
  constructor(ASIN, color, display, camera, bluetooth) {
    (this.ASIN = ASIN),
      (this.color = color),
      (this.display = display),
      (this.camera = camera),
      (this.bluetooth = bluetooth);
  }
  dial() {
    return "tring...tring...";
  }

  sendMessage() {
    return "Sending Message";
  }
  cameraClick() {
    return "Camera Clicked";
  }
  connectBluetooth() {
    return "Bluetooth connected successfully";
  }
}
let i4 = new Iphone4(1, "BBQ9X67BQV", "IOS", "128mb", "Gray", "90mm", "2.0 MP");
console.log(i4.ASIN);
console.log(i4.color);
console.log(i4.display);
console.log(i4.camera);

console.log(i4.dial());
console.log(i4.sendMessage());
console.log(i4.cameraClick());
console.log(i4.connectBluetooth());

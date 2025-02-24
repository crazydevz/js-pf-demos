function DummyObj() {
  this.prop1 = "Dummy-1";
  this.prop2 = "Dummy-2";
  this.funct1 = function () {
    console.log(this.prop1, this.prop2);
  }.bind(this); // Try removing the this binding and see what happens
  // this.funct1 = () => {
  //   console.log(this.prop1, this.prop2);
  // };
}

const dummyObj = new DummyObj();
otherFunct = dummyObj.funct1;

otherFunct();

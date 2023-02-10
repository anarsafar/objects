let obj = {
  name: "Akif", //data property accessor property,
  //   get getInfo() {
  //     return this.name;
  //   },
  //   set setInfo(nam) {
  //     this.name = nam;
  //   },
  //   true: 1,
  //   undefined: "skdnakjsdfakjs",
  //   null: null,
  age: 27,
  mentalAge: 77,
};

// delete obj.mentalAge;

console.log(obj);
// obj.setInfo = "Nicat";

// console.log(obj.getInfo);

// console.log(obj.name);

// console.log(Object);

// function Car(year, model) {
//   this.year = year;
//   this.model = model;
// }

// Car.prototype.getInfo = function () {
//   return `${this.year} ${this.model}`;
// };

// const myCar = new Car("1967", "shelby gt500");

// console.log(myCar.getInfo());

// console.log(myCar);

// console.log(obj.__proto__ === Object.prototype);

// const myObj = Object.create(null);
// console.log(myObj);

const namePropery = Object.getOwnPropertyDescriptor(obj, "name");
console.log(namePropery);

Object.defineProperty(obj, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

// Object.defineProperty(obj, "name", {
//   writable: true,
// });

obj.name = "";

console.log(obj);

for (let key in obj) {
  console.log(key);
}

// const str = JSON.stringify(obj);

// console.log(str);

let obj2 = {
  data: "data",
  data2: "data2",
  name: {
    age: 23123,
  },
  getInfo: function () {
    return this.data;
  },
};

let copy = {};

console.log(copy);

for (let key in obj2) {
  copy[key] = obj2[key];
}

obj2.data = "";
obj2.name.age = "";
obj2.getInfo = "";

console.log(copy);

const str = JSON.stringify(obj2);
const data = JSON.parse(str);

obj2.data = "";
obj2.name = {};
obj2.getInfo = "";

console.log(data);

let destinatinObj = {};

let source = {
  name: "Anar",
  age: 25,
  data: {
    data2: "mahmut",
    data3: {
      data4: "aaaaaa",
    },
  },
  getInfo() {
    return this.name;
  },
};

function deepCopy(destinatinObj, source) {
  for (let key in source) {
    if (typeof source[key] !== "object") {
      destinatinObj[key] = source[key];
    } else {
      destinatinObj[key] = {};
      deepCopy(destinatinObj[key], source[key]);
    }
  }
}

deepCopy(destinatinObj, source);

source.name = "";
source.data.data2 = "";
source.data.data3.data4 = "";

console.log(destinatinObj);

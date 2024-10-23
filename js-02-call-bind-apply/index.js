const p2 = {
  fname: "Ayushee",
  lname: "Shaw",

  fullname: function () {
    console.log(`${this.fname} ${this.lname}`);
  },
};

const p3 = {
  fname: "XYZZZZ",
};

// const f = p1.fullname.bind(p3);
// f();

// function standaloneFunction() {
//   console.log(this.fname);
// }

// const fn = standaloneFunction.bind(p1);

// fn();

// [Bind, Call and Apply]
//   🔥     |

// const fn = p1.fullname.bind(p2);

// fn(1, 2, 3);

const p1 = {
  fname: "Piyush",
  lname: "Garg",

  fullname: function (arr) {
    console.log(`${this.fname} ${this.lname} ${arr}`);
  },
};

// If you know excalty the number of params you can use .call
p1.fullname.call(p2, [4, 5, 9]);

// If you are taking params dynmically from user in that case you can use .apply
p1.fullname.apply(p1, [[4, "Piyush", 9, 10]]);

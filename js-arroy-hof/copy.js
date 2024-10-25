const o1 = {
  fname: "Piyush",
  lname: "Garg",
  address: { hno: 1, city: "Patiala" },
  favColors: ["Red", "Green", "Blue"],
};

// const o2 = o1; // I dont want to make a ref, I want to make a copy?

let o2 = JSON.parse(JSON.stringify(o1)); // Deep Copy

o1.fname = "Something Else";
o1.address.city = "Delhi";
o1.address.hno = 10;
o1.favColors.push("white");

console.log({ o1 });
console.log({ o2 });

//basics

/*let firstName = "John";
let surname = "Doe";
const DOB = "02/05/99";

console.log(`name: ${firstName} ${surname} DOB: ${DOB}`);

const name = `${firstName} ${surname}`;
console.log(name.startsWith("J"));
console.log(name.endsWith("oe"));
//includes= contains
//repeat()

//arrow function

const years = [1990, 1965, 1982, 1937];

var ages5 = years.map(function(el) {
  return 2016 - el;
});

console.log(ages5);

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Ages for ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear;
  return `Ages for ${index + 1}: ${2016 - el}.`;
});
console.log(ages6);

//continue arrow functions
//ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
      var self = this;
    document.querySelector(".green").addEventListener("click", function() {
      var str = "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  }
};

// box5.clickMe();

//ES6
.
const box6 = {
    color: "green",
    position: 1,
    clickMe: function() {
      document.querySelector(".green").addEventListener("click", () => {
        let str = "This is box number " + this.position + " and it is " + this.color;
        alert(str);
      });
    }
  };
  
  box6.clickMe();



const box6_1 = {
    color: "green",
    position: 1,
    clickMe: () => {
      document.querySelector(".green").addEventListener("click", () => {
        let str = "This is box number " + this.position + " and it is " + this.color;
        alert(str);
      });
    }
  };
  
  box6_1.clickMe();

  

function Person() {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + " is friends with " + el;
  }.bind(this));
  console.log(arr);
}

var friends = ["Bob", "Jane", "Mark"];
new Person('John').myFriends5(friends); 

//ES6
function Person() {
    this.name = name;
  }

Person.prototype.myFriends6 = function(friends) {
    let arr = friends.map(el => `${this.name} is friends with ${el}
    `);
    console.log(arr);
  }


  let friends = ["Bob", "Jane", "Mark"];
  new Person('Mike').myFriends6(friends);

  
// const [name, age] = ['John', 26];

//ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES5
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));


//spread operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6

const sum3 = addFourAges(...ages);
console.log(sum3);


//ES5

function isFullAge5() {
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= 18);
  });
}

isFullAge5(1990, 2012, 2000);

//ES6

isFullAge6 = (...years) => {
  years.forEach(element => console.log((2016 - element) >= 18));
};

isFullAge6(1990, 2012, 2000);



function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments,1);
    // console.log(argsArr)
    argsArr.forEach(function(cur) {
      console.log(2016 - cur >= limit);
    });
  }
  
  isFullAge5(21, 1990, 2012, 2000);
  
  //ES6
  
  isFullAge6 = (...years) => {
    years.forEach(element => console.log((2016 - element) >= 18));
  };
  
  isFullAge6(1990, 2012, 2000);
  

  //ES5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName;
  nationality === undefined ? nationality = 'American' : nationality;
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1999);

//ES6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
  }

const question = new Map();
question.set(
  "question",
  "What is the official name of the major JavaScript version"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "correct answer :D");
question.set(false, "Wrong, please try again!");

console.log(question.get("question"));

// question.forEach((value, key) => {
//     console.log(`This is ${key}, and this is is set to ${value}`);
// });

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer.'));
console.log(ans)
console.log(question.get(ans=== question.get('correct')));
  */

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
};

// var john5 = new Person5("John", 1990, "teacher");

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

//ES6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6{
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals = this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6("John", 1990, "swimmer", 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

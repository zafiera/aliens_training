class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi there ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += `Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person{

    constructor(name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += `I'm from ${this.homeLocation}`;
        }
        return greeting;
    }
}



const me = new Student("Zafiera", 19, "Science");
console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());

const travelerr = new Traveler("Andrew" , "CT")
console.log(travelerr.getGreeting())
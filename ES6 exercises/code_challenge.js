class TownElements {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Parks extends TownElements {
  constructor(name, buildYear, area, numberofTrees) {
    super(name, buildYear);
    this.area = area;
    this.numberofTrees = numberofTrees;
  }

  treeDensity() {
    const density = Math.round(this.numberofTrees / this.area);
    console.log(
      `${this.name} has tree density of ${density} trees per square km`
    );
  }
}

class Streets extends TownElements {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = 3;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(`${this.name}, built in ${this.buildYear}, 
    is a ${classification.get(this.size)} street`);
  }
}

const allParks = [
  new Parks("Green", 1810, 0.2, 215),
  new Parks("Oak", 1982, 2.9, 3123),
  new Parks("National", 1950, 0.4, 949)
];

const allStreets = [
  new Streets("Ocean Ave", 2008, 2.7, 4),
  new Streets("Darter Rd", 1990, 1.1, 2),
  new Streets("Wale Str", 2015, 0.8),
  new Streets("Ovary Str", 1982, 2.5, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, arr.length];
}

function reportParks(p) {
  console.log("PARKS REPORT");

  //density
  p.forEach(element => element.treeDensity());

  //avg age
  const ages = p.map(element => new Date().getFullYear - element.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  const trees1000 = p
    .map(element => element.numberofTrees)
    .findIndex(element => element >= 1000);
  console.log(`${p[trees1000].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log("STREET REPORT");

  const [totalLength, avgLength] = calc(s.map(element => element.length));
  console.log(
    `Our ${s.length} streets have a total length of ${parseInt(
      totalLength
    )} km, with an average of ${avgLength} km`
  );
}

reportParks(allParks);
reportStreets(allStreets);

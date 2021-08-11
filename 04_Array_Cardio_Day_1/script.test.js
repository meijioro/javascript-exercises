const chai = window.chai;
const expect = chai.expect;


describe('array cardio day 1 exercise', function(){

  const objArr = [
    { first: "Person", last: "One", year: 1560, passed: 1600 },
    { first: "Jane", last: "Doe", year: 1200, passed: 1205 },
    { first: "Gary", last: "Stu", year: 1501, passed: 1728 },
    { first: "Marie", last: "Curie", year: 1848, passed: 2001 },
  ];

  const arrPeople = [
    "Skywalker, Luke",
    "Organa, Leia",
    "Solo, Han",
    "Kenobi, Ben",
  ];

  it('Filter the list of inventors for those who were born in the 1500s', function(){
    const whatIWant = [
      { first: "Person", last: "One", year: 1560, passed: 1600 },
      { first: "Gary", last: "Stu", year: 1501, passed: 1728 }
    ];

    const result = getBirthDateFunc(objArr);
    expect(result).to.deep.equal(whatIWant);
  });


  it('Give us an array of the inventors first and last names', function(){
    const whatIWant = [
      { first: "Person", last: "One"},
      { first: "Jane", last: "Doe"},
      { first: "Gary", last: "Stu"},
      { first: "Marie", last: "Curie"},
    ];

    const result = getNamesFunc(objArr);
    expect(result).to.deep.equal(whatIWant);
  });


  it('Sort the inventors by birthdate, oldest to youngest', function(){
    const whatIWant = [
      { first: "Jane", last: "Doe", year: 1200, passed: 1205 },
      { first: "Gary", last: "Stu", year: 1501, passed: 1728 },
      { first: "Person", last: "One", year: 1560, passed: 1600 },
      { first: "Marie", last: "Curie", year: 1848, passed: 2001 },
    ];

    const result = ageOrderFunc(objArr);
    expect(result).to.deep.equal(whatIWant);
  });


  it('How many years did all the inventors live all together?', function(){
    const whatIWant = 425;
    const result = yearsTogetherFunc(objArr);
    expect(result).to.equal(whatIWant);
  });


  it('Sort the inventors by years lived', function(){
    const whatIWant = [
      { first: "Gary", last: "Stu", year: 1501, passed: 1728 }, // 227 years
      { first: "Marie", last: "Curie", year: 1848, passed: 2001 }, // 153 years
      { first: "Person", last: "One", year: 1560, passed: 1600 }, // 40  years
      { first: "Jane", last: "Doe", year: 1200, passed: 1205 }, // 5 years
    ];
    const result = sortYearsLivedFunc(objArr);
    expect(result).to.deep.equal(whatIWant);
  });


  it('Sort the people alphabetically by last name', function(){
    const whatIWant = [
      "Kenobi, Ben",
      "Organa, Leia",
      "Skywalker, Luke",
      "Solo, Han"
    ];
    const result = sortPeopleLastName(arrPeople);
    expect(result).to.deep.equal(whatIWant);
  });


  it('Sum up the instances of each of these', function(){
    const arr = ['a','b','d','d','a','e','a'];
    const whatIWant = {
      'a': 3,
      'b': 1,
      'd': 2,
      'e': 1
    };

    const result = reduceData(arr);
    expect(result).to.deep.equal(whatIWant);
  });

});
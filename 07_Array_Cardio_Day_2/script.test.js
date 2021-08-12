const chai = window.chai;
const expect = chai.expect;

describe("Array Cardio Day 2", function () {
  const people = [
    { name: "Luke", year: 1999 },
    { name: "Leia", year: 1984 },
    { name: "Han", year: 2020 },
    { name: "Yoda", year: 2016 },
  ];

  const comments = [
    { text: "Her?", id: 293 },
    { text: "Cool cool cool", id: 3934 },
    { text: "May the force be with you", id: 4 },
    { text: "I'm batman", id: 123456 },
    { text: "You're a wizard Harry", id: 28 },
  ];

  it("is at least one person 19 or older?", function () {
    const result = olderPpl(people);
    expect(result).to.be.true;
  });

  it("everyone 19 or older?", function () {
    const result = youngerPpl(people);
    expect(result).to.be.false;
  });

  it("find the comment with the ID of 28", function () {
    const whatIWant = { text: "You're a wizard Harry", id: 28 };

    const result = findComment(comments, 28);
    expect(result).to.deep.equal(whatIWant);
  });

  it("delete the comment with the ID of 823423", function () {
    const whatIWant = [
      { text: "Her?", id: 293 },
      { text: "Cool cool cool", id: 3934 },
      { text: "I'm batman", id: 123456 },
      { text: "You're a wizard Harry", id: 28 },
    ];

    const result = deleteComment(comments, 4);
    expect(result).to.deep.equal(whatIWant);
  });
});

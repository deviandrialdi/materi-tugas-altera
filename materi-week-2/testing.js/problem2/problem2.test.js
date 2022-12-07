const studentSocre = require("./problem2");

test("Test case 1", () => {
  expect(studentSocre(80)).toEqual("A");
});
test("Test case 2", () => {
  expect(studentSocre(75)).toEqual("B+");
});
test("Test case 3", () => {
  expect(studentSocre(111)).toEqual("invalid");
});
test("Test case 4", () => {
  expect(studentSocre(60)).toEqual("B");
});
test("Test case 5", () => {
  expect(studentSocre(30)).toEqual("D");
});

// if (score >= 80 && score <= 100) {
//     return "A";
//   } else if (score >= 65 && score <= 79) {
//     return "B+";
//   } else if (score >= 50 && score <= 64) {
//     return "B";
//   } else if (score >= 35 && score <= 49) {
//     return "C";
//   } else if (score > 0 && score <= 34) {
//     return "D";
//   } else {
//     return "invalid";

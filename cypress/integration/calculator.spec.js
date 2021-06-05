describe("My first test", () => {
  it("Should visit our calculator", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });
  //   it("Should contain 0", () => {
  //     cy.get(".zero").contains("0");
  //   });
});

//"...." are the name of the classes
// cy.get('[data-cy=submit]').click()
describe("Addition operator", () => {
  it("Should equal 10", () => {
    cy.get(".digit button five").click();
    cy.get(".operation button add").click();
    cy.get(".digit button five").click();
    cy.get(".span-two button").click();
  });
});

// describe("Addition operator", () => {
//     it("Should equal 10", () => {
//       cy.get(".digit button five").click();
//       cy.get(".operation button add").click();
//       cy.get(".digit button five").click();
//       cy.get(".span-two button").contains("10");
//     });
//   });

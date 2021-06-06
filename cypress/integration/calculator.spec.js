//install cypress:npm install cypress --save-dev
//run it: npm run e2e <e2e is the name of the script>, see package.json file

// Test if the calculator displays on a browser
describe("My first test", () => {
  it("Should visit our calculator", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });
  it("Should contain 0", () => {
    cy.get(".zero").contains("0");
  });
});

// Test "+" operator
describe("Addition operator", () => {
  it("Should equal 10", () => {
    cy.get(".five").click();
    cy.get(".add").click();
    cy.get(".five").click();
    cy.get(".equals").click();
    cy.get(".output").should("have.value", 10);
  });
});

// Test "/" operator
describe("Division operator", () => {
  it("Should equal 5", () => {
    cy.get(".two").click();
    cy.get(".five").click();
    cy.get(".division").click();
    cy.get(".five").click();
    cy.get(".equals").click();
    cy.get(".output").should("have.value", 5);
  });
});

// Test "*" operator
describe("Multiplication operator", () => {
  it("Should equal 150", () => {
    cy.get(".one").click();
    cy.get(".five").click();
    cy.get(".mult").click();
    cy.get(".one").click();
    cy.get(".zero").click();
    cy.get(".equals").click();
    cy.get(".output").should("have.value", 150);
  });
});

// Test "-" operator
describe("Subtraction operator", () => {
  it("Should equal 30", () => {
    cy.get(".six").click();
    cy.get(".zero").click();
    cy.get(".minus").click();
    cy.get(".three").click();
    cy.get(".zero").click();
    cy.get(".equals").click();
    cy.get(".output").should("have.value", 30);
  });
});

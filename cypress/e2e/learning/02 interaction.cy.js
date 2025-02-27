// / <reference types="cypress" / >
describe("interacting with input field", () => {
  it.skip("visit google homep page", () => {
    cy.visit("https://google.com");
  });

  it.skip("click on the input field and se search suggestion dropdown", () => {
    cy.get('[name="q"]').click();

    const searchDropdown = ".erkvQe > .OBMEnb";
    cy.get(searchDropdown).should("be.visible").contains("Penelusuran trending");

    // Clicking on google logo
    cy.get(".lnXdpd").click();
    cy.get(searchDropdown).should("not.be.visible");
  });

  it.skip("type bitfumes on the search input field and asset suggestion", () => {
    cy.get('[name="q"]').type("bitfumes");

    const searchDropdownList = ".erkvQe > .OBMEnb > ul";
    cy.get(searchDropdownList).find("li").eq(1).click();
    cy.contains("https://github.com/bitfumes");
  });

  it("type bitfumes on the search field and press Enter", () => {
    cy.visit("https://google.com");
    cy.get('[name="q"]').type("bitfumes {enter}");
    cy.contains(".l").click();
  });
});

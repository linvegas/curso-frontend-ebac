/// <reference types="cypress" />

describe("Testes para remover um contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });

  it("Deve remover um contato", () => {
    cy.get(".contato:first button.delete").click();

    cy.get(".contato").should("have.length", 3);
  });
});

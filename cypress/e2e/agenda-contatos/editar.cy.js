/// <reference types="cypress" />

describe("Testes para editar um contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });

  it("Deve editar um contato", () => {
    cy.get(".contato:first button.edit").click();

    cy.get('input[type="text"]').clear().type("Novo Fulano");

    cy.get("button.alterar").click();

    cy.get(".contato:first ul > li:first").should("contain", "Novo Fulano");
  });
});

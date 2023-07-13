/// <reference types="cypress" />

describe("Testes para adicionar um contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });

  it("Deve adicionar um contato", () => {
    cy.get('input[type="text"]').type("Fulano");
    cy.get('input[type="email"]').type("test.anom@mail.com");
    cy.get('input[type="tel"]').type("83912345678");

    cy.get(".adicionar").click();
    cy.get(".contato").should("have.length", 4);
  });
});

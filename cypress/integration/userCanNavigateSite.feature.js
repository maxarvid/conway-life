describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render the title", () => {
    cy.get("[data-cy=title]").should("contain", "Conway's Game of Life");
  });

  it("is expected to display a grid of cells", () => {
    cy.get("[data-cy=grid]").should("be.visible");
  });

  it("is expected to render an about button", () => {
    cy.get("[data-cy=about-btn]").should("be.visible");
  });

  it("is expected to render an about modal when about button is clicked", () => {
    cy.get("[data-cy=about-btn]").click();
    cy.get("[data-cy=about").should("contain.text", "Here is an explanation");
  });
});

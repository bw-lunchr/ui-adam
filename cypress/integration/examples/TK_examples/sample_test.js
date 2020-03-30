context('Testing Cypress', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5503/index.html')
  })

  it('gets the document object', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('has title: Luncher', () => {
    cy.title().should('include', 'Luncher')
  })

  it('has the correct text in the nav', () => {
    cy.get('.pageWrapper').contains('nav', 'Luncher')
    cy.get('h1').contains('Luncher')
    cy.get('.links').contains('Home')
    cy.get('.links').contains('About Us')
    cy.get('.links').contains('Schools')
    cy.get('.links').contains('Donors')
    cy.get('.links').contains('Alt Styles')
  })

  it('has the correct text in the text-contain class', () => {
    cy.get('h1').contains('What is Luncher?')
    cy.get('h3').contains('Every child deserves a healthy, nutritious lunch.')
  })

  it('contains buttons with correct text', () => {
    cy.get('.text-contain > button').contains('Schools start here')
    cy.get('.text-contain > button').contains('Donors start here')
  })

  it('the card-contain class contains an image', () => {
    cy.get('img').invoke('attr', 'src')
      .should('include', 'jpg')
  })

  it('navigates to the about us page', () => {
    cy.get('nav > .links > [href="/aboutUs.html"]')
      .click()
    cy.url().should('include', 'aboutUs')
    cy.go('back')
  })

  it('includes a footer', () => {
    cy.get('footer');
  })

  it('footer includes outsideLinks class', () => {
    cy.get('.outsideLinks')
  })

  it('outsideLinks class contains a mailto link', () => {
    cy.get('[href="mailto:admin@luncher.com"]')
      .should('be.visible')
      .and('have.attr', 'href');
  })
})

describe('Open Website',()=>{
    it('Dooli WebApp Testing',()=>{

        cy.visit('http://128.127.186.87:8091')
        cy.contains('Skapa konto')
        cy.contains('Skapa konto').click()
        cy.url().should('include','/signup')
        //The personal number needs to be changed everytime we run the test
        cy.get('input[placeholder = "YYYYMMDDXXXX"]').clear().type('198606028018')
        cy.get('[class="checkbox-bg"]').click()
        cy.get('h2[class="text"]').click()
        cy.get('[href*="/provider"]').click()
        
        cy.get('input[placeholder="5592754817"]').wait(500).clear().type('5561390484')
        cy.get('input[placeholder="1234-5678"]').should('be.visible')
        cy.get('input[placeholder="1234-5678"]').clear().type('1234-5789')
        cy.get('input[placeholder="namn@mail.com"]').clear().type('fakeid@gmail.com')
        cy.get('input[placeholder="0707-123 456"]').clear().type('0764-320409')
        cy.get('input[placeholder="namn@mail.com"]').click()
        cy.get('.wide-button:not(.disabled)', { timeout: 15000}).click()
        cy.contains('IT').click()
        cy.contains('Design').click()
        cy.contains('Webdesign').click()
        cy.get('.wide-button').click()
        cy.get('.section > div > .value').clear().type('ABc Solution')
        cy.get(':nth-child(4) > .value').clear().type('ABCDEFGHIJK LMNOP')
        cy.get('.save').click()
        cy.get('.router-link-active').click()
        cy.get('.router-link-active > .icon').click()
        cy.get('.welcome-text').should('be.visible').contains('Varmt välkommen till dooli.')

    })
})

describe('Seller Registration with wrong organization number',()=>{
    it('Dooli WebApp Testing',()=>{

        cy.visit('http://128.127.186.87:8091')
        cy.contains('Skapa konto')
        cy.contains('Skapa konto').click()
        cy.url().should('include','/signup')
        //The personal number needs to be changed everytime we run the test
        cy.get('input[placeholder = "YYYYMMDDXXXX"]').clear().type('198606034209')
        cy.get('[class="checkbox-bg"]').click()
        cy.get('h2[class="text"]').click()
        cy.get('[href*="/provider"]').click()
        
        cy.get('input[placeholder="5592754817"]').wait(300).clear().type('5565586000')
        cy.get('.orgSection > div').should('be.visible').contains('Organisationsnumret kunde inte hittas, vänligen kontrollera din stavning och att bolaget är registrerat.')
        cy.get('input[placeholder="5592754817"]').wait(300).clear().type('55655860')
        cy.get('.wide-button').click()
        cy.get('.orgSection > div').should('be.visible').contains('Organisationsnumret måste vara 10 siffror långt.')        

    })
})

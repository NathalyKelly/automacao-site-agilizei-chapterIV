/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()


describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app')

    // Inputs de texto / textarea / email -> type
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())
     // Inputs de radio / checkboxes ->  check    
        cy.get('input[value=f]').check()

        cy.get('input[type=checkbox]').check('Dormir')
        cy.get('input[type=checkbox]').check('Netflix')

    // Inputs do tipo combobox / selects -> select
        cy.get('select#countries').select('Austrália', {force: true})
        cy.get('select#years').select('1999', {force: true})
        cy.get('select#months').select('Março', {force: true})
        cy.get('select#days').select('17', {force: true})

        cy.get('input#firstpassword').type('Teste@123')
        cy.get('input#secondpassword').type('Teste@123')

    // Inputs dp tipo butto -> click  
        cy.contains('Finalizar cadastro').click()

    // Espero que a minha aplicação seja direcionada para a listagem
        
        cy.url().should('contain', 'listagem')
    });
});
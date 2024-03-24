
describe('Автотесты пароль и логин', function () {
    
    it('Правильный пароль и логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');// ввела логин
        cy.get('#pass').type('iLoveqastudio1');//ввела пароль
        cy.get('#loginButton').click();// нажимаю войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик

         })


         it('Забыли пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();//нажала забыли пароль
            cy.get('#mailForgot').type('german@dolnikov.ru')//ввела емайл
            cy.get('#restoreEmailButton').click();//нажала отправить пароль
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик

             })
         
             it('Верный логин и не верный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikov.ru');// ввела логин
                cy.get('#pass').type('iLoveqastudio12');//ввела пароль
                cy.get('#loginButton').click();// нажимаю войти
                cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю текст
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
                 })


                 it('Не верный логин и верный пароль', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('g2erman@dolnikov.ru');// ввела логин
                    cy.get('#pass').type('iLoveqastudio12');//ввела пароль
                    cy.get('#loginButton').click();// нажимаю войти
                    cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю текст
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
                     })



                     it('Проверка валидации', function () {
                        cy.visit('https://login.qa.studio/');
                        cy.get('#mail').type('germandolnikov.ru');// ввела логин
                        cy.get('#pass').type('iLoveqastudio12');//ввела пароль
                        cy.get('#loginButton').click();// нажимаю войти
                        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю текст
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
                         })

                         
                     it('Проверка на приведение к строчным буквам в логине', function () {
                        cy.visit('https://login.qa.studio/');
                        cy.get('#mail').type('GerMan@Dolnikov.ru');// ввела логин
                        cy.get('#pass').type('iLoveqastudio1');//ввела пароль
                        cy.get('#loginButton').click();// нажимаю войти
                        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю текст
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик
                         })
})

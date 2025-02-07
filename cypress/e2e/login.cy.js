// 1. Login: Teste o login com um usuário válido e inválido

// Cenário 1: Teste de login com informações de usuário e senha corretos
// Objetivo: Este teste verifica se se as informações de username e password informadas estão corretas

// Resultado esperado: Login deve ser bem sucedido e tela de lista de produtos deve ser apresentada

describe('Login Correto', () => {
    it('Teste de login com informações de usuário e senha corretos', () => {
        cy.visit("https://www.saucedemo.com/v1/")

        // Caso 1: Preenchendo o campo de Username com user correto
        cy.get('input[placeholder="Username"').type("standard_user")

        // Caso 1: Preenchendo o campo de Password
        cy.get('input[placeholder="Password"').type("secret_sauce")

        // Caso 3: Clicar no botão de login
        cy.get('#login-button').click()

        // Verificar se o login foi bem sucedido
        cy.get('.product_label').should('contain.text', 'Products');
        cy.url().should('include', '/inventory.html');
    });
});

// Cenário 2: Teste de login com informações de usuário e senha incorretas
// Objetivo: Este teste verifica se se as informações de username e password informadas estão erradas

// Resultado esperado: Login deve falhar e deve ser apresentado mensagem de erro

describe('Login errado', () => {
    it('Teste de login com informações de usuário e senha incorretas', () => {
        cy.visit("https://www.saucedemo.com/v1/")

        // Caso 1: Preenchendo o campo de Username com informação incorreto
        cy.get('input[placeholder="Username"').type("(&(*&(*&NKLJHLUIHLIUoknkj)))")

        // Caso 2: Preenchendo o campo de Password com informação incorreto
        cy.get('input[placeholder="Password"').type("testeAkldnfaçsklnf*&(*&(*&(*")

        // Caso 3:Tentando fazer login
        cy.get('#login-button').click()

        // Validando se a mensagem de erro exibida é a esperada
        cy.get('[data-test="error"]').should(
            'contain.text',
            'Username and password do not match any user in this service'
        );
    });
});

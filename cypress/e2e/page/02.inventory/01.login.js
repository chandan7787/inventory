import main_login from "../../locators/01.login_locators";

const login_page = {
    LOgin: function () {
        cy.visit('https://v2qa.lifetrenz.com/');
        cy.get(main_login.username).should('be.visible').type('Chandu_GCC');
        cy.get(main_login.password).should('be.visible').type('Gcc@123');
        cy.xpath(main_login.loginButton).should('be.visible').click();

        cy.viewport(1920, 1080);
    }
}
export default login_page;

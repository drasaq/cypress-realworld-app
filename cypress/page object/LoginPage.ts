class LoginPage {

    elements = {
        userName: () => cy.get('#username'),
        passWord: () => cy.get('#password'),
        rememberMe: () => cy.get("input[name='remember']"),
        signIn: () => cy.get("span[class='MuiButton-label']")
    }

        signIn() {
            
            this.elements.userName().type("Third")
            this.elements.passWord().type("Dragnipur")
            this.elements.rememberMe().click()
            this.elements.signIn().click()

            
        }  
}

export default new LoginPage();
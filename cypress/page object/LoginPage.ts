class LoginPage {

    elements = {
        userName: () => cy.get("input[id='username']"),
        passWord: () => cy.get("input[id='password']"),
        rememberMe: () => cy.get("input[name='remember']"),
        signIn: () => cy.get("span[class='MuiButton-label']")
    }

        signIn() {
            this.elements.userName().type("Hokage")
            this.elements.passWord().type("Dragnipur")
            this.elements.rememberMe().click()
            this.elements.signIn().click()
        }  
}

export default new LoginPage();
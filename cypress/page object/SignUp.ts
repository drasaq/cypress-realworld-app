class SignUp {

    elements = {
        signUp: () => cy.get('[data-test="signup"]'),
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        userName: () => cy.get('#username'),
        passWord: () => cy.get('#password'),
        conPassword: () => cy.get('#confirmPassword'),
        signButton: () => cy.get("span[class='MuiButton-label']")
    }

    signUpWithRandomValues() {
        const randomFirstName = generateRandomName();
        const randomLastName = generateRandomName();
        const randomUserName = generateRandomUserName();
    

        this.elements.signUp().click();
        this.elements.firstName().type("randomFirstName");
        this.elements.lastName().type("randomFirstName");
        this.elements.userName().type("randomUserName");
        this.elements.passWord().type("Dragnipur");
        this.elements.conPassword().type("Dragnipur");
        this.elements.signButton().click()

        function generateRandomName() {
        const possibleChars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let randomName = '';
        for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * possibleChars.length);
        randomName += possibleChars.charAt(randomIndex);
                }
        return randomName;
              }

        function generateRandomUserName() {
        const possibleChars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomUsername = '';
        for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * possibleChars.length);
        randomUsername += possibleChars.charAt(randomIndex);
                }
        return randomUsername;
              }
    
        function generateRandomPassword() {
                const possibleChars =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let randomPassword = '';
                for (let i = 0; i < 12; i++) {
                  const randomIndex = Math.floor(Math.random() * possibleChars.length);
                  randomPassword += possibleChars.charAt(randomIndex);
                }
                return randomPassword;
                
            }
        }  
}

export default new SignUp();
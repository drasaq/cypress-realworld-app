class MyAccount {

    elements = {
        myAccount: () => cy.get("span").contains("My Account"), 
        emailField: () => cy.get("input[name='email']").type("Norene39@yahoo.com"),
        phoneNumber: () => cy.get("input[name='phoneNumber']").type("625-316-9882"),
        saveBtn: () => cy.get("span").contains("Save")
    }

    click() {

        this.elements.myAccount().click()
        this.elements.emailField()
        this.elements.phoneNumber()
        this.elements.saveBtn().click()
    } 
}

export default new MyAccount();
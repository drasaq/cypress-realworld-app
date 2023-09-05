import SignUp from "../../page object/SignUp"
import LoginPage from "../../page object/LoginPage"
import MyAccount from "../../page object/MyAccount"

describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000')

      SignUp.signUpWithRandomValues()
      
      LoginPage.signIn()

MyAccount.click()

    })


  })
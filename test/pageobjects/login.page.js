import Page from "./page";

class LoginPage extends Page {
    get inputLogin() {
        return $(':nth-child(1) > .pure-material-textfield-outlined')
    }

    get inputPassword() {
        return $(':nth-child(2) > .pure-material-textfield-outlined')
    }

    get buttonLogIn() {
        return $('button.loginbtn')
    }

    loginUser(login, password) {
        this.inputLogin.addValue(login)
        this.inputPassword.addValue(password)
        this.buttonLogIn.click()
    }
}

module.exports = new LoginPage();

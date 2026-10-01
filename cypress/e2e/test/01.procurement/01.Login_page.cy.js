import login_page from "../../page/01.Procurement/01.Login_Page";

describe("Login Test", () => {

    it("TC_LOGIN_001 - Login with valid credentials", () => 
    {
        login_page.LOgin();

    });

});
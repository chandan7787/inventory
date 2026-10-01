import login_page from "../../page/01.Procurement/01.Login_Page";
import purchase_request_flow from "../../page/01.Procurement/02.purchase_request";
import purchase_request_verificatio from "../../page/01.Procurement/03.pr_verification_page";
import pr_approval_flow from "../../page/01.Procurement/04.pr_approval_page";

describe("Purchase Request Flow Test", () => {

    it("TEST_CASE_002 - purchase_request_flow", () => 
    {
        login_page.LOgin();
        purchase_request_flow.purchase_request();
        purchase_request_verificatio.pr_verification();
        pr_approval_flow.pr_approval();

    });

});
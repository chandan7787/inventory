import purchase_request_flow from "../../page/01.Procurement/02.purchase_request";
import purchase_request_verificatio from "../../page/01.Procurement/03.pr_verification_page";
import Cancelled_PR_flow from "../../page/01.Procurement/05.Cancelled_PR_flow";
import login_page from "../../page/01.Procurement/01.Login_Page";

describe("Cancelled Purchase Request Flow Test", () => {

    it("TEST_CASE_003 - canclled_purchase_request_flow", () =>
    {
        login_page.LOgin();
        purchase_request_flow.purchase_request();
        purchase_request_verificatio.pr_verification();
        Cancelled_PR_flow.Cancelled_PR();

    });

});
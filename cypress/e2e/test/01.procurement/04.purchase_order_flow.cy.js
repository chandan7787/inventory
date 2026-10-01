import login_page from "../../page/01.Procurement/01.Login_Page";
import purchase_order_flow from "../../page/01.Procurement/06.purchase_order";
import module_search from "../../page/01.Procurement/07.module_search";
import po_verificatio_flow from "../../page/01.Procurement/08.po_verificatio";
import purchase_order_approval from "../../page/01.Procurement/09.po_approval";


describe("Login Test", () => {

    it("TEST_CASE_004 - Purchase_order_flow", () => 
    {
        login_page.LOgin();
        module_search.module();
        purchase_order_flow.purchase_order();
        po_verificatio_flow.po_verificatio();
        purchase_order_approval.po_approval();


     });

});
    
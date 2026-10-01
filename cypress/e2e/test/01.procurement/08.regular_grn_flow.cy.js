import login_page from "../../page/01.Procurement/01.Login_Page";
import purchase_order_flow from "../../page/01.Procurement/06.purchase_order";
import po_verificatio_flow from "../../page/01.Procurement/08.po_verificatio";
import purchase_order_approval from "../../page/01.Procurement/09.po_approval";
import module_search from "../../page/01.Procurement/07.module_search";
import regular_grn_flow from "../../page/01.Procurement/12.regular_grn";
import Grn_approval_flow from "../../page/01.Procurement/13.grn_approval";



describe("Purchase Order to Regular GRN Flow Test", () =>
 {
  it("TEST_CASE_008 - Purchase_order_to_regular_grn_flow", () =>
     {
        //login page
        login_page.LOgin();

        //search respective module 
         module_search.module();

        //create purchase order 
        purchase_order_flow.purchase_order();

        //po verification flow
        po_verificatio_flow.po_verificatio();

        //po approval flow
        purchase_order_approval.po_approval();

        //regular_grn flow
        regular_grn_flow.regular_grn();

        //regular_grn approval
        Grn_approval_flow.Grn_approval();


    });
});

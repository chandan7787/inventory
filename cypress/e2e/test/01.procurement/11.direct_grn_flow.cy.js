import login_page from "../../page/01.Procurement/01.Login_Page";
import module_search from "../../page/01.Procurement/07.module_search";
import Grn_approval_flow from "../../page/01.Procurement/13.grn_approval";
import Direct_grn_flow from "../../page/01.Procurement/15.direct_grn";




describe("Direct GRN Flow Test", () =>
 {
  it("TEST_CASE_011 - Direct_grn_flow", () =>
     {
        //login page
        login_page.LOgin();

        //search respective module 
         module_search.module();

         //direct grn flow
         Direct_grn_flow.Direct_grn();

         //emergency grn approval
         Grn_approval_flow.Grn_approval();



     });
    });
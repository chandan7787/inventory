import Emergency_Grn_flow from "../../page/01.Procurement/14.emergency_grn";
import login_page from "../../page/01.Procurement/01.Login_Page";
import module_search from "../../page/01.Procurement/07.module_search";
import Grn_approval_flow from "../../page/01.Procurement/13.grn_approval";




describe("Login Test", () =>
 {
  it("TEST_CASE_009 - emergency_grn_flow", () =>
     {
        //login page
        login_page.LOgin();

        //search respective module 
         module_search.module();

         //emergency grn flow
         Emergency_Grn_flow.Emergency_grn();

         //emergency grn approval
         Grn_approval_flow.Grn_approval();



     });
    });
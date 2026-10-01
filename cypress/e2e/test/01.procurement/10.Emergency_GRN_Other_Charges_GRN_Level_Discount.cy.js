import Emergency_Grn_flow from "../../page/01.Procurement/14.emergency_grn";
import login_page from "../../page/01.Procurement/01.Login_Page";
import module_search from "../../page/01.Procurement/07.module_search";
import Grn_approval_flow from "../../page/01.Procurement/13.grn_approval";
import grnleveldis_othercharges_flow from "../../page/01.Procurement/16.Emergency_GRN_Other_Charges_GRN_Level_Discount";




describe("Login Test", () =>
 {
  it("TEST_CASE_010 - emergency_grn_with_othercharge_polevel_dis_flow", () =>
     {
        //login page
        login_page.LOgin();

        //search respective module 
         module_search.module();

         //emergency grn flow
         grnleveldis_othercharges_flow.Emergency_grn();

         //apply other chjarges
         grnleveldis_othercharges_flow.Other_charges();

         //apply grn_level discount
         grnleveldis_othercharges_flow.Grn_level_dis();


         //emergency grn approval
         Grn_approval_flow.Grn_approval();



     });
    });
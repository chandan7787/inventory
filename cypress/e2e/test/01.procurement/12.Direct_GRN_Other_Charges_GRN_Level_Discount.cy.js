import login_page from "../../page/01.Procurement/01.Login_Page";
import module_search from "../../page/01.Procurement/07.module_search";
import Grn_approval_flow from "../../page/01.Procurement/13.grn_approval";
import DirectGrn_othercharges_polevedis_flow from "../../page/01.Procurement/17.Direct_GRN_Other_Charges_GRN_Level_Discount";



describe("Direct GRN With Other Charges and GRN Level Discount Test", () =>
 {
  it("TEST_CASE_010 - direct_grn_with_othercharge_polevel_dis_flow", () =>
     {
        //login page
        login_page.LOgin();

        //search respective module 
         module_search.module();

         //direct grn flow
         DirectGrn_othercharges_polevedis_flow.Direct_grn()
         

         //apply other chjarges
         DirectGrn_othercharges_polevedis_flow.Other_charges();

         //apply grn_level discount
         DirectGrn_othercharges_polevedis_flow.Grn_level_dis();


         //direct grn with other charge and polevel grn approval
         Grn_approval_flow.Grn_approval();



     });
    });
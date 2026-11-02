import vendor_return_flow from "../../page/01.Procurement/18.vendor_return";
import login_page from "../../page/01.Procurement/01.Login_Page";
import module_search from "../../page/01.Procurement/07.module_search";





describe("Login Test", () =>
 {
  it("TEST_CASE_010 - direct_grn_with_othercharge_polevel_dis_flow", () =>
     {
                //login page
                login_page.LOgin();
        
                //search respective module 
                 module_search.module();
                  vendor_return_flow.vendor_return();

     });
    });
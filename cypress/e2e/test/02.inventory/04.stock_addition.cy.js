import login_page from "../../page/02.inventory/01.login";
import module_search from "../../page/02.inventory/02.module_search";
import new_transfer_flow from "../../page/02.inventory/03.newtransfer";
import recivingq_flow from "../../page/02.inventory/04.recivingQ";
import Rejected_stock_flow from "../../page/02.inventory/05.Rejected_Stock_Transfers";
import stock_addtion_flow from "../../page/02.inventory/06.stock_addition";

describe("Login Test", () =>
 {
  it("TEST_CASE_03 - Stock_addition flow", () =>
     {
        //login _page flow
        login_page.LOgin();

        module_search.module();

        //stock addition flow
        stock_addtion_flow.stock_addtion();

     });
    });
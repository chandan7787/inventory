import login_page from "../../page/02.inventory/01.login";
import module_search from "../../page/02.inventory/02.module_search";
import new_transfer_flow from "../../page/02.inventory/03.newtransfer";
import recivingq_flow from "../../page/02.inventory/04.recivingQ";

describe("Login Test", () =>
 {
  it("TEST_CASE_01 - new_transfer_flow", () =>
     {
        login_page.LOgin();

        module_search.module();

        new_transfer_flow.newtransfer();

        recivingq_flow.reciving();

     });
    });
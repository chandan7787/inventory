/// <reference types="cypress" />

import login_page from "../../page/02.inventory/01.login";
import module_search from "../../page/02.inventory/02.module_search";
import Stock_Adjustment_flow from "../../page/02.inventory/11.Stock_Adjustment";

describe("Inventory - Consumption Stock", () => {

    it("TEST_CASE_06 - damage stock Stock flow", () => {

        // Login
        login_page.LOgin();

        // Module Search
        module_search.module();

        //stock_adjustment stock flow
        Stock_Adjustment_flow.Stock_Adjustment();

        //stock_adjustment approval stock flow
        Stock_Adjustment_flow.Stock_Adjustment_Approval();
        
    
        

    });

});
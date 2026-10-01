/// <reference types="cypress" />

import login_page from "../../page/02.inventory/01.login";
import module_search from "../../page/02.inventory/02.module_search";
import Damage_stock_flow from "../../page/02.inventory/10.Damage_stock";

describe("Inventory - Consumption Stock", () => {

    it("TEST_CASE_06 - damage stock Stock flow", () => {

        // Login
        login_page.LOgin();

        // Module Search
        module_search.module();

        //damage stock flow
        Damage_stock_flow.Damage_stock()
    
        

    });

});
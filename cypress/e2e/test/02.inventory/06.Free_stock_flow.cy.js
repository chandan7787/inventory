/// <reference types="cypress" />

import login_page from "../../page/02.inventory/01.login";
import module_search from "../../page/02.inventory/02.module_search";
import Free_stock_flow from "../../page/02.inventory/08.Free_stock";

describe("Inventory - Consumption Stock", () => {

    it("TEST_CASE_06 - free stock Stock flow", () => {

        // Login
        login_page.LOgin();

        // Module Search
        module_search.module();

        // free Stock
        Free_stock_flow.free_stock();
        

    });

});
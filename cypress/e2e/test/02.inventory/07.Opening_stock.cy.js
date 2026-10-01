/// <reference types="cypress" />

import login_page from "../../page/02.inventory/01.login";
import module_search from "../../page/02.inventory/02.module_search";
import Opening_stock_flow from "../../page/02.inventory/09.Opening_stock";

describe("Inventory - Opening Stock", () => {

    it("TEST_CASE_06 - free stock Stock flow", () => {

        // Login
        login_page.LOgin();

        // Module Search
        module_search.module();

        //opening stock flow
        Opening_stock_flow.opening_stock();
        

    });

});
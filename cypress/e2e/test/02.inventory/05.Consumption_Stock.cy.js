/// <reference types="cypress" />

import login_page from "../../page/02.inventory/01.login";
import module_search from "../../page/02.inventory/02.module_search";
import Consumption_Stock_Flow from "../../page/02.inventory/07.Consumption_Stock";

describe("Inventory - Consumption Stock", () => {

    it("TEST_CASE_03 - Consumption Stock flow", () => {

        // Login
        login_page.LOgin();

        // Module Search
        module_search.module();

        // Consumption Stock
        Consumption_Stock_Flow.Consumption_stock();

    });

});
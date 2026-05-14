import action from "../../support/action";

const login = {    
    procurementlogin: function()
    {
        cy.visit("https://v2qa.lifetrenz.com/#/auth/login?returnUrl=%2Fhome");
        cy.wait(2000)
        cy.get(action.username).type("chandan")
        cy.wait(2000)
        cy.get(action.Passward).type("54321");
        cy.wait(2000)
        cy.xpath(action.loginbutton).click()
        cy.wait(5000)

    },
    procurement_icon: function()
    {
        cy.xpath(action.sidebutton).click();
        cy.wait(5000)
        cy.xpath(action.procurement_icon).type("procurement")
        cy.wait(2000)
        cy.xpath(action.procurement_lable).click();
        cy.wait(9000)
    }, 
    inventory_module: function()
    {
        cy.xpath(action.sidebutton).click();
        cy.wait(5000)
        cy.xpath(action.search_icon).type("inventory")
        cy.wait(2000)
        cy.xpath(action.inventory_lable).click();
        cy.wait(9000)
    }, 
    

     procurement_purchase_request: function()
    {
        // Navigate to Purchase Request
        cy.xpath(action.purchase_req1).should('be.visible').click();
        cy.xpath(action.new_pr1).should('be.visible').click();

        // Select Required Store
        cy.get(action.requiredStore).should('be.visible').click();
        cy.xpath(action.store_name_type).type("Healthcare Store")
        cy.xpath(action.HealthCare_Store).should('be.visible').click();

        // Select Purchasing Store
        cy.get(action.purchasingStore).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(action.store_name_type).type("Main Medical Store")
        cy.wait(2000)
        cy.xpath(action.main_medical_store).click({ force: true });

        // Select Purchase Type
        cy.xpath(action.purchase_type).should('be.visible').click();
        cy.xpath(action.centra).should('be.visible').click();

        // Select Item Type
        cy.get(action.item_type).should('be.visible').click();
        cy.xpath(action.type).should('be.visible').click();

        // Select Calendar Date
        cy.xpath(action.Calender).click();
        cy.xpath(action.date).click();

        // Add Items
        cy.xpath(action.add_itembutton).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(action.item_name_type).should('be.visible').type("ka11");
        cy.wait(2000)
        cy.xpath(action.search).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(action.main_check_box).should('be.visible').click();
        cy.xpath(action.add_item_button).should('be.visible').click();
        cy.wait(2000)

        // Select UOMs
        cy.xpath(action.first_uom).should('be.visible').click();
        cy.xpath(action.purchase_uom1).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(action.second_uom).should('be.visible').click();
        cy.xpath(action.purchase_uom2).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(action.third_uom).should('be.visible').click();
        cy.xpath(action.purchase_uom3).should('be.visible').click();
        cy.wait(2000)

        // Enter PR Quantities
        cy.xpath(action.pr_qty1).should('be.visible').type("100");
        cy.xpath(action.pr_qty2).should('be.visible').type("100");
        cy.xpath(action.pr_qty3).should('be.visible').type("100");

        // Commit PR
        cy.xpath(action.commit_pr).should('be.visible').click();
        cy.wait(3000)

        // Store the PR number for later use
        cy.xpath('(//div/div/table/tbody/tr/td[1])[1]')
            .should('be.visible')
            .invoke("text")
            .then((prText) => {
                const storeprnumber = prText.trim();
                cy.setprnumber(storeprnumber);
                cy.log('Stored PR Number:', storeprnumber);
                //cy.xpath("//div[2]/div[2]/div[1]/span/i[2]").click();
                //cy.xpath("//div/div[3]/div/div[1]/input").type(storeprnumber);
            });
    },
    pr_verificatio: function()
    {
        cy.xpath(action.pr_verification).click();
        cy.wait(1000)
        cy.xpath(action.first_line).click();
        
        cy.xpath(action.pv_drop_down).click();
        
        cy.xpath(action.View_Verify_Items).click();
        
        cy.xpath(action.Verify_PR).click();
        
        cy.xpath(action.Remarks).type("verification pr")
        
        cy.xpath(action.Verify_PR1).click();
        cy.wait(2000)
    },
    pr_approve: function()
    {
        cy.getMPInumber().then((storeprnumber) => {
        cy.xpath(action.PR_Approval).click();
        cy.wait(2000)
       // cy.xpath("//div[2]/div[2]/div[1]/span/i[2]").click();
        //cy.xpath("//div/div[3]/div/div[1]/input").type(storeprnumber);


        cy.xpath(action.row1).click();
        cy.wait(1000)
        cy.xpath(action.pa_drop_down).click();
        cy.wait(1000)
        cy.xpath(action.View_Approve_PR).click();
        cy.wait(1000)
        cy.xpath(action.Approve_PR).click()
        
        cy.xpath(action.pr_remark).type("pr approve remark")
        
        cy.xpath(action.Approve_PR1).click();
        cy.wait(5000)
        });
     },
     canclled_pr: function()
     {
        cy.getprnumber().then((storeprnumber) => {
        cy.xpath(action.PR_Approval).click();
        cy.wait(2000)
        cy.xpath("//div[2]/div[2]/div[1]/span/i[2]").click();
        cy.wait(2000)
        cy.xpath("//div/div[3]/div/div[1]/input").type(storeprnumber);
        cy.xpath(action.E_SEARCH).click();
        cy.xpath(action.row1).click();
        cy.wait(1000)
        cy.xpath(action.pa_drop_down).click();
        cy.wait(1000)
        cy.xpath(action.cancle_pr).click();
        cy.wait(1000)
        cy.xpath(action.poa_remark).type("pr canclled")
        cy.wait(1000)
        cy.xpath(action.cancle_pr1).click();
        cy.xpath(action.cancle_pr_request).click();
        cy.xpath("//div[2]/div[2]/div[1]/span/i[2]").click();
        cy.wait(2000)
        cy.xpath("//div/div[3]/div/div[1]/input").type(storeprnumber);
        cy.xpath(action.E_SEARCH).click();
        });


     },
     po_creation: function()
     {
        cy.xpath(action.purchse_order).click()
        cy.wait(2000)
        cy.xpath(action.pending_pr).click()
        
        cy.xpath(action.row_p_1).click()
       
        cy.xpath(action.po_drop_down).click()
        cy.wait(1000)
        cy.xpath(action.pr_po).click()
       
        cy.xpath(action.vendore).type("chandan")
        
        cy.xpath(action.vendore_name).click()
        
        cy.xpath(action.other_charge).click()
        
        cy.xpath(action.add_oc).click()
        
        cy.xpath(action.ot_drop_down).click()
        
        cy.xpath(action.ot_charge).click()
        
        cy.xpath(action.ot_amount).type("100.5")
        
        cy.xpath(action.po_commit).click()
         cy.wait(2000)
        
        
     },
    //  approve_po: function()
    //  {
    //     cy.getMPInumber().then((storedponum) => {
    //     cy.xpath(action.po_verificatio).click()
    //     cy.wait(4000)
    //     cy.xpath(action.pv_row).click()
    //     cy.wait(4000)
    //     cy.xpath(action.pv_drop_down).click();
    //     cy.wait(2000)
    //     cy.xpath(action.pv_verificatio).click();
    //     cy.wait(2000)
    //     cy.xpath(action.pv_verificatio1).click();
    //     cy.wait(2000)
    //     cy.xpath(action.po_approvel).click();
    //     cy.wait(2000)
    //     cy.xpath(action.poa_1st_row).click();
    //     cy.wait(2000)
    //     cy.xpath(action.poa_drop_down).click();
    //     cy.wait(2000)
    //     cy.xpath(action.po_approve).click();
    //     cy.wait(2000)
    //     cy.xpath(action.po_approve1).click();
    //     cy.wait(2000)
    //     cy.xpath(action.poa_remark).type("po approve");
    //     cy.wait(2000)
    //     cy.xpath(action.approve_po).click();
    //     cy.wait(2000)
    //     cy.xpath(action.purchse_order).click();
    //     cy.wait(5000)

    //     cy.xpath('//div/div/table/tbody/tr[1]/td[1]')
    //         .invoke("text")
    //         .then((poText) => {
                
    //           const storedponum = poText.trim();
    //           //cy.log("Stored MPI Number:", storedMPInumber);
    //           cy.setMPInumber(storedponum);
    //         });
    //         });
    // }
    
    

}
export default login;
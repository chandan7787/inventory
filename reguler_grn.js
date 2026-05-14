import action from "../../support/action";
import 'cypress-file-upload';

import { faker } from '@faker-js/faker';

const invoiceNo =
  faker.number.int({ min: 100, max: 999 }) +
  faker.string.alpha({ length: 3, casing: 'upper' });


const grn ={
    grn_flow: function()
    {
        cy.visit("https://v2qa.lifetrenz.com/");
                cy.wait(2000)
                cy.get(action.username).type("chandan")
                cy.wait(2000)
                cy.get(action.Passward).type("12345");
                cy.wait(2000)
                cy.xpath(action.loginbutton).click()
                cy.wait(2000)
        
    },

    approve_po: function()
         {
            cy.getMPInumber().then((storedponum) => {
           cy.wait(5000)
            cy.xpath(action.po_verification).click()
            cy.wait(5000)
            cy.xpath(action.pv_row).click()
            cy.wait(5000)
            cy.xpath(action.pv_drop_down).click();
           
            cy.xpath(action.pv_verificatio).click();
           cy.wait(3000)
            cy.xpath(action.pv_verificatio1).click();
            cy.wait(3000)
            cy.xpath(action.po_approvel).click();
            cy.wait(2000)
            cy.xpath('//div/div/table/tbody/tr[1]/td[1]')
                .invoke("text")
                .then((poText) => {
                    
                  const storedponum = poText.trim();
                  //cy.log("Stored MPI Number:", storedMPInumber);
                  cy.setMPInumber(storedponum);
            cy.xpath(action.poa_1st_row).click();
            cy.wait(2000)
            cy.xpath(action.poa_drop_down).click();
           
            cy.xpath(action.po_approve).click();
            
            cy.xpath(action.po_approve1).click();
            
            cy.xpath(action.poa_remark).type("po approve");
           
            cy.xpath(action.approve_po).click();
            
    
            
                  cy.setMPInumber(storedponum);
                });
               });
        },
    regular_grn: function()
    {
        cy.getMPInumber().then((storedponum) => {
        cy.wait(5000)
        cy.xpath(action.grn).click()
       cy.wait(10000)
        cy.xpath(action.new_grn).click()
        cy.wait(15000)
        cy.xpath(action.regulr_invoice).type(invoiceNo)
       // cy.wait(2000)
        cy.xpath(action.regular_dc).type(invoiceNo)
       // cy.wait(2000)
        cy.get(action.Mode_Of_Transport).type("by person");
       // cy.wait(2000)
        cy.xpath(action.by_person).click();
        cy.wait(2000)
       // cy.xpath(action.rmh).type("rmh")
        cy.wait(2000)
        //cy.xpath(action.po_number).click();
        cy.xpath(action.add_pos).click();
       // cy.wait(2000)
        cy.xpath(action.search_gpo).type(storedponum);
        //cy.wait(5000)
        cy.xpath(action.search_g).click();
        //cy.wait(5000)
        cy.xpath(action.po_row).click();
        //cy.wait(3000)
        cy.xpath(action.po_checkbox).click();
        cy.wait(3000)
        cy.xpath(action.po_items).click();
        cy.wait(3000)
       // cy.xpath(action.r_main_check_box).click();
        //cy.wait(2000)
        //cy.xpath(action.rg_save).click()
       // cy.wait(2000)
        cy.xpath(action.batch).type("batch-1")
        //cy.wait(2000)
        cy.xpath(action.batch1).type("batch-1")
        //cy.wait(2000)
        cy.xpath(action.batchlees_mrp).type("5000")
       // cy.wait(2000)
        cy.xpath(action.grn_commit).click();
        cy.wait(2000)
        })
    },
    grn_approve: function()
    {
       cy.xpath(action.R_grn_approve).click()
       cy.wait(8000)
    
       cy.xpath(action.grn_1st_row).click()
       //cy.wait(12000)
       cy.xpath(action.RG_drop_down).click()
      // cy.wait(5000)
       cy.xpath(action.RG_approve).click();
      // cy.wait(5000)
       cy.xpath(action.RG_remark).type("regular grn approve");
       //cy.wait(5000)
       cy.xpath(action.RG_F_approve).click();
      // cy.wait(3000)
      

    }, 

    grn_approve_forvendore: function()
    {
       cy.xpath(action.R_grn_approve).click()
       cy.wait(12000)
        cy.xpath('//div/div/table/tbody/tr[1]/td[1]')
    .should('be.visible')
    .invoke("text")
    .then((grnText) => {
      const grnNumber = grnText.trim();
      cy.setgrnnumber(grnNumber);   
      cy.log("Saved GRN Number: " + grnNumber);
       cy.xpath(action.grn_1st_row).click()
       //cy.wait(12000)
       cy.xpath(action.RG_drop_down).click()
      // cy.wait(5000)
       cy.xpath(action.RG_approve).click();
      // cy.wait(5000)
       cy.xpath(action.RG_remark).type("regular grn approve");
       //cy.wait(5000)
       cy.xpath(action.RG_F_approve).click();
      // cy.wait(3000)
      });

    }, 
      
     vendore_return_flow :function()
    {
      cy.getgrnnumber().then((grnNumber) => {
      cy.xpath(action.vendore_return).click();
      cy.wait(1000)
      cy.xpath(action.add_new).click();
      cy.wait(2000)
      cy.xpath(action.store).click();
      cy.wait(2000)
      cy.xpath(action.e_store_name).click();
      cy.wait(2000)
      cy.xpath(action.Reason).click();
      cy.wait(2000)
      cy.xpath(action.damage).click();
      cy.wait(2000)
      cy.xpath(action.return_vendore).type("chandan")
      cy.wait(2000)
      cy.xpath(action.return_vendore_name).click();
      cy.wait(2000)
      cy.xpath(action.select_grn).click();
      cy.wait(2000)
      cy.xpath(action.grn_past_textfield).type(grnNumber);
      cy.wait(2000)
      cy.xpath(action.select_grn_no).click();
        cy.wait(2000)
        cy.xpath(action.return_item_checkbox).click();
        cy.wait(2000)
        cy.xpath(action.submit).click();
        cy.wait(2000)
        cy.xpath(action.return_qty1).type("10");
        cy.wait(2000)
        cy.xpath(action.return_qty2).type("10");
        cy.wait(2000)
        cy.xpath(action.return_qty3).type("10");
        cy.wait(2000)
        cy.xpath(action.E_SAVE).click();
        cy.wait(2000)
        cy.xpath(action.vendore_return_approve).click();
        cy.wait(2000)
        cy.xpath(action.first_line).click();
        cy.wait(2000)
        cy.xpath(action.pv_drop_down).click();
        cy.wait(2000)
        cy.xpath(action.view).click();
        cy.wait(2000)
        cy.wait(5000);
        cy.xpath(action.approved_by).type("chandan");
        cy.wait(2000)
        cy.xpath(action.approve).click();
        cy.wait(2000)
        cy.xpath(action.E_YES).click();
      });
    }

}

export default grn;
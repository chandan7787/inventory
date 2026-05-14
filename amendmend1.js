import action from "../../support/action"
import { faker } from '@faker-js/faker';

const invoiceame =
  faker.number.int({ min: 100000, max: 999999 }) +
  faker.string.alpha({ length: 6, casing: 'upper' });

  const po_amendmend=
  {
    po_amendmend_flow: function()
    {
      cy.xpath(action.purchse_order).click()
      cy.wait(2000)
      cy.xpath(action.new_po).click()
      cy.wait(2000)
      cy.xpath(action.req_store).click()
      cy.wait(2000)
      cy.xpath(action.req_type).type("Main Medical Store")
      cy.wait(2000)
      cy.xpath(action.HealthCare_Store).click()
      cy.wait(2000)
      cy.xpath(action.vendore).type("chandan")
      cy.wait(2000)
      cy.xpath(action.vendore_name).click()
      cy.wait(2000)
      //cy.xpath(action.po_drop).click()
      //cy.wait(2000)
      //cy.xpath(action.reguler_po).click()
      cy.wait(2000)
      //cy.xpath(action.purchase_site).click()
      cy.wait(2000)
      //cy.xpath(action.ps_name).click()
      cy.wait(2000)
      cy.xpath(action.p_site).type("Main Medical Store")
      cy.wait(2000)
      cy.xpath(action.p_HealthCare_Store).click()
      cy.wait(2000)
      cy.xpath(action.p_calender).click()
      cy.wait(2000)
      cy.xpath(action.date).click()
      cy.wait(2000)
      cy.xpath(action.p_additem).click()
      cy.wait(2000)
      cy.xpath(action.direct_search).click()
      cy.wait(2000)
      cy.xpath(action.E_TYPE).type("KA11")
      cy.wait(2000)
      cy.xpath(action.poitem_search).click()
      cy.wait(2000)
      cy.xpath(action.main_check_box).click()
      cy.wait(2000)
      cy.xpath(action.po_qty1).type("100")
      cy.wait(2000)
      cy.xpath(action.po_qty2).type("100")
      cy.wait(2000)
      cy.xpath(action.po_qty3).type("100")
      cy.wait(4000)
      cy.xpath(action.add_po).click()
      cy.wait(4000)
      cy.xpath(action.other_charge).click()
      cy.wait(4000)
      cy.xpath(action.add_oc).click()
      cy.wait(2000)
      cy.xpath(action.ot_drop_down).click()
      cy.wait(2000)
      cy.xpath(action.ot_charge).click()
      cy.wait(2000)
      cy.xpath(action.otc_amt).type("100.50")
      cy.wait(2000)
      cy.xpath(action.po_commit).click()
      cy.wait(2000)
      cy.xpath(action.po_verification).click()
      cy.wait(2000)
      cy.xpath(action.poa_1st_row).click()
      cy.wait(2000)
      cy.xpath(action.poa_drop_down).click()
      cy.wait(2000)
      cy.xpath(action.pv_verificatio).click()
      cy.wait(2000)
      cy.xpath(action.pv_verificatio).click()
      cy.wait(2000)
      cy.xpath(action.po_approvel).click()
      cy.wait(2000)
      cy.xpath(action.poa_1st_row).click()
      cy.wait(2000)
      cy.xpath(action.poa_drop_down).click()
      cy.wait(2000)
      cy.xpath(action.po_approve).click()
      cy.wait(2000)
      cy.xpath(action.po_approve).click()
      cy.wait(5000)
      cy.xpath(action.po_remarks).type("po amendmend")
      cy.wait(2000)
      cy.xpath(action.approve_po).click()
      cy.wait(5000)
    },
    amendment_flow: function()
    {

      cy.xpath(action.po_amend).click()
      cy.wait(2000)
      cy.xpath(action.approved_po).click()
      cy.wait(2000)
      cy.xpath(action.row_p_1).click()
      cy.wait(2000)
      cy.xpath(action.po_drop_down).click()
      cy.wait(2000)
      cy.xpath(action.c_a_p).click()
      cy.wait(2000)
      cy.xpath(action.E_ITEM_DIS).click()
      cy.wait(2000)
      cy.xpath(action.amendmend_dis).click()
      cy.wait(2000)
      cy.xpath(action.PER).click()
      cy.wait(2000)
      cy.xpath(action.dis_amt).type("10")
      cy.wait(2000)
      cy.xpath(action.amen_commit).click()
      cy.wait(2000)
      cy.xpath(action.amend_approve).click()
      cy.wait(2000)

      
      cy.xpath('//p-table/div/div/table/tbody/tr[1]/td[1]')
    .should('be.visible')
    .invoke("text")
    .then((grnText) => {
      const poamendnumber = grnText.trim();
      cy.setpoamendnumber(poamendnumber);
      cy.log("Saved PO Amend Number: " + poamendnumber);
      cy.xpath(action.row1).click()
      cy.wait(2000)
      cy.xpath(action.pa_drop_down).click()
      cy.wait(2000)
      cy.xpath(action.amend_approve1).click()
      cy.wait(2000)
      cy.xpath(action.po_approve).click()

      cy.xpath(action.po_remarks).type("amendmend po approve")
      cy.wait(2000)
      cy.xpath(action.approve_po).click()
      cy.wait(9000)


      
            })

    },
    amd_regular_grn: function()
    {
      cy.getgrnnumber().then((poamendnumber) => {
        
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
        cy.xpath(action.search_gpo).type(poamendnumber);
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
       // cy.wait(2000)
        })
    },
     po_creation: function()
    {
      cy.xpath(action.purchse_order).click()
      cy.wait(2000)
      cy.xpath(action.new_po).click()
      cy.wait(2000)
      cy.xpath(action.req_store).click()
      cy.wait(2000)
      cy.xpath(action.req_type).type("HealthCare Store")
      cy.wait(2000)
      cy.xpath(action.HealthCare_Store).click()
      cy.wait(2000)
      cy.xpath(action.vendore).type("chandan")
      cy.wait(2000)
      cy.xpath(action.vendore_name).click()
      cy.wait(2000)
      
      cy.wait(2000)
      cy.xpath(action.p_site).type("Main Medical Store")
      cy.wait(2000)
      cy.xpath(action.main_medical_store).click()
      cy.wait(2000)
      cy.xpath(action.p_calender).click()
      cy.wait(2000)
      cy.xpath(action.date).click()
      cy.wait(2000)
      cy.xpath(action.p_additem).click()
      cy.wait(2000)
      cy.xpath(action.direct_search).click()
      cy.wait(2000)
      cy.xpath(action.E_TYPE).type("KA11")
      cy.wait(2000)
      cy.xpath(action.poitem_search).click()
      cy.wait(2000)
      cy.xpath(action.main_check_box).click()
      cy.wait(2000)
      cy.xpath(action.po_qty1).type("100")
      cy.wait(2000)
      cy.xpath(action.po_qty2).type("100")
      cy.wait(2000)
      cy.xpath(action.po_qty3).type("100")
      cy.wait(4000)
      cy.xpath(action.add_po).click()
      cy.wait(4000)
      cy.xpath(action.other_charge).click()
      cy.wait(4000)
      cy.xpath(action.add_oc).click()
      cy.wait(2000)
      cy.xpath(action.ot_drop_down).click()
      cy.wait(2000)
      cy.xpath(action.ot_charge).click()
      cy.wait(2000)
      cy.xpath(action.otc_amt).type("100.50")
      cy.wait(2000)
      cy.xpath(action.po_commit).click()
      cy.wait(2000)
      cy.xpath(action.po_verification).click()
      cy.wait(2000)
      cy.xpath('(//p-table/div/div/table/tbody/tr/td[1])[1]')
            .should('be.visible')
            .invoke("text")
            .then((poText) => {
                const storepocnumber = poText.trim();
                cy.setpocnumber(storepocnumber);
                cy.log('Stored PO Number:', storepocnumber);
      cy.xpath(action.poa_1st_row).click()
      cy.wait(2000)
      cy.xpath(action.poa_drop_down).click()
      cy.wait(2000)
      cy.xpath(action.pv_verificatio).click()
      cy.wait(2000)
      cy.xpath(action.pv_verificatio).click()
      cy.wait(2000)
      cy.xpath(action.po_approvel).click()
      cy.wait(2000)
      cy.xpath("//div[2]/div[2]/div[1]/span/i[2]").click();
        cy.wait(2000)
        cy.xpath("//div/div[3]/div/div[1]/input").type(storepocnumber);
      cy.xpath(action.E_SEARCH).click();
      
      cy.xpath(action.poa_1st_row).click()
      cy.wait(2000)
      cy.xpath(action.poa_drop_down).click()
      cy.wait(2000)
      cy.xpath(action.cancle_po).click()
      cy.wait(2000)
      cy.xpath(action.cancleeation_po_reason).click()
      cy.wait(4000)
     // cy.xpath(action.poc_reason).click()
    //// cy.xpath("//button[.='Close']").click(); // or correct close button
cy.wait(1000);

cy.xpath("//span[.='Other']")
  .should('be.visible')
  .click({force : true});
      cy.wait(4000)
      cy.xpath(action.poc_button).click()
      cy.wait(2000)
      cy.xpath(action.canclled_po_screen).click()
       cy.xpath("//div[2]/div[2]/div[1]/span/i[2]").click();
        cy.wait(2000)
        cy.xpath("//div/div[3]/div/div[1]/input").type(storepocnumber);
      cy.xpath(action.E_SEARCH).click();

            })
    },
  }
  export default po_amendmend;


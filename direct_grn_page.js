import action from "../../support/action";
import { faker } from '@faker-js/faker';

// Generate random invoice/DC number (same pattern as reguler_grn.js)
const DIRECT_INVOICE =
  faker.number.int({ min: 10000, max: 99999 }) +
  faker.string.alpha({ length: 5, casing: 'upper' });

const DirectGrnPage = {

  /**
   * Step 1: Login to the application
   */  login: function () {
    cy.visit("https://v2qa.lifetrenz.com/#/auth/login?returnUrl=%2Fhome");
    cy.get(action.username).should('be.visible').type("chandan");
    cy.get(action.Passward).should('be.visible').type("12345");
    cy.xpath(action.loginbutton).click();
    cy.wait(2000);
  },

  /**
   * Step 2: Navigate to Procurement module via sidebar search
   */  navigateToProcurement: function () {
    cy.xpath(action.sidebutton).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.procurement_icon).type("procurement");
    cy.wait(2000);
    cy.xpath(action.procurement_lable).click({ force: true });
    cy.wait(5000);
  },

  /**
   * Step 3: Open Direct GRN and click New GRN
   */  openDirectGrn: function () {
    cy.xpath(action.direct_grn).scrollIntoView().click({ force: true });
    cy.wait(5000);
    cy.xpath(action.new_e_grn).scrollIntoView().click({ force: true });
    cy.wait(2000);
  },

  /**
   * Step 4: Enter Invoice Number and DC Number (faker-generated)
   */  enterGrnDetails: function () {
    cy.xpath(action.EMR_INVOICE).should('be.visible').type(DIRECT_INVOICE);
    cy.wait(2000);
    cy.xpath(action.EMR_DC).should('be.visible').type(DIRECT_INVOICE);
    cy.wait(2000);
  },

  /**
   * Step 5: Select Vendor — type "chandan" and pick from dropdown
   */  selectVendor: function () {
    cy.xpath(action.e_vendore).should('be.visible').type("chandan");
    cy.wait(5000);
    cy.xpath(action.v_name).click({ force: true });
    cy.wait(4000);
  },

  /**
   * Step 6: Select Destination Location — HealthCare Store
   */  selectDestinationLocation: function () {
    cy.xpath(action.store).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.e_store_name).click({ force: true });
    cy.wait(2000);
  },

  /**
   * Step 7: Select Mode of Transport — By Person
   */  selectModeOfTransport: function () {
    cy.xpath(action.M_O_T).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.e_by_person).click({ force: true });
    cy.wait(2000);
  },

  /**
   * Step 8: Save GRN header
   */  saveGrn: function () {
    cy.xpath(action.E_SAVE).click({ force: true });
    cy.wait(2000);
  },

  /**
   * Step 9: Add items — search KA11, select checkbox, add to Direct GRN
   */  addItems: function () {
    cy.xpath(action.E_ADD_ITEM).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.E_TYPE).should('be.visible').type("KA11");
    cy.wait(2000);
    cy.xpath(action.E_SEARCH).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.E_CHECK_BOX).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.d_ADDITEM).click({ force: true });
    cy.wait(2000);
  },

  /**
   * Step 10: Verify that 3 items appear in the GRN main page
   */
  verifyItemsAdded: function () {
    cy.xpath("//table/tbody/tr").should('have.length.at.least', 3);
  },

  /**
   * Step 11a: Fill item details — batch, receiving qty, MRP
   */  fillItemDetails: function () {
    // Batch numbers (items 2 & 3 — item 1 is batchless)
    cy.xpath(action.E_BATCH1).should('be.visible').type("batch-1");
    cy.wait(2000);
    cy.xpath(action.E_BATCH2).should('be.visible').type("batch-1");
    cy.wait(2000);

    // Receiving quantities for all 3 items
    cy.xpath(action.E_RECIVE_QTY1).should('be.visible').type("100");
    cy.wait(2000);
    cy.xpath(action.E_RECIVE_QTY2).should('be.visible').type("100");
    cy.wait(2000);
    cy.xpath(action.E_RECIVE_QTY3).should('be.visible').type("100");
    cy.wait(2000);

    // MRP for batchless item
    cy.xpath(action.d_mrp).should('be.visible').clear().type("5000");
    cy.wait(2000);
  },

  /**
   * Step 11b: Add other charges
   */  addOtherCharges: function () {
    cy.xpath(action.other_charge).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.add_oc).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.E_OC_DROP_DOWN).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.E_OTC).click({ force: true });
    cy.wait(2000);
    cy.xpath(action.E_TYPE1).should('be.visible').type("10.50");
    cy.wait(2000);
    cy.xpath(action.E_REMARK).should('be.visible').type("other charge remark");
    cy.wait(2000);
  },

  /**
   * Step 11c: Save & Commit the GRN
   */  commitGrn: function () {
    cy.xpath(action.E_SAVE2).click({ force: true });
    cy.wait(3000);
  },

  /**
   * Step 11d: Approve the GRN
   */  approveGrn: function () {
    cy.xpath(action.R_grn_approve).scrollIntoView().click({ force: true });
    cy.wait(12000);
    cy.xpath(action.grn_1st_row).click({ force: true });
    cy.wait(12000);
    cy.xpath(action.RG_drop_down).click({ force: true });
    cy.wait(5000);
    cy.xpath(action.RG_approve).click({ force: true });
    cy.wait(5000);
    cy.xpath(action.RG_remark).should('be.visible').type("direct grn approved");
    cy.wait(5000);
    cy.xpath(action.RG_F_approve).click({ force: true });
    cy.wait(3000);
  },

  /**
   * Convenience: Execute the complete Direct GRN creation flow (Steps 3–11c)
   */
  completeDirectGrnFlow: function () {
    this.openDirectGrn();
    this.enterGrnDetails();
    this.selectVendor();
    this.selectDestinationLocation();
    this.selectModeOfTransport();
    this.saveGrn();
    this.addItems();
    this.verifyItemsAdded();
    this.fillItemDetails();
    this.addOtherCharges();
    this.commitGrn();
  }
};

export default DirectGrnPage;

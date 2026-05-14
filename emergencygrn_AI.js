import action from "../../support/action";
import { faker } from '@faker-js/faker';

const AI_EMRINVOICE =
  faker.number.int({ min: 1000, max: 9999 }) +
  faker.string.alpha({ length: 4, casing: 'upper' });

const EMR_AI = {

  /**
   * Login to the application
   */
  EMR_AI_Login: function () {
    cy.visit("https://v2qa.lifetrenz.com/#/auth/login?returnUrl=%2Fhome");
    cy.wait(2000);
    cy.get(action.username).type("chandan");
    cy.wait(2000);
    cy.get(action.Passward).type("12345");
    cy.wait(2000);
    cy.xpath(action.loginbutton).click();
    cy.wait(2000);
  },

  /**
   * Navigate to Procurement module via sidebar search
   */
  EMR_AI_Navigate_Procurement: function () {
    cy.xpath(action.sidebutton).click();
    cy.wait(2000);
    cy.xpath(action.procurement_icon).type("procurement");
    cy.wait(2000);
    cy.xpath(action.procurement_lable).click();
    cy.wait(2000);
  },

  /**
   * Navigate to Emergency GRN and fill the GRN header details
   */
  EMR_AI_Emergency_GRN_Header: function () {
    cy.xpath(action.emr).click();
    cy.wait(2000);
    cy.xpath(action.new_e_grn).click();
    cy.wait(2000);

    // Fill Invoice and DC numbers
    cy.xpath(action.EMR_INVOICE).type(AI_EMRINVOICE);
    cy.wait(2000);
    cy.xpath(action.EMR_DC).type(AI_EMRINVOICE);
    cy.wait(2000);

    // Select Vendor
    cy.xpath(action.e_vendore).type("chandan");
    cy.wait(5000);
    cy.xpath(action.v_name).click();
    cy.wait(4000);

    // Select Store
    cy.xpath(action.store).click();
    cy.wait(2000);
    cy.xpath(action.e_store_name).click();
    cy.wait(2000);

    // Select Mode of Transport
    cy.xpath(action.M_O_T).click();
    cy.wait(2000);
    cy.xpath(action.e_by_person).click();
    cy.wait(2000);

    // Save header
    cy.xpath(action.E_SAVE).click();
    cy.wait(2000);
  },

  /**
   * Add items to the Emergency GRN
   */
  EMR_AI_Add_Items: function () {
    cy.xpath(action.E_ADD_ITEM).click();
    cy.wait(2000);
    cy.xpath(action.E_TYPE).type("KA11");
    cy.wait(2000);
    cy.xpath(action.E_SEARCH).click();
    cy.wait(2000);
    cy.xpath(action.E_CHECK_BOX).click();
    cy.wait(2000);
    cy.xpath(action.E_ADD_ITEM1).click();
    cy.wait(2000);
  },

  /**
   * Fill item details — batch, receiving qty, free qty, cost price, discount, MRP
   */
  EMR_AI_Fill_Item_Details: function () {
    // Batch numbers
    cy.xpath(action.E_BATCH1).type("batch-1");
    cy.wait(2000);
    cy.xpath(action.E_BATCH2).type("batch-1");
    cy.wait(2000);

    // Receiving quantities
    cy.xpath(action.E_RECIVE_QTY1).type("100");
    cy.wait(2000);
    cy.xpath(action.E_RECIVE_QTY2).type("100");
    cy.wait(2000);
    cy.xpath(action.E_RECIVE_QTY3).type("100");
    cy.wait(2000);

    // Free quantities
    cy.xpath(action.E_FREE_QTY1).type("5");
    cy.wait(2000);
    cy.xpath(action.E_FREE_QTY2).type("5");
    cy.wait(2000);
    cy.xpath(action.E_FREE_QTY3).type("5");
    cy.wait(2000);

    // Cost prices
    cy.xpath(action.E_COST_PRICE1).clear().type("100");
    cy.wait(2000);
    cy.xpath(action.E_COST_PRICE2).clear().type("100");
    cy.wait(2000);
    cy.xpath(action.E_COST_PRICE3).clear().type("100");
    cy.wait(2000);

    // Discounts
    cy.xpath(action.E_DIS1).clear().type("5");
    cy.wait(2000);
    cy.xpath(action.E_DIS2).type("5");
    cy.wait(2000);
    cy.xpath(action.E_DIS3).type("5");
    cy.wait(2000);

    // Unit MRP
    cy.xpath(action.E_UNIT_MRP).clear().type("100");
    cy.wait(2000);
  },

  /**
   * Add other charges and save/commit the Emergency GRN
   */
  EMR_AI_Other_Charges_And_Commit: function () {
    // Other Charges
    cy.xpath(action.E_OC).click();
    cy.wait(2000);
    cy.xpath(action.E_ADD_CHARGE).click();
    cy.wait(2000);
    cy.xpath(action.E_OC_DROP_DOWN).click();
    cy.wait(2000);
    cy.xpath(action.E_OTC).click();
    cy.wait(2000);
    cy.xpath(action.E_TYPE1).type("100.5");
    cy.wait(2000);
    cy.xpath(action.E_REMARK).type("Specification");
    cy.wait(2000);

    // Save & Commit
    cy.xpath(action.E_SAVE2).click();
    cy.wait(2000);
  },

  /**
   * Full Emergency GRN flow — combines all steps above
   */
  EMR_AI_Full_Flow: function () {
    this.EMR_AI_Emergency_GRN_Header();
    this.EMR_AI_Add_Items();
    this.EMR_AI_Fill_Item_Details();
    this.EMR_AI_Other_Charges_And_Commit();
  },

  /**
   * Approve the Emergency GRN
   */
  EMR_AI_GRN_Approve: function () {
    cy.xpath(action.R_grn_approve).click();
    cy.wait(12000);
    cy.xpath(action.grn_1st_row).click();
    cy.wait(12000);
    cy.xpath(action.RG_drop_down).click();
    cy.wait(5000);
    cy.xpath(action.RG_approve).click();
    cy.wait(5000);
    cy.xpath(action.RG_remark).type("emergency grn approve via AI flow");
    cy.wait(5000);
    cy.xpath(action.RG_F_approve).click();
    cy.wait(3000);
  }
};

export default EMR_AI;

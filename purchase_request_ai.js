import action from "../../support/action";

const PurchaseRequestAI = {

  /**
   * Step 2: Navigate to Procurement Module
   */
  navigateToProcurement: function () {
    cy.xpath(action.sidebutton).should('be.visible').click();
    cy.xpath(action.procurement_icon).should('be.visible').type("procurement");
    cy.xpath(action.procurement_lable).should('be.visible').click();
  },

  /**
   * Step 3: Click "Create Purchase Request" menu
   */
  clickCreatePurchaseRequest: function () {
    cy.xpath(action.purchase_req1).should('be.visible').click();
  },

  /**
   * Step 4: Click "New PR" button
   */
  clickNewPR: function () {
    cy.xpath(action.new_pr1).should('be.visible').click();
  },

  /**
   * Step 5a: Select Requesting Store - "HealthCare Store"
   */
  selectRequestingStore: function () {
    cy.get(action.requiredStore).should('be.visible').click();
    cy.xpath(action.HealthCare_Store).should('be.visible').click();
  },

  /**
   * Step 5b: Select Purchasing Store - "HealthCare Store"
   */
  selectPurchasingStore: function () {
    cy.get(action.purchasingStore).should('be.visible').click();
    cy.xpath(action.p_HealthCare_Store).should('be.visible').click({ force: true });
  },

  /**
   * Step 5c: Select Purchase Type - "Central"
   */
  selectPurchaseType: function () {
    cy.xpath(action.purchase_type).should('be.visible').click();
   // cy.xpath(action.central).should('be.visible').click();
  },

  /**
   * Step 5d: Select Item Type - "Item"
   */
  selectItemType: function () {
    cy.get(action.purchaseEntity).should('be.visible').click();
    cy.xpath(action.item).should('be.visible').click();
  },

  /**
   * Step 5e: Select Required On Date
   */
  selectRequiredDate: function () {
    cy.xpath(action.calender).should('be.visible').click();
    cy.xpath(action.pr_date).should('be.visible').click();
  },

  /**
   * Step 6: Click "Add Items" button
   */
  clickAddItems: function () {
    cy.xpath(action.add_items).should('be.visible').click();
  },

  /**
   * Step 6a: Search and select item "KA11"
   */
  searchAndSelectItem: function () {
    cy.xpath(action.item_name).should('be.visible').type("KA11");
    cy.xpath(action.search_item).should('be.visible').click();
    cy.xpath(action.check_box).should('be.visible').click();
    cy.xpath(action.add_selected_items).should('be.visible').click();
  },

  /**
   * Step 7: Select UOM for all 3 items
   */
  selectUOM: function () {
    cy.xpath(action.UOM1).should('be.visible').click();
    cy.xpath(action.purchase_UOM1).should('be.visible').click();
    cy.xpath(action.UOM2).should('be.visible').click();
    cy.xpath(action.purchase_UOM2).should('be.visible').click();
    cy.xpath(action.UOM3).should('be.visible').click();
    cy.xpath(action.purchase_UOM3).should('be.visible').click();
  },

  /**
   * Step 8: Enter quantity for all 3 items
   */
  enterQuantities: function () {
    cy.xpath(action.quntity_1).should('be.visible').type("100");
    cy.xpath(action.quntity_2).should('be.visible').type("100");
    cy.xpath(action.quntity_3).should('be.visible').type("100");
  },

  /**
   * Step 9: Commit PR and store PR number
   */
  commitPR: function () {
    cy.xpath(action.commit_pr).should('be.visible').click();
    // Capture and store PR number after commit
    cy.xpath('//div/div/table/tbody/tr[1]/td[1]')
      .should('be.visible')
      .invoke("text")
      .then((prText) => {
        const prNumber = prText.trim();
        cy.log("PR Number: " + prNumber);
        cy.setprnumber(prNumber);
      });
  },

  /**
   * Convenience: Fill all mandatory fields in one call
   */
  fillAllMandatoryFields: function () {
    this.selectRequestingStore();
    this.selectPurchasingStore();
    this.selectPurchaseType();
    this.selectItemType();
    this.selectRequiredDate();
  },

  /**
   * Convenience: Add items with full flow
   */
  addItemsComplete: function () {
    this.clickAddItems();
    this.searchAndSelectItem();
    this.selectUOM();
    this.enterQuantities();
  }
};

export default PurchaseRequestAI;
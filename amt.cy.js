import { faker } from '@faker-js/faker';

describe('Procurement End to End Flow', () => {

  it('Login → PR → PO → PO Approval', () => {

    const remarks = faker.lorem.words(3);

    // ===== LOGIN =====
    cy.visit("https://v2qa.lifetrenz.com/#/auth/login");

    cy.xpath("//input[@placeholder='User Name']").type("sagaragowda");
    cy.get('[formcontrolname="password"]').type("12345");
    cy.xpath("//span[text()='LOGIN']").click();
    cy.wait(3000);

    cy.viewport(1920, 1080);

    // ===== OPEN PROCUREMENT =====
    cy.xpath("//button[@icon='pi pi-search']").click();
    cy.xpath("//input[@placeholder=' Search Application']").type("procurement");
    cy.xpath("//label[text()='Procurement']").click();
    cy.wait(3000);

    // ================= CREATE PR =================
    cy.xpath("//span[.='Create Purchase Request']").click();
    cy.xpath("//button[.='New PR']").click();

    cy.get('[formcontrolname="requiredStore"]').click();
    cy.xpath("//span[.='RMH Lab']").click();

    cy.get('[formcontrolname="purchasingStore"]').click();
    cy.xpath("(//span[.='RMH Lab'])[3]").click();

    cy.xpath("(//div[@aria-haspopup='listbox'])[3]").click();
    cy.xpath("//span[.='Central']").click();

    cy.get('[formcontrolname="purchaseEntity"]').click();
    cy.xpath("//span[.='Item ']").click();

    cy.xpath("(//p-calendar/span/input)[2]").click();
    cy.xpath("//span[.='25']").click();

    cy.xpath("//span[.='Add Items']").click();

    cy.xpath("//input[@formcontrolname='itemName']").type("flow 5");
    cy.xpath("(//span[.='Search'])[1]").click();
    cy.xpath("(//p-checkbox/div/div[2])[1]").click();
    cy.xpath("(//span[.='Add Selected Items to PR'])[1]").click();

    // ===== ENTER QTY =====
    cy.xpath("//tbody/tr[1]/td[9]/input").clear().type("100");
    cy.xpath("//tbody/tr[2]/td[9]/input").clear().type("100");
    cy.xpath("//tbody/tr[3]/td[9]/input").clear().type("100");

    cy.wait(2000);

    // ===== VALIDATE PR AMOUNT =====
    cy.validateAmount(
      "tbody tr",
      "td:eq(8) input",
      "td:eq(7)",
      "td:eq(9)",
      "#prTotal",
      "PR_TOTAL"
    );

    cy.xpath("//span[.='Commit PR']").click();
    cy.wait(4000);

    // ================= CREATE PO =================
    cy.xpath("//span[.='Add PR to PO']").click();

    cy.xpath("//span/p-autocomplete/div/input").type("chandan");
    cy.wait(3000);
    cy.xpath("//span[.='Chandan / CHAN446']").click();

    cy.xpath("//span[.='Other Charges']").click();
    cy.xpath("//span[.='Add Charges']").click();

    cy.xpath("(//p-dropdown/div/span)[16]").click();
    cy.xpath("(//span[.='Other Charges'])[2]").click();

    cy.xpath("//input[@formcontrolname='amount']").clear().type("10.50");

    cy.xpath("//span[.='Commit']").click();
    cy.wait(4000);

    // ===== PO VERIFICATION =====
    cy.xpath("//span[.='PO Verification']").click();
    cy.wait(3000);

    cy.xpath("//p-table//tbody/tr[1]").click();
    cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click();
    cy.xpath("//span[.='Verify PO']").click();
    cy.xpath("//span[.='Verify PO']").click();

    // ===== PO APPROVAL =====
    cy.xpath("//span[.='Purchase Order Approval']").click();

    cy.xpath("//p-table//tbody/tr[1]").click();
    cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click();
    cy.xpath("//span[.='Approve PO']").click();
    cy.xpath("//span[.='Approve PO']").click();

    cy.xpath("//textarea[@formcontrolname='Remarks']").type(remarks);
    cy.xpath("(//span[.='Approve PO'])[3]").click();

    // ✅ FLOW COMPLETED
  });
});

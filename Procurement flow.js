import { faker } from '@faker-js/faker';

describe(' ', function () {
  it(' ', function () {
    //const firstName = faker.person.firstName();
    //const lastName = faker.person.lastName();
    //const email = faker.internet.email();
    //const phone = faker.phone.number('##########');

    const invoiceNo =
  faker.number.int({ min: 100, max: 999 }) +
  faker.string.alpha({ length: 3, casing: 'upper' });

  const EMRINVOICE =
  faker.number.int({ min: 1000, max: 9999 }) +
  faker.string.alpha({ length: 4, casing: 'upper' });

  const DIRINVOICE =
  faker.number.int({ min: 10000, max: 99999 }) +
  faker.string.alpha({ length: 5, casing: 'upper' });

  const invoiceame =
  faker.number.int({ min: 100000, max: 999999 }) +
  faker.string.alpha({ length: 6, casing: 'upper' });

//cy.get('#invoiceNo').type(invoiceNo);


    cy.visit("https://v2qa.lifetrenz.com/#/auth/login")
    cy.xpath("//input[@placeholder='User Name']").type("chandan")
    cy.wait(2000)
    cy.get('[formcontrolname="password"]').type("12345")
    cy.wait(2000)
    cy.xpath("//span[text()='LOGIN']").click()
    cy.wait(2000)

    cy.viewport(1920, 1080);
    cy.xpath("//button[@icon='pi pi-search']").click()
    cy.wait(2000)
    cy.xpath("//input[@placeholder=' Search Application']").type("procurement")
    cy.wait(2000)
    cy.xpath("//label[text()='Procurement']").click()
    cy.wait(2000)

    cy.xpath("//span[.='Create Purchase Request']").click()  //create pr req  menu
         cy.wait(2000)
         cy.xpath("//button[.='New PR']").click()   //new pr button
         cy.wait(2000)
         cy.get('[formcontrolname="requiredStore"]').click();
         cy.wait(1000);
         cy.xpath("//span[.='HealthCare Store']").click();
         cy.wait(1000);
         cy.get('[formcontrolname="purchasingStore"]').click();
         cy.wait(1000); 
         cy.xpath("(//span[.='HealthCare Store'])[3]").click();     //purchasing store
         cy.wait(1000);
         cy.xpath("(//div[@aria-haspopup='listbox'])[3]").click();  //purchase type
         cy.wait(1000);
         cy.xpath("//span[.='Central']").click();
         cy.wait(1000)
         cy.get('[formcontrolname="purchaseEntity"]').click();
         cy.wait(1000)
         cy.xpath("//span[.='Item ']").click();
         cy.wait(1000);
         cy.xpath("(//p-calendar/span/input)[2]").click();
         cy.wait(1000)
         cy.xpath("//span[.='25']").click()  //required on date.
         cy.xpath("//span[.='Add Items']").click();   //click add item butto
         cy.wait(1000);
         cy.xpath("//input[@formcontrolname='itemName']").type("KA11")
        // //click()  item text field
        cy.wait(2000)
        cy.xpath("(//span[.='Search'])[1]").click();
        cy.wait(2000)
        cy.xpath("(//p-checkbox/div/div[2])[1]").click();
        cy.wait(2000)
        cy.xpath("(//span[.='Add Selected Items to PR'])[1]").click()
        cy.wait(2000)
        cy.xpath("//tr[1]/td[3]/p-dropdown/div").click()
        cy.wait(2000)
        cy.xpath("//span[.='Purchase Uom']").click()
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[7]").click()
        cy.wait(2000)
        cy.xpath("(//span[.='Purchase Uom'])[2]").click()
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[9]").click();
        cy.wait(2000)
        cy.xpath("(//span[.='Purchase Uom'])[3]").click();
        cy.wait(2000)
        cy.xpath("//tbody/tr[1]/td[9]/input").type("100")
        cy.wait(2000)
        cy.xpath("//tbody/tr[2]/td[9]/input").type("100")
        cy.wait(1000)
        cy.xpath("//tbody/tr[3]/td[9]/input").type("100")
        cy.wait(2000)
        cy.xpath("//span[.='Commit PR']").click();
        cy.wait(2000)
        //commit pr
        cy.xpath("//span[.='PR Verfication']").click();
        cy.wait(1000)
        cy.xpath("//div/table/tbody/tr[1]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click();
        cy.wait(2000)
        cy.xpath("//span[.='View & Verify Items']").click();
        cy.wait(2000)
        //cy.xpath("//span[.='View & Verify Items']").click();
        //cy.wait(2000)
        cy.xpath("//span[.='Verify PR']").click();
        cy.wait(2000)
        cy.xpath("(//textarea[@formcontrolname='Remarks'])[2]").type("PR REMARK")
        cy.wait(2000)
        cy.xpath("(//span[.='Verify PR'])[3]").click()
        cy.wait(2000)
        cy.xpath("//span[.='PR Approval']").click();
        cy.wait(2000)
        cy.xpath("//div/div/table/tbody/tr[1]").click();
        cy.wait(2000)
        cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click();
        cy.wait(2000)
        cy.xpath("//span[.='View & Approve PR']").click();
        cy.wait(2000)
        cy.xpath("//span[.='Approve PR']").click();
        cy.wait(2000)
        cy.xpath("//textarea[@formcontrolname='Remarks']").type("PR APPROVE")
        cy.wait(2000)
        cy.xpath("(//span[.='Approve PR'])[3]").click();
        cy.wait(3000)
        //approve pr completed
        cy.xpath("//span[.='Create Purchase Order']").click();
        cy.wait(2000)
        cy.xpath("//span[.='Pending PR']").click();
        cy.wait(2000)
        cy.xpath("//p-table/div/div/table/tbody/tr[1]").click();
        cy.wait(2000)
        cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click();
        cy.wait(2000)
        cy.xpath("//span[.='Add PR to PO']").click();
        cy.wait(2000)
        cy.xpath("//span/p-autocomplete/div/input").type("chandan")
        cy.wait(5000)
        cy.xpath("//span[.='Chandan / CHA446']").click()
        cy.wait(5000)
        cy.xpath("//span[.='Other Charges']").click();
        cy.wait(2000)
        cy.xpath("//span[.='Add Charges']").click()
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[16]").click()
        cy.wait(2000)
        cy.xpath("(//span[.='Other Charges'])[2]").click();
        cy.wait(2000)
        cy.xpath("//input[@formcontrolname='amount']").type("10.50")
        cy.wait(200)
        cy.xpath("//span[.='Commit']").click();
        cy.wait(5000)
        //po commit
        cy.xpath("//span[.='PO Verification']").click()
        cy.wait(3000)
        cy.xpath("//p-table/div/div/table/tbody/tr[1]").click();
        cy.wait(2000)
        cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click();
        cy.wait(2000)
        cy.xpath("//span[.='Verify PO']").click();
        cy.wait(2000)
        cy.xpath("//span[.='Verify PO']").click();
        cy.wait(2000)
        cy.xpath("//span[.='Purchase Order Approval']").click();
        cy.wait(2000)
        cy.xpath("//div/div/table/tbody/tr[1]").click();
        cy.wait(2000)
        cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click();
        cy.wait(2000)
        cy.xpath("//span[.='Approve PO']").click();
        cy.wait(2000)
        cy.xpath("//span[.='Approve PO']").click();
        cy.wait(2000)
        cy.xpath("//textarea[@formcontrolname='Remarks']").type("PO APPROVE")
        cy.wait(2000)
        cy.xpath("(//span[.='Approve PO'])[3]").click();
        cy.wait(2000)   //po flow done


        cy.xpath("//span[.='GRN']").click();
    cy.wait(2000)
    cy.xpath("//span[.='New GRN']").click()
    cy.wait(1000)
    cy.xpath("//input[@formcontrolname='invoiceNo']").type(invoiceNo)
    cy.wait(1000)
    cy.xpath("//input[@formcontrolname='deliveryNumber']").type(invoiceNo);
    cy.wait(1000)
    //cy.xpath("//div/div[2]/div[3]/div/p-calendar").click()
    //cy.xpath("//span[.='29']").click()
    //cy.wait(1000)
    cy.get("[formcontrolname='transportation']").type("BY PERSON")
    cy.wait(2000)
    cy.xpath("//span[.='BY PERSON']").click();
    cy.wait(1000)
    cy.xpath("(//p-dropdown/div/input)[2]").type("RMH")
    cy.wait(5000)
    cy.xpath("//div[2]/ul/p-dropdownitem[1]/li").click()
    cy.wait(5000)
    cy.xpath("//table/thead/tr/th[1]/p-checkbox/div").click()
    cy.wait(3000)
    cy.xpath("(//span[.='Save'])[2]").click()
    cy.wait(1000)
    cy.xpath("(//input[@placeholder='Batch #'])[2]").type("batch-1")
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Batch #'])[3]").type("batch-1")
    cy.wait(2000)
    //cy.xpath("(//input[@placeholder='Batch #'])[2]").type("BATCH-2")
    cy.wait(2000)
    /*cy.xpath("(//p-calendar/span/input)[5]").click()
    cy.wait(1000)
    for (let i = 0; i < 4; i++) 
    {
      cy.xpath("//body/div/div/div/div[1]/button[2]").click()
    }
    cy.xpath("//span[.='25']").click()
    cy.wait(1000)
    cy.xpath("(//p-calendar/span/input)[6]").click()
    cy.wait(1000)
    for (let i = 0; i < 4; i++) 
    {
      cy.xpath("//body/div/div/div/div[1]/button[2]").click()
    }
    cy.xpath("//span[.='25']").click()*/
    cy.wait(1000)
    //cy.xpath("(//p-calendar/span/input)[7]").click()
    cy.wait(1000)
    //cy.xpath("//span[.='31']").click()
    cy.wait(1000)
    cy.xpath("(//input[@inputmode='decimal'])[1]").type("5000")
    cy.wait(2000)
    //-unit mrp=cy.xpath("(//input[@inputmode='decimal'])[2]").type("3000")
    cy.wait(2000)
    //-unit mrp=cy.xpath("(//input[@inputmode='decimal'])[3]").type("3000")
    cy.wait(2000)
    cy.xpath("//span[.='Save & Commit']").click()
    cy.wait(4000)
    //regular grn completed
    cy.xpath("//span[.='GRN Approval']").click();
    cy.wait(5000)
    cy.xpath("//div/table/tbody/tr[1]").click();
    cy.wait(5000)
    cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click();
    cy.wait(5000)
    cy.xpath("//span[.='Approve GRN']").click()
    cy.wait(5000)
    cy.xpath("//textarea[@formcontrolname='Remarks']").type("GRN APPROVEL")
    cy.wait(5000)
    cy.xpath("(//span[.='Approve GRN'])[2]").click()
    cy.wait(5000)  //approve copleted
    //GERULAR GRN COMPLETED
    //emergency grn flow
    cy.xpath("//span[.='Emergency GRN']").click();
        cy.wait(2000)
        cy.xpath("//span[.='New GRN']").click()
        cy.wait(2000)
       // cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click
       cy.xpath("//input[@formcontrolname='invoiceNo']").type(EMRINVOICE)
       cy.wait(2000)
       cy.xpath("//input[@formcontrolname='deliveryNumber']").type(EMRINVOICE)
       cy.wait(5000)
       cy.xpath("//p-autocomplete/div/input").type("chandan")
       cy.wait(5000)
       cy.xpath("//span[.='Chandan / CHA446']").click();
       cy.wait(5000)
       cy.xpath("(//p-dropdown/div/span)[1]").click()
       cy.wait(2000)
       cy.xpath("//span[.='HealthCare Store']").click();
       cy.wait(1000)
       cy.xpath("(//p-dropdown/div/span)[2]").click()
       cy.wait(2000)
       cy.xpath("//span[.='By Person']").click()
       cy.wait(3000)
       cy.xpath("(//span[.='Save'])[1]").click()
       cy.wait(3000)
       cy.xpath("//span[.='Add Items']").click()
       cy.wait(3000)
       cy.xpath("//form/div[1]/div[2]/span/input").type("ka11")
       cy.wait(2000)
       cy.xpath("//span[.='Search']").click()
       cy.wait(1000)
       cy.xpath("(//p-checkbox/div/div[2])[1]").click()
       cy.wait(2000)
       cy.xpath("//span[.='Add Selected Items to Emergency GRN']").click()
       cy.wait(1000)
       cy.xpath("(//input[@placeholder='Batch #'])[2]").type("batch-1")
       cy.wait(2000)
       cy.xpath("(//input[@placeholder='Batch #'])[3]").type("batch-1")
       cy.wait(2000)
       //cy.xpath("(//p-calendar/span/input)[4]").click()
       //cy.wait(2000)
       //cy.xpath("//span[.='31']").click()
       //cy.wait(2000)
       //cy.xpath("(//p-calendar/span/input)[5]").click()
       //cy.wait(2000)
       //cy.xpath("//span[.='31']").click()
       cy.wait(2000)
       cy.xpath("(//input[@placeholder='Receiving Qty'])[1]").type("100")  //Received enterd
       cy.wait(2000)
       cy.xpath("(//input[@placeholder='Receiving Qty'])[2]").type("100")
       cy.wait(2000)
       cy.xpath("(//input[@placeholder='Receiving Qty'])[3]").type("100")
       cy.wait(1000)
       cy.xpath("(//input[@tooltipposition='top'])[2]").type("5")//free qty entred
       cy.wait(1000)
       cy.xpath("(//input[@tooltipposition='top'])[7]").type("5")
       cy.wait(1000)
       cy.xpath("(//input[@tooltipposition='top'])[12]").type("5")
       cy.wait(2000)
       cy.xpath("(//input[@inputmode='decimal'])[1]").clear().type("100")//cost price
       cy.wait(2000)
       cy.xpath("(//input[@inputmode='decimal'])[3]").clear().type("100")
       cy.wait(2000)
       cy.xpath("(//input[@inputmode='decimal'])[5]").clear().type("100")
       cy.wait(2000)
       cy.xpath("(//input[@tooltipposition='top'])[3]").clear().type("5")//Discount apply
       cy.wait(2000)
       cy.xpath("(//input[@tooltipposition='top'])[8]").type("5")
       cy.wait(1000)
       cy.xpath("(//input[@tooltipposition='top'])[13]").type("5")
       cy.wait(1000)
       cy.xpath("(//input[@inputmode='decimal'])[2]").clear().type("5000")//unit mrp
       cy.wait(1000)
       //cy.xpath("(//input[@inputmode='decimal'])[4]").clear().type("200")
       cy.wait(1000)
      // cy.xpath("(//input[@inputmode='decimal'])[6]").clear().type("200")
       cy.wait(3000)
       cy.xpath("//span[.='Other Charges']").click();
       cy.wait(2000)
       cy.xpath("//span[.='Add Charges']").click();
       cy.wait(2000)
       cy.xpath("(//p-dropdown/div/span)[9]").click();
       cy.wait(2000)
       cy.xpath("(//span[.='Other Charges'])[2]").click();
       cy.wait(2000)
       cy.xpath("//input[@formcontrolname='amount']").type("10.50")
       cy.wait(2000)
       cy.xpath("//table/tbody/tr/td[3]/input").type("Specification")
       cy.wait(2000)
       cy.xpath("//span[.='Discount']").click();
       cy.wait(2000)
       cy.xpath("//span[.='Yes']").click();
       cy.wait(2000)
       cy.xpath("(//div[1]/p-dropdown/div/span)[7]").click();
       cy.wait(2000)
       cy.xpath("//p-dropdownitem/li").click();
       cy.wait(2000)
       cy.xpath("//div/div[1]/div[2]/input").type("5")
       cy.wait(5000)
       cy.wait(3000)
       cy.xpath("//span[.='Save & Commit']").click()
       cy.wait(5000)
// emergency grn approvel
       cy.xpath("//span[.='GRN Approval']").click()
    cy.wait(5000)
    cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click()
    cy.wait(5000)
    cy.xpath("//span[.='Approve GRN']").click()
    cy.wait(5000)
    cy.xpath("//textarea[@formcontrolname='Remarks']").type("REMARK")
    cy.wait(5000)
    cy.xpath("(//span[.='Approve GRN'])[2]").click()
    cy.wait(5000)

       
       //DIRECT GRN START
       cy.xpath("//span[.='Direct GRN']").click();
    cy.wait(2000)
    cy.xpath("//span[.='New GRN']").click()
    cy.wait(2000)
    cy.xpath("//input[@formcontrolname='invoiceNo']").type(DIRINVOICE)
    cy.wait(2000)
    cy.xpath("//input[@formcontrolname='deliveryNumber']").type(DIRINVOICE);
    cy.wait(5000)
    cy.xpath("//p-autocomplete/div/input").type("chandan")
    cy.wait(5000)
    cy.xpath("//span[.='Chandan / CHA446']").click()
    cy.wait(2000)
    cy.xpath("(//span/p-dropdown/div/span)[1]").type("HealthCare Store")
    cy.wait(2000)
    cy.xpath("//span[.='HealthCare Store']").click()
   // cy.xpath("//span[.='Chandan / CHA446']").click();
    cy.wait(2000)
    cy.xpath("(//span/p-dropdown/div/span)[2]").click()
    cy.wait(2000)
    cy.xpath("//span[.='By Person']").click();
    cy.wait(2000)
    cy.xpath("//span[.='Save']").click()
    cy.wait(2000)
    cy.xpath("//span[.='Add Items']").click()
    cy.wait(2000)
    cy.xpath("//form/div[1]/div[2]/span/input").type("ka11") //item nmae
    cy.wait(5000)
    cy.xpath("//span[.='Search']").click()
    cy.wait(5000)
    cy.xpath("(//p-checkbox/div/div[2])[1]").click()
    cy.wait(5000)
    cy.xpath("//span[.='Add Selected Items to Direct GRN']").click();
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Batch #'])[2]").type("batch-1")
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Batch #'])[3]").type("batch-1")
    cy.wait(2000)
   // cy.xpath("(//p-calendar/span/input)[4]").click()
    cy.wait(2000)
    /*for (let i = 0; i < 4; i++) 
    {
      cy.xpath("/html/body/div/div/div/div[1]/button[2]").click();
    }
    cy.wait(1000)
    cy.xpath("//span[.='25']").click();
    cy.wait(2000)
    cy.xpath("(//p-calendar/span/input)[5]").click()
    cy.wait(1000)
    for(let i=0; i<4; i++)
    {
      cy.xpath("/html/body/div/div/div/div[1]/button[2]").click();
    }
    cy.wait(1000)
    cy.xpath("//span[.='25']").click();
    cy.wait(2000)*/
    cy.xpath("(//input[@placeholder='Receiving Qty'])[1]").type("100")
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Receiving Qty'])[2]").type("100")
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Receiving Qty'])[3]").type("100") //Received QTY
    cy.wait(2000)
    //cy.xpath("//tr[1]/td[6]/div/input").type("2")
    //cy.wait(2000)
    //cy.xpath("//tbody/tr[2]/td[6]/div/input").type("2")
    //cy.wait(2000)
   // cy.xpath("//tbody/tr[3]/td[6]/div/input").type("2")
   // cy.wait(2000)
    //cy.xpath("(//input[@name='costPrice'])[1]").clear().type(100)
    //cy.wait(2000)
    //cy.xpath("(//input[@name='costPrice'])[2]").clear().type("100")
    //cy.wait(2000)
    //cy.xpath("(//input[@name='costPrice'])[3]").clear().type("100")
    cy.wait(2000)
   // cy.xpath("//tbody/tr[1]/td[10]/input").type("5") //dis
    cy.wait(2000)
    //cy.xpath("//tr[2]/td[10]/input").type("5")
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='MRP'])[1]").clear().type("5000")
    cy.wait(2000)
    //cy.xpath("(//input[@placeholder='MRP'])[2]").clear().type("500")
    cy.wait(2000)
    //cy.xpath("(//input[@placeholder='MRP'])[3]").clear().type("500")
    cy.wait(2000)
    cy.xpath("//span[.='Other Charges']").click();
       cy.wait(2000)
       cy.xpath("//span[.='Add Charges']").click();
       cy.wait(2000)
       cy.xpath("(//p-dropdown/div/span)[9]").click();
       cy.wait(2000)
       cy.xpath("(//span[.='Other Charges'])[2]").click();
       cy.wait(2000)
       cy.xpath("//input[@formcontrolname='amount']").type("10.50")
       cy.wait(2000)
       cy.xpath("//table/tbody/tr/td[3]/input").type("Specification")
       cy.wait(2000)
       cy.xpath("//span[.='Discount']").click();
       cy.wait(2000)
       cy.xpath("//span[.='Yes']").click();
       cy.wait(2000)
       cy.xpath("(//div[1]/p-dropdown/div/span)[7]").click();
       cy.wait(2000)
       cy.xpath("//p-dropdownitem/li").click();
       cy.wait(2000)
       cy.xpath("//div/div[1]/div[2]/input").type("5")
       cy.wait(5000)
       cy.wait(3000)
       cy.xpath("//span[.='Save & Commit']").click()
       cy.wait(5000)
       
    //cy.wait(2000)
    //cy.xpath("//span[.='Save & Commit']").click()
    //cy.wait(5000)
    // completed
    cy.xpath("//span[.='GRN Approval']").click()
    cy.wait(5000)
    cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click()
    cy.wait(5000)
    cy.xpath("//span[.='Approve GRN']").click()
    cy.wait(5000)
    cy.xpath("//textarea[@formcontrolname='Remarks']").type("REMARK")
    cy.wait(5000)
    cy.xpath("(//span[.='Approve GRN'])[2]").click()
    cy.wait(5000)

    //AMENDMENT PO AND GRN APPROVE
    cy.xpath("//span[.='Create Purchase Order']").click();
    cy.wait(2000)
    cy.xpath("//span[.='New PO']").click();
    cy.wait(2000)
    cy.xpath("//div[2]/span/p-dropdown/div/div").click()
    cy.wait(2000)
    cy.xpath("//div/div/div/div[1]/div/input").type("HealthCare store")
    cy.wait(2000)
    cy.xpath("//span[.='HealthCare Store']").click()
    cy.wait(2000)
    cy.xpath("//span/p-autocomplete/div/input").type("chandan")
    cy.wait(5000)
    cy.xpath("//span[.='Chandan / CHA446']").click()
    cy.wait(2000)
    cy.xpath("(//span/p-dropdown/div/div)[3]").click()
    cy.wait(2000)
    cy.xpath("//span[.='Regular PO']").click();
    cy.wait(2000)
    cy.xpath("(//span/p-dropdown/div/div)[5]").click()
    cy.wait(2000)
    cy.xpath("(//span[.='Ramaiah Memorial Hospital'])[3]").click()
    cy.wait(2000)
    cy.xpath("(//span/p-dropdown/div/div)[6]").type("HealthCare Store")
    cy.wait(2000)
    cy.xpath("(//span[.='HealthCare Store'])[3]").click()
    cy.wait(2000)
    //cy.xpath("(//span/p-dropdown/div/span)[6]").click()
    cy.wait(2000)
    //cy.xpath("//span[.='HealthCare Store']").click()
    cy.wait(2000)
    cy.xpath("//p-calendar/span/input").click()
    cy.wait(2000)
    cy.xpath("//span[.='26']").click()
    cy.wait(2000)
    cy.xpath("(//span[.='Add Items'])[1]").click()
    cy.wait(2000)
    cy.xpath("//span[.='From Direct Search']").click()
    cy.wait(2000)
    cy.xpath("//div[1]/div[2]/span/input").type("ka11")
    cy.wait(2000)
    cy.xpath("(//span[.='Search'])[2]").click()
    cy.wait(2000)
    cy.xpath("(//p-checkbox/div/div[2])[1]").click()
    cy.wait(2000)
    cy.xpath("//tbody/tr[1]/td[6]/input").type("100")
    cy.wait(2000)
    cy.xpath("//tbody/tr[2]/td[6]/input").type(100)
    cy.wait(2000)
    cy.xpath("//tbody/tr[3]/td[6]/input").type(100)
    cy.wait(2000)
    cy.xpath("(//span[.='Add Selected Items to PO'])[2]").click()
    cy.wait(2000)
    cy.xpath("//span[.='Other Charges']").click()
    cy.wait(2000)
    cy.xpath("//span[.='Add Charges']").click()
    cy.wait(2000)
    cy.xpath("(//p-dropdown/div/span)[16]").click()
    cy.wait(2000)
    cy.xpath("(//span[.='Other Charges'])[2]").click()
    cy.wait(2000)
    cy.xpath("//table/tbody/tr/td[2]/input").type("100.50")
    cy.wait(2000)
    cy.xpath("//span[.='Commit']").click()
    cy.wait(2000)
    cy.xpath("//span[.='PO Verification']").click()
    cy.wait(2000)
    cy.xpath("//div/div/table/tbody/tr[1]").click()
    cy.wait(2000)
    cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click()
    cy.wait(2000)
    cy.xpath("//span[.='Verify PO']").click()
    cy.wait(2000)
    cy.xpath("//span[.='Verify PO']").click()
    cy.wait(2000)
    cy.xpath("//span[.='Purchase Order Approval']").click()
    cy.wait(2000)
    cy.xpath("//div/div/table/tbody/tr[1]").click()
    cy.wait(2000)
    cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click()
    cy.wait(2000)
    cy.xpath("//span[.='Approve PO']").click()
    cy.wait(2000)
    cy.xpath("//span[.='Approve PO']").click()
    cy.wait(2000)
    cy.xpath("//div/form/div/textarea").type("PO REMARK")
    cy.wait(2000)
    cy.xpath("(//span[.='Approve PO'])[3]").click();
    cy.wait(2000)
    //po completed
    cy.xpath("//span[.='PO Amendment']").click()
    cy.wait(3000)
    cy.xpath("//span[.='Approved PO']").click()
    cy.wait(3000)
    cy.xpath("//p-table/div/div/table/tbody/tr[1]").click()
    cy.wait(2000)
    cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click()
    cy.wait(2000)
    cy.xpath("//span[.='Create Amendment PO']").click()
    cy.wait(2000)
    cy.xpath("//span[.='Discount']").click()
    cy.wait(2000)
    cy.xpath("(//div/p-dropdown/div/span)[4]").click()
    cy.wait(2000)
    cy.xpath("//p-dropdownitem/li").click()
    cy.wait(2000)
    cy.xpath("(//span/input)[2]").type("10")
    cy.wait(2000)
    cy.xpath("//span[.='Commit Amendment PO']").click()
    cy.wait(2000)
    cy.xpath("//span[.='PO Amendment Approval']").click()
    cy.wait(2000)
    cy.xpath("//div/div/table/tbody/tr[1]").click()
    cy.wait(2000)
    cy.xpath("//button[contains(@class,'p-splitbutton-menubutton')]").click()
    cy.wait(2000)
    cy.xpath("//span[.='Approve Amendment PO']").click()
    cy.wait(2000)
    cy.xpath("//span[.='Approve PO']").click()
    cy.wait(2000)
    cy.xpath("//div/form/div/textarea").type("po amendment approve")
    cy.wait(2000)
    cy.xpath("(//span[.='Approve PO'])[3]").click()
    cy.wait(2000)



  })
})
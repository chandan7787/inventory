describe(' ', function () {
  it(' ', function () {
    cy.visit("https://v2qa.lifetrenz.com/#/auth/login")
        cy.xpath("//input[@placeholder='User Name']").type("sagaragowda")
        cy.wait(2000)
        cy.get('[formcontrolname="password"]').type("12345")
        cy.wait(2000)
        cy.xpath("//span[text()='LOGIN']").click()
        cy.wait(2000)

        cy.viewport(1920, 1080);
        cy.xpath("//button[@icon='pi pi-search']").click()
        cy.wait(2000)
        cy.xpath("//input[@placeholder=' Search Application']").type("inventory")
        cy.wait(2000)
        cy.xpath("//label[.='Inventory']").click()
        cy.wait(2000)
        cy.xpath("//span[.='Masters']").click()
        cy.wait(2000)
        cy.xpath("//span[.='Central Item Master']").click()
        cy.wait(2000)
        cy.xpath("//span[.='Add New']").click()
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[1]").type("medicatio")
        cy.wait(2000)
        cy.xpath("//span[.=' Rx - Medication ']").click()
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[2]").type("medication")
        cy.wait(2000)
        cy.xpath("(//span[.='Medication'])[3]").click()
        cy.wait(2000)
        cy.xpath("(//div/form/div[1]/div[3]/input)[1]").type("flow o.1 mg")
        cy.wait(2000)
        cy.xpath("//form/div[1]/div[4]/span/input").type("flow code")
        cy.wait(2000)
        cy.xpath("(//p-checkbox/div/div[2])[1]").click()//Saleable check box check
        cy.wait(2000)
        cy.xpath("(//span/p-checkbox/div/div[2])[2]").click();
        cy.wait(2000)
        cy.xpath("//input[@formcontrolname='dpco']").type("100")
        cy.wait(2000)
        cy.xpath("(//span/p-dropdown/div/span)[5]").click();
        cy.wait(2000)
        cy.xpath("//span[.='TAX-17%']").click();
        cy.wait(2000)
        cy.xpath("(//span/p-dropdown/div/span)[7]").click();
        cy.wait(2000)
        cy.xpath("(//span[.='Rate Contract'])[2]").click();
        cy.wait(2000)
        cy.xpath("//div/div[3]/span/input").type("100")
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[8]").click();
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[8]").click();
        cy.wait(3000)
        //cy.xpath("(//span[.='TAX-17%'])[3]").click();
        //cy.wait(3000)
        cy.xpath("//span[.='UOM']").click()
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[9]").click()
        cy.wait(2000)
        cy.xpath("Inventory UOM").click();
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[10]").click();
        cy.wait(2000)
        cy.xpath("//span[.='Inventory UOM']")
        cy.wait(2000)
        cy.xpath("//span[.='EACH']").click();
        cy.wait(2000)
        cy.xpath("(//span[.='Add'])[2]").click();
        cy.wait(2000)
        cy.xpath("//span[.='Yes']").click();
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[9]").click();
        cy.wait(2000)
        cy.xpath("//span[.='Purchase UOM']")
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[10]").click();
        cy.wait(2000)
        cy.xpath("//span[.='EACH']").click();
        cy.wait(2000)
        cy.xpath("(//div/form/div/div[3]/input)[2]").type("1")//purchase uom =each
        cy.wait(2000)
        cy.xpath("(//span[.='Add'])[2]").click();
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[9]").click();
        cy.wait(2000)
        cy.xpath("Purchase UOM").click();
        cy.wait(2000)
        cy.xpath("(//p-dropdown/div/span)[10]").click();
        cy.wait(2000)
        cy.xpath("//span[.='BOX']").click();
        cy.wait(2000)
        cy.xpath("(//div/form/div/div[3]/input)[2]").type("10")
        cy.wait(2000)
        cy.xpath("(//span[.='Add'])[2]").click()//2 purchase uom done

  })
})
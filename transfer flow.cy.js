describe(' ', function () {
  it(' ', function () {
    cy.visit("https://v2qa.lifetrenz.com/#/auth/login")
    cy.xpath("//input[@placeholder='User Name']").type("chandan")
    cy.wait(2000)
    cy.get('[formcontrolname="password"]').type("12345")
    cy.wait(5000)
    cy.xpath("//span[text()='LOGIN']").click()
    cy.wait(5000)
    
    cy.viewport(1920, 1080);
    cy.xpath("//button[@icon='pi pi-search']").click()
    cy.wait(2000)
    cy.xpath("//input[@placeholder=' Search Application']").type("inventory")
    cy.wait(5000)
    cy.xpath("//label[.='Inventory']").click()
    cy.wait(5000)
    cy.xpath("//span[.='Stock Movement']").click()
    cy.wait(3000)
    cy.xpath("//span[.='Opening Stock']").click()
    cy.wait(2000)
    cy.xpath("//span[.='Add New']").click()
    cy.wait(2000)
    cy.xpath("(//span/p-dropdown/div/span)[1]").type("healthcare store")
    cy.wait(2000)
    cy.xpath("//span[.='HealthCare Store']").click()
    cy.wait(2000)
    cy.xpath("(//span/p-dropdown/div/span)[2]").click()
    cy.wait(2000)
    cy.xpath("//span[.='BY PERSON']").click()
    cy.wait(2000)
    cy.xpath("(//p-autocomplete/div/input)[2]").type("chandan")
    cy.wait(2000)
    cy.xpath("//span[.='Chandan']").click()
    cy.wait(2000)
    cy.xpath("//span[.='Add']").click()
    cy.wait(2000)
    cy.xpath("//tbody/tr/td[1]/span/input").type("ka11")
    cy.wait(2000)
    cy.xpath("//td[.='DOLO 650.11 MG-KA11']").click()
    cy.wait(2000)
    cy.xpath("//table/tbody/tr/td[2]/input").type("BATCH-O6")
    cy.wait(2000)
    cy.xpath("(//p-calendar/span/input)[2]").click()
    for(let i=0;i<=3;i++)
    {
      cy.xpath("/html/body/div/div[1]/div/div[1]/button[2]").click()
    }
    cy.xpath("//span[.='25']").click()
    cy.wait(2000)
    cy.xpath("//table/tbody/tr/td[4]/input").type("100")
    cy.wait(2000)
    cy.xpath("//table/tbody/tr/td[6]/input").type("500")
    cy.wait(2000)
    cy.xpath("//table/tbody/tr/td[8]/input").type("600")
    cy.xpath("//span[.='Add']").click()
    cy.wait(2000)

    cy.xpath("//tbody/tr[2]/td[1]/span/input").type("ka11")
    cy.wait(2000)
    cy.xpath("//td[.='DOLO 650.1 MG-KA11']").click()
    cy.wait(2000)
    cy.xpath("//table/tbody/tr[2]/td[2]/input").type("BATCH-O6")
    cy.wait(2000)
    cy.xpath("(//p-calendar/span/input)[3]").click()
    for(let i=0;i<=3;i++)
    {
      cy.xpath("/html/body/div/div[1]/div/div[1]/button[2]").click()
    }
    cy.xpath("//span[.='25']").click()

    cy.xpath("//table/tbody/tr[2]/td[4]/input").type("100")
    cy.wait(2000)
    cy.xpath("//table/tbody/tr[2]/td[6]/input").type("600")
    cy.wait(2000)
    cy.xpath("//table/tbody/tr[2]/td[8]/input").type("600")
    cy.wait(2000)
    cy.xpath("//span[.='Save']").click()
    cy.wait(2000)
    
    

    
    

    
        
         



  })
})
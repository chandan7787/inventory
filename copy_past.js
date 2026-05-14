import action from "../../support/action";

const login1 = {
    procurementlogin1: function()
    {
        cy.visit("https://v2qa.lifetrenz.com/#/auth/login?returnUrl=%2Fhome");
        cy.wait(2000)
        cy.get(action.username).type("chandan")
        cy.wait(2000)
        cy.get(action.Passward).type("12345");
        cy.wait(2000)
        cy.xpath(action.loginbutton).click
        cy.wait(2000)

    },
    procurement_icon1: function()
    {
        cy.viewport(1920, 1080);
        cy.xpath(action.sidebutton).click();
        cy.wait(2000)
        cy.xpath(action.procurement_icon).type("procurement")
        cy.wait(2000)
        cy.xpath(action.procurement_lable).click();
        cy.wait(2000)
    },
    procurement_pr1: function()
    {
        //cy.xpath(action.sidebutton).click();
        //cy.wait(2000)
       // cy.xpath(action.procurement_icon).type("procurement")
       // cy.wait(2000)       // cy.xpath(action.procurement_lable).click();
       // cy.wait(2000)
        cy.xpath(action.purchase_req1).click();
        cy.wait(2000)
        cy.xpath(action.new_pr1).click();
        cy.wait(2000)
        cy.get(action.requiredStore).click();
        cy.wait(2000)
        cy.xpath(action.HealthCare_Store).click();
        cy.wait(2000)
        cy.get(action.purchasingStore).click()
        cy.wait(2000)
        cy.xpath(action.p_HealthCare_Store).click();
        cy.wait(2000)
        cy.xpath(action.purchase_type).click();
        cy.wait(2000)
        cy.xpath(action.centra).click();
        cy.wait(2000)
        cy.get(action.item_type).click();
        cy.wait(2000)
        cy.xpath(action.type).click();
        cy.wait(2000)
        //cy.xpath(action.Calender).click();
        cy.wait(2000)
       // cy.xpath(action.date).click();
        cy.wait(2000)
        cy.xpath(action.add_itembutton).click();
        cy.wait(2000)
        cy.xpath(action.item_name_type).type("ka11");
        cy.wait(2000)
        cy.xpath(action.search).click();
        cy.wait(2000)
        cy.xpath(action.main_check_box).click();
        cy.wait(2000)
        cy.xpath(action.add_item_button).click();
        cy.wait(2000)
        cy.xpath(action.first_uom).click();
        cy.wait(2000)
        cy.xpath(action.purchase_uom1).click();
        cy.wait(2000)
        cy.xpath(action.second_uom).click();
        cy.wait(2000)
        cy.xpath(action.purchase_uom2).click();
        cy.wait(2000)
        cy.xpath(action.third_uom).click();
        cy.wait(2000)
        cy.xpath(action.purchase_uom3).click();
        cy.wait(2000)
        cy.xpath(action.pr_qty1).type("100");
        cy.wait(2000)
        cy.xpath(action.pr_qty2).type("100");
        cy.wait(2000)
        cy.xpath(action.pr_qty3).type("100");
        cy.wait(2000)
        cy.xpath(action.commit_pr).click();
        cy.wait(2000)
         cy.xpath('//div/div/table/tbody/tr[1]/td[1]')
        .invoke("text")
        .then((prText) => {
            const storeprnumber=prText.trim();
            cy.wrap(storeprnumber).as('storedPrNumber');
            cy.log('Stored PR Number:', storeprnumber);

            // cy.get('@storedPrNumber').then((storedPrNumber) =>
            //      {
            //         cy.xpath("//div/div[2]/div[2]/div[1]/span/i[2]").click();
            //         cy.xpath("//p-splitter/div/div[3]/div/div[1]/input").type(storedPrNumber);
            //         cy.xpath("//button[.='Search']").click();
            //      });

            
        });
    },
    pr_request :function()
    {
        cy.xpath(action.pr_verification).click();
        cy.get('@storedPrNumber').then((storedPrNumber) =>
                 {
                    cy.xpath("//div/div[2]/div[2]/div[1]/span/i[2]").click();
                    cy.xpath("//p-splitter/div/div[3]/div/div[1]/input").type(storedPrNumber);
                    cy.xpath("//button[.='Search']").click();
                 });

    }
}
export default login1;

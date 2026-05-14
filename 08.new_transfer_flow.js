import action from "../../support/action";

const new_transfer_flow = {

    new_transfer: function() {
    cy.xpath(action.Stock_Movement).click();
    cy.wait(2000)
    cy.xpath(action.New_Transfer).click();
    cy.wait(2000)
    cy.xpath(action.new).click();
    cy.wait(2000)
    cy.xpath(action.From_Stock_Area).click();
    cy.wait(2000)
    cy.xpath(action.store_name_type).type("Healthcare store")
    cy.wait(2000)
    cy.xpath(action.HealthCare_Store).click({ force: true });
    cy.wait(2000)
    cy.xpath(action.To_Stock_Area).click();
    cy.wait(2000)
    cy.xpath(action.store_name_type).type("main medical store")
    cy.wait(2000)
    cy.xpath(action.main_medical_store).click({ force: true });
    cy.wait(2000)
    cy.xpath(action.Mode_of_Transport).click();
    cy.wait(2000)
    cy.xpath(action.by_person).click();
    cy.wait(2000)
    cy.xpath(action.add).click();
    cy.wait(2000)
    cy.xpath(action.transfer_item1).type("ka11")
    cy.wait(2000)
    cy.xpath(action.transfer_item_name1).click();
    cy.wait(2000)
    cy.xpath(action.batch_no).click();
    cy.wait(2000)
    cy.xpath(action.batch_name).click();
    cy.wait(2000)
    cy.xpath(action.issue_qty).type("100");
    cy.wait(2000)
    cy.xpath(action.add).click();
    cy.wait(2000)
    cy.xpath(action.transfer_item2).type("ka11")
    cy.wait(2000)
    cy.xpath(action.transfer_item_name2).click();
    cy.wait(2000)
    cy.xpath(action.batch_no2).click();
    cy.wait(2000)
    cy.xpath(action.batch_name2).click();
    cy.wait(2000)
    cy.xpath(action.issue_qty2).type("100");
    cy.wait(2000)
    cy.xpath(action.add).click();
    cy.wait(2000)
    cy.xpath(action.transfer_item3).type("ka11")
    cy.wait(2000)
    cy.xpath(action.transfer_item_name3).click();
    cy.wait(2000)
    
    cy.xpath(action.issue_qty3).type("100");
    cy.wait(2000)
    cy.xpath(action.transfer_save).click();
    cy.wait(5000)
    cy.xpath('//p-table/div/div[2]/table/tbody/tr[1]/td[1]')
            .should('be.visible')
            .invoke("text")
            .then((transferText) => 
                {
              const storetransfernumber = transferText.trim();

              cy.setstoretransfernumber(storetransfernumber);

              cy.log('Stored Transfer Number:', storetransfernumber);
});
            


    },
    Receiving_Queue: function() 
    {
        cy.getstoretransfernumber().then((storetransfernumber) => {

    cy.xpath(action.Receiving_Queue).click();
    cy.xpath("//div[2]/div[2]/div[1]/span/i[2]").click();

    cy.wait(2000)

    cy.xpath("//div/div[3]/div/div[1]/input")
      .type(storetransfernumber);

    cy.xpath(action.E_SEARCH).click();
    cy.wait(2000)
    cy.xpath(action.Receive).click();
    cy.wait(2000)

    cy.xpath(action.receive_item1).clear().type("60");
    cy.wait(1000)
    cy.xpath(action.receive_item2).clear().type("60");
    cy.wait(1000)
    cy.xpath(action.receive_item3).clear().type("60");
    cy.wait(1000)
    cy.xpath(action.Confirm_button).click();
    
    
});
     
        
    },
    Rejected_Stock_Transfers: function()
     {
        cy.xpath(action.Rejected_Stock_Transfers).click();
        cy.wait(2000)
        cy.xpath(action.first_line).click();
        cy.wait(2000)
        cy.xpath(action.action_drop_down).click();
        cy.wait(2000)
        cy.xpath(action.accept).click();
        cy.wait(2000)
        cy.xpath(action.Commit_Request).click();
        cy.wait(2000)
    },
    add_stock_flow: function()
     {
      cy.xpath(action.Stock_Movement).click();
      cy.wait(2000)
      cy.xpath(action.Stock_Addition).click();
      cy.wait(2000)
      cy.xpath(action.new).click();
      cy.wait(2000)
      cy.xpath(action.Destination_Location).type("Healthcare store")
      
      cy.wait(2000)
      cy.xpath(action.HealthCare_Store).click({ force: true });
      cy.wait(2000)
      cy.xpath(action.Transportation_Type).click();
      cy.wait(2000)
      cy.xpath(action.by_person).click();
      cy.wait(2000)
      cy.xpath(action.add).click();
      cy.wait(2000)
      cy.xpath(action.transfer_item1).type("ka11")
      cy.wait(2000)
      cy.xpath(action.itemname_1).click();
      cy.wait(2000)
      cy.xpath(action.batch_name1).type("batch-1")
      cy.wait(2000)
      cy.xpath(action.batch_qty1).type("10");
      cy.wait(2000)
      cy.xpath(action.cost_price).type("100");
      cy.wait(2000)
      cy.xpath(action.add).click();
      cy.wait(2000)
      cy.xpath(action.transfer_item2).type("ka11")
      cy.wait(2000)
      cy.xpath(action.itemname_2).click();
      cy.wait(2000)
      cy.xpath(action.batch_name2).type("batch-1")
      cy.wait(2000)
      cy.xpath(action.batch_qty2).type("10");
      cy.wait(2000)
      cy.xpath(action.cost_price2).type("100");
      cy.wait(2000)
      cy.xpath(action.add).click();
      cy.wait(2000)
       cy.xpath(action.transfer_item3).type("ka11")
       
      cy.wait(2000)
      cy.xpath(action.itemname_3).click();
      
      cy.wait(2000)
      cy.xpath(action.batch_qty3).type("10");
      cy.wait(2000)
      cy.xpath(action.cost_price3).type("100");
      cy.wait(2000)
      cy.xpath(action.mrp).type("500");
      cy.wait(2000)
      cy.xpath(action.transfer_save).click();
      cy.wait(2000)
     },
     consumption_stock_flow: function()
     {
        cy.xpath(action.Stock_Movement).click();
        cy.wait(4000)
        cy.xpath(action.Consumption_Stock_Flow).click();
        cy.wait(4000)
        cy.xpath(action.new).click();
        cy.xpath(action.Destination_Location).type("Healthcare store");
        cy.wait(2000)
        cy.xpath(action.HealthCare_Store).click({ force: true });
        cy.xpath(action.Transportation_Type).click();
        cy.wait(2000)
        cy.xpath(action.by_person).click();
        cy.xpath(action.add).click();
        cy.wait(2000)
        cy.xpath(action.transfer_item1).type("ka11")
        cy.wait(2000)
        cy.xpath(action.itemname_1).click();
        cy.wait(2000)
        cy.xpath(action.batch_no).click();
        cy.wait(2000)
        cy.xpath(action.batch_name).click();
        cy.xpath(action.issue_qty).type("10");
        cy.wait(2000)
        cy.xpath(action.add).click();
        cy.xpath(action.transfer_item2).type("ka11")
        cy.wait(2000)
        cy.xpath(action.itemname_2).click();
        cy.xpath(action.batch_no2).click();
        cy.wait(2000)
        cy.xpath(action.con_batch2).click();
        cy.xpath(action.issue_qty2).type("10");
        cy.wait(2000)
        cy.xpath(action.add).click();
        cy.xpath(action.transfer_item3).type("ka11")
        cy.wait(2000)
        cy.xpath(action.itemname_3).click();
        cy.xpath(action.issue_qty3).type("100");
        cy.wait(2000)
        cy.xpath(action.transfer_save).click();
        cy.wait(5000)
        

     }

}

export default new_transfer_flow;
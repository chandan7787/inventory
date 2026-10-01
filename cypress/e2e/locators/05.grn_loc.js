const grn_loc = {
    invoice: '[formcontrolname="invoiceNo"]',
    DC: '[formcontrolname="deliveryNumber"]',
    Mode_Of_Transport: '//input[@placeholder="Select"]',
    Found_Purchase_Order: '//p-accordion/div/p-accordiontab/div/div[1]/a/div',
    main_check_box: '//table/thead/tr/th[1]/p-checkbox/div/div[2]',
    batch: '[placeholder="Batch #"]',
    past_grnnumber: '[formcontrolname="GrnNo"]',
    first_line: '//div/div[2]/p-table/div/div/table/tbody/tr[1]',
    Action_dropdown: '[aria-haspopup="true"]',
    remark: '[formcontrolname="Remarks"]',
    Destination_Location: '(//div[@class="p-dropdown-trigger"])[1]',
    Emr_Mode_Of_Transport: '(//div[@class="p-dropdown-trigger"])[2]',

    item_name: '[formcontrolname="itemName"]',
    check_box: '//table/tbody/tr/td[1]/div/p-checkbox/div/div[2]',

    //Received
    Received: '[placeholder="Receiving Qty"]',
    free_qty: 'input[tooltipposition="top"]', //need to apply index
    dis: 'td:nth-child(14) input', //need to apply index

    cost_price: '[class="p-inputnumber p-component"]',
    search_button: "//button[.='Search']",
    item_check_box: '//div/table/tbody/tr/td[1]/p-checkbox/div/div[2]',

    Directgrn_cost_price: '[name="costPrice"]',
    Other_Charges: "(//li[.='Other Charges'])[2]",
    othercharge_amt: '[formcontrolname="amount"]',
    Grn_level_dis: '(//input[@inputmode="decimal"])[7]',
    dis_dropdown: "//table/tbody/tr[3]/td[2]/div/p-dropdown/div/div",
};
export default grn_loc;

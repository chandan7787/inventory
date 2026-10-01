const stock_movement_loc = {

    // =========================
    // Stock Movement
    // =========================

    From_StockArea:
        '(//div[@class="p-dropdown-trigger"])[1]',

    type_store:
        '[class="p-dropdown-filter p-inputtext p-component"]',

    To_StockArea:
        '(//div[@class="p-dropdown-trigger"])[2]',

    Mode_of_Transport:
        '(//div[@class="p-dropdown-trigger"])[3]',

    item_search:
        '[placeholder="Search Name"]',

    batch_no:
        '(//div[@class="p-dropdown-trigger"])[4]',

    second_batch_no:
        '(//div[@class="p-dropdown-trigger"])[5]',

    issue_qty:
        '[type="number"]',


    // =========================
    // Search / Receiving Queue
    // =========================

    Search_filter:
        "//i[contains(@class,'pi-sort-down-fill')]",

    transaction_number:
        '[formcontrolname="stockTransferNo"]',

    rejected_firstline:
        '//div/p-table/div/div[2]/table/tbody/tr',

    Action_dropdown:
        '[aria-haspopup="true"]',


    // =========================
    // Stock Addition / Free Stock
    // =========================

    Transportation_Type:
        '(//div[@class="p-dropdown-trigger"])[2]',

    type_itemname:
        '[placeholder="Search"]',

    addstock_batchname:
        '//input[@tooltipposition="right" and @type="text"]',

    batch_qty:
        '//input[@tooltipposition="right" and @type="number"]',

    cost_price:
        '//input[@tooltipposition="right" and @type="number"]',

    lessitem_mrp:
        '(//input[@type="number"])[11]',


    // =========================
    // Consumption Stock
    // =========================

    consu_batchno:
        "//div[@role='button' and @aria-label='dropdown trigger' and @data-pc-section='trigger']",


    // =========================
    // Opening Stock
    // =========================

    Destination_Location:
        '(//div[@class="p-dropdown-trigger"])[1]',

    ucp_amt:
        '//input[@type="number"]',

    unit_mrp:'//input[@type="number"]',

    
    exp_calender:'[id="time"]',

    forward_button:'/html/body/div/div[1]/div/div[1]/button[2]',

    //damage stock flow
    reason:'(//div[@class="p-dropdown-trigger"])[2]',
    reason_type:'[class="p-dropdown-filter p-inputtext p-component"]',

    //stock adjustment
    add_item:'[placeholder="Search"]',

    Stock_batch:'[class="p-dropdown-trigger"]',

    add_iconbutton:'[icon="pi pi-plus"]',
    stockapproval_editicon:'[icon="pi pi-pencil"]',

    Search_filter:"//i[contains(@class,'pi-sort-down-fill')]",
    stock_adjnotype:'[placeholder="Stock Adj #"]',
};
export default stock_movement_loc;
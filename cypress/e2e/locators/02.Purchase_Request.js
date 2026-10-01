const purchase_request = {
    Setting_icon: '(//button[@data-pc-section="root" ])[1]',
    Static: '//div/div[4]/div[1]/p-radiobutton/div/div[2]',
    Close: '[data-pc-section="closeicon"]',
    Module_Search: '[class="pi pi-th-large"]',
    Module_Name_type: '[placeholder=" Search"]',
    Procurement_icon: '[style="width: 48px; height: 48px; border-radius: 50%;"]',
    Requesting_Store: '(//div[@class="p-dropdown-trigger"])[2]',
    store_input: '[class="p-dropdown-filter p-inputtext p-component"]', //type Healthcare store, HealthPlus Pharmacy
    Healthcare_store: "//li[.='Healthcare store']",
    Purchasing_Store: '(//div[@class="p-dropdown-trigger"])[4]',
    HealthPlus_Pharmacy: "//li[.='HealthPlus Pharmacy']",
    Purchase_Type: '(//div[@class="p-dropdown-trigger"])[5]',
    Central: "//li[.='Central']",
    Item_Type: '(//div[@class="p-dropdown-trigger"])[6]',
    Item: "//li[.='Item ']",
    Required_On: '//input[@placeholder="DD/MM/YYYY" and @role="combobox"]',
    item_name: '[formcontrolname="itemName"]',
    check_box: '//table/tbody/tr/td[1]/div/p-checkbox/div/div[2]',
    Inventory_uomtype: "(//div[.='Inventory Uom'])[1]",
    purchase_uom: "//li[.='Purchase Uom']",
    uomunit_11mg: '(//div[@class="p-dropdown-trigger"])[9]',
    uomunit_1mg: '(//div[@class="p-dropdown-trigger"])[11]',
    uomunit_1mgless: '(//div[@class="p-dropdown-trigger"])[13]',

    //qty
    uomunit_11mg_qty: '(//input[@type="number"])[1]',
    uomunit_1mg_qty: '(//input[@type="number"])[2]',
    uomunit_1mgless_qty: '(//input[@type="number"])[3]',
    PR_Number: '//div/div[2]/p-table/div/div/table/tbody/tr[1]/td[1]',

    //pr verificatio
    Search_filter: "//i[contains(@class,'pi-sort-down-fill')]",
    past_prnumber: '[placeholder="PR #"]',
    first_line: '//div/div[2]/p-table/div/div/table/tbody/tr[1]',
    Action_dropdown: '[aria-haspopup="true"]',
    verify_prremark: '(//textarea[@formcontrolname="Remarks"])[2]',
    remark: '[formcontrolname="Remarks"]',
    Verify_PR: "(//button[.='Verify PR'])[2]",
    Approve_PR: "(//button[.='Approve PR'])[2]",
    canclled_pr_number: '[formcontrolname="prNumber"]',
};
export default purchase_request;

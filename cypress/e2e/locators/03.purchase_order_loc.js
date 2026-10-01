const purchase_order_loc = {
  vendor: '//input[@placeholder="Search Vendor"]',
  Purchasing_Store: '(//div[@class="p-dropdown-trigger"])[6]',
  item_check_box: "//table/tbody/tr/td[1]/p-checkbox/div/div[2]",
  po_additems: "(//button[.='Add Items'])[1]",
  po_search_button: "(//button[.='Search'])[2]",
  Add_Selected_Items_to_PO: "(//button[.='Add Selected Items to PO'])[2]",

  //DOLO 650.11 MG-KA11
  dolo_11mg_qty: '(//input[@type="number"])[1]',
  dolo_11mg_freeqty: '(//input[@type="number"])[2]',
  dolo_11mg_unitprice: '(//input[@type="number"])[3]',
  dolo_11mg_dis: '(//input[@type="number"])[4]',

  //DOLO 650.1 MG-KA11
  dolo_1mg_qty: '(//input[@type="number"])[1]',
  dolo_1mg_freeqty: '(//input[@type="number"])[2]',
  dolo_1mg_unitprice: '(//input[@type="number"])[3]',
  dolo_1mg_dis: '(//input[@type="number"])[4]',

  po_qty: 'input[type="number"][required]',
  po_freeqty: 'input[type="number"]',

  dis_amt: '[formcontrolname="PoDiscountValue"]',
  Approve_PO: "(//button[.='Approve PO'])[2]",

  po_number: "//div/p-table/div/div/table/tbody/tr[1]/td[1]",
  past_ponumber: '[formcontrolname="poNumber"]',
  canclled_poremarek:'[formcontrolname="remarkContent"]',
};
export default purchase_order_loc;

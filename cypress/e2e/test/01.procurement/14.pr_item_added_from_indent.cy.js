import login_page from "../../page/01.Procurement/01.Login_Page";
import module_search from "../../page/01.Procurement/07.module_search";
import departmentindent_itemcreation from "../../page/01.Procurement/20.department_indent_creation";
import departmentIndent_approve from "../../page/01.Procurement/21.department_indent_approve";
import purchase_request_flow from "../../page/01.Procurement/02.purchase_request";
import purchase_request_verificatio from "../../page/01.Procurement/03.pr_verification_page";
import pr_approval_flow from "../../page/01.Procurement/04.pr_approval_page";

describe("Department Indent", () => {
  it("in procurement add the item from indent", () => {
    //login page
    login_page.LOgin();

    //search respective module
    module_search.indent_module();

    //department_ indent creation
    departmentindent_itemcreation.department_indentcretaion();

    //Department_ Indent Approve
    departmentIndent_approve.DepartmentIndentApprove();

    //integretion from procurement module
    module_search.module();

    //add pr items from indent
    purchase_request_flow.AddItem_FromIndent();

    //pr verification flow
    purchase_request_verificatio.pr_verification();

    //pr approval flow
    pr_approval_flow.pr_approval();
  });
});

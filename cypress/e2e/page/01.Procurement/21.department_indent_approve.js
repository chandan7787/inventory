import department_indent from "../../locators/09.indent_module";

const departmentIndent_approve = {
  DepartmentIndentApprove: function () {
    cy.xpath("(//a[.='Indent Approval'])[2]").should("be.visible").click();
    cy.wait(1000);
    cy.xpath(department_indent.Search_filter).click();

    cy.fixture("indent_data.json").then((data) => {
      cy.log("Indent Number: " + data.indentNumber);

      cy.get('[formcontrolname="indentNo"]')
        .should("be.visible")
        .clear()
        .type(data.indentNumber);

      cy.contains("button", "Search").click();
      cy.wait(1000);

      cy.xpath(department_indent.first_line).click();
      cy.get(department_indent.Action_dropdown).click();
      cy.xpath("(//a[.='Approve'])[2]").click();
      //       cy.contains("a", "Approve")
      //   .should("have.length.at.least", 2)
      //   .eq(1)
      //.click();
      cy.xpath("//button[.='Yes']").click();
    });
  },
};
export default departmentIndent_approve;

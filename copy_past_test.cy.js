//import login from "../page/procurementpath";
import login1 from "../page/copy_past";
import grn from "../page/reguler_grn";
import 'cypress-file-upload'
import 'cypress-xpath'
//import login from "../page/procurement_page"

describe('PR Copy Paste Flow', () => {
  it("test fail demo", () => {
  expect(true).to.equal(false)
})
  

  it('Create PR and copy paste PR number', () => {
    

    login1.procurementlogin1()
    login1.procurement_icon1()

    login1.procurement_pr1()
    login1.pr_request()

  })

})
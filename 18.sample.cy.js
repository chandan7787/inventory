import login_page from "../page/10.demo";

describe(' ',function (){


    it('OP_CONSULT_FLOW',function(){
        login_page.login_page_flow();
        login_page.FDM_REGISTRATION_FLOW();
        login_page.APPOINTMENT_FLOW();
        login_page.OP_CONSULT_FLOW();
        login_page.Followup_Appointment_FLOW();
        login_page.schedule_appointment();
        login_page.Mark_To_Bill();
        login_page.FDM_MODULE();

    })
})
import main_login_page from "../page/11.main_login_page"
import FDM_MAIN_PAGE from "../page/12.FDM_REGISTRATION";
import FDM_MAIN_PAGES from "../page/13.MAIN_APPOINTMENT";
import OP_CONSULT_FLOWS from "../page/14.OP_CONSULT_FLOW";
import Followup_Appointment_FLOWS from "../page/15.Followup_Appointment_FLOW";
import schedule_appointments from "../page/16.schedule_appointment";
import Mark_To_Bill from "../page/17.Mark_To_Bill";
import main_fdm_op from "../page/18.FDM_MODULE";



describe(' ',function (){


    it('OP_CONSULT_FLOW',function(){
        main_login_page.login_page_flow();
        FDM_MAIN_PAGE.FDM_REGISTRATION_FLOW();
        FDM_MAIN_PAGES.APPOINTMENT_FLOW();
        OP_CONSULT_FLOWS.OP_CONSULT_FLOW();
        //Followup_Appointment_FLOWS.Followup_Appointment_FLOW();
        //schedule_appointments.schedule_appointment();
        //Mark_To_Bill.Mark_To_Bill();
        main_fdm_op.FDM_MODULE();





        })
})
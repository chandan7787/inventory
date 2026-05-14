import EMR_AI from "../page/emergencygrn_AI";
import 'cypress-file-upload';
import 'cypress-xpath';

describe('Emergency GRN Flow - AI', function () {

  it('Should complete the Emergency GRN creation and approval', function () {

    // Step 1: Login
    EMR_AI.EMR_AI_Login();

    // Step 2: Set viewport
    cy.viewport(1920, 1080);

    // Step 3: Navigate to Procurement module
    EMR_AI.EMR_AI_Navigate_Procurement();

    // Step 4: Execute the full Emergency GRN flow (header, items, details, charges & commit)
    EMR_AI.EMR_AI_Full_Flow();

    // Step 5: Approve the GRN
    EMR_AI.EMR_AI_GRN_Approve();

  });

});

const test = require('../validationsModules/getResponseValidation.js');
const scenario = require('../fixtures/scenarios.json');
describe('This test Validates the response payload structure as well as store details for the city of Port Charlotte Florida', function(){
	test.runSuccessAssertions( scenario[ 'Port Charlotte' ]);
});
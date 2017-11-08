const mongoose = require('mongoose');
const schema = mongoose.Schema;

const personalitySchema = new schema({
	first_name: {
		type: String,
		required: [true, 'First Name is required']
	},
	last_name: {
		type: String,
		required: [true, 'Last Name Type is required']
	},
	emailid: {
		type: String,
		required: [true, 'Email Id Type is required']
	},
	description: {
		type: String,
		required: [true, 'Description Type is required']
	},
	interests: {
		type: String,
		required: [true, 'Interests Type is required']
	}
});

const personalityModel = mongoose.model('personality', personalitySchema);
module.exports = personalityModel;
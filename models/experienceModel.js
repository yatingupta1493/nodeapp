const mongoose = require('mongoose');
const schema = mongoose.Schema;

const experienceSchema = new schema({
	designation: {
		type: String,
		required: [true, 'Designation Type is required']
	},
	company: {
		type: String,
		required: [true, 'Company Type is required']
	},
	location: {
		type: String,
		required: [true, 'Company Location Type is required']
	},
	description: {
		type: String,
		required: [true, 'Description Type is required']
	},
	join_time: {
		type: String,
		required: [true, 'Join Time Type is required']
	},
	end_time: {
		type: String,
		required: [true, 'End Time Type is required']
	}
}, {collection: 'experience'});

const experienceModel = mongoose.model('experience', experienceSchema);
module.exports = experienceModel;
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const educationSchema = new schema({
	university: {
		type: String,
		required: [true, 'University Name is required']
	},
	type: {
		type: String,
    enum: ["college", "school"],
		default: "college"
	},
	degree: {
		type: String,
		required: [true, 'Degree Type is required']
	},
	year: {
		type: Number,
		required: [true, 'Year Type is required']
	},
	percentage: {
		type: Number,
		required: [true, 'Percentage Type is required']
	}
}, {collection: 'education'});

const educationModel = mongoose.model('education', educationSchema);
module.exports = educationModel;

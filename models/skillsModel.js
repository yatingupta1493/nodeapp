const mongoose = require('mongoose');
const schema = mongoose.Schema;

const skillsSchema = new schema({
	icon: {
		type: String,
		required: [true, 'Icon Type is required']
	},
	"class": {
		type: String
	}
}, {collection: 'skills'});

const skillsModel = mongoose.model('skills', skillsSchema);
module.exports = skillsModel;
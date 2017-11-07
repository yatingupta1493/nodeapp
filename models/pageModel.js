const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pageSchema = new schema({
	pageType: {
		type: String,
		required: [true, 'Page Type is required']
	}
});

const pageModel = mongoose.model('pages', pageSchema);
module.exports = pageModel;
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const awardsSchema = new schema({
	name: {
		type: String
	}
}, {collection: 'awards'});

const awardsModel = mongoose.model('awards', awardsSchema);
module.exports = awardsModel;
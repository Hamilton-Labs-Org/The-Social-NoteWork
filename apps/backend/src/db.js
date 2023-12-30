// Require the mongoose library
import mongoose from 'mongoose';

export default {
	connect: (DB_HOST) => {
		mongoose.connect(DB_HOST).then(
			() => {
				/** ready to use. The `mongoose.connect()`
				 * promise resolves to mongoose instance. */
				console.log('🚀 MongoDB is now connected.');
			},
			(err) => {
				/** handle initial connection error */
				console.log(
					'🪫 MongoDB connection error. Please make sure MongoDB is running.',
				);
				process.exit();
			},
		);
		// Use the Mongo driver's updated URL string parser
		// mongoose.set('useNewUrlParser', true)
		// Use findOneAndUpdate() in place of findAndModify()
		// mongoose.set('useFindAndModify', false)
		// Use createIndex() in place of ensureIndex()
		// mongoose.set('useCreateIndex', true)
		// Use the new server discovery and monitoring engine
		// mongoose.set('useUnifiedTopology', true)
		// Connect to the DB
		// mongoose.connect(DB_HOST)
		// Log an error if we fail to connect
		// mongoose.connection.on('error', (err) => {
		//   console.error(err)
		//   console.log(
		//     'MongoDB connection error. Please make sure MongoDB is running.'
		//   )
		//   process.exit()
		// })
	},
	close: () => {
		mongoose.connection.close();
	},
};

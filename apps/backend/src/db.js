// Require the mongoose library
import mongoose from "mongoose";

export default {
	connect: (DB_HOST) => {
		mongoose.connect(DB_HOST).then(
			() => {
				/** ready to use. The `mongoose.connect()`
				 * promise resolves to mongoose instance. */
				console.log("🚀 MongoDB is now connected.");
			},
			(err) => {
				/** handle initial connection error */
				console.log(
					"🪫 MongoDB connection error. Please make sure MongoDB is running.",
				);
				process.exit();
			},
		);
	},
	close: () => {
		mongoose.connection.close();
	},
};

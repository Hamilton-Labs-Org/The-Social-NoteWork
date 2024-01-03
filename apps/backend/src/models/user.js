import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			index: {unique: true},
		},
		email: {
			type: String,
			required: true,
			index: {unique: true},
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		// Assigns createdAt and updatedAt fields with a Date type
		timestamps: true,
	},
);
const User = mongoose.model('User', UserSchema);
export default User;

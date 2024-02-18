import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
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
		verified: {
			type: Boolean,
			defaultValue: false,
		},
		reset: {
			type: Boolean,
			defaultValue: false,
		},
	},
	{
		// Assigns createdAt and updatedAt fields with a Date type
		timestamps: true,
	},
);
UserSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {
		expiresIn: '7d',
	});
	return token;
};
const User = mongoose.model('User', UserSchema);
export default User;

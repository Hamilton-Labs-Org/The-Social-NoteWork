// prettier-ignore

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

export default {
	newNote: async (parent, args, {models}) => {
		return await models.Note.create({
			content: args.content,
			author: 'Terence Hamilton',
		});
	},
	deleteNote: async (parent, {id}, {models}) => {
		try {
			await models.Note.findOneAndDelete({_id: id});
			return true;
		} catch (err) {
			return false;
		}
	},
	updateNote: async (parent, {content, id}, {models}) => {
		try {
			return await models.Note.findOneAndUpdate(
				{
					_id: id,
				},
				{
					$set: {
						content,
					},
				},
				{
					new: true,
				},
			);
		} catch (err) {
			throw new Error('Error updating note');
		}
	},
	signUp: async (parent, {username, email, password}, {models}) => {
		// normalize email address
		email = email.trim().toLowerCase();
		// hash the password
		const hashed = await bcrypt.hash(password, 10); // create the gravatar url
		// const avatar = gravatar(email);
		try {
			const user = await models.User.create({
				username,
				email,
				// avatar,
				password: hashed,
			});
			// create and return the json web token
			return jwt.sign({id: user._id}, process.env.JWT_SECRET);
		} catch (err) {
			console.log(err);
			throw new Error('Error creating account');
		}
	},
};

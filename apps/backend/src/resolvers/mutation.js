// prettier-ignore
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
					_id: id
				},
				{
					$set: {
						content
					},
				},
				{
					new: true
				},
			);
		} catch (err) {
			throw new Error('Error updating note');
		}
	}
};
